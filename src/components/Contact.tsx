
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
          <p className="text-primary/70">
            I'm open to discussing new projects, design opportunities, or just having a creative conversation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-primary/5 transition-standard hover:shadow-md hover:-translate-y-1 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <a href="mailto:hello@example.com" className="flex items-center group">
                <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center mr-3 group-hover:bg-primary/10 transition-standard">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-primary/70">Email</p>
                  <p className="font-medium">hello@example.com</p>
                </div>
              </a>
              
              <a href="tel:+11234567890" className="flex items-center group">
                <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center mr-3 group-hover:bg-primary/10 transition-standard">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-primary/70">Phone</p>
                  <p className="font-medium">+1 (123) 456-7890</p>
                </div>
              </a>
            </div>
            
            <div className="mt-8">
              <p className="text-primary/70 text-sm mb-4">Follow me on social media</p>
              <div className="flex items-center space-x-4">
                <a 
                  href="#" 
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
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-primary/5 lg:col-span-2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary/70 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-standard"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary/70 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-standard"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-primary/70 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-lg border border-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-standard"
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary/70 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border border-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-standard"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground rounded-full px-8 py-3 font-medium transition-standard hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
