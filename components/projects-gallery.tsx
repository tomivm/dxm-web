import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Modern Loft Conversion",
    description: "A spacious loft transformed into a contemporary living space",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OiLfv4YscKUtkCDCtPn6ZfFX8JWscr.png",
    category: "Residential",
    constructionTitle: "Open-Plan Renovation",
    constructionMethod:
      "Utilizing steel beam reinforcement and minimalist partitions to create an open, airy living space while preserving the building's structural integrity.",
  },
  {
    id: 2,
    title: "Eco-Friendly Office Complex",
    description:
      "Sustainable commercial building with state-of-the-art facilities",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "Commercial",
    constructionTitle: "Green Building Techniques",
    constructionMethod:
      "Incorporating solar panels, rainwater harvesting systems, and high-efficiency insulation to minimize environmental impact and reduce long-term operating costs.",
  },
  {
    id: 3,
    title: "Historic Home Restoration",
    description: "Careful restoration of a 19th-century Victorian mansion",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "Restoration",
    constructionTitle: "Period-Accurate Restoration",
    constructionMethod:
      "Employing traditional craftsmanship and sourcing authentic materials to faithfully restore architectural details while discreetly integrating modern amenities.",
  },
  {
    id: 4,
    title: "Minimalist Beach House",
    description: "Sleek and modern beachfront property with panoramic views",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "Residential",
    constructionTitle: "Coastal-Resistant Design",
    constructionMethod:
      "Using corrosion-resistant materials and elevated foundation techniques to withstand coastal weather conditions while maximizing ocean views through floor-to-ceiling windows.",
  },
  {
    id: 5,
    title: "Urban Rooftop Garden",
    description: "Transforming unused roof space into a lush community garden",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "Landscape",
    constructionTitle: "Lightweight Rooftop Landscaping",
    constructionMethod:
      "Implementing a specialized lightweight soil mix and strategic weight distribution to create a thriving garden ecosystem without compromising the building's structural load capacity.",
  },
  {
    id: 6,
    title: "Industrial Warehouse Conversion",
    description: "Repurposing an old warehouse into a vibrant co-working space",
    imageUrl: "/placeholder.svg?height=400&width=600",
    category: "Commercial",
    constructionTitle: "Adaptive Reuse",
    constructionMethod:
      "Preserving the industrial character through exposed structural elements while introducing modern office infrastructure and flexible, modular workspace solutions.",
  },
];

export function ProjectsGallery() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Explore our diverse portfolio of projects, showcasing our expertise in
          residential, commercial, and specialized constructions. Each project
          reflects our commitment to quality, innovation, and client
          satisfaction.
        </p>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#111] rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#D2A66E]">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <span className="inline-block bg-[#D2A66E] text-black px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {project.category}
                </span>
                <div className="border-t border-gray-700 pt-4 mt-4">
                  <h4 className="text-lg font-semibold mb-2 text-[#D2A66E]">
                    {project.constructionTitle}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {project.constructionMethod}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Link href={`/projects/${project.id}`}>
                  <Button className="w-full bg-[#D2A66E] hover:bg-[#B38E5D] text-black">
                    View Project
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
