'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { BellRing } from 'lucide-react';

interface NotificationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NotificationDialog({
  open,
  onOpenChange,
}: NotificationDialogProps) {
  const { toast } = useToast();

  const handleAllow = () => {
    toast({
      title: 'Notifications Enabled',
      description: 'You will now receive notifications from inshorts.',
    });
    onOpenChange(false);
  };

  const handleDeny = () => {
    onOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex justify-center">
            <div className="bg-muted rounded-full p-3">
              <BellRing className="h-8 w-8 text-foreground" />
            </div>
          </div>
          <AlertDialogTitle className="text-center text-lg font-semibold pt-4">
            Allow inshorts to send you notifications?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col gap-2">
          <AlertDialogAction onClick={handleAllow}>Allow</AlertDialogAction>
          <Button variant="ghost" onClick={handleDeny} className="w-full">
            Don't allow
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
