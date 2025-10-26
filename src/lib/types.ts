export type NewsArticle = {
  id: string;
  title: string;
  source: string;
  category: 'Technology' | 'Sports' | 'Politics';
  imageUrl: string;
  imageHint: string;
  originalUrl: string;
  content: string;
  publishedAt: string;
};
