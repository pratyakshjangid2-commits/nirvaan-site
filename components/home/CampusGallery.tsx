"use client";

import { motion } from "framer-motion";
import { Camera, Image as ImageIcon } from "lucide-react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    title: "Smart Classrooms",
    category: "Infrastructure"
  },
  {
    url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop",
    title: "Physics Laboratory",
    category: "Labs"
  },
  {
    url: "https://images.unsplash.com/photo-1541339907198-e08756c83f2d?q=80&w=2070&auto=format&fit=crop",
    title: "Library & Study Zone",
    category: "Resource Center"
  },
  {
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    title: "Interactive Seminars",
    category: "Events"
  },
  {
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    title: "One-on-One Mentorship",
    category: "Academic"
  },
  {
    url: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=2070&auto=format&fit=crop",
    title: "Hostel Environment",
    category: "Living"
  }
];

export function CampusGallery() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
              Campus Life
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Academic <span className="italic text-brand-secondary">Environment</span> <br />Built for Focus.
            </h2>
            <p className="text-neutral-500 font-light leading-relaxed">
              Explore the physical infrastructure and learning ecosystem that helps 
              our students maintain absolute focus on their academic goals.
            </p>
          </motion.div>
          
          <div className="flex items-center gap-2 text-brand-navy opacity-40">
             <Camera size={18} />
             <span className="text-[10px] font-black uppercase tracking-widest leading-none">Visual Transparency</span>
          </div>
        </div>

        <div className="relative -mx-6 md:-mx-12 lg:mx-0">
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-0 snap-x snap-mandatory no-scrollbar w-full">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="min-w-[85vw] sm:min-w-[300px] lg:min-w-0 group relative h-80 overflow-hidden bg-brand-navy rounded-sm border border-neutral-200 snap-center first:ml-0 last:mr-0"
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-all duration-700 opacity-80 group-hover:opacity-100 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-black text-brand-secondary uppercase tracking-[0.2em] mb-2 block">
                    {img.category}
                  </span>
                  <h3 className="text-white text-lg font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                    {img.title}
                  </h3>
                </div>

                <div className="absolute top-6 right-6 w-10 h-10 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm">
                  <ImageIcon size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
