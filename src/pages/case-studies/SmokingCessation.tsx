import React from "react";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import {
	Heart,
	Shield,
	UsersRound,
	Lightbulb,
	Layout,
	CheckCircle,
	ScrollText,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const SmokingCessation = () => {
	const { theme } = useTheme();
	const darkMode = theme === "dark";

	return (
		<CaseStudyLayout
			title="Smoking Cessation App (GEMS)"
			category={["UX Research", "UI Design", "HealthTech", "Mobile App"]}
			heroImage="/lovable-uploads/gems-new-hero.png"
		>
			<div className="space-y-8">
				<section>
					<h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
					<p className="text-primary/70 mb-4">
						The GEMS project sought to design and evaluate a mobile health
						intervention for smokers ambivalent about quitting. It aimed to do
						this through the use of personal experiments specifically developed
						to enhance motivation and ability to quit.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
						<div className="bg-primary/5 p-4 rounded-lg">
							<p className="font-medium">My Role</p>
							<p className="text-primary/70">UX Research Lead/UX Design Lead</p>
						</div>
						<div className="bg-primary/5 p-4 rounded-lg">
							<p className="font-medium">Key Responsibilities</p>
							<p className="text-primary/70">
								User Research, UI/UX Design, Protoyping and Testing
							</p>
						</div>
						<div className="bg-primary/5 p-4 rounded-lg">
							<p className="font-medium">Tools Used</p>
							<p className="text-primary/70">Adobe XD, Illustrator, InVision</p>
						</div>
					</div>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
					<p className="text-primary/70 mb-4">
						How might we effectively implement and evaluate an intervention for
						an ambivalent audience?
					</p>
					<ul className="space-y-3">
						<li className="flex items-start">
							<span className="bg-red-100 p-1 rounded mr-3 mt-1">
								<UsersRound className="w-4 h-4 text-red-500" />
							</span>
							<div>
								<p className="font-medium">
									Identifying ambivalent smoker's needs
								</p>
								<p className="text-primary/70">
									The majority of smokers want to quit but aren't ready for
									long-term abstinence. Existing treatments don't cater to their
									ambivalence
								</p>
							</div>
						</li>
						<li className="flex items-start">
							<span className="bg-red-100 p-1 rounded mr-3 mt-1">
								<Shield className="w-4 h-4 text-red-500" />
							</span>
							<div>
								<p className="font-medium">Catering to their specific needs</p>
								<p className="text-primary/70">
									Designing interventions that don't require a commitment to
									quit but explore their willingness to quit while assisting
									with gradual behavior change
								</p>
							</div>
						</li>
						<li className="flex items-start">
							<span className="bg-red-100 p-1 rounded mr-3 mt-1">
								<Heart className="w-4 h-4 text-red-500" />
							</span>
							<div>
								<p className="font-medium">
									Measuring usefulness, difficulty and satisfaction
								</p>
								<p className="text-primary/70">
									Capturing and analyzing data from users with a combination of
									qualitative and quantitative methods through a user-centered
									lens
								</p>
							</div>
						</li>
					</ul>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">Research Approach</h2>
					<p className="text-primary/70 mb-6">
						I implemented a user-centered methodology during a thorough and
						iterative research phase.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
						<div className="border border-primary/10 rounded-lg p-5">
							<h3 className="font-medium mb-2">Literature Review</h3>
							<p className="text-primary/70">
								Examined existing research on smoking cessation and
								interventions
							</p>
						</div>
						<div className="border border-primary/10 rounded-lg p-5">
							<h3 className="font-medium mb-2">Competitive Analysis</h3>
							<p className="text-primary/70">
								Reviewed existing smoking cessation apps' features and
								functionaliy
							</p>
						</div>
						<div className="border border-primary/10 rounded-lg p-5">
							<h3 className="font-medium mb-2">User Interviews</h3>
							<p className="text-primary/70">
								Refined content and gathered feedback on the concept of personal
								experiments
							</p>
						</div>
						<div className="border border-primary/10 rounded-lg p-5">
							<h3 className="font-medium mb-2">Usability Tests</h3>
							<p className="text-primary/70">
								Tested multiple prototypes to include a field test using the
								"wizard of oz" method
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
							Key Research Insights
						</h3>
						<ul
							className={`space-y-2 ${
								darkMode ? "text-amber-100" : "text-primary/70"
							}`}
						>
							<li>
								• Ambivalent smokers are receptive to mHealth interventions
							</li>
							<li>
								• Personal experiments are a promising approach to enhance
								motivation and ability to quit smoking
							</li>
							<li>
								• Interventions should be flexible and responsive to changes in
								motivation
							</li>
							<li>
								• Existing apps do not cater to ambivalents smokers or leverage
								personal experiments as a feature
							</li>
						</ul>
					</div>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">Design Solutions</h2>
					<div className="space-y-6">
						<div>
							<h3 className="font-medium flex items-center mb-3">
								<Layout className="w-5 h-5 text-primary mr-2" /> Adapted a
								Series of "Personal Experiments" for Mobile
							</h3>
							<p className="text-primary/70 mb-4">
								Distilled a list of cognitive and behavioral tasks down into
								seven experiments intended to boost readiness for change. These
								experiments, along with an initial onboarding sequence, were
								then adapted into a user-friendly mobile app design.
							</p>
							<div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden">
								<img
									src="/lovable-uploads/experiments-2.png"
									alt="Healthcare dashboard"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>

						<div>
							<h3 className="font-medium flex items-center mb-3">
								<Layout className="w-5 h-5 text-primary mr-2" /> Created
								Multiple Prototypes
							</h3>
							<p className="text-primary/70 mb-4">
								Built and tested multiple prototypes with increasing degrees of
								fidelity through an iterative process. The prototype I am most
								proud of was field tested with me acting as the "Wizard of Oz"
								on the back-end to simulate a real-world functioning mobile app.
							</p>
							<div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden">
								<img
									src="/lovable-uploads/experiments-1.png"
									alt="Appointment scheduling"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>

						<div>
							<h3 className="font-medium flex items-center mb-3">
								<Layout className="w-5 h-5 text-primary mr-2" /> Addressed User
								Feedback
							</h3>
							<p className="text-primary/70 mb-4">
								Collected and addressed user feedback on the prototypes through
								usability tests and field tests. During the field test, we used
								live web forms overlayed onto the prototype to collect user
								feedback and measure several metrics which were then used to
								further improve our designs in preparation for a pilot study.
							</p>
							<div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden">
								<img
									src="/lovable-uploads/feedback-1.png"
									alt="Test results interface"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">Results & Impact</h2>
					<p className="text-primary/70 mb-6">
						The participants found the prototype highly acceptable and were
						interested in the program:
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
						<div
							className={`${
								darkMode ? "bg-green-900" : "bg-green-50"
							} p-5 rounded-lg`}
						>
							<div className="flex items-start">
								<CheckCircle
									className={`w-8 h-8 ${
										darkMode ? "text-green-400" : "text-green-500"
									} mr-2 flex-shrink-0`}
								/>
								<div>
									<p className="font-semibold text-2xl mb-1">92%</p>
									<p
										className={darkMode ? "text-green-100" : "text-primary/70"}
									>
										Of participants were more interested in quitting or cutting
										back after the program
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
									} mr-2 flex-shrink-0`}
								/>
								<div>
									<p className="font-semibold text-2xl mb-1">100%</p>
									<p
										className={darkMode ? "text-green-100" : "text-primary/70"}
									>
										Of participants completed all seven experiments showing high
										engagement
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
									} mr-2 flex-shrink-0`}
								/>
								<div>
									<p className="font-semibold text-2xl mb-1">4.1/5</p>
									<p
										className={darkMode ? "text-green-100" : "text-primary/70"}
									>
										Usefulness rating and all experiments received a net
										positive for helpfulness.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<h2 className="text-2xl font-semibold mb-4">
						Peer-reviewed Publications
					</h2>
					<p className="text-primary/70 mb-6">
						Since I came on board, the GEMS project has resulted in two
						peer-reviewed published papers in the Journal of Medical Internet
						Research (JMIR). I am a co-author on the 2020 paper and acknowledged
						in the 2023 paper (linked below).
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="flex items-start p-4 bg-primary/5 rounded-lg">
							<ScrollText className="w-8 h-8 text-primary mr-3 mt-0.5 flex-shrink-0" />
							<div>
								<p className="font-medium">
									Development of a Mobile Health Intervention with Personal
									Experiments for Smokers Who Are Ambivalent About Quitting:
									Formative Design and Testing
								</p>
								<p className="text-primary/70 text-sm">
									<a
										href="https://formative.jmir.org/2020/8/e21784/"
										className="text-blue-600 underline hover:text-blue-800"
									>
										JMIR Formative Research Vol 4, No 8 (2020)
									</a>
								</p>
							</div>
						</div>
						<div className="flex items-start p-4 bg-primary/5 rounded-lg">
							<ScrollText className="w-8 h-8 text-primary mr-3 mt-0.5 flex-shrink-0" />
							<div>
								<p className="font-medium">
									Feasibility, Acceptability, and Potential Impact of a Novel
									mHealth App for Smokers Ambivalent About Quitting: Randomized
									Pilot Study
								</p>
								<p className="text-primary/70 text-sm">
									<a
										href="https://mhealth.jmir.org/2023/1/e46155"
										className="text-blue-600 underline hover:text-blue-800"
									>
										JMIR mHealth and uHealth Vol 11 (2023)
									</a>
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</CaseStudyLayout>
	);
};

export default SmokingCessation;
