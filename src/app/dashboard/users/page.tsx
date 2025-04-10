import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Td,
  Th,
} from "@/components/table";

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
          <Th>Name</Th>
          <Th>Name</Th>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <Td> {row.name} </Td>
            <Td> {row.email} </Td>
            <Td> {row.gender} </Td>
            <Td> {row.role} </Td>
            <Td> {row.name} </Td>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Users;
