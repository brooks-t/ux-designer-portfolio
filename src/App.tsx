import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FreeFile from "./pages/case-studies/FreeFile";
import SmokingCessation from "./pages/case-studies/SmokingCessation";
import EmployerIdentificationNumber from "./pages/case-studies/EmployerIdentificationNumber";
import OnlineServicesDesignGuide from "./pages/case-studies/OnlineServicesDesignGuide";
import { ThemeProvider } from "./components/ThemeProvider";

// Access the environment variable
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

// Initialize Google Analytics only if the ID exists
if (GA_MEASUREMENT_ID) {
	ReactGA.initialize(GA_MEASUREMENT_ID);
} else {
	console.error(
		"Google Analytics Measurement ID is not defined. Please check your .env file."
	);
}

const queryClient = new QueryClient();

// --- Helper Component to Track Page Views ---
const usePageTracking = () => {
	const location = useLocation();

	useEffect(() => {
		// Send a pageview event on route change
		ReactGA.send({
			hitType: "pageview",
			page: location.pathname + location.search,
		});
	}, [location]);
};

// --- Main App Component ---
const AppContent = () => {
	usePageTracking();

	return (
		<Routes>
			<Route path="/" element={<Index />} />
			<Route path="/case-study/free-file" element={<FreeFile />} />
			<Route
				path="/case-study/smoking-cessation"
				element={<SmokingCessation />}
			/>
			<Route
				path="/case-study/employer-identification-number"
				element={<EmployerIdentificationNumber />}
			/>
			<Route
				path="/case-study/online-services-design-guide"
				element={<OnlineServicesDesignGuide />}
			/>
			{/* Redirect from old URLs to maintain backward compatibility */}
			<Route
				path="/case-study/financial-app-redesign"
				element={<Navigate to="/case-study/free-file" replace />}
			/>
			<Route
				path="/case-study/healthcare-patient-portal"
				element={<Navigate to="/case-study/smoking-cessation" replace />}
			/>
			{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

const App = () => (
	<ThemeProvider defaultTheme="light">
		<QueryClientProvider client={queryClient}>
			<TooltipProvider>
				<Toaster />
				<Sonner />
				<BrowserRouter>
					<AppContent />
				</BrowserRouter>
			</TooltipProvider>
		</QueryClientProvider>
	</ThemeProvider>
);

export default App;
