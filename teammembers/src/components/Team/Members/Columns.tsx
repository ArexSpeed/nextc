"use client";

import { useHelpers } from "@/hooks/useHelpers";
import { ColumnDef } from "@tanstack/react-table";
import Roles from "./Options/Roles";
import { Badge } from "@/components/ui/badge";
import Options from "./Options";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const name: string = row.getValue("name");
      // const email: string = row.original.email;
      return (
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 font-bold text-white capitalize bg-black rounded-full">
            {name[0]}
          </div>
          <div className="grid">
            <span className="font-medium">{name}</span>
            {/* <span className="text-xs text-neutral-500">{email}</span> */}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { open, setOpen, loading, setLoading } = useHelpers();
      const role: string = row.getValue("role");
      const id: string = row.original.id;

      const onRoleChanged = async (v: string) => {
        try {
          setLoading(true);
          const { data, error } = await supabase
            .from("tm_team_members")
            .update({
              role: v,
            })
            .eq("id", id)
            .select("*");

          if (data) {
            console.log(data);
            toast.success("Role updated successfully");
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          throw new Error(error);
        } finally {
          setOpen(false);
          setLoading(false);
        }
      };

      return (
        <div onClick={() => setOpen(!open)} className="w-[120px]">
          {!open && (
            <span className="text-sm capitalize text-neutral-500">{role}</span>
          )}
          {open && (
            <Roles
              {...{ selected: role }}
              setSelected={(v) => onRoleChanged(v)}
            />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: string = row.getValue("status");

      switch (status) {
        case "pending":
          return (
            <Badge className="text-orange-900 capitalize hover:bg-transparent bg-orange-50">
              Pending
            </Badge>
          );
        case "active":
          return (
            <Badge className="text-green-900 capitalize hover:bg-transparent bg-green-50">
              Active
            </Badge>
          );
        case "removed":
          return (
            <Badge className="text-red-900 capitalize hover:bg-transparent bg-red-50">
              Removed
            </Badge>
          );
        default:
          return (
            <Badge className="capitalize hover:bg-transparent bg-neutral-50 text-neutral-900">
              Unknown
            </Badge>
          );
      }
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <div className="flex justify-end">
          <Options {...{ user }} />
        </div>
      );
    },
  },
];
