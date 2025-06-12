import React, { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { useBubbleCursor } from "@/hooks/useBubbleCursor";

const Hero = () => {
	const heroRef = useRef<HTMLDivElement>(null);
	useBubbleCursor(heroRef);

	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
			ref={heroRef}
		>
			<div className="absolute inset-0 -z-10">
				<div className="absolute left-1/3 top-1/4 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
				<div className="absolute right-1/4 bottom-1/3 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
			</div>

			<div className="content-container flex flex-col justify-between relative py-8 md:py-12">
				<div className="flex flex-col items-center text-center animate-fade-up">
					<h2 className="text-2xl md:text-3xl font-display tracking-tight mb-12">
						Hi, I'm <span className="text-gradient">Brooks.</span>
					</h2>

					<h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight max-w-4xl mb-6 text-balance">
						I build impactful,
						<br></br>
						<span className="text-gradient">user-centric experiences</span>
						<br></br>
						for millions of people
					</h1>

					<p className="text-lg md:text-xl text-primary/70 max-w-2xl mb-12 text-balance">
						As a UX Designer with 7+ years of expertise in the government and
						healthcare sectors, I specialize in transforming complex systems
						into intuitive, accessible, and user-centric products. I leverage a
						blend of deep user research, systems thinking, and AI-driven
						strategies to deliver solutions that meet both user needs and
						business goals.
					</p>

					<div className="flex flex-col sm:flex-row gap-4">
						<a
							href="#projects"
							className="bg-primary text-primary-foreground rounded-full px-8 py-3 font-medium transition-standard hover:shadow-lg hover:-translate-y-1"
						>
							View Portfolio
						</a>
						<a
							href="#contact"
							className="bg-transparent text-primary border border-primary/20 rounded-full px-8 py-3 font-medium transition-standard hover:border-primary/60 hover:-translate-y-1"
						>
							Contact Me
						</a>
					</div>
				</div>

				{/* Scroll down indicator with improved positioning */}
				<div className="scroll-down-container">
					<a
						href="#projects"
						className="flex flex-col items-center animate-fade-in"
						style={{ animationDelay: "1s" }}
					>
						<span className="text-sm text-primary/60 mb-2">Scroll Down</span>
						<ArrowDown className="animate-bounce text-primary/60" size={20} />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
