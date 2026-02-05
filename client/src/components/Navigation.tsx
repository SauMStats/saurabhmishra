import { Link, useLocation } from "wouter";
import { useState } from "react";
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [mobileDropdowns, setMobileDropdowns] = useState({
    research: false,
    teaching: false,
    activities: false
  });

  const toggleMobileDropdown = (dropdown: keyof typeof mobileDropdowns) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  const isActive = (path: string) => location === path;
  const isActiveSection = (section: string) => location.startsWith(`/${section}`);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-xl font-semibold text-gray-900 dark:text-white hover:text-academic-blue transition-colors duration-200"
              data-testid="link-logo"
            >
              Saurabh Mishra
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className={`nav-link ${isActive('/') ? 'text-academic-blue' : ''}`}
              data-testid="link-home"
            >
              Home
            </Link>
            <Link 
              href="/bio" 
              className={`nav-link ${isActive('/bio') ? 'text-academic-blue' : ''}`}
              data-testid="link-bio"
            >
              Bio
            </Link>
            
            {/* Research Dropdown */}
            <div className="relative group">
              <button 
                className={`nav-link flex items-center ${isActiveSection('research') ? 'text-academic-blue' : ''}`}
                data-testid="button-research-dropdown"
              >
                Research
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="dropdown-menu absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100">
                {/* <Link href="/research/group" className="nav-dropdown-item" data-testid="link-research-group">
                  Research Group
                </Link> */}
                <Link href="/research/talks" className="nav-dropdown-item" data-testid="link-research-talks">
                  Talks
                </Link>
                <Link href="/research/publications" className="nav-dropdown-item" data-testid="link-research-publications">
                  Publications
                </Link>
                {/* <Link href="/research/collaborators" className="nav-dropdown-item" data-testid="link-research-collaborators">
                  Collaborators
                </Link> */}
              </div>
            </div>

            {/* Teaching Dropdown */}
            <div className="relative group">
              <button 
                className={`nav-link flex items-center ${isActiveSection('teaching') ? 'text-academic-blue' : ''}`}
                data-testid="button-teaching-dropdown"
              >
                Teaching
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="dropdown-menu absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100">
                <Link href="/teaching/courses" className="nav-dropdown-item" data-testid="link-teaching-courses">
                  Courses
                </Link>
                <Link href="/teaching/ta" className="nav-dropdown-item" data-testid="link-teaching-ta">
                  Teaching Assistant
                </Link>
              </div>
            </div>

            {/* Activities Dropdown */}
            <div className="relative group">
              <button 
                className={`nav-link flex items-center ${isActiveSection('activities') ? 'text-academic-blue' : ''}`}
                data-testid="button-activities-dropdown"
              >
                Activities
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="dropdown-menu absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100">
                <Link href="/activities/sports" className="nav-dropdown-item" data-testid="link-activities-sports">
                  Sports
                </Link>
                <Link href="/activities/movies" className="nav-dropdown-item" data-testid="link-activities-movies">
                  Movies
                </Link>
                <Link href="/activities/books" className="nav-dropdown-item" data-testid="link-activities-books">
                  Books
                </Link>
                <Link href="/activities/exercise" className="nav-dropdown-item" data-testid="link-activities-exercise">
                  Exercise
                </Link>
                <Link href="/activities/gallery" className="nav-dropdown-item" data-testid="link-activities-gallery">
                  Photos
                </Link>
              </div>
            </div>

            <Link 
              href="/blog" 
              className={`nav-link ${isActive('/blog') ? 'text-academic-blue' : ''}`}
              data-testid="link-blog"
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className={`nav-link ${isActive('/contact') ? 'text-academic-blue' : ''}`}
              data-testid="link-contact"
            >
              Contact
            </Link>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-academic-blue dark:hover:text-academic-blue transition-colors duration-200"
              data-testid="button-theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile menu and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-academic-blue transition-colors duration-200"
              data-testid="button-mobile-theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            <button 
              className="text-gray-700 dark:text-gray-300 hover:text-academic-blue p-2" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800" data-testid="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-academic-blue hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200" data-testid="mobile-link-home">
                Home
              </Link>
              <Link href="/bio" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-academic-blue hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200" data-testid="mobile-link-bio">
                Bio
              </Link>
              
              {/* Mobile Research Dropdown */}
              <div className="px-3 py-2">
                <button 
                  className="w-full text-left text-gray-700 dark:text-gray-300 hover:text-academic-blue font-medium flex items-center" 
                  onClick={() => toggleMobileDropdown('research')}
                  data-testid="mobile-button-research"
                >
                  Research
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${mobileDropdowns.research ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdowns.research && (
                  <div className="mt-2 ml-4 space-y-1">
                    <Link href="/research/group" className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue" data-testid="mobile-link-research-group">
                      Research Group
                    </Link>
                    <Link href="/research/talks" className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue" data-testid="mobile-link-research-talks">
                      Talks
                    </Link>
                    <Link href="/research/publications" className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue" data-testid="mobile-link-research-publications">
                      Publications
                    </Link>
                    <Link href="/research/collaborators" className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue" data-testid="mobile-link-research-collaborators">
                      Collaborators
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Teaching Dropdown */}
              <div className="px-3 py-2">
                <button 
                  className="w-full text-left text-gray-700 dark:text-gray-300 hover:text-academic-blue font-medium flex items-center" 
                  onClick={() => toggleMobileDropdown('teaching')}
                  data-testid="mobile-button-teaching"
                >
                  Teaching
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${mobileDropdowns.teaching ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdowns.teaching && (
                  <div className="mt-2 ml-4 space-y-1">
                    <Link href="/teaching/courses" className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue" data-testid="mobile-link-teaching-courses">
                      Courses
                    </Link>
                    <Link href="/teaching/ta" className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue" data-testid="mobile-link-teaching-ta">
                      Teaching Assistant
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Activities Dropdown */}
              <div className="px-3 py-2">
                <button 
                  className="w-full text-left text-gray-700 dark:text-gray-300 hover:text-academic-blue font-medium flex items-center" 
                  onClick={() => toggleMobileDropdown('activities')}
                  data-testid="mobile-button-activities"
                >
                  Activities
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${mobileDropdowns.activities ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdowns.activities && (
                  <div className="mt-2 ml-4 space-y-1">
                    <Link href="/activities/sports" className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue" data-testid="mobile-link-activities-sports">
                      Sports
                    </Link>
                    <Link href="/activities/movies" className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue" data-testid="mobile-link-activities-movies">
                      Movies
                    </Link>
                    <Link href="/activities/books" className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue" data-testid="mobile-link-activities-books">
                      Books
                    </Link>
                    <Link href="/activities/exercise" className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue" data-testid="mobile-link-activities-exercise">
                      Exercise
                    </Link>
                    <Link href="/activities/gallery" className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-academic-blue" data-testid="mobile-link-activities-gallery">
                      Photos
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/blog" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-academic-blue hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200" data-testid="mobile-link-blog">
                Blog
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-academic-blue hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200" data-testid="mobile-link-contact">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
