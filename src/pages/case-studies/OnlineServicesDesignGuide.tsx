import React from "react";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import {
	Bookmark,
	Users,
	LineChart,
	Lightbulb,
	Layout,
	CheckCircle,
	Palette,
	Code,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const OnlineServicesDesignGuide = () => {
	const { theme } = useTheme();
	const darkMode = theme === "dark";

	return (
		<CaseStudyLayout
			title="IRS Online Services Design Guide"
			category="UX Design | GovTech | Design System | UI Kit"
			heroImage="/lovable-uploads/odg-ui-kit.png"
		>
			<div className="space-y-8">
				<section>
					<h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
					<p className="text-primary/70 mb-4">
						When our team found out that we needed to switch from Sketch &
						Invision to Figma under a tight deadline, I volunteered to spearhead
						the migration.
						<br></br>
						<br></br>
						To no surprise, I found out that even though Figma offers a feature
						to import Sketch files, those files did not translate well and were
						not truly compatible. As a result, the entire design guide needed to
						built from scratch to leverage the full power of Figma.
						<br></br>
						<br></br>
						Leading the charge, I quickly built the majority of the design
						guide, incorporating key Figma feature improvements such as
						autolayout and variants to ensure our UX team had a minimum viable
						product to work with and avoid any work stoppages. Since then,
						several other designers have contributed to and improved upon the
						initial version that I created.
						<br></br>
						<br></br>
						<a
							href="https://www.figma.com/design/9sdxBVuSNWvTbR6D80PgqU/Hi-Fi-IRS-ODG-UI-Kit-4.3.1?node-id=46-646&t=tYiL1ke2pHHZbyDk-1"
							className="text-primary hover:opacity-80 underline font-medium"
						>
							Here's a view-only link to the Design Guide (password protected).
						</a>
						<br></br>
						Please contact me for the password if you would like to review the
						work and are interested in hiring me 😎
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
						<div className="bg-primary/5 p-4 rounded-lg">
							<p className="font-medium">My Role</p>
							<p className="text-primary/70">Lead Designer</p>
						</div>
						<div className="bg-primary/5 p-4 rounded-lg">
							<p className="font-medium">Key Responsibilities</p>
							<p className="text-primary/70">
								Design System Migration, Improvement & Adoption
							</p>
						</div>
						<div className="bg-primary/5 p-4 rounded-lg">
							<p className="font-medium">Tools Used</p>
							<p className="text-primary/70">Figma, Sketch, InVision</p>
						</div>
					</div>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">
						Design System Components
					</h2>
					<div className="space-y-6">
						<div>
							<h3 className="font-medium flex items-center mb-3">
								<Palette className="w-5 h-5 text-primary mr-2" /> Foundation
								Elements
							</h3>
							<p className="text-primary/70 mb-4">
								The IRS Online Services Design Guide is a comprehensive design
								system that provides guidelines, components, typography, color
								palettes, specs, and templates for creating consistent and
								accessible digital experiences across all of IRS online
								services.
							</p>
							<div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden">
								<img
									src="/lovable-uploads/odg-ui-kit.png"
									alt="Design system foundation elements"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>

						<div>
							<h3 className="font-medium flex items-center mb-3">
								<Layout className="w-5 h-5 text-primary mr-2" /> Component
								Library
							</h3>
							<p className="text-primary/70 mb-4">
								Developed a comprehensive library of reusable UI components
								including forms, navigation, buttons, cards, and data
								visualization elements.
							</p>
						</div>

						<div>
							<h3 className="font-medium flex items-center mb-3">
								<Code className="w-5 h-5 text-primary mr-2" /> Templates &
								Patterns
							</h3>
							<p className="text-primary/70 mb-4">
								Created page templates and interaction patterns for common use
								cases across IRS digital services, allowing designers to quickly
								get projects off the ground and ideate.
							</p>
						</div>
					</div>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">Results & Impact</h2>
					<p className="text-primary/70 mb-6">
						The Online Services Design Guide is the foundation for all IRS
						digital experiences along with USWDS and its quick migration
						delivered significant value:
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
						<div
							className={`${
								darkMode ? "bg-green-900" : "bg-green-50"
							} p-5 rounded-lg`}
						>
							<div className="flex items-start">
								<CheckCircle
									className={`w-6 h-6 ${
										darkMode ? "text-green-400" : "text-green-500"
									} mr-2`}
								/>
								<div>
									<p className="font-semibold text-2xl mb-1">
										Unified experience
									</p>
									<p
										className={darkMode ? "text-green-100" : "text-primary/70"}
									>
										Consistent design across all platforms with USWDS
										compatibility
									</p>
								</div>
							</div>
						</div>
						<div
							className={`${
								darkMode ? "bg-green-900" : "bg-green-50"
							} p-5 rounded-lg`}
						>
							<div className="flex items-start">
								<CheckCircle
									className={`w-6 h-6 ${
										darkMode ? "text-green-400" : "text-green-500"
									} mr-2`}
								/>
								<div>
									<p className="font-semibold text-2xl mb-1">
										Seamless transition
									</p>
									<p
										className={darkMode ? "text-green-100" : "text-primary/70"}
									>
										Quick migration prevented work stoppages across the entire
										UX team
									</p>
								</div>
							</div>
						</div>
						<div
							className={`${
								darkMode ? "bg-green-900" : "bg-green-50"
							} p-5 rounded-lg`}
						>
							<div className="flex items-start">
								<CheckCircle
									className={`w-6 h-6 ${
										darkMode ? "text-green-400" : "text-green-500"
									} mr-2`}
								/>
								<div>
									<p className="font-semibold text-2xl mb-1">
										Accessibility compliance
									</p>
									<p
										className={darkMode ? "text-green-100" : "text-primary/70"}
									>
										100% WCAG 2.1 AA and Section 508 compliance
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="border-t border-primary/10 pt-6">
						<blockquote className="italic text-primary/80 pl-4 border-l-2 border-primary/20">
							"Last year we had to make a sudden and surprise move from a Sketch
							/ InVision software combo to Figma with a staff that was mostly
							unfamiliar with the new software. Brooks immediately volunteered
							to help however he could in the transition. On a rushed timeline,
							he converted our design standard into a new Figma based design
							system, transferred over projects from our portfolio, hosted a
							weekly office hours where others could bring their problems to
							him, and taught himself whatever he didn’t know to put him in a
							place to help others. The management team was so impressed, it led
							to him being nominated for a Special Act Award in his first year."
							<footer className="mt-2 font-medium text-primary not-italic">
								— Patrick Prugh, UX Design Team Supervisor @ IRS
							</footer>
						</blockquote>
					</div>
				</section>
			</div>
		</CaseStudyLayout>
	);
};

export default OnlineServicesDesignGuide;
