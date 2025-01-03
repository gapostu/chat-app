'use client';

import ConversationContainer from '@/components/ui/shared/conversation/ConversationContainer';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useQuery } from 'convex/react';
import { Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import Header from './_components/Header';
import { useParams } from 'next/navigation';
import Body from './_components/body/Body';
import ChatInput from './_components/input/ChatInput';
import RemoveFriendDialog from './_components/dialogs/RemoveFriendDialog';
import DeleteGroupDialog from './_components/dialogs/DeleteGroupDialog';
import LeaveGroupDialog from './_components/dialogs/LeaveGroupDialog';

//type Props = { params: { conversationId: Id<'conversations'> } };
// type Props = {};

const ConversationPage = () => {
  const params = useParams();

  const conversation = useQuery(api.conversation.get, {
    id: params.conversationId as Id<'conversations'>,
  });
  const [removeFriendDialogOpen, setRemoveFriendDialogOpen] = useState(false);
  const [deleteGroupDialogOpen, setDeleteGroupDialogOpen] = useState(false); // eslint-disable-line
  const [leaveGroupDialogOpen, setLeaveGroupDialogOpen] = useState(false); // eslint-disable-line
  // const [callType, setCallType] = useState<'audio' | 'video' | null>(null);

  return conversation === undefined ? (
    <div className="w-full h-full flex items-center justify-center">
      <Loader2 className="h-8 w-8" />
    </div>
  ) : conversation === null ? (
    <p className="w-full h-full flex items-center justify-center">
      Conversation not found
    </p>
  ) : (
    <ConversationContainer>
      <RemoveFriendDialog
        conversationId={params.conversationId as Id<'conversations'>}
        open={removeFriendDialogOpen}
        setOpen={setRemoveFriendDialogOpen}
      />
      <DeleteGroupDialog
        conversationId={params.conversationId as Id<'conversations'>}
        open={deleteGroupDialogOpen}
        setOpen={setDeleteGroupDialogOpen}
      />
      <LeaveGroupDialog
        conversationId={params.conversationId as Id<'conversations'>}
        open={leaveGroupDialogOpen}
        setOpen={setLeaveGroupDialogOpen}
      />
      <Header
        name={
          (conversation.isGroup
            ? conversation.name
            : conversation.otherMember?.username) || ''
        }
        imageUrl={
          conversation.isGroup ? undefined : conversation.otherMember?.imageUrl
        }
        options={
          conversation.isGroup
            ? [
                {
                  label: 'Leave group',
                  destructive: false,
                  onClick: () => setLeaveGroupDialogOpen(true),
                },
                {
                  label: 'Delete group',
                  destructive: true,
                  onClick: () => setDeleteGroupDialogOpen(true),
                },
              ]
            : [
                {
                  label: 'Remove friend',
                  destructive: true,
                  onClick: () => setRemoveFriendDialogOpen(true),
                },
              ]
        }
        // setCallType={setCallType}
      />
      <Body
        members={
          conversation.isGroup
            ? conversation.otherMembers
              ? conversation.otherMembers
              : []
            : conversation.otherMember
              ? [conversation.otherMember]
              : []
        }
      />
      <ChatInput />
    </ConversationContainer>
  );
};

export default ConversationPage;
