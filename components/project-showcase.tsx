"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectShowcase() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    {
      src: "https://scontent-mad1-1.cdninstagram.com/v/t51.29350-15/445161244_1490637258206461_1266091372970466499_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDYwNy5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=EtbURHaf304Q7kNvgE2IUMO&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzM3MTUzODY4MjU0Mzc4MzE4NA%3D%3D.3-ccb7-5&oh=00_AYA-0uNl4PVBvY2p77Mpfte9PGC-d_D1hZbuBeX5ZGvNGA&oe=66E7F586&_nc_sid=8f1549",
      alt: "Project Hero Image",
      description: "Exterior view of the completed project",
    },
    {
      src: "https://scontent-mad1-1.cdninstagram.com/v/t39.30808-6/432452600_17962120112705977_6182150976866826538_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=T-0E5uU8hP8Q7kNvgHdEXTO&_nc_gid=d73df4744c884142ae0be9ec7e3fca87&edm=AFg4Q8wAAAAA&ccb=7-5&ig_cache_key=MzMyMjQzOTQ5MzI5NjI1NTI3MQ%3D%3D.3-ccb7-5&oh=00_AYB-dE2YTmGbQp8Gv3133FdRWhRhQtAbaNQCYxcikD05HA&oe=66E7E484&_nc_sid=0b30b7",
      alt: "Additional Project Image 1",
      description: "Interior living space showcasing open concept design",
    },
    {
      src: "https://scontent-mad1-1.cdninstagram.com/v/t39.30808-6/432548669_17962120148705977_7368141229440288627_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=7t9IHAwqJgQQ7kNvgH7KnT-&_nc_gid=d73df4744c884142ae0be9ec7e3fca87&edm=AFg4Q8wAAAAA&ccb=7-5&ig_cache_key=MzMyMjQzOTQ5MzI5NjE0NjEwNA%3D%3D.3-ccb7-5&oh=00_AYDuWF3OK3jHGZHQl9qCZqGI7alkEDVjZwNzqVAGM0-r1g&oe=66E7F1C3&_nc_sid=0b30b7",
      alt: "Additional Project Image 2",
      description: "Custom kitchen with modern appliances and finishes",
    },
  ];

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isGalleryOpen) return;
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
      if (event.key === "Escape") closeGallery();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isGalleryOpen, nextImage, prevImage]);

  return (
    <div className=" bg-black text-white">
      {/* Header */}
      {/* <header className="container mx-auto px-4 py-6">
        <Link
          href="/"
          className="inline-flex items-center text-[#D2A66E] hover:text-[#B38E5D] transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </header> */}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div
          className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden cursor-pointer"
          onClick={() => openGallery(0)}
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            layout="fill"
            objectFit="cover"
            className="object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="p-8">
              <h1 className="text-4xl font-bold mb-2">Project Name</h1>
              <p className="text-xl">Brief project description</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
              auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
            </p>
            <p>
              Ut in nulla enim. Phasellus molestie magna non est bibendum non
              venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
              Mauris iaculis porttitor posuere.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Location: City, State</li>
              <li>Size: X square feet</li>
              <li>Duration: X months</li>
              <li>Completed: Month, Year</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Additional Images */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.slice(1).map((image, index) => (
            <div
              key={index + 1}
              className="relative w-full h-0 pb-[75%] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openGallery(index + 1)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="object-center"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-[#111] p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Client Testimonial</h2>
          <blockquote className="italic">
            BuildCraft Co. exceeded our expectations. Their attention to detail
            and commitment to quality is unmatched. We couldnt be happier with
            our new space!
          </blockquote>
          <p className="mt-4 text-[#D2A66E]">- John Doe, Homeowner</p>
        </div>
      </section>
      {/* Full Screen Gallery Modal */}
      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="w-full h-full p-0  bg-black">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#D2A66E]"></div>
                </div>
              )}
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                layout="fill"
                objectFit="contain"
                onLoadingComplete={() => setIsLoading(false)}
              />
            </div>
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white hover:text-[#D2A66E] transition-colors z-10"
              aria-label="Close gallery"
            >
              <X className="h-8 w-8" />
            </button>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#D2A66E] transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#D2A66E] transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="h-12 w-12" />
            </button>
            {/* <div className="absolute bottom-4 left-4 right-4 text-white text-center bg-black bg-opacity-50 p-2 rounded">
              {images[currentImageIndex].description}
            </div> */}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
