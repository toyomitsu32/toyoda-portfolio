import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! I'll get back to you soon.");
      // Reset form logic would go here
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-[80vh]">
      <section className="bg-secondary py-20 border-b border-border">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Interested in collaboration or have a question?
              Feel free to reach out.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I am currently available for consulting projects and advisory roles.
                Whether you have a specific project in mind or just want to discuss 
                manufacturing DX possibilities, I'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary border border-border flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-chart-1" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a href="mailto:contact@toyoda-dx.com" className="text-muted-foreground hover:text-primary transition-colors">
                      contact@toyoda-dx.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary border border-border flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-chart-1" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Tokyo, Japan (Available for remote & travel)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Social Profiles</h2>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="flex items-center gap-3 px-6 py-3 bg-secondary border border-border hover:border-chart-1 hover:text-chart-1 transition-all group"
                >
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-3 px-6 py-3 bg-secondary border border-border hover:border-chart-1 hover:text-chart-1 transition-all group"
                >
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-card border border-border p-8 md:p-10 shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your Name" required className="rounded-none bg-secondary/50 border-border focus:border-chart-1" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" required className="rounded-none bg-secondary/50 border-border focus:border-chart-1" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="Project Inquiry" required className="rounded-none bg-secondary/50 border-border focus:border-chart-1" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project or inquiry..." 
                  required 
                  className="min-h-[150px] rounded-none bg-secondary/50 border-border focus:border-chart-1 resize-none" 
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-12 text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">Sending...</span>
                ) : (
                  <span className="flex items-center gap-2">Send Message <Send className="h-4 w-4" /></span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
