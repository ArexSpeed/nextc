import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { dark } from "@clerk/themes";
import "../globals.css";

export const metadata = {
  title: "Threads",
  description: "A next js Meta Threads App",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          <div className="flex items-center justify-center w-full min-h-screen">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
