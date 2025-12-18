import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Calendar, Users, Target, Zap } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "forestry-dx",
      title: "Forestry DX Platform Strategy & Build",
      client: "Construction Machinery Manufacturer",
      period: "Oct 2023 - Jun 2024",
      role: "Project Leader (3-7 members)",
      image: "/images/manufacturing-dx.jpg",
      tags: ["Azure", "Mapbox", "GeoServer", "React", "Rails"],
      challenge: "Urgent need to improve forestry productivity, but unclear concrete measures for data utilization. Low digital literacy of field workers was also a barrier.",
      approach: "Set 'Work Plan Optimization' using remote sensing data and GIS analysis as a priority theme. Developed an offline-capable map app and conducted a 3-month PoC.",
      results: [
        "Reduced work planning time by approx. 30% (PoC result)",
        "Achieved 90%+ utilization rate with high praise from field workers",
        "Secured approval for full-scale investment"
      ]
    },
    {
      id: "dialysis-system",
      title: "Dialysis Information System Business Transformation",
      client: "Medical Device Manufacturer",
      period: "Nov 2023 - Present",
      role: "Project Leader (5-7 members)",
      image: "/images/global-collaboration.jpg",
      tags: ["Azure", "React.js", "Ruby on Rails", "PostgreSQL"],
      challenge: "Urgent need to shift business to global expansion and data business due to domestic market saturation. Existing system issues were unorganized.",
      approach: "Visualized issues through workshops and formulated a long-term vision. Stationed in Belgium for 2 months to establish a development structure.",
      results: [
        "Secured management approval for long-term roadmap",
        "Established global collaboration structure with Belgium base",
        "Connected to PoC for sales support data analysis platform"
      ]
    },
    {
      id: "semiconductor-yield",
      title: "Semiconductor Exposure Equipment Yield Improvement",
      client: "Canon Inc.",
      period: "Jan 2018 - Oct 2022",
      role: "Project Leader (7 members)",
      image: "/images/data-analysis.jpg",
      tags: ["Linux", "Python", "Machine Learning", "Agile"],
      challenge: "Long equipment downtime and reliance on manual inspection image classification caused productivity and accuracy issues.",
      approach: "Identified root causes through data analysis. Developed an automated inspection image classification system using machine learning.",
      results: [
        "Improved equipment availability by 15%",
        "Reduced error rate by 50%",
        "Awarded Best Project (1st out of 100 internal projects)"
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-secondary py-20 border-b border-border">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Selected Projects</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A showcase of strategic execution and technical implementation.
              Real-world examples of how I drive manufacturing DX.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20">
        <div className="container space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              {/* Project Image (Sticky on Desktop) */}
              <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
                <div className="relative aspect-[4/3] overflow-hidden border border-border group bg-secondary">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-secondary border border-border text-xs font-mono text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:col-span-7 space-y-10">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm font-mono text-muted-foreground mb-4">
                    <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {project.period}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-2"><Users className="h-4 w-4" /> {project.role}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h2>
                  <p className="text-lg text-primary font-medium">{project.client}</p>
                </div>

                <div className="space-y-8">
                  <div className="bg-secondary/30 p-6 border-l-2 border-chart-1">
                    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Target className="h-5 w-5 text-chart-1" /> Challenge
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-3">Approach</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.approach}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-chart-1" /> Key Results
                    </h3>
                    <ul className="space-y-3">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-chart-1 mt-2 shrink-0" />
                          <span className="text-foreground/90">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-muted-foreground mb-8">
            I'm always open to discussing new opportunities in manufacturing DX.
            Let's see how we can work together.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
