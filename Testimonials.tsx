import { motion } from "motion/react";
import { Star, Quote, Calendar, Briefcase } from "lucide-react";
import { CONFIG } from "./Constant";

export default function Testimonials() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-primary text-primary" : "text-white/20"}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 md:mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm md:text-xs font-black text-primary tracking-[0.5em] uppercase mb-6 md:mb-8 italic"
            >
              {CONFIG.testimonials.subtitle}
            </motion.h2>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-black italic leading-[1.1] mb-6 md:mb-8 break-words"
              dangerouslySetInnerHTML={{ __html: CONFIG.testimonials.title }}
            />
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto"
            >
              {CONFIG.testimonials.description}
            </motion.p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {CONFIG.testimonials.reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/[0.02] border border-white/5 p-6 md:p-8 hover:bg-white/[0.05] transition-all duration-500 hover:border-primary/20"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors">
                  <Quote size={24} />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(review.rating)}
                </div>

                {/* Comment */}
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 line-clamp-4">
                  "{review.comment}"
                </p>

                {/* Client Info */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                      <img 
                        src={review.avatar} 
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Name & Position */}
                    <div>
                      <h4 className="text-white font-display font-black text-sm md:text-base">
                        {review.name}
                      </h4>
                      <p className="text-white/50 text-xs md:text-sm">
                        {review.position} @ {review.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project & Date */}
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/30">
                  <div className="flex items-center space-x-2">
                    <Briefcase size={12} />
                    <span>{review.project}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={12} />
                    <span>{review.date}</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16 md:mt-24"
          >
            <p className="text-white/60 text-sm md:text-base mb-8">
              Rejoignez nos clients satisfaits et donnez vie à vos projets
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center space-x-4 py-4 md:py-6 px-8 md:px-12 bg-primary text-white font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-500 text-sm md:text-xs"
            >
              <span>Devenir Client</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
