"use client";

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
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface ModalBoxProps {
  openButton: React.ReactNode;
  cancelButton?: string;
  confirmButton: string;
  email: string;
  children: React.ReactNode;
}

const ModalBox = ({
  openButton,
  cancelButton,
  confirmButton,
  children,
  email,
}: ModalBoxProps) => {
  const router = useRouter();

  const handleDelete = async (email: string, type: string) => {
    try {
      if (type === "Delete") {
        await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${email}`, {
          method: "DELETE",
        });
        console.log("user has deleted");
        router.refresh();
        toast("User deleted successfully.");
      }
    } catch (error) {}
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>{openButton || "Open"}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>{children}</AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelButton || "Cancel"}</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDelete(email, confirmButton)}>
            {confirmButton || "Continue"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ModalBox;
