import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
	{
		title: "IRS Design Guide Migration ",
		description:
			"Leading the migration and build of a comprehensive design system in Figma to unify and accelerate design across the IRS.",
		category: ["UX Design", "GovTech", "Design System", "Figma"],
		image: "/assets/odg-hero.webp",
		slug: "online-services-design-guide",
	},
	{
		title: "IRS EIN Modernization",
		description:
			"Modernizing the Employer Identification Number application to provide an accessible and streamlinedprocess for employers.",
		category: ["UX Design", "GovTech", "Accessibility", "Redesign"],
		image: "/assets/mod-ein-hero.webp",
		slug: "employer-identification-number",
	},
	{
		title: "Budget Buddy",
		description:
			"Developing a dynamic FinTech dashboard with Angular to provide users with clear data visualization and powerful budgeting tools.",
		category: ["Front-end Development", "FinTech", "Angular", "Data Viz"],
		image: "/assets/budget-buddy.png",
		slug: "budget-buddy",
	},
	{
		title: "Kaiser Permanente Gems App",
		description:
			"Spearheading the UX research and design of a mobile app that uses behavioral experiments to motivate ambivalent smokers to quit.",
		category: ["UX Research", "UX Design", "HealthTech", "Mobile App"],
		image: "/assets/gems-hero.webp",
		slug: "smoking-cessation",
	},
	{
		title: "IRS Free File Enhancement",
		description:
			"Redesigning the Free File user experience to improve clarity, simplify the selection process, and empower taxpayers to file for free with confidence.",
		category: ["UX Design", "GovTech", "Web App", "Redesign"],
		image: "/assets/free-file-hero.webp",
		slug: "free-file",
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
