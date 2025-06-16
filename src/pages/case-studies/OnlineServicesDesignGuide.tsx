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
			title="IRS Online Services Design Guide"
			category={["UX Design", "GovTech", "Design System", "UI Kit"]}
			heroImage="/lovable-uploads/ols-design-guide.png"
		>
			<div className="space-y-8">
				<section className="space-y-4 text-primary/70">
					<h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
					<p>
						The IRS Online Services Design Guide is a comprehensive design
						system that provides guidelines, components, typography, color
						palettes, specs, and templates for creating consistent and
						accessible digital experiences across all of IRS online services.
					</p>
					<p>
						<a
							href="https://www.figma.com/design/9sdxBVuSNWvTbR6D80PgqU/Hi-Fi-IRS-ODG-UI-Kit-4.3.1?node-id=46-646&t=tYiL1ke2pHHZbyDk-1"
							className="text-blue-600 hover:text-blue-800 underline font-bold"
						>
							View the IRS Design Guide File (password protected).
						</a>
					</p>
					<p>Note: Password will be provided to interested employers.</p>

					<h2 className="text-2xl font-semibold mb-4">My Contributions</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
						<div className="bg-primary/5 p-4 rounded-lg">
							<p className="font-bold">My Role</p>
							<p className="text-primary/70">
								Migration Lead Designer, Figma Champion
							</p>
						</div>
						<div className="bg-primary/5 p-4 rounded-lg">
							<p className="font-bold">Key Responsibilities</p>
							<p className="text-primary/70">
								Design System Migration, Improvement & Adoption
							</p>
						</div>
						<div className="bg-primary/5 p-4 rounded-lg">
							<p className="font-bold">Tools Used</p>
							<p className="text-primary/70">Figma, Sketch, InVision</p>
						</div>
					</div>
					<p>
						When our team found out that we needed to switch from Sketch &
						Invision to Figma under a tight deadline, I volunteered to spearhead
						the migration.
					</p>
					<p>
						To no surprise, I found out that even though Figma offers a feature
						to import Sketch files, those files did not translate well and were
						not truly compatible. As a result, the entire design guide needed to
						be built from scratch to leverage the full power of Figma.
					</p>
					<p>
						Leading the charge, I quickly built the majority of the design
						guide, incorporating key Figma feature improvements such as
						autolayout and variants to ensure our UX team had a minimum viable
						product to work with and avoid any work stoppages. Since then,
						several other designers have contributed to and improved upon the
						initial version that I created.
					</p>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">
						A Closer Look at the Design System
					</h2>
					<p className="text-primary/70 mb-6">
						The design guide is more than a UI kit; it's a comprehensive
						resource for creating cohesive, accessible, and user-friendly
						digital products for the IRS. Here’s a breakdown of its core
						elements.
					</p>
					<div className="space-y-10">
						{/* Foundation: Colors & Typography */}
						<div>
							<h3 className="font-medium flex items-center mb-3">
								<Palette className="w-5 h-5 text-primary mr-2" /> Foundation:
								Colors & Typography
							</h3>
							<p className="text-primary/70 mb-4">
								A solid foundation is key to brand consistency. The design guide
								establishes a clear color palette, including theme and alert
								colors, and a typographic scale for headings and body text to
								ensure a unified look and feel across all applications.
							</p>
							<Dialog>
								<DialogTrigger asChild>
									<div className="aspect-[16/9] bg-slate-100 rounded-lg shadow-lg overflow-hidden cursor-pointer border">
										<img
											src="/lovable-uploads/odg-styles.png"
											alt="Color palette and typography from the design system"
											className="w-full h-full object-cover"
										/>
									</div>
								</DialogTrigger>
								<DialogContent className="max-w-6xl p-2">
									<img
										src="/lovable-uploads/odg-styles.png"
										alt="Color palette and typography from the design system"
										className="w-full h-auto rounded-lg"
									/>
								</DialogContent>
							</Dialog>
						</div>

						{/* Components: Forms & Inputs */}
						<div>
							<h3 className="font-medium flex items-center mb-3">
								<PenSquare className="w-5 h-5 text-primary mr-2" /> Components:
								Forms & Inputs
							</h3>
							<p className="text-primary/70 mb-4">
								Forms are a critical part of the user experience. The design
								system includes detailed specifications for various form
								elements like text fields , calendar pickers, and more, with
								defined states for default, error, and focus conditions.
							</p>
							<Dialog>
								<DialogTrigger asChild>
									<div className="aspect-[16/9] bg-slate-100 rounded-lg shadow-lg overflow-hidden cursor-pointer border">
										<img
											src="/lovable-uploads/odg-forms.png"
											alt="Form components from the design system"
											className="w-full h-full object-cover"
										/>
									</div>
								</DialogTrigger>
								<DialogContent className="max-w-6xl p-2">
									<img
										src="/lovable-uploads/odg-forms.png"
										alt="Form components from the design system"
										className="w-full h-auto rounded-lg"
									/>
								</DialogContent>
							</Dialog>
						</div>

						{/* Components: Buttons & Indicators */}
						<div>
							<h3 className="font-medium flex items-center mb-3">
								<Component className="w-5 h-5 text-primary mr-2" /> Components:
								Buttons & Indicators
							</h3>
							<p className="text-primary/70 mb-4">
								The guide features a wide range of interactive components.
								Buttons have variants for different use cases, such as filled
								and outlined, and include specifications for states like hover,
								active, and disabled. Step indicators provide clear guidance
								through multi-step processes for both desktop and mobile views.
							</p>
							<Dialog>
								<DialogTrigger asChild>
									<div className="aspect-[16/9] bg-slate-100 rounded-lg shadow-lg overflow-hidden cursor-pointer border">
										<img
											src="/lovable-uploads/odg-components.png"
											alt="Button and step indicator components"
											className="w-full h-full object-cover"
										/>
									</div>
								</DialogTrigger>
								<DialogContent className="max-w-6xl p-2">
									<img
										src="/lovable-uploads/odg-components.png"
										alt="Button and step indicator components"
										className="w-full h-auto rounded-lg"
									/>
								</DialogContent>
							</Dialog>
						</div>

						{/* Structure: Navigation */}
						<div>
							<h3 className="font-medium flex items-center mb-3">
								<Navigation className="w-5 h-5 text-primary mr-2" /> Structure:
								Navigation
							</h3>
							<p className="text-primary/70 mb-4">
								To ensure a consistent user journey, the design system defines
								global navigation elements. This includes the unauthenticated
								header for public-facing pages and detailed side navigation
								menus with specs for different levels and states (active,
								hover).
							</p>
							<Dialog>
								<DialogTrigger asChild>
									<div className="aspect-[16/9] bg-slate-100 rounded-lg shadow-lg overflow-hidden cursor-pointer border">
										<img
											src="/lovable-uploads/odg-navigation.png"
											alt="Navigation components from the design system"
											className="w-full h-full object-cover"
										/>
									</div>
								</DialogTrigger>
								<DialogContent className="max-w-6xl p-2">
									<img
										src="/lovable-uploads/odg-navigation.png"
										alt="Navigation components from the design system"
										className="w-full h-auto rounded-lg"
									/>
								</DialogContent>
							</Dialog>
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
										Ensured consistent design across all platforms with USWDS
										compatibility.
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
						<div className="mt-2 rounded-lg border bg-primary/5 p-6">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="h-8 w-8 text-primary/20 mb-4"
							>
								<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 7 4 8 7 8Z" />
								<path d="M14 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 7 4 8 7 8Z" />
							</svg>
							<blockquote className="italic text-primary/80 text-base">
								"Last year we had to make a sudden and surprise move from a
								Sketch / InVision software combo to Figma with a staff that was
								mostly unfamiliar with the new software. Brooks immediately
								volunteered to help however he could in the transition. On a
								rushed timeline, he converted our design standard into a new
								Figma based design system, transferred over projects from our
								portfolio, hosted a weekly office hours where others could bring
								their problems to him, and taught himself whatever he didn’t
								know to put him in a place to help others. The management team
								was so impressed, it led to him being nominated for a Special
								Act Award in his first year."
								<footer className="mt-4 font-medium text-primary not-italic">
									— Patrick Prugh, UX Design Team Supervisor @ IRS
								</footer>
							</blockquote>
						</div>
						<div className="flex justify-center mt-8">
							<Button asChild>
								<a
									href="https://www.figma.com/design/9sdxBVuSNWvTbR6D80PgqU/Hi-Fi-IRS-ODG-UI-Kit-4.3.1?node-id=46-646&t=tYiL1ke2pHHZbyDk-1"
									target="_blank"
									rel="noopener noreferrer"
								>
									View Design Guide in Figma
								</a>
							</Button>
						</div>
						<div className="mt-12 flex justify-start">
							<Link
								to="/#projects"
								className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-primary transition-standard w-fit"
							>
								<ArrowLeft className="mr-2 w-4 h-4" /> Back to Projects
							</Link>
						</div>
					</div>
				</section>
			</div>
		</CaseStudyLayout>
	);
};

export default OnlineServicesDesignGuide;
