import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ModalBoxProps {
  openButton: React.ReactNode;
  cancelButton?: string;
  confirmButton: string;
  children: React.ReactNode;
}

const ModalBox = ({
  openButton,
  cancelButton,
  confirmButton,
  children,
}: ModalBoxProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{openButton || "Open"}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>{children}</AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelButton || "Cancel"}</AlertDialogCancel>
          <AlertDialogAction>{confirmButton || "Continue"}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ModalBox;
