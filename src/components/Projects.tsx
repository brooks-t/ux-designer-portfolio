import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
	{
		title: "IRS Free File",
		description:
			"Enhancing the user experience to improve confidence and understanding when deciding on tax prep software.",
		category: "UX Design | GovTech | Web App | Case Study",
		image: "/lovable-uploads/free-file-default.png",
		slug: "free-file",
	},
	{
		title: "Employer Identification Number",
		description:
			"Modernizing a legacy web application to better serve employers applying for an EIN.",
		category: "UX Design | GovTech | Web App | Prototype",
		image: "/lovable-uploads/mod-ein-default.png",
		slug: "employer-identification-number",
	},
	{
		title: "Online Services Design Guide ",
		description:
			"The IRS Online Services Design Guide complete with UI Kit, templates, styles and specs.",
		category: "UX Design | GovTech | Design System | UI Kit",
		image: "/lovable-uploads/ols-design-guide.png",
		slug: "online-services-design-guide",
	},
	{
		title: "Kaiser Permanente Gems App",
		description:
			"Designed to help ambivalent smokers quit and make a significant impact on global public health.",
		category: "UX Research & Design | HealthTech | Mobile App | Case Study",
		image: "/lovable-uploads/gems-new-1.png",
		slug: "smoking-cessation",
	},
];

const Projects = () => {
	return (
		<section id="projects" className="section-padding">
			<div className="content-container">
				<div className="text-center max-w-xl mx-auto mb-16">
					<span className="inline-block py-1 px-3 mb-3 text-sm font-medium border border-primary/10 rounded-full bg-primary/5">
						Projects
					</span>
					<h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
						Recent <span className="text-gradient">Projects</span>
					</h2>
					<p className="text-primary/70">
						A showcase of my recent design work and case studies.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
					{projectsData.map((project, index) => (
						<ProjectCard
							key={index}
							title={project.title}
							description={project.description}
							category={project.category}
							image={project.image}
							index={index}
							slug={project.slug}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
