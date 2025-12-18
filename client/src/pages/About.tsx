import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2, Download, Award, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-secondary py-20 border-b border-border">
        <div className="container">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A Manufacturing DX Consultant with 19 years of field experience. 
              I bridge the gap between "Genba" reality and digital strategy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Profile & Story */}
          <div className="lg:col-span-8 space-y-12">
            {/* Professional Summary */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-chart-1"></span>
                Professional Summary
              </h2>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                <p>
                  For 19 years, I have been consistently dedicated to improving productivity in the manufacturing industry (semiconductor, medical devices, construction machinery).
                </p>
                <p>
                  During my 16 years at Canon group, I worked as a software engineer and project manager in the market support department for semiconductor exposure equipment. From a position connecting development and customers, I went deep into customer factory floors, understanding manufacturing constraints, culture, and essential issues with my own skin.
                </p>
                <p>
                  Currently, as a Manufacturing DX Consultant, I use this field experience as a foundation. I visualize and structure potential issues, draw long-term visions such as data utilization infrastructure construction and AI introduction, and formulate concrete strategies. I verify effects with 3-6 month PoCs, accumulating results such as work time reduction and productivity improvement, while supporting consistently until full-scale execution.
                </p>
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-chart-1"></span>
                Work History
              </h2>
              
              <div className="relative border-l border-border ml-3 space-y-12">
                {[
                  {
                    period: "Nov 2022 - Present",
                    role: "Project Leader / DX Consultant",
                    company: "Growth X Partners",
                    desc: "Leading enterprise DX promotion and planning. Driving projects for medical and construction machinery manufacturers."
                  },
                  {
                    period: "Jan 2010 - Oct 2022",
                    role: "Software Engineer / Project Leader",
                    company: "Canon Inc.",
                    desc: "Market support for semiconductor exposure equipment. Led yield improvement projects using machine learning."
                  },
                  {
                    period: "Apr 2006 - Dec 2009",
                    role: "Field Engineer / System Development",
                    company: "Canon Marketing Japan",
                    desc: "Service and system development for semiconductor manufacturing equipment."
                  }
                ].map((job, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-chart-1 ring-4 ring-background" />
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold">{job.role}</h3>
                      <span className="hidden sm:inline text-muted-foreground">•</span>
                      <span className="text-primary font-medium">{job.company}</span>
                    </div>
                    <span className="text-sm font-mono text-muted-foreground bg-secondary px-2 py-1 inline-block mb-3">
                      {job.period}
                    </span>
                    <p className="text-muted-foreground">
                      {job.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skills & Certs */}
          <div className="lg:col-span-4 space-y-10">
            {/* Skills */}
            <div className="bg-secondary/30 p-8 border border-border">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-chart-1" />
                Technical Skills
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Cloud & Infra</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Azure (5y+)", "GCP", "Linux"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-background border border-border text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "React.js", "Ruby on Rails", "PostgreSQL"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-background border border-border text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Data & GIS</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Mapbox", "GeoServer", "Remote Sensing", "Image Analysis"].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-background border border-border text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-secondary/30 p-8 border border-border">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className="h-5 w-5 text-chart-1" />
                Certifications
              </h3>
              <ul className="space-y-3">
                {[
                  "Google Cloud Associate Cloud Engineer",
                  "Applied Information Technology Engineer",
                  "Fundamental Information Technology Engineer",
                  "Technical Engineer (Network)",
                  "Technical Engineer (Database)"
                ].map((cert, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-chart-1 mt-0.5 shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Download Resume */}
            <div className="p-8 bg-primary text-primary-foreground">
              <h3 className="text-xl font-bold mb-4">Download Resume</h3>
              <p className="text-primary-foreground/70 text-sm mb-6">
                Get the full details of my professional experience and project history.
              </p>
              <Button variant="outline" className="w-full border-white/30 hover:bg-white/10 text-white gap-2" asChild>
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4" /> Download PDF
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
