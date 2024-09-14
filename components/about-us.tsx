import Image from "next/image";
import { Button } from "@/components/ui/button";

export function AboutUsComponent() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-8 md:py-20">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-6 text-center text-[#D2A66E]">
            DXM Construcciones
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 w-full">
              <div className="relative w-full h-0 pb-[100%] rounded-full overflow-hidden">
                <Image
                  src="https://instagram.fsvq2-1.fna.fbcdn.net/v/t51.29350-15/361967097_6603488636378925_3964229883376849095_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43Njh4NzY4LnNkci5mMjkzNTAuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.fsvq2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=hd8qxz4i5_oQ7kNvgF05QUL&_nc_gid=cfe93c36715e4fad84e839031430a167&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzE1MjE5NzMyODgxOTA4NjQ0MA%3D%3D.3-ccb7-5&oh=00_AYCgERkzbbtqfmnUWwzK5PjM0um2yRV8-OpuXVR36z4i4g&oe=66EBE9BC&_nc_sid=8f1549"
                  alt="La Pedrera beach"
                  layout="fill"
                  objectFit="cover"
                  className="object-center"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                Inspired by the rugged beauty of La Pedrera, Rocha, Uruguay,
                BuildCraft Co. brings a unique blend of nature-inspired design
                and sustainable construction to every project.
              </p>
              <p className="text-lg mb-4">
                Our team of skilled architects and builders are passionate about
                creating spaces that harmonize with their surroundings, just
                like the perfect wave meets the shore.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#D2A66E]">
            Our Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainable Design",
                description:
                  "We incorporate eco-friendly materials and energy-efficient systems in all our projects.",
              },
              {
                title: "Natural Harmony",
                description:
                  "Our designs draw inspiration from the natural world, creating spaces that feel organic and timeless.",
              },
              {
                title: "Community Focus",
                description:
                  "We believe in building not just structures, but communities that thrive in harmony with their environment.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-[#111] p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-[#D2A66E]">
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#D2A66E]">
            Our Inspiration
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                The rolling waves of La Pedrera beaches inspire our fluid,
                dynamic designs. Like a surfer reading the ocean, we read the
                landscape to create structures that feel like a natural
                extension of their environment.
              </p>
              <p className="text-lg mb-4">
                Our circular window designs, reminiscent of a surfer view
                through a wave, bring a unique perspective to every space we
                create, connecting the indoors with the beauty of the outdoors.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-0 pb-[75%] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Surf-inspired architecture"
                  layout="fill"
                  objectFit="cover"
                  className="object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-center text-[#D2A66E]">
            Join Us on This Journey
          </h2>
          <p className="text-lg mb-6 text-center">
            Let s create spaces that inspire, nurture, and stand the test of
            time – just like the timeless beauty of La Pedrera.
          </p>
          <div className="text-center">
            <Button className="bg-[#D2A66E] hover:bg-[#B38E5D] text-black">
              Start Your Project
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
