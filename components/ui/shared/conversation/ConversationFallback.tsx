import React from 'react';
import { Card } from '../../card';

const ConversationFallback = () => {
  return (
    <Card className="hidden lg:flex h-full w-full p-2 items-center justify-center bg-secondary text-secondary-foreground">
      Select/start a Conversation
    </Card>
  );
};

export default ConversationFallback;
