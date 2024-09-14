import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactComponent({
  backgroundColor = " bg-black",
}: {
  backgroundColor?: string;
}) {
  return (
    <div className={`text-white ${backgroundColor}`}>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-16 text-center">Contact Us</h1>

        <div className="flex flex-col md:flex-row md:gap-12">
          <div className="md:w-1/2">
            <div className="bg-[#111] p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#D2A66E]">
                Get in Touch
              </h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="bg-black text-white border-[#D2A66E]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="bg-black text-white border-[#D2A66E]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your Message"
                    required
                    className="bg-black text-white border-[#D2A66E]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#D2A66E] hover:bg-[#B38E5D] text-black"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-[#111] p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-[#D2A66E]">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-[#D2A66E]" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-[#D2A66E]" />
                  <span>info@buildcraftco.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-[#D2A66E]" />
                  <span>123 Seaside Ave, La Pedrera, Rocha, Uruguay</span>
                </div>
              </div>
            </div>

            <div className="bg-[#111] p-8 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#D2A66E]">
                Our Commitment
              </h2>
              <p className="mb-4">
                At BuildCraft Co., we re dedicated to bringing your vision to
                life. Our team of expert designers and builders are ready to
                turn your dreams into reality.
              </p>
              <p>
                Whether you re planning a new build, a renovation, or simply
                want to discuss possibilities, we re here to help. Reach out to
                us today and let s start creating something extraordinary
                together.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
