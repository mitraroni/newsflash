'use client';

import { NewsCard } from '@/components/news-card';
import { NotificationDialog } from '@/components/notification-dialog';
import React from 'react';

export default function HomePage() {
  const [showDialog, setShowDialog] = React.useState(false);

  React.useEffect(() => {
    // Show the dialog after a short delay
    const timer = setTimeout(() => {
      setShowDialog(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  return (
    <>
      <div className="pt-16">
        <NewsCard />
      </div>
      <NotificationDialog open={showDialog} onOpenChange={handleDialogClose} />
    </>
  );
}
