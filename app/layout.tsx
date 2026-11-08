import "./globals.css";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Little List — A little focus, a lot of possibility",
  description: "A calm space for your everyday tasks. Plan, organize, and celebrate the little things with Little List.",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-[#eaf0eb] bg-[radial-gradient(ellipse_at_20%_0%,#f5f7ee_0%,transparent_60%)] font-[Arial,Helvetica,sans-serif] text-[#213d35] selection:bg-[#cee6d6] selection:text-[#213d35]">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
