import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bookmark, Share2, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';
import { type NewsArticle } from '@/ai/flows/fetch-news-flow';

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
  const suvImage = placeholderImages.suv;
  const inshortsLogo = placeholderImages.inshortsLogo;
  
  return (
    <Card className="border-0 shadow-none rounded-none">
      <CardHeader className="p-0">
        <div className="relative h-[250px] w-full">
          <Image
            src={article.imageUrl || suvImage.src}
            alt={article.title}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
            data-ai-hint="news article image"
          />
          <div className="absolute inset-0 bg-black/40 rounded-lg flex flex-col justify-start items-start p-4">
            <a href={article.originalArticleLink} target="_blank" rel="noopener noreferrer" className='text-white'>
              <p className="text-lg">To watch the video</p>
              <p className="text-2xl font-bold">Tap here</p>
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <Image
            src={inshortsLogo.src}
            alt={inshortsLogo.alt}
            width={24}
            height={24}
            className="rounded-sm"
          />
          <span className="font-semibold text-sm">{article.source}</span>
        </div>
        <CardTitle className="text-lg font-bold leading-tight mt-2">
          {article.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 mt-2">
        <CardDescription className="text-base text-foreground/80">
          {article.summary}
        </CardDescription>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Bookmark className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
