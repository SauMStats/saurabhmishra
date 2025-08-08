import { SiOrcid, SiGooglescholar, SiLinkedin, SiGithub, SiX, SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-6" data-testid="text-connect-heading">
            Connect with me
          </h3>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://orcid.org/0000-0000-0000-0000" 
              className="text-gray-400 hover:text-green-600 transition-colors duration-200" 
              aria-label="ORCID"
              data-testid="link-orcid"
            >
              <SiOrcid className="w-6 h-6" />
            </a>
            
            <a 
              href="https://scholar.google.com" 
              className="text-gray-400 hover:text-blue-600 transition-colors duration-200" 
              aria-label="Google Scholar"
              data-testid="link-google-scholar"
            >
              <SiGooglescholar className="w-6 h-6" />
            </a>
            
            <a 
              href="https://linkedin.com/in/sarahchen" 
              className="text-gray-400 hover:text-blue-700 transition-colors duration-200" 
              aria-label="LinkedIn"
              data-testid="link-linkedin"
            >
              <SiLinkedin className="w-6 h-6" />
            </a>
            
            <a 
              href="https://github.com/sarahchen" 
              className="text-gray-400 hover:text-gray-900 transition-colors duration-200" 
              aria-label="GitHub"
              data-testid="link-github"
            >
              <SiGithub className="w-6 h-6" />
            </a>
            
            <a 
              href="https://x.com/sarahchen" 
              className="text-gray-400 hover:text-black transition-colors duration-200" 
              aria-label="Twitter"
              data-testid="link-twitter"
            >
              <SiX className="w-6 h-6" />
            </a>
            
            <a 
              href="https://instagram.com/sarahchen" 
              className="text-gray-400 hover:text-pink-600 transition-colors duration-200" 
              aria-label="Instagram"
              data-testid="link-instagram"
            >
              <SiInstagram className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright and Additional Info */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-500 text-sm" data-testid="text-copyright">
              © {new Date().getFullYear()} Saurabh Mishra. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-2" data-testid="text-updated">
              {/* Built with GitHub Pages • Last updated November 2023 */}
              Built with GitHub Pages • Last updated {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
