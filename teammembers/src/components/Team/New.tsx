/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useHelpers } from "@/hooks/useHelpers";
import { useState } from "react";
import CustomButton from "../CustomButton";
import Roles from "./Members/Options/Roles";

export default function NewMember() {
  const { open, setOpen, loading, setLoading } = useHelpers();
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: "member",
  });

  const sendInvitation = async () => {
    try {
      setLoading(true);
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setOpen(false);
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger asChild>
        <Button>
          <span>New member</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" />
            </div>
            <div className="w-[240px]">
              <Roles
                selected={member.role}
                setSelected={(v: string) => {
                  setMember((prev) => ({ ...prev, role: v }));
                }}
              />
            </div>
          </div>
        </DialogHeader>
        <DialogFooter>
          <CustomButton
            {...{ label: "Send invitation", loading, onClick: sendInvitation }}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
