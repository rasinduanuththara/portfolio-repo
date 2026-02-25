import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Online Ticket Booking System",
    description:
      "Full stack MERN application with user interface using React, backend with Node.js and MongoDB. Contributed the Sponsorship Management component.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "#",
  },
  {
    title: "Online Event Planning System",
    description:
      "Event planning platform built with HTML, CSS, JavaScript, and JSP. Focused on frontend design, form validation, and basic backend integration.",
    tech: ["HTML", "CSS", "JavaScript", "JSP"],
    github: "#",
  },
  {
    title: "Resource Booking System",
    description:
      "Resource management system with CRUD operations and user input validation. Built using HTML, CSS, and PHP for backend processing.",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card overflow-hidden group hover-gold-glow"
            >
              {/* Color bar top */}
              <div className="h-1 bg-gradient-to-r from-primary to-primary/40" />
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={15} />
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={15} />
                    Details
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
