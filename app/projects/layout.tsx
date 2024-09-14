import { Button } from "@/components/ui/button";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      {/* Call to Action */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="mb-6">
            Lets bring your vision to life. Contact us today for a consultation.
          </p>
          <Button className="bg-[#D2A66E] hover:bg-[#B38E5D] text-black">
            Get in Touch
          </Button>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Whether you have a specific project in mind or need guidance, we re
          here to help bring your vision to life. Let s discuss how we can
          create something extraordinary together.
        </p>
        <Button className="bg-[#D2A66E] hover:bg-[#B38E5D] text-black">
          Contact Us Today
        </Button>
      </section>
    </main>
  );
}
