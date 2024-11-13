/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import New from "./New";
import { DataTableDemo } from "../Datatable";
import { columns } from "./Members/Columns";
import { useHelpers } from "@/hooks/useHelpers";
import { supabase } from "@/lib/supabase";

export default function Team() {
  const [team, setTeam] = useState({
    id: "def80082-af0e-4c8a-aafa-c01aac0d0035",
  });
  const { loading, setLoading } = useHelpers();
  const [members, setMembers] = useState([]);

  const fetchTeam = async () => {
    try {
      setLoading(true);
      const { data, error }: any = await supabase
        .from("tm_teams")
        .select("*, tm_team_members(*)")
        .eq("id", "def80082-af0e-4c8a-aafa-c01aac0d0035")
        .single();

      if (data) {
        console.log(data);
        const { tm_team_members, ...teamData } = data;
        setTeam(teamData);
        setMembers(tm_team_members);
      }
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);
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
