import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "C++", "C#"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "GitHub", "MERN Stack", "DSA"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">My Skills</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            Technologies I <span className="text-gradient-gold">Work With</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 hover-gold-glow"
            >
              <h3 className="font-display font-semibold text-primary mb-4 text-sm uppercase tracking-wider">
                {cat.title}
              </h3>
              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary/70" />
                    <span className="text-foreground text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
