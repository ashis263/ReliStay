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
const data = [
  {
    id: 2,
    name: "Mr Rahim",
    email: "rahim@gmail.com",
    role: "customer",
    location: "Dhaka Bangladesh",
    gender: "male",
  },
];

const Users = () => {
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
        {data.map((row) => (
          <TableRow key={row.id} className="border-b-2">
            <Td> {row.name} </Td>
            <Td> {row.email} </Td>
            <Td> {row.gender} </Td>
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
