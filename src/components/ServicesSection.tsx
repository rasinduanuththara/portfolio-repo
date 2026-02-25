import { motion } from "framer-motion";
import { Globe, Server, Database, Smartphone, Code, Layout } from "lucide-react";

const services = [
  { icon: Layout, title: "Frontend Development", desc: "Modern, responsive UIs with React and clean design practices." },
  { icon: Server, title: "Backend Development", desc: "Scalable server-side solutions with Node.js and Express." },
  { icon: Database, title: "Database Integration", desc: "MongoDB and MySQL database design, queries, and optimization." },
  { icon: Globe, title: "RESTful APIs", desc: "Clean, well-documented API development and integration." },
  { icon: Smartphone, title: "Responsive Design", desc: "Mobile-first approach ensuring great experience on all devices." },
  { icon: Code, title: "Full Stack Solutions", desc: "End-to-end web application development using the MERN stack." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">What I Do</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            My <span className="text-gradient-gold">Services</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 hover-gold-glow group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
