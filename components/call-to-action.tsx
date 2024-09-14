import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="mb-6">
          Lets bring your vision to life. Contact us today for a consultation.
        </p>
        <Link href={"/contact"}>
          <Button className="bg-[#D2A66E] hover:bg-[#B38E5D] text-black">
            Contact Us Today
          </Button>
        </Link>
      </div>
    </section>
  );
}
