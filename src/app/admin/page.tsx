"use client";
import React, { useEffect, useState } from "react";
import { FormType } from "../signup/page";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const AdminPage = () => {
  const [userData, setUserData] = useState<FormType[]>([]);

  useEffect(() => {
    const userFromLocal = localStorage.getItem("users") || "";

    const parsedData = userFromLocal ? JSON.parse(userFromLocal) : [];
    setUserData(parsedData);
  }, []);
  return (
    <div>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
        </TableHeader>
        <TableBody>
          {userData.map((row, index) => {
            return (
              <TableRow key={row.name + index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.isAdmin ? "Admin" : "user"}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminPage;
