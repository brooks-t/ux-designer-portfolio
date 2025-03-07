
import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="content-container">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 mb-3 text-sm font-medium border border-primary/10 rounded-full bg-primary/5">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            Let's start a <span className="text-gradient">conversation</span>
          </h2>
          <p className="text-muted-foreground">
            I'm open to discussing new projects, design opportunities, or just having a creative conversation.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="bg-card text-card-foreground rounded-2xl p-8 shadow-sm border border-primary/5 transition-standard hover:shadow-md hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <a href="mailto:brooks.t.tiffany@gmail.com" className="flex items-center group">
                <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center mr-3 group-hover:bg-primary/10 transition-standard">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">brooks.t.tiffany@gmail.com</p>
                </div>
              </a>
            </div>
            
            <div className="mt-8">
              <p className="text-muted-foreground text-sm mb-4">Follow me on social media</p>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://www.linkedin.com/in/brookstiffany/" 
                  className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center hover:bg-primary/10 transition-standard"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
                <a 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center hover:bg-primary/10 transition-standard"
                  aria-label="Github"
                >
                  <Github className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
