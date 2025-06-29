import React from "react";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
	Heart,
	Shield,
	UsersRound,
	Lightbulb,
	Layout,
	CheckCircle,
	ScrollText,
	BrainCircuit,
	Sparkles,
	BookUser,
	TrendingUp,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const SmokingCessation = () => {
	const { theme } = useTheme();
	const darkMode = theme === "dark";

	return (
		<CaseStudyLayout
			title="A Health App for Ambivalent Smokers"
			category={["UX Research", "HealthTech", "Mobile App"]}
			heroImage="/assets/gems-hero.webp"
		>
			<div className="space-y-12">
				{/* -- PROJECT OVERVIEW -- */}
				<section>
					<h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
					<p className="text-primary/70 mb-4">
						The GEMS project was a multi-year research and development
						initiative aimed at designing and evaluating a novel mobile health
						(mHealth) intervention for the majority of smokers who want to quit
						someday but are not yet ready to make a commitment. The core of the
						intervention was a series of "personal experiments"—brief cognitive
						and behavioral tasks designed to build a user's motivation and
						ability to change their smoking habits at their own pace.
					</p>
					<p className="text-primary/70 mb-6">
						This was a complex project that spanned several years and moved
						through multiple government-funded phases, from initial ideation and
						competitive analysis to formative user testing and, ultimately, two
						peer-reviewed publications (since my addition to team) in the
						prestigious Journal of Medical Internet Research (JMIR).
					</p>

					<p className="text-primary/70 mb-6 mt-6">
						<strong>Note: </strong> Adobe has relegated XD to "maintenance mode"
						meaning they are no longer investing in its development. So, I am no
						longer subscribed to XD and cannot host a live prototype. However,
						you can view the pdf or download and run this file locally. The
						prototype is for a project called MyMAP (My Mobile Assistance
						Program) which was a precursor to GEMS.
					</p>
					<Button asChild className="mr-4">
						<a
							href="/assets/MyMAP_interactive-prototype.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							View Adobe XD PDF
						</a>
					</Button>
					<Button asChild>
						<a
							href="/assets/MyMAP_interactive-prototype.xd"
							target="_blank"
							rel="noopener noreferrer"
						>
							Download Adobe XD Prototype
						</a>
					</Button>

					<p className="text-primary/70 mb-6 mt-6">
						<strong>Video Orientation: </strong>I produced the following video
						to onboard users to the medium-fidelity prototype used in our GEMS
						'Wizard of Oz' field test.
					</p>
					<div className="mt-6 mb-6 overflow-hidden rounded-lg shadow-md border">
						<div className="aspect-video">
							<iframe
								className="w-full h-full border-0"
								src="https://www.youtube.com/embed/LuxOsRsjOBk?si=HZwn0qn_XkEvaFo_"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
								loading="lazy"
							></iframe>
						</div>
					</div>
					<h2 className="text-2xl font-semibold">My Contributions</h2>
					<p className="text-primary/70 mt-4 mb-6">
						As the lead UX researcher and designer on the GEMS project, I guided
						the product from initial conception through multiple phases of
						research, design, and testing. My responsibilities were extensive
						and covered the full spectrum of the design process: I conducted the
						initial competitive analysis, user interviews, created detailed user
						flows, designed and tested prototypes at all fidelities, and
						co-authored the resulting 2020 JMIR research paper. Ultimately, my
						work culminated in delivering the comprehensive, high-fidelity
						design and specs that enabled the development of the final app; an
						app that was successfully validated in a randomized pilot study and
						published in 2023.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="bg-primary/5 p-6 rounded-lg">
							<h3 className="font-semibold text-lg mb-2">
								My Multifaceted Role
							</h3>
							<p className="text-primary/70 text-sm">
								I served as the lead for both UX research and design, wearing
								many hats throughout the project's lifecycle, including:
							</p>
							<ul className="list-disc pl-5 mt-2 space-y-1 text-primary/70 text-sm">
								<li>UX Research & Strategy</li>
								<li>UI/UX Design & Prototyping</li>
								<li>User Recruitment & Screening</li>
								<li>Usability & Field Testing</li>
								<li>Co-author & Contributor</li>
								<li>Brand Identity & Marketing Creative</li>
							</ul>
						</div>
						<div className="bg-primary/5 p-6 rounded-lg">
							<h3 className="font-semibold text-lg mb-2">Tools & Methods</h3>
							<p className="text-primary/70 text-sm">
								I leveraged a diverse toolkit to translate complex research
								insights into a tangible, user-tested product:
							</p>
							<ul className="list-disc pl-5 mt-2 space-y-1 text-primary/70 text-sm">
								<li>Adobe XD, Illustrator, Premier Pro</li>
								<li>Wireframing, Prototyping, User flows</li>
								<li>User Interviews, Focus Groups</li>
								<li>Usability Testing, Database Management</li>
								<li>Heuristic Analysis, Competitive Analysis</li>
								<li>Graphic Design, Video Production</li>
							</ul>
						</div>
					</div>
				</section>

				{/* -- THE CHALLENGE -- */}
				<section>
					<h2 className="text-2xl font-semibold mb-4">
						The Challenge: Engaging the Ambivalent
					</h2>
					<p className="text-primary/70 mb-4">
						Most smokers (around 70%) want to quit someday, but aren't ready to
						commit now. Existing smoking cessation tools are built for those
						ready to quit immediately, leaving this vast, ambivalent majority
						without support. The challenge was to design a low-cost, high-reach
						mHealth intervention that could:
					</p>
					<ul className="space-y-4">
						<li className="flex items-start">
							<span className="bg-red-100 p-2 rounded-full mr-4 mt-1">
								<UsersRound className="w-5 h-5 text-red-500" />
							</span>
							<div>
								<p className="font-medium">Engage an Ambivalent Audience</p>
								<p className="text-primary/70">
									How can we create an experience that is appealing and useful
									to someone who isn't ready to commit to quitting?
								</p>
							</div>
						</li>
						<li className="flex items-start">
							<span className="bg-red-100 p-2 rounded-full mr-4 mt-1">
								<Sparkles className="w-5 h-5 text-red-500" />
							</span>
							<div>
								<p className="font-medium">
									Build Motivation & Skills Gradually
								</p>
								<p className="text-primary/70">
									How can we help users build the confidence and behavioral
									skills needed for an eventual quit attempt without pressure?
								</p>
							</div>
						</li>
						<li className="flex items-start">
							<span className="bg-red-100 p-2 rounded-full mr-4 mt-1">
								<TrendingUp className="w-5 h-5 text-red-500" />
							</span>
							<div>
								<p className="font-medium">Demonstrate Measurable Impact</p>
								<p className="text-primary/70">
									How do we design an intervention that not only satisfies users
									but also leads to quantifiable changes in motivation and
									behavior?
								</p>
							</div>
						</li>
					</ul>
				</section>

				{/* -- PROCESS -- */}
				<section>
					<h2 className="text-2xl font-semibold mb-4">
						My Process: A Multi-Phase Journey
					</h2>
					<p className="text-primary/70 mb-6">
						To tackle this complex challenge, I led UX efforts as part of a
						comprehensive, multi-phase process rooted in user-centered design
						principles.
					</p>
					<div className="space-y-10">
						{/* -- Phase 1 -- */}
						<div>
							<h3 className="font-medium flex items-center mb-3">
								<span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-1 rounded-full mr-2">
									PHASE 1
								</span>{" "}
								Foundational Research & Competitive Analysis
							</h3>
							<p className="text-primary/70 mb-4">
								We began with deep foundational research. I conducted a
								competitive analysis of over 20 existing smoking cessation apps,
								which revealed that none were designed for ambivalent smokers
								and most lacked robust tracking features. I also led in-depth
								user interviews, where we learned that users wanted social
								support, progress tracking, and help cutting back slowly, not
								quitting "cold turkey".
							</p>
							<blockquote className="mt-4 mb-4 border-l-4 border-primary/20 pl-4 italic text-primary/80">
								"He also really liked the social support features. Tracking your
								cigarettes was another feature that he liked -
								tracking/rationing that would help him cut back slowly."
							</blockquote>
							<p className="text-right text-sm text-primary/60 mb-6">
								— Direct feedback from a user interview
							</p>
							<Dialog>
								<DialogTrigger asChild>
									<div className="aspect-[16/9] bg-slate-100 rounded-lg shadow-md overflow-hidden cursor-pointer border">
										<img
											src="/assets/kp-comp.webp"
											alt="A slide from the competitive analysis presentation showing a breakdown of a competitor's app."
											className="w-full h-full object-cover"
										/>
									</div>
								</DialogTrigger>
								<DialogContent className="max-w-6xl p-2">
									<img
										src="/assets/kp-comp.webp"
										alt="A slide from the competitive analysis presentation showing a breakdown of a competitor's app."
										className="w-full h-auto rounded-lg"
									/>
								</DialogContent>
							</Dialog>
						</div>

						{/* -- Phase 2 -- */}
						<div>
							<h3 className="font-medium flex items-center mb-3">
								<span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-1 rounded-full mr-2">
									PHASE 2
								</span>{" "}
								Concept Development & Lo-Fi Prototyping
							</h3>
							<p className="text-primary/70 mb-4">
								Armed with these insights, I developed initial user flowcharts
								that incorporated our core-concept of "Personal Experiments"
								which helped us map out the complex, multi-day user journey. I
								then designed and tested low-fidelity prototypes with users to
								refine the concept, confirming that users liked the "no
								pressure" approach but needed clearer instructions.
							</p>
							<Dialog>
								<DialogTrigger asChild>
									<div className="aspect-[16/9] bg-slate-100 rounded-lg shadow-md overflow-hidden cursor-pointer border">
										<img
											src="/assets/kp-flow.webp"
											alt="A user flowchart showing the complex, multi-day journey for a study participant."
											className="w-full h-full object-cover"
										/>
									</div>
								</DialogTrigger>
								<DialogContent className="max-w-6xl p-2">
									<img
										src="/assets/kp-flow.webp"
										alt="A user flowchart showing the complex, multi-day journey for a study participant."
										className="w-full h-auto rounded-lg"
									/>
								</DialogContent>
							</Dialog>
						</div>

						{/* -- Phase 3 -- */}
						<div>
							<h3 className="font-medium flex items-center mb-3">
								<span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-1 rounded-full mr-2">
									PHASE 3
								</span>{" "}
								Medium-Fidelity Field Prototype & "Wizard of Oz" Testing
							</h3>
							<p className="text-primary/70 mb-4">
								Incorporating user feedback, I designed a functional,
								medium-fidelity prototype for a pilot study. A key part of this
								phase was a "Wizard of Oz" field test, where I simulated
								back-end functionality to create a realistic user experience
								with people using the app on their phone while they go about
								their lives. This allowed us to collect rich, in-context
								feedback on the prototype before full development, which proved
								to be "highly acceptable" to participants. Furthermore, the
								field test was so successful that it achieved a 100% completion
								rate!
							</p>
							<div className="mt-4 mb-6 border-l-4 border-primary/20 pl-4 text-primary/80">
								<p>
									The 2020 JMIR paper noted that participants found the
									prototype to be <strong>"highly acceptable"</strong> and that{" "}
									<strong>
										100% of participants completed all 7 experiments
									</strong>
									.
								</p>
							</div>
							<Dialog>
								<DialogTrigger asChild>
									<div className="aspect-[16/9] bg-slate-100 rounded-lg shadow-md overflow-hidden cursor-pointer border">
										<img
											src="/assets/kp-wizard.webp"
											alt="The high-fidelity prototype of the experiment selection screen."
											className="w-full h-full object-cover"
										/>
									</div>
								</DialogTrigger>
								<DialogContent className="max-w-6xl p-2">
									<img
										src="/assets/kp-wizard.webp"
										alt="The high-fidelity prototype of the experiment selection screen."
										className="w-full h-auto rounded-lg"
									/>
								</DialogContent>
							</Dialog>
						</div>
						{/* -- Phase 4 -- */}
						<div>
							<h3 className="font-medium flex items-center mb-3">
								<span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-1 rounded-full mr-2">
									PHASE 4
								</span>{" "}
								High-Fidelity Design & Developer Handoff
							</h3>
							<p className="text-primary/70 mb-4">
								Armed with insights from the successful "Wizard of Oz" field
								test, the project moved into its final and most crucial phase:
								translating our validated concept into a production-ready
								application. I designed a comprehensive, high-fidelity
								interactive prototype in Adobe XD, complete with detailed
								specifications for every component and user flow. The clarity
								and thoroughness of this design blueprint were instrumental in
								securing buy-in from the Kaiser Permanente development team, who
								agreed to build the app. Throughout the development cycle, I
								served as the primary design partner for the engineering team,
								providing real-time guidance on specs and behavior to ensure a
								faithful and accurate translation of the vision into code. The
								resulting application, built directly from my designs, was
								ultimately used in the randomized pilot trial that produced the
								impressive, published results in the 2023 JMIR paper.
							</p>
							<blockquote className="mt-4 mb-4 border-l-4 border-primary/20 pl-4 italic text-primary/80">
								"We are deeply grateful to Brooks Tiffany for creating the user
								interface design..."
							</blockquote>
							<p className="text-right text-sm text-primary/60 mb-6">
								— Acknowledgement in JMIR mHealth and uHealth (2023)
							</p>
							<Dialog>
								<DialogTrigger asChild>
									<div className="aspect-[16/9] bg-slate-100 rounded-lg shadow-md overflow-hidden cursor-pointer border">
										<img
											src="/assets/kp-high-fidelity.webp"
											alt="The high-fidelity prototype of the experiment selection screen."
											className="w-full h-full object-cover"
										/>
									</div>
								</DialogTrigger>
								<DialogContent className="max-w-6xl p-2">
									<img
										src="/assets/kp-high-fidelity.webp"
										alt="The high-fidelity prototype of the experiment selection screen."
										className="w-full h-auto rounded-lg"
									/>
								</DialogContent>
							</Dialog>
						</div>
					</div>
				</section>

				{/* -- RESULTS & IMPACT -- */}
				<section>
					<h2 className="text-2xl font-semibold mb-4">
						Results & Impact: A Validated Success
					</h2>
					<p className="text-primary/70 mb-6">
						The phased, user-centered approach paid off. The final design was
						not only well-received but demonstrated statistically significant
						improvements in a randomized pilot study, leading to two
						peer-reviewed publications.
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
						<div
							className={`${
								darkMode ? "bg-green-900" : "bg-green-50"
							} p-5 rounded-lg`}
						>
							<div className="flex items-start">
								<TrendingUp
									className={`w-8 h-8 ${
										darkMode ? "text-green-400" : "text-green-500"
									} mr-3 flex-shrink-0`}
								/>
								<div>
									<p className="font-semibold text-2xl mb-1">
										2.7x Higher Engagement
									</p>
									<p
										className={`${
											darkMode ? "text-green-100" : "text-primary/70"
										} text-sm`}
									>
										Users of my enhanced app design had 2.7 times more sessions
										than the standard care version.
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
									className={`w-8 h-8 ${
										darkMode ? "text-green-400" : "text-green-500"
									} mr-3 flex-shrink-0`}
								/>
								<div>
									<p className="font-semibold text-2xl mb-1">2x Quit Rate</p>
									<p
										className={`${
											darkMode ? "text-green-100" : "text-primary/70"
										} text-sm`}
									>
										The app more than doubled the 7-day smoking abstinence rate
										compared to the standard version (14.7% vs 6.9%).
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
								<Heart
									className={`w-8 h-8 ${
										darkMode ? "text-green-400" : "text-green-500"
									} mr-3 flex-shrink-0`}
								/>
								<div>
									<p className="font-semibold text-2xl mb-1">
										Increased Help-Seeking
									</p>
									<p
										className={`${
											darkMode ? "text-green-100" : "text-primary/70"
										} text-sm`}
									>
										My design led to 3x more requests for free NRT and 5x more
										calls to a tobacco quitline.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* -- PUBLICATIONS -- */}
				<section>
					<h2 className="text-2xl font-semibold mb-4">
						Peer-Reviewed Publications
					</h2>
					<p className="text-primary/70 mb-6">
						This multi-year project, since my addition to the team, has resulted
						in two papers published in the prestigious Journal of Medical
						Internet Research (JMIR). I am a co-author on the 2020 paper and was
						acknowledged for my UI design work in the 2023 paper.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="flex items-start p-4 bg-primary/5 rounded-lg">
							<ScrollText className="w-8 h-8 text-primary mr-3 mt-0.5 flex-shrink-0" />
							<div>
								<p className="font-medium">
									Development of a Mobile Health Intervention with Personal
									Experiments for Smokers Who Are Ambivalent About Quitting
								</p>
								<p className="text-primary/70 text-sm">
									<a
										href="https://formative.jmir.org/2020/8/e21784/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 underline hover:text-blue-800"
									>
										JMIR Formative Research (2020)
									</a>
								</p>
							</div>
						</div>
						<div className="flex items-start p-4 bg-primary/5 rounded-lg">
							<ScrollText className="w-8 h-8 text-primary mr-3 mt-0.5 flex-shrink-0" />
							<div>
								<p className="font-medium">
									Feasibility, Acceptability, and Potential Impact of a Novel
									mHealth App for Smokers Ambivalent About Quitting
								</p>
								<p className="text-primary/70 text-sm">
									<a
										href="https://mhealth.jmir.org/2023/1/e46155"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-600 underline hover:text-blue-800"
									>
										JMIR mHealth and uHealth (2023)
									</a>
								</p>
							</div>
						</div>
						<div className="flex mt-8">
							<Button asChild>
								<a
									href="/assets/MyMAP_interactive-prototype.xd"
									target="_blank"
									rel="noopener noreferrer"
								>
									Download Adobe XD Prototype
								</a>
							</Button>
						</div>
					</div>
					<div className="mt-12 flex justify-start">
						<Link
							to="/#projects"
							className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-primary transition-standard w-fit"
						>
							<ArrowLeft className="mr-2 w-4 h-4" /> Back to Projects
						</Link>
					</div>
				</section>
			</div>
		</CaseStudyLayout>
	);
};

export default SmokingCessation;
