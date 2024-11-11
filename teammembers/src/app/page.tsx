"use client";

import Team from "@/components/Team";
import { useState } from "react";

export default function Page() {
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
  return <Team />;
}
