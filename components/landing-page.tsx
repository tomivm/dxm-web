import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ContactComponent } from "./contact";
import Link from "next/link";

export function LandingPage() {
  return (
    <div className=" bg-black text-white">
      <section className="container mx-auto px-4 py-8 md:py-20 flex md:flex-nowrap flex-wrap items-center justify-between relative">
        <div className="md:pr-8 ">
          <h2 className="text-5xl font-bold mb-6">Crafting Unique Spaces</h2>
          <p className="text-xl mb-8">
            Where innovation meets tradition in every build.
          </p>
          {/* <Button className="bg-[#D2A66E] hover:bg-[#B38E5D] text-black">
            Get a Quote
          </Button> */}
        </div>
        <div className="flex flex-grow md:flex-grow-0">
          <div className="lg:w-96 lg:h-96 md:w-64 md:h-64 w-48 h-48 bg-[#D2A66E] rounded-full overflow-hidden mx-auto">
            <Image
              src="https://instagram.fsvq2-1.fna.fbcdn.net/v/t51.29350-15/444728410_409384151930607_6015025877142238221_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi44NDR4NDc0LnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.fsvq2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=HiWQUPcxxPoQ7kNvgHx3bp2&_nc_gid=299b27162f93461182db038c250ccac4&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzM3MTUzODY4MjM1MDc1MzY4OQ%3D%3D.3-ccb7-5&oh=00_AYBhWc8h2eW2tdjZDTHeeBUwaQ5Cfpv-JKk68vCV3jXqag&oe=66EBEF7B&_nc_sid=8f1549"
              alt="Cozy interior with circular window"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#111] py-8 md:py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Custom Homes", "Renovations", "Sustainable Building"].map(
              (item, index) => (
                <div
                  key={index}
                  className="bg-black p-6 rounded-lg shadow-lg text-center border border-[#D2A66E]"
                >
                  <div className="w-20 h-20 bg-[#D2A66E] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-black text-3xl">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{item}</h3>
                  <p>Tailored solutions to bring your vision to life</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container justify-center mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-92i7qSRf7TMILQgI3dK5cHHtyQqERN.png",
                alt: "Cozy wooden interior with circular window",
                title: "Rustic Retreat",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8SNrGyR4l9sQGa6dPVuUx9t9YKnLDU.png",
                alt: "Modern black house exterior at sunset",
                title: "Contemporary Haven",
              },
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
                <Link
                  href={"/projects/1"}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="bg-black bg-opacity-75 text-white p-4 rounded-lg">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p>Click to view details</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center p-8">
            <Link href={"/projects"}>
              <Button className="mx-auto px-4 bg-[#D2A66E] hover:bg-[#B38E5D] text-black">
                All our projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactComponent backgroundColor={"bg-[#111]"} />
    </div>
  );
}
