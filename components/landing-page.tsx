'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">BuildCraft Co.</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-[#D2A66E] transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-[#D2A66E] transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-[#D2A66E] transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section with Sea Trace */}
      <section className="container mx-auto px-4 py-20 flex items-center relative">
        <div className="w-1/2 pr-8">
          <h2 className="text-5xl font-bold mb-6">Crafting Unique Spaces</h2>
          <p className="text-xl mb-8">Where innovation meets tradition in every build.</p>
          <Button className="bg-[#D2A66E] hover:bg-[#B38E5D] text-black">Get a Quote</Button>
        </div>
        <div className="w-1/2 relative">
          <div className="w-96 h-96 bg-[#D2A66E] rounded-full overflow-hidden mx-auto">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OiLfv4YscKUtkCDCtPn6ZfFX8JWscr.png"
              alt="Cozy interior with circular window"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* Minimalistic Sea Trace */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
            <path fill="#D2A66E" fillOpacity="0.2" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,224C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#111] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Custom Homes', 'Renovations', 'Sustainable Building'].map((item, index) => (
              <div key={index} className="bg-black p-6 rounded-lg shadow-lg text-center border border-[#D2A66E]">
                <div className="w-20 h-20 bg-[#D2A66E] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-black text-3xl">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item}</h3>
                <p>Tailored solutions to bring your vision to life</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-92i7qSRf7TMILQgI3dK5cHHtyQqERN.png",
                alt: "Cozy wooden interior with circular window",
                title: "Rustic Retreat"
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8SNrGyR4l9sQGa6dPVuUx9t9YKnLDU.png",
                alt: "Modern black house exterior at sunset",
                title: "Contemporary Haven"
              }
            ].map((project, index) => (
              <div key={index} className="relative group">
                <div className="w-full h-80 bg-[#D2A66E] rounded-full overflow-hidden mx-auto">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform group-hover:scale-110 duration-300"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black bg-opacity-75 text-white p-4 rounded-lg">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p>Click to view details</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#111] py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="max-w-md mx-auto bg-black p-8 rounded-lg shadow-lg border border-[#D2A66E]">
            <form>
              <div className="mb-4">
                <Input type="text" placeholder="Your Name" className="bg-[#222] text-white border-[#D2A66E]" />
              </div>
              <div className="mb-4">
                <Input type="email" placeholder="Your Email" className="bg-[#222] text-white border-[#D2A66E]" />
              </div>
              <div className="mb-4">
                <Textarea placeholder="Your Message" className="bg-[#222] text-white border-[#D2A66E]" />
              </div>
              <Button type="submit" className="w-full bg-[#D2A66E] hover:bg-[#B38E5D] text-black">Send Message</Button>
            </form>
          </div>
        </div>
        {/* Inverted Sea Trace */}
        <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden transform rotate-180">
          <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
            <path fill="#D2A66E" fillOpacity="0.2" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,224C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#D2A66E] text-black py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 BuildCraft Co. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}