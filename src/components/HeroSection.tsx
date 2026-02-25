import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Decorative geometric shapes */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-primary/20 rotate-45 hidden lg:block" />
      <div className="absolute top-1/3 right-[20%] w-48 h-48 border border-primary/10 rotate-12 hidden lg:block" />

      <div className="container mx-auto relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-medium mb-3 tracking-widest uppercase text-sm">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4">
              Rasindu
              <br />
              <span className="text-gradient-gold">Anuththara</span>
              <br />
              Fernando
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Full Stack Developer | IT Undergraduate
            </p>
            <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
              Building practical, impactful solutions using modern web technologies.
              Information Technology undergraduate passionate about software engineering
              and data-driven problem solving.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_25px_hsl(38_90%_55%/0.3)] transition-all duration-300"
              >
                View Projects
                <ExternalLink size={16} />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-primary/40 text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                Download CV
                <ArrowDown size={16} />
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Gold decorative frame */}
              <div className="absolute -inset-4 border-2 border-primary/30 rounded-full rotate-6 hidden sm:block" />
              <div className="absolute -inset-8 border border-primary/15 rounded-full -rotate-6 hidden sm:block" />
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden gold-border-glow relative z-10">
                <img
                  src={profileImg}
                  alt="Rasindu Anuththara Fernando"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glow behind */}
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl -z-10 scale-150" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-primary/60" size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
