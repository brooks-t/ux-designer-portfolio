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
	Zap, // For Angular
	FileCode, // For TypeScript
	Globe, // For HTML & CSS
	BarChart3, // For Chart.js
	GitBranch, // For Git/GitHub
	Terminal, // For CLI tools
	Bot, // For GitHub Copilot
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
					<p>
						<strong>Note:</strong> This project is still a work in progress, and
						additional features are being added daily. Dummy data is currently
						being used for demonstration purposes.
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

					<p className="text-primary/70 mb-8 mt-8">
						<strong>Lightning Demo Video: </strong>Coming soon!
					</p>
					<h2 className="text-2xl font-semibold mb-4">Tools Used</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
						{/* Angular */}
						<div className="bg-primary/5 p-4 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors">
							<div className="flex items-center mb-2">
								<Zap className="w-6 h-6 text-red-500 mr-2" />
								<h3 className="font-semibold text-primary">Angular</h3>
							</div>
							<p className="text-primary/70 text-sm">
								Progressive web framework for building dynamic single-page
								applications
							</p>
						</div>

						{/* TypeScript */}
						<div className="bg-primary/5 p-4 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors">
							<div className="flex items-center mb-2">
								<FileCode className="w-6 h-6 text-blue-600 mr-2" />
								<h3 className="font-semibold text-primary">TypeScript</h3>
							</div>
							<p className="text-primary/70 text-sm">
								Typed superset of JavaScript for better code quality and
								developer experience
							</p>
						</div>

						{/* HTML & SCSS */}
						<div className="bg-primary/5 p-4 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors">
							<div className="flex items-center mb-2">
								<Globe className="w-6 h-6 text-orange-500 mr-2" />
								<h3 className="font-semibold text-primary">HTML & SCSS</h3>
							</div>
							<p className="text-primary/70 text-sm">
								Markup and advanced styling with variables, nesting, and mixins
							</p>
						</div>

						{/* Chart.js */}
						<div className="bg-primary/5 p-4 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors">
							<div className="flex items-center mb-2">
								<BarChart3 className="w-6 h-6 text-green-500 mr-2" />
								<h3 className="font-semibold text-primary">Chart.js</h3>
							</div>
							<p className="text-primary/70 text-sm">
								Flexible charting library for creating interactive data
								visualizations
							</p>
						</div>

						{/* RxJS */}
						<div className="bg-primary/5 p-4 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors">
							<div className="flex items-center mb-2">
								<Zap className="w-6 h-6 text-purple-500 mr-2" />
								<h3 className="font-semibold text-primary">RxJS</h3>
							</div>
							<p className="text-primary/70 text-sm">
								Reactive programming library for handling asynchronous data
								streams
							</p>
						</div>

						{/* Angular CLI */}
						<div className="bg-primary/5 p-4 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors">
							<div className="flex items-center mb-2">
								<Terminal className="w-6 h-6 text-gray-600 mr-2" />
								<h3 className="font-semibold text-primary">Angular CLI</h3>
							</div>
							<p className="text-primary/70 text-sm">
								Command-line interface for Angular development and project
								scaffolding
							</p>
						</div>

						{/* GitHub Copilot */}
						<div className="bg-primary/5 p-4 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors">
							<div className="flex items-center mb-2">
								<Bot className="w-6 h-6 text-blue-500 mr-2" />
								<h3 className="font-semibold text-primary">GitHub Copilot</h3>
							</div>
							<p className="text-primary/70 text-sm">
								AI-powered code completion and assistance for faster development
							</p>
						</div>

						{/* Visual Studio Code */}
						<div className="bg-primary/5 p-4 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors">
							<div className="flex items-center mb-2">
								<Code className="w-6 h-6 text-blue-400 mr-2" />
								<h3 className="font-semibold text-primary">VS Code</h3>
							</div>
							<p className="text-primary/70 text-sm">
								Lightweight but powerful code editor with extensive extension
								support
							</p>
						</div>

						{/* npm */}
						<div className="bg-primary/5 p-4 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors">
							<div className="flex items-center mb-2">
								<GitBranch className="w-6 h-6 text-red-600 mr-2" />
								<h3 className="font-semibold text-primary">npm</h3>
							</div>
							<p className="text-primary/70 text-sm">
								Package manager for installing and managing project dependencies
							</p>
						</div>
					</div>
				</section>
			</div>
		</CaseStudyLayout>
	);
};

export default OnlineServicesDesignGuide;
