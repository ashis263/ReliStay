import React from "react";

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

interface TableHeadProps {
  children: React.ReactNode;
  className?: string;
}

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
}

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
}

interface ThProps {
  children: React.ReactNode;
  className?: string;
}

interface TableBodyProps {
  children: React.ReactNode;
  className?: string;
}

const Table: React.FC<TableProps> = ({ children, className }) => {
  return (
    <table
      className={` border  rounded-sm overflow-hidden  w-full ${className} `}
    >
      {children}
    </table>
  );
};

const TableHead: React.FC<TableHeadProps> = ({ children, className }) => {
  return (
    <thead
      className={`py-3  text-black/80 border-b bg-gray-200/40 font-medium ${className}`}
    >
      {children}
    </thead>
  );
};

const TableBody: React.FC<TableBodyProps> = ({ children, className }) => {
  return (
    <tbody className={`py-3 font-normal border ${className}`}>{children}</tbody>
  );
};

const TableRow: React.FC<TableRowProps> = ({ children, className }) => {
  return <tr className={` ${className} `}>{children}</tr>;
};

const Th: React.FC<ThProps> = ({ children, className }) => {
  return (
    <th className={` py-2 px-1 text-left font-medium ${className}  `}>
      {" "}
      {children}{" "}
    </th>
  );
};

const Td: React.FC<ThProps> = ({ children, className }) => {
  return (
    <td className={` py-2 text-left px-1 font-normal text-sm  ${className}`}>
      {children}{" "}
    </td>
  );
};

export { Table, TableHead, TableBody, TableRow, Th, Td };
