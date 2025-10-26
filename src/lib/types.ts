export type NewsArticle = {
  id: string;
  title: string;
  source: string;
  category: 'Technology' | 'Sports' | 'Politics' | 'Finance' | 'Videos' | 'Insights' | 'Google';
  imageUrl: string;
  imageHint: string;
  originalUrl: string;
  content: string;
  publishedAt: string;
};
