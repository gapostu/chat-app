import ConversationFallback from '@/components/ui/shared/conversation/ConversationFallback';
import ItemList from '@/components/ui/shared/item-list/ItemList';
import React from 'react';
import AddFriendDialog from './_components/AddFriendDialog';
import NoSSR from './_components/NoSSR';

type Props = {};

const FriendsPage = (props: Props) => {
  return (
    <>
      <ItemList title="Friends" action={<AddFriendDialog />}>
        FriendsPage
      </ItemList>
      <ConversationFallback />
    </>
  );
};

export default FriendsPage;
