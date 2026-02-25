import { motion } from "framer-motion";
import { Code, Users, Lightbulb } from "lucide-react";

const highlights = [
  { icon: Lightbulb, title: "Problem Solver", desc: "Analytical approach to complex challenges" },
  { icon: Users, title: "Team Player", desc: "Collaborative and communicative" },
  { icon: Code, title: "Full Stack Dev", desc: "End-to-end application development" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            Why You Should <span className="text-gradient-gold">Hire Me</span>?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              I am an Information Technology undergraduate at the Sri Lanka Institute of Information Technology (SLIIT),
              specializing in full stack development. With a strong academic foundation and hands-on project experience,
              I bring a detail-oriented and practical approach to every project I undertake.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My passion lies in building real-world applications using modern web technologies. I thrive in collaborative
              environments and enjoy tackling complex problems with data-driven solutions. I'm proficient in the MERN stack
              and continuously expanding my skill set.
            </p>
            <div className="flex gap-6 pt-2">
              <div>
                <p className="text-sm text-muted-foreground">Languages</p>
                <p className="text-foreground font-medium">Sinhala, English</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground font-medium">Dankotuwa, Sri Lanka</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-4"
          >
            {highlights.map((h, i) => (
              <div
                key={i}
                className="glass-card p-5 flex items-center gap-4 hover-gold-glow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <h.icon className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">{h.title}</h3>
                  <p className="text-sm text-muted-foreground">{h.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
