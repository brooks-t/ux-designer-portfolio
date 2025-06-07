
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // Fallback to home if no history
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8 max-w-md">
        <h1 className="text-6xl font-bold mb-6 text-primary">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full px-6 py-3 font-medium transition-standard hover:shadow-lg hover:-translate-y-1"
          >
            <Home className="mr-2 w-4 h-4" /> Go Home
          </Link>
          <button
            onClick={handleGoBack}
            className="inline-flex items-center justify-center bg-transparent text-primary border border-primary/20 rounded-full px-6 py-3 font-medium transition-standard hover:border-primary/60 hover:-translate-y-1"
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
