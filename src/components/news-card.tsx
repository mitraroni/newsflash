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

export function NewsCard() {
  const suvImage = placeholderImages.suv;
  const inshortsLogo = placeholderImages.inshortsLogo;
  
  return (
    <Card className="border-0 shadow-none rounded-none">
      <CardHeader className="p-0">
        <div className="relative h-[250px] w-full">
          <Image
            src={suvImage.src}
            alt={suvImage.alt}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
            data-ai-hint="suv car"
          />
          <div className="absolute inset-0 bg-black/40 rounded-lg flex flex-col justify-start items-start p-4">
            <div className='text-white'>
              <p className="text-lg">To watch the video</p>
              <p className="text-2xl font-bold">Tap here</p>
            </div>
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
          <span className="font-semibold text-sm">inshorts</span>
        </div>
        <CardTitle className="text-lg font-bold leading-tight mt-2">
          Video shows SUV which carries PM Modi being washed at local shop;
          sparks safety concerns
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 mt-2">
        <CardDescription className="text-base text-foreground/80">
          A video showing an SUV which carries Prime Minister Narendra Modi being
          washed at a local shop has sparked safety concerns. PM Modi was seen
          sitting in the same SUV in a picture that he shared in July this year.
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
