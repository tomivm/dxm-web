import { CallToAction } from "@/components/call-to-action";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      {/* Call to Action */}
      <CallToAction />
    </main>
  );
}
