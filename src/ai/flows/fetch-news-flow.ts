'use server';
/**
 * @fileOverview A flow for fetching and generating news articles.
 *
 * - fetchNews: Fetches a specified number of news articles.
 * - NewsArticle: The data structure for a single news article.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const NewsArticleSchema = z.object({
  id: z.string().describe('Unique identifier for the news article. Should be a random string.'),
  title: z.string().describe('The title of the news article.'),
  summary: z.string().describe('A short summary of the news article.'),
  source: z.string().describe('The source of the news article (e.g., a news publication).'),
  originalArticleLink: z.string().url().describe('A link to the original article.'),
  imageUrl: z.string().url().describe('A link to an image for the article.'),
  category: z.string().describe('The category of the news article (e.g., Politics, Tech, Finance, Delhi, Videos, Insights, Google).'),
});

export type NewsArticle = z.infer<typeof NewsArticleSchema>;

const FetchNewsInputSchema = z.object({
  count: z.number().int().positive().describe('The number of news articles to fetch.'),
});

const FetchNewsOutputSchema = z.array(NewsArticleSchema);

export async function fetchNews(input: z.infer<typeof FetchNewsInputSchema>): Promise<NewsArticle[]> {
  return fetchNewsFlow(input);
}

const newsPrompt = ai.definePrompt({
  name: 'newsPrompt',
  input: { schema: FetchNewsInputSchema },
  output: { schema: FetchNewsOutputSchema },
  prompt: `Generate a list of {{count}} recent and interesting news headlines with summaries.
  For each article, provide a realistic title, a one-paragraph summary, a source (like a major news network), a plausible URL to the original article, a plausible image URL, and a category.
  The news should be about current events in technology, world politics, and science. The categories should be chosen from: Politics, Tech, Finance, Delhi, Videos, Insights, Google.`,
});

const fetchNewsFlow = ai.defineFlow(
  {
    name: 'fetchNewsFlow',
    inputSchema: FetchNewsInputSchema,
    outputSchema: FetchNewsOutputSchema,
  },
  async (input) => {
    const { output } = await newsPrompt(input);
    
    // Add placeholder image if one is not generated
    return output!.map(article => ({
        ...article,
        imageUrl: article.imageUrl || `https://picsum.photos/seed/${article.id}/600/400`,
    }));
  }
);
