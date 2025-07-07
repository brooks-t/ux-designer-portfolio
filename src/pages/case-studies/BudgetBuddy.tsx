import React from "react";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
	Bookmark,
	Users,
	LineChart,
	Lightbulb,
	Layout,
	CheckCircle,
	Palette,
	Code,
	PenSquare,
	Navigation,
	Component,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const OnlineServicesDesignGuide = () => {
	const { theme } = useTheme();
	const darkMode = theme === "dark";

	return (
		<CaseStudyLayout
			title="Budget Buddy"
			category={[
				"Front-end Development",
				"FinTech",
				"Angular",
				"Data Visualization",
			]}
			heroImage="/assets/budget-buddy.png"
		>
			<div className="space-y-8">
				<section className="space-y-4 text-primary/70">
					<h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
					<p>
						Budget Buddy is a personal project I've been working on to showcase
						my front-end development skills. It's a finance web application
						designed to help users manage their budgets, track expenses, and
						achieve financial goals. The app provides a responsive,
						user-friendly interface for creating and managing budgets, setting
						savings goals, and visualizing spending habits.
					</p>
					<Button asChild>
						<a
							href="https://brooks-tiffany-budget-buddy.netlify.app"
							target="_blank"
							rel="noopener noreferrer"
						>
							View Budget Buddy
						</a>
					</Button>

					<p className="text-primary/70 mb-6 mt-6">
						<strong>Lightning Demo Video: </strong>Coming soon!
					</p>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
						<div className="bg-primary/5 p-4 rounded-lg">
							<p className="font-bold">Tools Used</p>
							<p className="text-primary/70">
								Angular, TypeScript, HTML & SCSS, Chart.js, ng2-charts, RxJS,
								Angular CLI, npm, GitHub Copilot, Visual Studio Code
							</p>
						</div>
					</div>
				</section>
			</div>
		</CaseStudyLayout>
	);
};

export default OnlineServicesDesignGuide;
