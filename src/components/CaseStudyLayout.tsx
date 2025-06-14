import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useTheme } from "./ThemeProvider";

interface CaseStudyLayoutProps {
	title: string;
	category: string[];
	heroImage: string;
	children: React.ReactNode;
}

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
	title,
	category,
	heroImage,
	children,
}) => {
	// Use the scroll hook
	useScrollToTop();
	const { theme } = useTheme();

	return (
		<div className="min-h-screen">
			<Navbar />

			<main className="pt-24 pb-16">
				{/* Hero Section */}
				<div className="w-full h-[50vh] relative">
					<img
						src={heroImage}
						alt={title}
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90"></div>
				</div>

				<div className="content-container">
					<div className="max-w-3xl mx-auto -mt-20 bg-card text-card-foreground rounded-2xl p-8 shadow-sm border border-primary/5 relative">
						<div className="flex flex-col space-y-4">
							<Link
								to="/#projects"
								className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-primary transition-standard w-fit"
							>
								<ArrowLeft className="mr-2 w-4 h-4" /> Back to Projects
							</Link>

							<div className="flex flex-wrap gap-2">
								{category.map((tag) => (
									<span
										key={tag}
										className="inline-block py-1 px-3 text-xs font-medium border border-primary/10 rounded-full bg-primary/5 text-foreground"
									>
										{tag}
									</span>
								))}
							</div>
						</div>

						<h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight mt-4 mb-6 text-foreground">
							{title}
						</h1>

						{children}
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default CaseStudyLayout;
