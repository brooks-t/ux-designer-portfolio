
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="max-w-md mx-auto lg:mx-0">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/a264fdb3-2dc5-4268-92c3-6bd7e6e2f267.png" 
                  alt="UX Designer Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white glass-effect p-4 rounded-xl shadow-sm">
                <p className="text-2xl font-bold">7+</p>
                <p className="text-sm text-primary/70">Years of Experience</p>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-up">
            <span className="inline-block py-1 px-3 mb-3 text-sm font-medium border border-primary/10 rounded-full bg-primary/5">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
              I'm a <span className="text-gradient">UX Designer</span> with a deep committment to creating intuitive digital experiences
            </h2>
            <p className="text-primary/70 mb-6">
              I believe in design that seamlessly blends aesthetics with functionality. My approach to UX design centers on deep user empathy, thorough research, and iterative testing to create products that are not just visually appealing but truly helpful and enjoyable to use.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Education</h3>
                <p className="text-primary/70">MS, Human-Centered Design<br></br>University of Washington</p>
                <br></br>
                <p className="text-primary/70">Cert, Web Development<br></br>University of Washington</p>
                <br></br>
                <p className="text-primary/70">BA, English<br></br>Virginia Tech</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Experience</h3>
                <p className="text-primary/70">UX Designer, IRS</p>
                <br></br>
                <p className="text-primary/70">UX Researcher, Kaiser Permanente</p>
                <br></br>
                <p className="text-primary/70">Customer Care Manager, Heyo</p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="bg-primary text-primary-foreground rounded-full px-8 py-3 font-medium transition-standard hover:shadow-lg hover:-translate-y-1 inline-block"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
