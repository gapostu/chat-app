'use client';

import { useState, useEffect } from 'react';
import AddFriendDialog from './AddFriendDialog';
import { Suspense } from 'react';

export default function NoSSR() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // return <h1>{isClient ? 'This is never prerendered' : 'Prerendered'}</h1>
  return (
    <div>
      {isClient && (
        <Suspense>
          <AddFriendDialog />
        </Suspense>
      )}
    </div>
  );
}
