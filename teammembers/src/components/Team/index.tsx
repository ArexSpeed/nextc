/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import New from "./New";
import { DataTableDemo } from "../Datatable";
import { columns } from "./Members/Columns";
import { useHelpers } from "@/hooks/useHelpers";
import { supabase } from "@/lib/supabase";
import LoadingTeam from "../Loading/Team";

export default function Team() {
  const [team, setTeam] = useState({
    id: "def80082-af0e-4c8a-aafa-c01aac0d0035",
    name: "Team",
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
    const subscription = supabase
      .channel("channel_tm_team_members")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "tm_team_members",
          filter: `team_id=eq.${team.id}`,
        },
        (payload: any) => {
          fetchTeam();
        }
      )
      .subscribe();
  }, []);

  if (loading) return <LoadingTeam />;
  return (
    <div className="grid gap-6 border rounded-lg shadow px-5 py-4 w-full max-w-[800px]">
      <header className="flex items-start justify-between">
        <div className="grid gap-1">
          <h1 className="text-2xl">{team?.name || "Team"}</h1>
          <p>Invite new members in your team</p>
        </div>
        <New team_id={team.id} />
      </header>
      <main>
        <DataTableDemo columns={columns} data={members} />
      </main>
    </div>
  );
}
