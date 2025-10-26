import type { NewsArticle } from '@/lib/types';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { ArticleSummary } from './article-summary';
import { formatDistanceToNow } from 'date-fns';

export function ArticleCard({ article }: { article: NewsArticle }) {
  const publishedAt = new Date(article.publishedAt);
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/20">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            data-ai-hint={article.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-grow flex-col p-6">
        <div className="flex-grow">
          <p className="mb-2 text-sm text-muted-foreground">
            {article.source} &middot;{' '}
            {formatDistanceToNow(publishedAt, { addSuffix: true })}
          </p>
          <CardTitle className="mb-4 text-xl font-headline leading-tight">
            <Link
              href={article.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              {article.title}
            </Link>
          </CardTitle>
          <ArticleSummary articleText={article.content} />
        </div>
        <div className="mt-6">
          <Button asChild variant="outline" className="w-full">
            <Link
              href={article.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Original Article
              <ExternalLink className="ml-2" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
