import React from "react";
import { FileText } from "lucide-react";

const About = () => {
	return (
		<section id="about" className="section-padding bg-secondary/30">
			<div className="content-container">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="relative">
						<div className="max-w-md mx-auto lg:mx-0">
							<div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
								<img
									src="/assets/brooks-tiffany_profile-pic.webp"
									alt="UX Designer Portrait"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="absolute -bottom-6 right-12 bg-white glass-effect p-4 rounded-xl shadow-sm">
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
							A results-driven{" "}
							<span className="text-gradient">UX Designer,</span> creating
							impactful digital experiences for millions of users.
						</h2>
						<p className="text-primary/70 mb-6">
							With 7+ years of expertise in the government and healthcare
							sectors, my approach is rooted in transforming complex challenges
							into intuitive, accessible solutions. I believe in a process
							centered on deep user empathy, data-driven research, and iterative
							testing to build products that are not just functional, but
							essential.
						</p>
						<p className="text-primary/70 mb-6">
							When I step away from the pixels and prototypes, I’m a passionate
							football fan, cheering on the Washington Commanders and my alma
							mater, the Virginia Tech Hokies. I also stay active and energized
							through a mix of running around Alexandria, riding Peloton, and
							strength training.
						</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
							<div>
								<h3 className="text-lg font-semibold mb-2">Education</h3>
								<p className="text-primary/70">
									<i className="text-gradient font-semibold">
										Master of Science
									</i>
									<br></br>Human-Centered Design
									<br></br>University of Washington
								</p>
								<br></br>
								<p className="text-primary/70">
									<i className="text-gradient font-semibold">Certificate</i>
									<br></br>Full Stack Web Development
									<br></br>University of Washington
								</p>
								<br></br>
								<p className="text-primary/70">
									<i className="text-gradient font-semibold">
										Bachelor of Arts
									</i>
									<br></br>English
									<br></br>Virginia Tech
								</p>
								<br></br>
								<p className="text-primary/70">
									<i className="text-gradient font-semibold">Associates</i>
									<br></br>Applied Science
									<br></br>United States Air Force
								</p>
							</div>
							<div>
								<h3 className="text-lg font-semibold mb-2">Experience</h3>
								<p className="text-primary/70">
									<i className="text-gradient font-semibold">
										UX Designer | IRS
									</i>
									<br></br>Led UX design modernization for critical IRS programs
									like Free File and EIN, enhancing the digital experience for
									millions of taxpayers.
								</p>
								<br></br>
								<p className="text-primary/70">
									<i className="text-gradient font-semibold">
										UX Researcher | Kaiser Permanente
									</i>
									<br></br>Spearheaded end-to-end UX for a mobile health app,
									from initial concept and research to interactive prototype and
									developer handoff.
								</p>
								<br></br>
								<p className="text-primary/70">
									<i className="text-gradient font-semibold">
										Customer Care Manager | Heyo
									</i>
									<br></br>Managed the customer care team, acting as a key
									liaison between users and developers to advocate for product
									improvements.
								</p>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-4">
							<a
								href="#contact"
								className="bg-primary text-primary-foreground rounded-full px-8 py-3 font-medium transition-standard hover:shadow-lg hover:-translate-y-1 inline-flex items-center justify-center"
							>
								Get In Touch
							</a>
							<a
								href="/assets/resume_brooks-tiffany.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-transparent text-primary border border-primary/20 rounded-full px-8 py-3 font-medium transition-standard hover:border-primary/60 hover:-translate-y-1 inline-flex items-center justify-center gap-2"
							>
								<FileText size={18} />
								View Resume
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
