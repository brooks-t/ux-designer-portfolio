import React, { useState } from "react";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Recommendation = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	// 1. Store the text as an array of paragraphs
	const recommendationParagraphs = [
		`Brooks Tiffany is one of the most talented, resourceful, and dedicated UX designers that I have had the pleasure of managing in the last 20 years. During his time with the IRS, he consistently impressed me with his ability to anticipate needs. Any project or task he was assigned, he would always hit it out of the park and come back with more than what was asked. More importantly, in our toughest situations, he was the first to raise his hand and jump in to help.`,
		`Last year we had to make a sudden and surprise move from a Sketch / InVision software combo to Figma with a staff that was mostly unfamiliar with the new software. Brooks immediately volunteered to help however he could in the transition. On a rushed timeline, he converted our design standard into a new Figma based design system, transferred over projects from our portfolio, hosted a weekly office hours where others could bring their problems to him, and taught himself whatever he didn’t know to put him in a place to help others. The management team was so impressed, it led to him being nominated for a Special Act Award in his first year.`,
		`Beyond the intangibles, which are off the charts with Brooks, he is an exceptional UX Designer and problem solver, and consistently produced high quality deliverables. He was great with stakeholders, diagnosing problems and articulating solutions, and quickly became one of the most valuable members of my team. Brooks is an exceptional talent and any organization would be extremely fortunate to have him.`,
	];

	// 2. The snippet is now the first paragraph
	const snippet = recommendationParagraphs[0] + "...";

	return (
		<section id="recommendation" className="section-padding">
			<div className="content-container">
				<div className="max-w-3xl mx-auto">
					<div className="rounded-lg border bg-primary/5 p-6 sm:p-8">
						<div className="flex items-center gap-3 mb-4">
							<Award className="h-6 w-6 text-primary/60 flex-shrink-0" />
							<h3 className="text-xl font-semibold text-primary/90">
								Letter of Recommendation
							</h3>
						</div>

						<div className="space-y-4">
							{/* 3. Conditionally render the paragraphs */}
							<div className="italic text-primary/80 text-base space-y-4">
								{isExpanded ? (
									recommendationParagraphs.map((paragraph, index) => (
										<p key={index}>{paragraph}</p>
									))
								) : (
									<p>{snippet}</p>
								)}
							</div>
							<p className="font-medium text-primary not-italic pt-2">
								— Patrick Prugh, UX Design Team Supervisor @ IRS
							</p>
						</div>

						{/* 4. Only show the button if there is more than one paragraph */}
						{recommendationParagraphs.length > 1 && (
							<div className="mt-6">
								<Button
									variant="link"
									onClick={() => setIsExpanded(!isExpanded)}
									className="text-blue-600 dark:text-blue-400 p-0 h-auto"
								>
									{isExpanded ? "Read Less" : "Read More"}
								</Button>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Recommendation;
