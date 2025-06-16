import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Recommendation from "@/components/Recommendation"; // <-- Import the new component

const Index = () => {
	const location = useLocation();

	useEffect(() => {
		// ... your existing useEffect code remains unchanged ...
		if (location.hash) {
			const sectionId = location.hash.replace("#", "");
			const element = document.getElementById(sectionId);

			if (element) {
				setTimeout(() => {
					element.scrollIntoView({ behavior: "smooth" });
				}, 100);
			}
		}

		const observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.1,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("animate-fade-up");
					observer.unobserve(entry.target);
				}
			});
		}, observerOptions);

		const sections = document.querySelectorAll("section > div > div");
		sections.forEach((section) => {
			section.classList.remove("animate-fade-up");
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, [location.hash]);

	return (
		<div className="min-h-screen">
			<Navbar />
			<section id="home">
				<Hero />
			</section>
			<section id="projects">
				<Projects />
			</section>
			<section id="skills">
				<Skills />
			</section>
			<section id="about">
				<About />
			</section>
			{/* --- Add the new recommendation section here --- */}
			<Recommendation />
			<section id="contact">
				<Contact />
			</section>
			<Footer />
		</div>
	);
};

export default Index;
