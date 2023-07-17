import "@/styles/reset.css";
import "@/styles/globals.css";
import { alata } from "@/fonts";

export const metadata = {
  title: "Loopstudios Landing Page | Frontend Mentor",
  description: "A solution to the Loopstudios Landing Page challenge from FrontendMentor.io. Completed by Ken Sparby @ https://sparby.dev/",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={alata.className}>{children}</body>
    </html>
  );
}
