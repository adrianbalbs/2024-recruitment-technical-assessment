import { useEffect, useRef, useState } from 'react';

export type DialogProps = {
  isOpen: boolean;
  closeDialog: () => void;
};
function Dialog({ isOpen, closeDialog }: DialogProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(isOpen);

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    setIsDialogOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const dialogElement = dialogRef.current;
    if (dialogElement) {
      isDialogOpen ? dialogElement.showModal() : dialogElement.close();
    }
  }, [isDialogOpen]);

  const handleCloseDialog = () => {
    closeDialog();
    setIsDialogOpen(false);
  };

  return (
    <>
      {isDialogOpen && (
        <dialog
          ref={dialogRef}
          className="flex h-96 w-72 flex-col items-center justify-center rounded-md border border-black bg-white text-black"
        >
          <h1 className="mb-4 text-xl font-bold">OwO What's this?</h1>
          <button
            onClick={handleCloseDialog}
            className="rounded bg-gray-200 p-2 text-sm shadow-sm"
          >
            Dismiss
          </button>
        </dialog>
      )}
    </>
  );
}

export default Dialog;
