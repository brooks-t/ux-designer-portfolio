import React from "react";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Bookmark,
	Users,
	LineChart,
	Lightbulb,
	Layout,
	CheckCircle,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const EmployerIdentificationNumber = () => {
	const { theme } = useTheme();
	const darkMode = theme === "dark";

	return (
		<CaseStudyLayout
			title="Employer Identification Number Modernization"
			category={["UX Design", "GovTech", "Web App", "Case Study"]}
			heroImage="/lovable-uploads/mod-ein-hero.webp"
		>
			<div className="space-y-8">
				<section className="space-y-4 text-primary/70">
					{/* PROJECT OVERVIEW */}
					<h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
					<p>
						The EIN modernization project focused on improving the user
						experience for employers applying for an Employer Identification
						Number through the IRS online system. The legacy system was outdated
						and long overdue for an overhaul, presenting challenges such as a
						complex application process, outdated interface design, and high
						abandonment rates.
					</p>
					<Button asChild>
						<a
							href="https://www.figma.com/proto/8v6LHTHrGxkJ5dNghBaWeT/Mod-EIN-2025-Q1?page-id=4522%3A10099&node-id=4671-15381&p=f&viewport=-1416%2C2430%2C0.52&t=EMfqh8SJVrhD37Y0-8&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4671%3A15381&hide-ui=1"
							target="_blank"
							rel="noopener noreferrer"
						>
							View EIN Figma Prototype
						</a>
					</Button>

					{/* MY CONTRIBUTIONS */}
					<h2 className="text-2xl font-semibold mb-4">My Contributions</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
						<div className="bg-primary/5 p-4 rounded-lg">
							<p className="font-bold">My Role</p>
							<p className="text-primary/70">Lead UX Designer</p>
						</div>
						<div className="bg-primary/5 p-4 rounded-lg">
							<p className="font-bold">Key Responsibilities</p>
							<p className="text-primary/70">UI/UX Design & Prototyping</p>
						</div>
						<div className="bg-primary/5 p-4 rounded-lg">
							<p className="font-bold">Tools Used</p>
							<p className="text-primary/70">Figma, Sketch, InVision</p>
						</div>
					</div>
					<p>
						Shortly after joining the IRS, I took over as lead designer for this
						project and oversaw its transformation into a modernized, IRS
						design-guide standardized, Section 508 compliant web application. I
						also shepherded this project's seamless migration from
						Sketch/InVision to Figma and avoided any work stoppages. During this
						process, I led the UX design modernization for critical IRS programs
						like EIN, ensuring adherence to USWDS standards and enhancing the
						digital experience for millions of taxpayers.
					</p>
					<p>
						During handoff to the development team, I worked very closely with
						developers to communicate the designs and resolve any issues that
						arose, ensuring the project stayed on schedule under a tight
						deadline.
					</p>
				</section>

				<section>
					{/* THE CHALLENGE */}
					<h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
					<p className="text-primary/70 mb-4">
						The legacy EIN application system presented several key challenges
						for employers trying to obtain their federal tax identification
						number:
					</p>
					<ul className="space-y-3">
						<li className="flex items-start">
							<span className="bg-red-100 p-1 rounded mr-3 mt-1">
								<Users className="w-4 h-4 text-red-500" />
							</span>
							<div>
								<p className="font-medium">Complex Application Process</p>
								<p className="text-primary/70">
									Users struggled with a lengthy, confusing application process
									that wasn't intuitive for business owners, leading to a high
									volume of calls to support for assistance. The application
									forced users to complete it in one sitting, and often required
									restarting the entire application to correct a mistake or
									typo.
								</p>
							</div>
						</li>
						<li className="flex items-start">
							<span className="bg-red-100 p-1 rounded mr-3 mt-1">
								<Bookmark className="w-4 h-4 text-red-500" />
							</span>
							<div>
								<p className="font-medium">Outdated Interface Design</p>
								<p className="text-primary/70">
									The legacy system used outdated design patterns, lacked visual
									aids, and had inconsistent layouts that didn't meet modern
									accessibility and usability standards. Pages were often
									"squished" due to attempts to fit too much information "above
									the fold".
								</p>
							</div>
						</li>
						<li className="flex items-start">
							<span className="bg-red-100 p-1 rounded mr-3 mt-1">
								<LineChart className="w-4 h-4 text-red-500" />
							</span>
							<div>
								<p className="font-medium">Confusing Language and Navigation</p>
								<p className="text-primary/70">
									The application frequently used unfamiliar terms and jargon,
									leading to an overload of redundant help text and hyperlinks
									that further cluttered the interface and made it difficult for
									users to understand. Navigation also lacked "back" buttons at
									critical points, hindering user control.
								</p>
							</div>
						</li>
					</ul>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">Research & Discovery</h2>
					<p className="text-primary/70 mb-6">
						Our team conducted a comprehensive research phase, including
						heuristic evaluations, Medallia survey data analysis, user
						interviews, and usability testing, to uncover the core issues with
						the existing EIN application.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
						<div className="border border-primary/10 rounded-lg p-5">
							<h3 className="font-medium mb-2">Heuristic Evaluation</h3>
							<p className="text-primary/70">
								Conducted expert reviews based on Nielsen Norman Group
								principles to identify usability issues and areas for
								improvement across the entire application flow.
							</p>
						</div>
						<div className="border border-primary/10 rounded-lg p-5">
							<h3 className="font-medium mb-2">Medallia Survey Analysis</h3>
							<p className="text-primary/70">
								Analyzed 68 responses from November 2024 to January 2025,
								revealing that users struggled with finding simple ways to look
								up EINs and described the information as confusing.
							</p>
						</div>
						<div className="border border-primary/10 rounded-lg p-5">
							<h3 className="font-medium mb-2">Usability Testing</h3>
							<p className="text-primary/70">
								Conducted 8 moderated remote sessions with business owners using
								a clickable prototype to gain feedback on interface, content,
								and overall usability. Key metrics included task success,
								duration, and error rate.
							</p>
						</div>
						<div className="border border-primary/10 rounded-lg p-5">
							<h3 className="font-medium mb-2">Stakeholder Collaboration</h3>
							<p className="text-primary/70">
								Engaged with various IRS teams and business stakeholders to
								align design efforts with project goals and technical
								constraints .
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
								<strong>Need for User Control:</strong> Participants expressed
								significant frustration with the inability to go back and edit
								information without restarting the entire application.
							</li>
							<li>
								<strong>Clarity in Language:</strong> Users struggled with
								jargon and large blocks of text, indicating a strong need for
								plain language, conciseness, and more scannable content.
							</li>
							<li>
								<strong>Effective Help and Guidance:</strong> Help tips, example
								text, and clear explanations for uncommon terms were highly
								valued and improved user understanding and satisfaction.
							</li>
							<li>
								<strong>Visible System Status:</strong> Users benefited from
								visual cues like progress bars and animated spinners, which
								provided a sense of progress and reassurance that their
								application was being processed.
							</li>
						</ul>
					</div>
				</section>

				<section>
					{/* DESIGN SOLUTIONS */}
					<h2 className="text-2xl font-semibold mb-4">Design Solutions</h2>
					<p className="text-primary/70 mb-6">
						Based on our research and insights, I led the design of several key
						improving the user flow, enhancing form interactions, and providing
						clear, contextual assistance.
					</p>
					<div className="space-y-10">
						{/* Streamlined Application Flow with Progress Indicators */}
						<div>
							<h3 className="font-medium flex items-center mb-3">
								<Layout className="w-5 h-5 text-primary mr-2" /> Streamlined
								Application Flow with Progress Indicators
							</h3>
							<p className="text-primary/70 mb-4">
								The lengthy and confusing application process was redesigned
								into a clear, multi-step flow with prominent progress
								indicators. This provides users with a constant sense of where
								they are in the application, reducing cognitive load and
								improving motivation to complete the task. The previous version
								lacked such a clear progression.
							</p>
							<Dialog>
								<DialogTrigger asChild>
									<div className="aspect-[16/9] bg-slate-100 rounded-lg shadow-lg overflow-hidden cursor-pointer">
										<img
											src="/lovable-uploads/mod-ein-new-steps.webp"
											alt="Redesigned EIN application with clear step-by-step progress"
											className="w-full h-full object-cover"
										/>
									</div>
								</DialogTrigger>
								<DialogContent className="max-w-6xl p-2">
									<img
										src="/lovable-uploads/mod-ein-new-steps.webp"
										alt="Redesigned EIN application with clear step-by-step progress"
										className="w-full h-full object-cover"
									/>
								</DialogContent>
							</Dialog>
						</div>

						<div>
							{/* Enhanced Form Design with Improved Error Handling */}
							<h3 className="font-medium flex items-center mb-3">
								<Layout className="w-5 h-5 text-primary mr-2" /> Enhanced Form
								Design with Improved Error Handling
							</h3>
							<p className="text-primary/70 mb-4">
								To address issues with misplaced fields and lack of error
								feedback, we created intuitive form layouts with clear labels
								and real-time validation. Error messages are now expressed in
								plain language, precisely indicating the problem and
								constructively suggesting a solution, rather than just codes .
								This significantly reduces user frustration and the need to
								restart the application.
							</p>
							<Dialog>
								<DialogTrigger asChild>
									<div className="aspect-[16/9] bg-slate-100 rounded-lg shadow-lg overflow-hidden cursor-pointer">
										<img
											src="/lovable-uploads/mod-ein-error-help.webp"
											alt="Improved error messages and form field layouts"
											className="w-full h-full object-cover"
										/>
									</div>
								</DialogTrigger>
								<DialogContent className="max-w-6xl p-2">
									<img
										src="/lovable-uploads/mod-ein-error-help.webp"
										alt="Improved error messages and form field layouts"
										className="w-full h-full object-cover"
									/>
								</DialogContent>
							</Dialog>
						</div>

						<div>
							{/* Contextual and Dynamic Assistance */}
							<h3 className="font-medium flex items-center mb-3">
								<Layout className="w-5 h-5 text-primary mr-2" /> Contextual and
								Dynamic Assistance
							</h3>
							<p className="text-primary/70 mb-4">
								We integrated dynamic assistance directly into the application
								based on user responses. This includes helpful tooltips and
								example text for uncommon terms and difficult concepts,
								addressing the previous issue of overwhelming and redundant help
								information in separate pop-ups. This ensures guidance is
								available precisely when and where users need it.
							</p>
							<Dialog>
								<DialogTrigger asChild>
									<div className="aspect-[16/9] bg-slate-100 rounded-lg shadow-lg overflow-hidden cursor-pointer">
										<img
											src="/lovable-uploads/mod-ein-help.webp"
											alt="Dynamic help tips and contextual assistance"
											className="w-full h-full object-cover"
										/>
									</div>
								</DialogTrigger>
								<DialogContent className="max-w-6xl p-2">
									<img
										src="/lovable-uploads/mod-ein-help.webp"
										alt="Dynamic help tips and contextual assistance"
										className="w-full h-full object-cover"
									/>
								</DialogContent>
							</Dialog>
						</div>
					</div>
				</section>

				<section>
					{/* RESULTS & IMPACT */}
					<h2 className="text-2xl font-semibold mb-4">Results & Impact</h2>
					<p className="text-primary/70 mb-6">
						The modernized EIN application has not yet gone live due to ongoing
						reductions in force. However, based on extensive usability testing,
						we expect the system to deliver significant improvements in user
						experience and operational efficiency:
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
										Improved Completion Rates
									</p>
									<p
										className={darkMode ? "text-green-100" : "text-primary/70"}
									>
										The simplified flow and clearer guidance are expected to
										lead to higher application completion rates and reduce the
										current high abandonment rates.
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
									<p className="font-semibold text-2xl mb-1">Reduced Errors</p>
									<p
										className={darkMode ? "text-green-100" : "text-primary/70"}
									>
										Enhanced error handling and plain language content will
										result in fewer application errors and resubmissions,
										addressing a major pain point of the legacy system.
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
										Better Accessibility & Trust
									</p>
									<p
										className={darkMode ? "text-green-100" : "text-primary/70"}
									>
										Adherence to IRS design standards and Section 508 compliance
										ensures improved accessibility. Participants also expressed
										higher trust in the new application due to its usability.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="border-t border-primary/10 pt-6">
						{/* PATRICK PRUGH TESTIMONIAL */}
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
								"You have exceeded expectations in your support of
								unauthenticated apps and the IRS.gov website. I’ve watched you
								work closely with an array of stakeholders, asking the right
								questions, delivering excellent UX solutions, and diving into
								complex technical workflows on short notice. I especially
								appreciate your work to date on Free File and Mod EIN, as those
								are major projects that require an ongoing effort to support on
								top of a full plate of daily duties. This is a relatively new
								area of the portfolio where you’ve made major contributions to
								help stand it up."
								<footer className="mt-4 font-medium text-primary not-italic">
									— Patrick Prugh, UX Design Team Supervisor @ IRS
								</footer>
							</blockquote>
						</div>
						<div className="flex justify-center mt-8">
							<Button asChild>
								<a
									href="https://www.figma.com/proto/8v6LHTHrGxkJ5dNghBaWeT/Mod-EIN-2025-Q1?page-id=4522%3A10099&node-id=4671-15381&p=f&viewport=294%2C235%2C0.05&t=A6Im8n2ycWBn97RX-8&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4671%3A15381&hide-ui=1"
									target="_blank"
									rel="noopener noreferrer"
								>
									View EIN Figma Prototype
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

export default EmployerIdentificationNumber;
