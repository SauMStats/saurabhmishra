import { Code, Github, ExternalLink, Download, Package } from "lucide-react";

export default function Software() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Software & Code
          </h1>
          <p className="text-xl text-academic-gray dark:text-gray-400">
            Open-source software, R packages, and code repositories for statistical genetics
          </p>
        </div>

        {/* Software Packages */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8">
            R Packages
          </h2>
          
          <div className="space-y-6">
            {/* Example Package 1 */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <Package className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    MvGGE
                  </h3>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">
                  R Package
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Statistical methods for testing gene-environment interactions in genome-wide association studiesusing
                 multivariate joint testing of main genetic and GxE effects.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                  GWAS
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                  Gene-Environment Interactions
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                  Joint Testing
                </span>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <a
                  href="https://github.com/SauMStats/MvGGE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <Github className="w-4 h-4 mr-1" />
                  GitHub
                </a>
                {/* <a
                  href="#"
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Documentation
                </a> */}
                {/* <a
                  href="#"
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Install
                </a> */}
              </div>
            </div>

            {/* Add more packages here */}
          </div>
        </section>

        {/* Installation Instructions */}
        <section className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          {/* <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Installation
          </h2> */}
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Installing R Packages
              </h3>
              <pre className="bg-gray-100 border border-gray-300 text-gray-900 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed font-mono">
                <code>{`# Install remotes if not already installed
if (!require("remotes")) install.packages("remotes")

remotes::install_github("SauMStats/MvGGE")

# Load the package
library(GxEtest)`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Citation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                If you use this software in your research, please cite:
              </p>
              <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 mt-3">
                <p className="text-gray-700 dark:text-gray-300 text-sm font-mono">
                  Mishra S, Majumdar A (2025). "A Multi-Phenotype Approach to Joint Testing of Main 
                  Genetic and Gene–Environment Interaction Effects." Statistics in Medicine, 44(20–22), 
                  e70253. doi: 10.1002/sim.70253
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Code Repositories */}
        <section className="mt-12 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8">
            Code Repositories
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Example Repository 1 */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Code className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  GWAS-Pipeline
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Complete pipeline for genome-wide association analysis including quality control, 
                population stratification, and association testing.
              </p>
              <a
                href="https://saumstats.github.io/saurabhmishra/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm"
              >
                <Github className="w-4 h-4 mr-1" />
                View on GitHub
              </a>
            </div>

            {/* Example Repository 2 */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Code className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  TWAS-Tools
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Transcriptome-wide association study tools for integrating gene expression 
                data with GWAS summary statistics.
              </p>
              <a
                href="https://saumstats.github.io/saurabhmishra/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm"
              >
                <Github className="w-4 h-4 mr-1" />
                View on GitHub
              </a>
            </div>

            {/* Add more repositories here */}
          </div>
        </section>

        {/* Contributing Section */}
        {/* <section className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Contributions Welcome
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            These tools are open-source and community-driven. Contributions, bug reports, 
            and feature requests are welcome on GitHub.
          </p>
          <a
            href="https://github.com/SauMStats"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            Visit GitHub Profile
          </a>
        </section> */}
      </div>
    </div>
  );
}
