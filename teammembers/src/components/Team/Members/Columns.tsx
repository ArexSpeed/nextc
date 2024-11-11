import { useHelpers } from "@/hooks/useHelpers";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const name: string = row.getValue("name");
      const email: string = row.original.email;
      return (
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 font-bold text-white capitalize bg-black rounded-full">
            {name[0]}
          </div>
          <div className="grid">
            <span className="font-medium">{name}</span>
            <span className="text-xs text-neutral-500">{email}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const { open, setOpen, loading, setLoading } = useHelpers();
      const role: string = row.getValue("role");

      const onRoleChanged = (v: string) => {
        try {
          setLoading(true);
          alert(v);
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
        </div>
      );
    },
  },
];
