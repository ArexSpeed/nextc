import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <UserButton afterSignOutUrl="/" /> */}
      <h1 className="text-left head-text">Home</h1>
    </main>
  );
}
