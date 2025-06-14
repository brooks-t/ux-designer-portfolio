import React from "react";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import {
	Bookmark,
	Users,
	LineChart,
	Lightbulb,
	Layout,
	CheckCircle,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const FreeFile = () => {
	const { theme } = useTheme();
	const darkMode = theme === "dark";

	return (
		<CaseStudyLayout
			title="IRS Free File Modernization"
			category={["UX Design", "GovTech", "Web App", "Case Study"]}
			heroImage="/lovable-uploads/free-file-default.png"
		>
			<div className="space-y-12">
				<section>
					<h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
					<p className="text-primary/70 mb-4">
						The IRS Free File program offers free tax preparation and filing
						services to millions of eligible taxpayers through partnerships with
						third-party companies. However, the existing application for finding
						a provider was confusing and outdated, leading to user frustration
						and a lack of confidence in selecting the right software. This
						project focused on a complete redesign of the Free File user
						experience to improve clarity, simplify the selection process, and
						ultimately empower taxpayers to file their taxes for free with
						confidence.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
						<div className="bg-primary/5 p-4 rounded-lg">
							<p className="font-medium">My Role</p>
							<p className="text-primary/70">Lead UX Designer</p>
						</div>
						<div className="bg-primary/5 p-4 rounded-lg">
							<p className="font-medium">Key Responsibilities</p>
							<p className="text-primary/70">
								UI/UX Design, Prototyping, Usability Testing Support
							</p>
						</div>
						<div className="bg-primary/5 p-4 rounded-lg">
							<p className="font-medium">Tools Used</p>
							<p className="text-primary/70">Figma, Sketch, InVision</p>
						</div>
					</div>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
					<p className="text-primary/70 mb-4">
						The primary challenge was to transform a complex and often
						intimidating process into a simple, trustworthy, and user-friendly
						experience. Based on heuristic evaluations and initial user
						feedback, we identified several key pain points:
					</p>
					<ul className="space-y-3">
						<li className="flex items-start">
							<span className="bg-red-100 p-1 rounded mr-3 mt-1">
								<Users className="w-4 h-4 text-red-500" />
							</span>
							<div>
								<p className="font-medium">
									Confusing Terminology and Navigation
								</p>
								<p className="text-primary/70">
									Users were confused by inconsistent language (e.g., "provider"
									vs. "offer") and unclear navigation, often mistaking the tool
									for a direct IRS filing service.
								</p>
							</div>
						</li>
						<li className="flex items-start">
							<span className="bg-red-100 p-1 rounded mr-3 mt-1">
								<Bookmark className="w-4 h-4 text-red-500" />
							</span>
							<div>
								<p className="font-medium">
									Information Gaps and Lack of Trust
								</p>
								<p className="text-primary/70">
									The application lacked sufficient information about the
									partner companies, forcing users to do their own research and
									diminishing their confidence in making a selection.
								</p>
							</div>
						</li>
						<li className="flex items-start">
							<span className="bg-red-100 p-1 rounded mr-3 mt-1">
								<LineChart className="w-4 h-4 text-red-500" />
							</span>
							<div>
								<p className="font-medium">
									Overwhelming and Complex Processes
								</p>
								<p className="text-primary/70">
									The "Browse vs. Find" choice on the landing page created
									unnecessary complexity, and the Adjusted Gross Income (AGI)
									estimation tool felt like filing taxes all over again.
								</p>
							</div>
						</li>
					</ul>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">Research & Discovery</h2>
					<p className="text-primary/70 mb-6">
						To ground our design decisions in real user needs, we employed a
						mixed-methods research approach. Although my primary role was Lead
						UX Designer, I actively participated in the research process,
						helping to shape the usability tests and synthesize findings. Our
						methods included:
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
						<div className="border border-primary/10 rounded-lg p-5">
							<h3 className="font-medium mb-2">Heuristic Evaluation</h3>
							<p className="text-primary/70">
								Conducted expert reviews of the existing application to identify
								usability flaws and areas for improvement.
							</p>
						</div>
						<div className="border border-primary/10 rounded-lg p-5">
							<h3 className="font-medium mb-2">
								Comparative Usability Testing
							</h3>
							<p className="text-primary/70">
								Tested a new prototype against the existing application with
								real taxpayers to compare performance and satisfaction.
							</p>
						</div>
						<div className="border border-primary/10 rounded-lg p-5">
							<h3 className="font-medium mb-2">User Interviews</h3>
							<p className="text-primary/70">
								Held one-on-one sessions to dive deep into taxpayers'
								experiences, mental models, and pain points with filing taxes
								online.
							</p>
						</div>
						<div className="border border-primary/10 rounded-lg p-5">
							<h3 className="font-medium mb-2">Stakeholder Workshops</h3>
							<p className="text-primary/70">
								Collaborated with internal IRS teams and business stakeholders
								to align on project goals, constraints, and success metrics.
							</p>
						</div>
					</div>
					<div
						className={`${darkMode ? "bg-amber-900" : "bg-amber-50"} border ${
							darkMode ? "border-amber-800" : "border-amber-100"
						} rounded-lg p-5`}
					>
						<h3 className="font-medium flex items-center mb-2">
							<Lightbulb
								className={`w-5 h-5 ${
									darkMode ? "text-amber-400" : "text-amber-500"
								} mr-2`}
							/>{" "}
							Key Insights
						</h3>
						<ul
							className={`space-y-2 ${
								darkMode ? "text-amber-100" : "text-primary/70"
							} list-disc pl-5`}
						>
							<li>
								<strong>Clarity is Key:</strong> Users need plain, consistent
								language to understand that Free File is a search tool for
								third-party software, not a direct filing service.
							</li>
							<li>
								<strong>Confidence is Built on Information:</strong> To make an
								informed decision, users require more than just basic
								eligibility criteria; they look for social proof, user reviews,
								and transparent pricing for state filing.
							</li>
							<li>
								<strong>Simplicity Reduces Overwhelm:</strong> A guided, linear
								path is preferable to presenting users with too many choices
								upfront. The distinction between "Browse" and "Find" was a
								significant point of confusion.
							</li>
							<li>
								<strong>Estimation, Not Calculation:</strong> The AGI calculator
								was a major hurdle. Users wanted a simplified estimation
								process, not a complex form that mirrored the work of filing
								itself.
							</li>
						</ul>
					</div>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">Design Solutions</h2>
					<p className="text-primary/70 mb-6">
						Guided by our research insights, I led the design of a modernized,
						user-centric Free File application. The solutions were directly tied
						to our key hypotheses.
					</p>
					<div className="space-y-10">
						<div>
							<h3 className="font-medium flex items-center mb-3">
								<Layout className="w-5 h-5 text-primary mr-2" /> Hypothesis:
								Simplify the Path
							</h3>
							<p className="text-primary/70 mb-4">
								We believed that removing unhelpful decision steps would reduce
								user frustration. We addressed this by eliminating the confusing
								"Browse vs. Find" page and creating a single, clear path for all
								users.
							</p>
							<Dialog>
								<DialogTrigger asChild>
									<div className="aspect-[16/9] bg-slate-100 rounded-lg shadow-lg overflow-hidden cursor-pointer border">
										<img
											src="/lovable-uploads/free-file-single.png"
											alt="Redesigned Free File main page with a single call to action"
											className="w-full h-full object-cover"
										/>
									</div>
								</DialogTrigger>
								<DialogContent className="max-w-6xl p-2">
									<img
										src="/lovable-uploads/free-file-single.png"
										alt="Redesigned Free File main page with a single call to action"
										className="w-full h-full object-cover"
									/>
								</DialogContent>
							</Dialog>
						</div>

						<div>
							<h3 className="font-medium flex items-center mb-3">
								<Layout className="w-5 h-5 text-primary mr-2" /> Hypothesis:
								Build Confidence Through Information
							</h3>
							<p className="text-primary/70 mb-4">
								We hypothesized that providing more information about partners
								would help users make a confident choice. The new design
								features enhanced partner cards with clearer eligibility
								information and makes space for future additions like user
								ratings and state filing costs.
							</p>
							<Dialog>
								<DialogTrigger asChild>
									<div className="aspect-[16/9] bg-slate-100 rounded-lg shadow-lg overflow-hidden cursor-pointer border">
										<img
											src="/lovable-uploads/free-file-browse.png"
											alt="Enhanced partner information cards"
											className="w-full h-full object-cover"
										/>
									</div>
								</DialogTrigger>
								<DialogContent className="max-w-6xl p-2">
									<img
										src="/lovable-uploads/free-file-browse.png"
										alt="Enhanced partner information cards"
										className="w-full h-full object-cover"
									/>
								</DialogContent>
							</Dialog>
						</div>

						<div>
							<h3 className="font-medium flex items-center mb-3">
								<Layout className="w-5 h-5 text-primary mr-2" /> Hypothesis:
								Streamline Filtering
							</h3>
							<p className="text-primary/70 mb-4">
								We believed that a simpler AGI estimation and filtering process
								would help taxpayers find a partner faster. The wizard was
								replaced with a more intuitive, grouped filtering interaction
								that reduces cognitive load.
							</p>
							<Dialog>
								<DialogTrigger asChild>
									<div className="aspect-[16/9] bg-slate-100 rounded-lg shadow-lg overflow-hidden cursor-pointer border">
										<img
											src="/lovable-uploads/free-file-AGI.png"
											alt="Simplified filtering and results page"
											className="w-full h-full object-cover"
										/>
									</div>
								</DialogTrigger>
								<DialogContent className="max-w-6xl p-2">
									<img
										src="/lovable-uploads/free-file-AGI.png"
										alt="Simplified filtering and results page"
										className="w-full h-full object-cover"
									/>
								</DialogContent>
							</Dialog>
						</div>
					</div>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">Results & Impact</h2>
					<p className="text-primary/70 mb-6">
						The redesigned Free File application has launched, and we are
						actively gathering data on its performance. The initial feedback
						from usability testing has been overwhelmingly positive, validating
						our design decisions and demonstrating a significant improvement in
						the user experience.
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
									<p className="font-semibold text-xl mb-1">Improved Clarity</p>
									<p
										className={darkMode ? "text-green-100" : "text-primary/70"}
									>
										Users demonstrated a much clearer understanding of the
										tool's purpose.
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
									<p className="font-semibold text-xl mb-1">
										Reduced Confusion
									</p>
									<p
										className={darkMode ? "text-green-100" : "text-primary/70"}
									>
										The simplified navigation and grouped results made the
										selection process feel less overwhelming.
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
									<p className="font-semibold text-xl mb-1">
										Increased Confidence
									</p>
									<p
										className={darkMode ? "text-green-100" : "text-primary/70"}
									>
										Participants felt more equipped to choose a provider, with
										one stating, "I like the separation of free federal only
										from the ones that offer free state."
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center mt-8">
						<Button disabled>Interactive Prototype Coming Soon</Button>
					</div>
				</section>
			</div>
		</CaseStudyLayout>
	);
};

export default FreeFile;
