import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ProjectCardProps {
	title: string;
	description: string;
	category: string;
	image: string;
	index: number;
	slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	category,
	image,
	index,
	slug,
}) => {
	return (
		<Link to={`/case-study/${slug}`}>
			<div className="group relative bg-card rounded-2xl overflow-hidden shadow-lg border border-primary/5 transition-standard hover:shadow-xl hover:scale-105">
				<div className="aspect-[16/9] overflow-hidden">
					<img
						src={image}
						alt={title}
						className="w-full h-full object-cover"
						loading="lazy"
					/>
				</div>

				<div className="p-6 lg:p-8">
					<span className="inline-block py-1 px-3 mb-3 text-xs font-medium border border-primary/10 rounded-full bg-primary/5 text-foreground">
						{category}
					</span>
					<h3 className="text-xl lg:text-2xl font-semibold mb-2 text-balance text-foreground">
						{title}
					</h3>
					<p className="text-muted-foreground mb-4 text-balance">
						{description}
					</p>

					<Link
						to={`/case-study/${slug}`}
						className="inline-flex items-center text-primary font-medium transition-standard hover:translate-x-2"
					>
						View Project <ArrowRight className="ml-2 w-4 h-4" />
					</Link>
				</div>
			</div>
		</Link>
	);
};

export default ProjectCard;
