'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { PopoverClose } from '@radix-ui/react-popover';
import { PlusCircle, Smile } from 'lucide-react';
import React, { SetStateAction, useState } from 'react';
import UploadFileDialog from '../dialogs/UploadFileDialog';

type Props = {
  setEmojiPickerOpen: (value: SetStateAction<boolean>) => void;
};

const MessageActionsPopover = ({ setEmojiPickerOpen }: Props) => {
  const [uploadFileDialogOpen, setUploadFileDialogOpen] = useState(false);
  const [uploadImageDialogOpen, setUploadImageDialogOpen] = useState(false);

  return (
    <Popover>
      <PopoverContent className="w-full mb-1 flex flex-col gap-2">
        <UploadFileDialog
          open={uploadFileDialogOpen}
          toggle={(newState) => setUploadFileDialogOpen(newState)}
          type="file"
        />
        <UploadFileDialog
          open={uploadImageDialogOpen}
          toggle={(newState) => setUploadImageDialogOpen(newState)}
          type="image"
        />
        <PopoverClose>
          <Smile
            onClick={() => {
              setEmojiPickerOpen(true);
            }}
          />
        </PopoverClose>
      </PopoverContent>
      <PopoverTrigger asChild>
        <PlusCircle />
      </PopoverTrigger>
    </Popover>
  );
};

export default MessageActionsPopover;
