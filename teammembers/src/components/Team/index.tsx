"use client";

import { useState } from "react";
import New from "./New";
import { DataTableDemo } from "../Datatable";
import { columns } from "./Members/Columns";

export default function Team() {
  const [members, setMembers] = useState([
    {
      name: "Amber Rohan",
      email: "amber@mail.com",
      role: "admin",
      status: "active",
    },
    {
      name: "Gulian Martens",
      email: "gulian@mail.com",
      role: "manager",
      status: "pending",
    },
    {
      name: "Ralf Broks",
      email: "ralf@mail.com",
      role: "member",
      status: "removed",
    },
  ]);
  return (
    <div className="grid gap-6 border rounded-lg shadow px-5 py-4 w-full max-w-[800px]">
      <header className="flex items-start justify-between">
        <div className="grid gap-1">
          <h1 className="text-2xl">Team</h1>
          <p>Invite new members in your team</p>
        </div>
        <New />
      </header>
      <main>
        <DataTableDemo columns={columns} data={members} />
      </main>
    </div>
  );
}
