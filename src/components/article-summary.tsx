'use client';

import { useState, useEffect } from 'react';
import { summarizeNewsArticle } from '@/ai/flows/summarize-news-article';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

export function ArticleSummary({ articleText }: { articleText: string }) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    let isMounted = true;

    async function getSummary() {
      try {
        setIsLoading(true);
        setError(null);
        const result = await summarizeNewsArticle({ articleText });
        if (isMounted) {
          setSummary(result.summary);
        }
      } catch (e) {
        console.error('Failed to summarize article:', e);
        if (isMounted) {
          setError('Failed to generate summary for this article.');
          toast({
            variant: 'destructive',
            title: 'AI Summarization Error',
            description: 'The AI model could not generate a summary.',
          });
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    getSummary();

    return () => {
      isMounted = false;
    };
  }, [articleText, toast]);

  if (isLoading) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="py-2">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return <p className="text-foreground/80">{summary}</p>;
}
