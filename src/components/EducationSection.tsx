import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    period: "2022 – 2026",
    title: "BSc (Hons) in Information Technology",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    details: "GPA: 2.37 / 4.0",
  },
  {
    period: "2021",
    title: "GCE Advanced Level",
    institution: "Physical Science Stream",
    details: "Successfully completed Advanced Level examinations",
  },
  {
    period: "2018",
    title: "GCE Ordinary Level",
    institution: "Strong academic performance",
    details: "A grades in Mathematics and English",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Background</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            My <span className="text-gradient-gold">Education</span>
          </h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-16"
              >
                {/* Dot */}
                <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="glass-card p-5 hover-gold-glow">
                  <span className="text-xs text-primary font-medium tracking-wider">{edu.period}</span>
                  <h3 className="font-display font-semibold text-foreground mt-1">{edu.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mt-1">{edu.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
