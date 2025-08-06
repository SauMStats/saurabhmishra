import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Bio from "@/pages/Bio";
import ResearchGroup from "@/pages/research/Group";
import Talks from "@/pages/research/Talks";
import Publications from "@/pages/research/Publications";
import Collaborators from "@/pages/research/Collaborators";
import Courses from "@/pages/teaching/Courses";
import TA from "@/pages/teaching/TA";
import Sports from "@/pages/activities/Sports";
import Movies from "@/pages/activities/Movies";
import Books from "@/pages/activities/Books";
import Exercise from "@/pages/activities/Exercise";
import Blog from "@/pages/Blog";
import BlogPost from "@/components/BlogPost";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";
import Gallery from "@/pages/activities/Gallery";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/bio" component={Bio} />
          <Route path="/research/group" component={ResearchGroup} />
          <Route path="/research/talks" component={Talks} />
          <Route path="/research/publications" component={Publications} />
          <Route path="/research/collaborators" component={Collaborators} />
          <Route path="/teaching/courses" component={Courses} />
          <Route path="/teaching/ta" component={TA} />
          <Route path="/activities/sports" component={Sports} />
          <Route path="/activities/movies" component={Movies} />
          <Route path="/activities/books" component={Books} />
          <Route path="/activities/exercise" component={Exercise} />
          <Route path="/activities/gallery" component={Gallery} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/contact" component={Contact} />
          <Route path="/admin" component={Admin} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  useEffect(() => {
    // Load MathJax
    const script = document.createElement('script');
    script.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6';
    script.async = true;
    document.head.appendChild(script);

    const mathJaxScript = document.createElement('script');
    mathJaxScript.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    mathJaxScript.async = true;
    mathJaxScript.id = 'MathJax-script';
    document.head.appendChild(mathJaxScript);

    // Configure MathJax
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']]
      }
    };

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(mathJaxScript);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
