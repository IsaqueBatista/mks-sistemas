import type { Metadata } from "next";

import GlobalStyles from "@/styles/globalStyles";

export const metadata: Metadata = {
  title: "MKS Serviços",
  description: "Teste técnico Mks Serviços",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style>
          @import
          url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap");
        </style>
      </head>
      <body>
        <GlobalStyles />
        {children}
      </body>
    </html>
  );
}
