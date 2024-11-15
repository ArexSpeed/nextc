import CustomButton from "@/components/CustomButton";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useHelpers } from "@/hooks/useHelpers";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export default function Remove({ user, open, onClose }: any) {
  const { loading, setLoading } = useHelpers();

  const removeMember = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("tm_team_members")
        .update({
          status: "removed",
        })
        .eq("id", user.id)
        .select("*");

      if (data) {
        console.log(data);
        toast.success("Removed successfully");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure ?</AlertDialogTitle>
          <AlertDialogDescription>
            {user.name || "Member"} will no longer be part of the team and will
            no longer have access to team-related content.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => onClose()}
            className="text-white bg-red-500"
          >
            Cancel
          </AlertDialogCancel>
          <CustomButton
            {...{ label: "Confirm", loading, onClick: removeMember }}
          />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
