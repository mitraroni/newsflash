'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { addDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import {
  collection,
  serverTimestamp,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';
import { fetchNews, NewsArticle } from '@/ai/flows/fetch-news-flow';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { format } from 'date-fns';

type StoredNewsArticle = NewsArticle & {
  id: string;
  createdAt: { seconds: number; nanoseconds: number };
};

export default function AdminNewsPage() {
  const firestore = useFirestore();
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);

  const newsCollectionRef = useMemoFirebase(
    () => firestore ? collection(firestore, 'news_articles') : null,
    [firestore]
  );
  
  const newsQuery = useMemoFirebase(
    () => newsCollectionRef ? query(newsCollectionRef, orderBy('createdAt', 'desc'), limit(20)) : null,
    [newsCollectionRef]
  );

  const { data: newsItems, isLoading } = useCollection<StoredNewsArticle>(newsQuery);

  const handleGenerateNews = async () => {
    setIsGenerating(true);
    try {
      toast({
        title: 'Generating News...',
        description: 'Please wait while we create new articles.',
      });
      const articles = await fetchNews({ count: 5 });
      if (articles && newsCollectionRef) {
        for (const article of articles) {
          const newArticle = {
            ...article,
            createdAt: serverTimestamp(),
          };
          addDocumentNonBlocking(newsCollectionRef, newArticle);
        }
        toast({
          title: 'News Generation Successful',
          description: `${articles.length} new articles have been generated and saved.`,
        });
      }
    } catch (error) {
      console.error('Failed to generate news:', error);
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: 'Could not generate new articles. Please try again.',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const formatDate = (timestamp: { seconds: number; nanoseconds: number }) => {
    if (!timestamp) return 'N/A';
    const date = new Date(timestamp.seconds * 1000);
    return format(date, 'yyyy-MM-dd');
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>News Articles</CardTitle>
            <CardDescription>
              Manage your news articles here.
            </CardDescription>
          </div>
          <Button onClick={handleGenerateNews} disabled={isGenerating}>
            <PlusCircle className="mr-2 h-4 w-4" />
            {isGenerating ? 'Generating...' : 'Generate News'}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  Loading articles...
                </TableCell>
              </TableRow>
            )}
            {!isLoading && newsItems && newsItems.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  No news articles found. Generate some!
                </TableCell>
              </TableRow>
            )}
            {newsItems?.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.source}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{formatDate(item.createdAt)}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="mr-2">
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
