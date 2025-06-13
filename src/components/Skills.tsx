import React from "react";
import {
	Monitor,
	PenTool,
	Users,
	Layers,
	Search,
	Code,
	Layout,
} from "lucide-react";

const skillsData = [
	{
		title: "UI Design",
		description:
			"Creating visually appealing and accessible interfaces with WCAG and Section 508 compliance. Proficient in building scalable design systems.",
		icon: <Monitor className="w-8 h-8" />,
	},
	{
		title: "UX Research",
		description:
			"Understanding user needs through comprehensive research, including heuristic analysis, usability testing, interviews and focus groups.",
		icon: <Search className="w-8 h-8" />,
	},
	{
		title: "Wireframing & Prototyping",
		description:
			"Building low-to-high fidelity mockups and interactive models to establish information architecture, layout, userflows and interaction design.",
		icon: <Layout className="w-8 h-8" />,
	},
	{
		title: "Design Software",
		description:
			"Proficient in a range of design tools to include Figma, FigJam, Sketch, Adobe XD, Illustrator, Photoshop, InDesign, Premiere Pro and InVision. ",
		icon: <PenTool className="w-8 h-8" />,
	},
	{
		title: "AI & Project Tools",
		description:
			"Experienced with the latest AI and project collaboration tools to include ChatGPT, Gemini, NotebookLM, AI Coders, Jira, Trello, Sharepoint, Teams and Slack.",
		icon: <Layers className="w-8 h-8" />,
	},
	{
		title: "Front-End Web Development",
		description:
			"Working knowledge of HTML, CSS, JavaScript, React, Tailwind, Bootstrap, Command Line, Git, GitHub and VS Code to collaborate effectively with developers.",
		icon: <Code className="w-8 h-8" />,
	},
];

const Skills = () => {
	return (
		<section id="skills" className="section-padding bg-secondary/30">
			<div className="content-container">
				<div className="text-center max-w-xl mx-auto mb-16">
					<span className="inline-block py-1 px-3 mb-3 text-sm font-medium border border-primary/10 rounded-full bg-primary/5">
						Skills
					</span>
					<h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
						My Core <span className="text-gradient">Competencies</span>
					</h2>
					<p className="text-muted-foreground">
						A results-driven approach to creating impactful, user-centric
						digital experiences by combining deep user research with a passion
						for accessible, intuitive design.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{skillsData.map((skill, index) => (
						<div
							key={index}
							className="bg-card text-card-foreground rounded-2xl p-8 shadow-sm border border-primary/5"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="mb-4 text-primary">{skill.icon}</div>
							<h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
							<p className="text-muted-foreground">{skill.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
