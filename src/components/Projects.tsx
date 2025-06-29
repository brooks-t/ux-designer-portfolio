import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
	{
		title: "IRS Design Guide ",
		description:
			"Leading the migration and build of a comprehensive design system in Figma to unify and accelerate design across the IRS.",
		category: ["UX Design", "GovTech", "Design System"],
		image: "/assets/odg-hero.webp",
		slug: "online-services-design-guide",
	},
	{
		title: "IRS Employer Identification Number",
		description:
			"Redesigning a critical legacy system to provide a modern, accessible, and streamlined EIN application process for employers.",
		category: ["UX Design", "GovTech", "Web App"],
		image: "/assets/mod-ein-hero.webp",
		slug: "employer-identification-number",
	},
	{
		title: "IRS Free File",
		description:
			"Simplifying the path to free tax software for millions of taxpayers to improve clarity and confidence in selecting the right product.",
		category: ["UX Design", "GovTech", "Web App"],
		image: "/assets/free-file-hero.webp",
		slug: "free-file",
	},
	{
		title: "Kaiser Permanente Gems App",
		description:
			"Spearheading the UX research and design of a mobile app that uses behavioral experiments to motivate ambivalent smokers to quit.",
		category: ["UX Research", "HealthTech", "Mobile App"],
		image: "/assets/gems-hero.webp",
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
						Featured <span className="text-gradient">Projects</span>
					</h2>
					<p className="text-primary/70">
						A selection of projects where I've crafted user-centric solutions
						for complex challenges in government and healthcare.
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
