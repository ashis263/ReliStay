import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Td,
  Th,
} from "@/components/table";
import DropDown from "./components/drop-down";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";
import ModalBox from "./components/modal-box";
import {
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { headers } from "next/headers";

interface UserRow {
  _id: string;
  name: string;
  email: string;
  address?: string;
  role: string;
}

const Users = async () => {
  const getUsers = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
    {
      headers: new Headers(await headers()),
    }
  );
  const users = await getUsers.json();
  console.log(users.data);

  if (!users.data.length) return;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Address</Th>
          <Th>Role</Th>
          <Th className="text-right">Actions</Th>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.data?.map((row: UserRow) => (
          <TableRow key={row._id} className="border-b-2">
            <Td> {row.name} </Td>
            <Td> {row.email} </Td>
            <Td> {row?.address || "New York"} </Td>
            <Td className=" md:w-28">
              <DropDown role={row.role} />
            </Td>
            <Td className="flex justify-end">
              <ModalBox
                openButton={
                  <Button variant="ghost">
                    <Edit />
                  </Button>
                }
                email={row.email}
                confirmButton="Update"
              >
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  user and remove the user data from our servers.
                </AlertDialogDescription>
              </ModalBox>

              <ModalBox
                openButton={
                  <Button variant="ghost">
                    <Trash />
                  </Button>
                }
                confirmButton="Delete"
                email={row.email}
              >
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  user and remove the user data from our servers.
                </AlertDialogDescription>
              </ModalBox>
            </Td>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Users;
