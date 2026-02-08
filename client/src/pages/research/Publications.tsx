import { ExternalLink, Code } from "lucide-react";

export default function Publications() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Publications
          </h1>
          <p className="text-xl text-academic-gray">
            Peer-reviewed journal articles
          </p>
        </div>

        {/* Publication */}
        <section>
          <div className="bg-academic-light border-l-4 border-academic-blue p-8 rounded-r-lg">

            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              A Multi-Phenotype Approach to Joint Testing of Main Genetic and
              Gene–Environment Interaction Effects
            </h2>

            <p className="text-academic-gray mb-2">
              <span className="font-medium">Saurabh Mishra</span>, Arunabha Majumdar
            </p>

            <p className="text-sm text-gray-500 mb-4">
              <em>
                Statistics in Medicine, Volume 44, Issues 20–22 (2025), e70253
              </em>
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              This paper proposes a unified multivariate framework for joint
              testing of main genetic effects and gene–environment interactions
              across multiple correlated phenotypes. The proposed approach
              improves power and interpretability in large-scale genetic studies,
              particularly in settings involving complex traits and
              gene–environment interplay.
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="https://doi.org/10.1002/sim.70253"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                DOI
              </a>

              <a
                href="https://scholar.googleusercontent.com/scholar.bib?q=info:oGwl1mZ_SM0J:scholar.google.com/&output=citation&scisdr=Cn1nDsW2EJWSxRaAc1c:AHkA5jQAAAAAaYSGa1eNsS9e-idGyLnvssJzybE&scisig=AHkA5jQAAAAAaYSGa4F-P4rCtnWNt4xsjUq0zGQ&scisf=4&ct=citation&cd=-1&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200"
              >
                <Code className="w-4 h-4 mr-1" />
                BibTeX
              </a>
            </div>
          </div>
        </section>

        {/* External Profiles */}
        <section className="mt-16 bg-academic-light rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Academic Profiles
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200"
            >
              <ExternalLink className="w-6 h-6 text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold text-gray-900">Google Scholar</h3>
                <p className="text-gray-600 text-sm">
                  Citation metrics and publications
                </p>
              </div>
            </a>

            <a
              href="https://orcid.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200"
            >
              <ExternalLink className="w-6 h-6 text-green-600 mr-4" />
              <div>
                <h3 className="font-semibold text-gray-900">ORCID</h3>
                <p className="text-gray-600 text-sm">
                  Persistent researcher identifier
                </p>
              </div>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}








// import { ExternalLink, Download, Code, Database } from "lucide-react";

// export default function Publications() {
//   return (
//     <div className="min-h-screen bg-white py-16">
//       <div className="max-w-4xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-publications-heading">
//             Publications
//           </h1>
//           <p className="text-xl text-academic-gray" data-testid="text-publications-subtitle">
//             Peer-reviewed papers, preprints, and research contributions
//           </p>
//         </div>

//         {/* Publication Statistics */}
//         <section className="mb-16" data-testid="section-stats">
//           <div className="bg-academic-light rounded-xl p-8">
//             <div className="grid md:grid-cols-4 gap-8 text-center">
//               <div>
//                 <div className="text-3xl font-bold text-academic-blue mb-2">24</div>
//                 <div className="text-gray-600">Total Papers</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-academic-blue mb-2">1,247</div>
//                 <div className="text-gray-600">Citations</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-academic-blue mb-2">18</div>
//                 <div className="text-gray-600">h-index</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-academic-blue mb-2">12</div>
//                 <div className="text-gray-600">Collaborators</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Recent Publications */}
//         <section className="mb-16" data-testid="section-recent">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-8">Recent Publications (2023-2024)</h2>
//           <div className="space-y-8">
//             {/* Publication 1 - Featured */}
//             <div className="bg-academic-light border-l-4 border-academic-blue p-8 rounded-r-lg">
//               <div className="flex items-start justify-between mb-4">
//                 <div className="flex-1">
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                     Interpretable Neural Architecture Search for Medical Image Analysis
//                   </h3>
//                   <p className="text-academic-gray mb-2">
//                     <span className="font-medium">Sarah Chen</span>, Michael Johnson, Lisa Wang
//                   </p>
//                   <p className="text-sm text-gray-500 mb-3">
//                     <em>Advances in Neural Information Processing Systems (NeurIPS 2023)</em>
//                   </p>
//                 </div>
//                 <div className="flex flex-col space-y-2 ml-4">
//                   <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full text-center">Outstanding Paper</span>
//                   <span className="px-3 py-1 bg-academic-blue text-white text-xs rounded-full text-center">Top Venue</span>
//                 </div>
//               </div>
//               <p className="text-gray-600 leading-relaxed mb-4">
//                 We present a novel approach to neural architecture search that provides interpretable explanations for architectural choices while maintaining competitive performance on medical imaging tasks. Our method introduces interpretability constraints into the search process, enabling healthcare professionals to understand and trust automated network design decisions.
//               </p>
//               <div className="flex flex-wrap gap-4 text-sm">
//                 <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-pub1-pdf">
//                   <Download className="w-4 h-4 mr-1" />
//                   PDF
//                 </a>
//                 <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-pub1-code">
//                   <Code className="w-4 h-4 mr-1" />
//                   Code
//                 </a>
//                 <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-pub1-data">
//                   <Database className="w-4 h-4 mr-1" />
//                   Dataset
//                 </a>
//                 <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-pub1-bibtex">
//                   <ExternalLink className="w-4 h-4 mr-1" />
//                   BibTeX
//                 </a>
//               </div>
//             </div>

//             {/* Publication 2 */}
//             <div className="border-l-4 border-gray-300 pl-6 py-4">
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 Fairness-Aware Deep Learning for Healthcare Applications
//               </h3>
//               <p className="text-academic-gray mb-3">
//                 <span className="font-medium">Sarah Chen</span>, David Rodriguez, Emily Zhang
//               </p>
//               <p className="text-sm text-gray-500 mb-3">
//                 <em>Journal of Medical Internet Research (JMIR 2023)</em> • Impact Factor: 7.076
//               </p>
//               <p className="text-gray-600 leading-relaxed mb-4">
//                 This work addresses algorithmic bias in healthcare AI systems by developing fairness-aware training methods that ensure equitable outcomes across demographic groups. We propose novel fairness metrics specifically designed for medical applications and demonstrate their effectiveness across multiple healthcare datasets.
//               </p>
//               <div className="flex flex-wrap gap-4 text-sm">
//                 <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-pub2-pdf">
//                   <Download className="w-4 h-4 mr-1" />
//                   PDF
//                 </a>
//                 <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-pub2-supplementary">
//                   <ExternalLink className="w-4 h-4 mr-1" />
//                   Supplementary
//                 </a>
//                 <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-pub2-bibtex">
//                   <ExternalLink className="w-4 h-4 mr-1" />
//                   BibTeX
//                 </a>
//               </div>
//             </div>

//             {/* Publication 3 */}
//             <div className="border-l-4 border-gray-300 pl-6 py-4">
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 Climate Pattern Recognition Using Transformer Networks
//               </h3>
//               <p className="text-academic-gray mb-3">
//                 Robert Kim, <span className="font-medium">Sarah Chen</span>, Maria Gonzalez
//               </p>
//               <p className="text-sm text-gray-500 mb-3">
//                 <em>Nature Climate Change (2023)</em> • Impact Factor: 29.3
//               </p>
//               <p className="text-gray-600 leading-relaxed mb-4">
//                 We demonstrate how transformer architectures can be adapted for climate data analysis, achieving state-of-the-art performance in weather pattern recognition tasks. Our approach enables better long-term climate predictions and supports climate change impact assessment.
//               </p>
//               <div className="flex flex-wrap gap-4 text-sm">
//                 <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-pub3-pdf">
//                   <Download className="w-4 h-4 mr-1" />
//                   PDF
//                 </a>
//                 <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-pub3-data">
//                   <Database className="w-4 h-4 mr-1" />
//                   Dataset
//                 </a>
//                 <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-pub3-bibtex">
//                   <ExternalLink className="w-4 h-4 mr-1" />
//                   BibTeX
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Preprints */}
//         <section className="mb-16" data-testid="section-preprints">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-8">Preprints & Under Review</h2>
//           <div className="space-y-6">
//             <div className="bg-yellow-50 border-l-4 border-yellow-400 pl-6 py-4">
//               <div className="flex items-center justify-between mb-2">
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   Automated Fairness Testing for Machine Learning Systems
//                 </h3>
//                 <span className="px-3 py-1 bg-yellow-200 text-yellow-800 text-xs rounded-full">Under Review</span>
//               </div>
//               <p className="text-academic-gray mb-3">
//                 <span className="font-medium">Sarah Chen</span>, Alex Rodriguez, Jennifer Liu
//               </p>
//               <p className="text-sm text-gray-500 mb-3">
//                 <em>Submitted to International Conference on Machine Learning (ICML 2024)</em>
//               </p>
//               <p className="text-gray-600 leading-relaxed mb-4">
//                 We propose an automated testing framework for evaluating fairness in machine learning systems across multiple demographic attributes and fairness definitions. Our approach provides comprehensive bias detection with minimal human intervention.
//               </p>
//               <div className="flex flex-wrap gap-4 text-sm">
//                 <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-preprint1-arxiv">
//                   <ExternalLink className="w-4 h-4 mr-1" />
//                   arXiv
//                 </a>
//                 <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-preprint1-code">
//                   <Code className="w-4 h-4 mr-1" />
//                   Code
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Earlier Publications */}
//         <section data-testid="section-earlier">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-8">Selected Earlier Publications (2020-2022)</h2>
//           <div className="space-y-6">
//             <div className="border-l-4 border-gray-300 pl-6 py-3">
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                 Efficient Neural Architecture Search via Parameter Sharing
//               </h3>
//               <p className="text-academic-gray mb-2">
//                 <span className="font-medium">Sarah Chen</span>, David Park
//               </p>
//               <p className="text-sm text-gray-500 mb-3">
//                 <em>International Conference on Machine Learning (ICML 2022)</em>
//               </p>
//               <div className="flex flex-wrap gap-4 text-sm">
//                 <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-icml2022-pdf">PDF</a>
//                 <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-icml2022-code">Code</a>
//                 <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-icml2022-bibtex">BibTeX</a>
//               </div>
//             </div>

//             <div className="border-l-4 border-gray-300 pl-6 py-3">
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                 Understanding Bias in Medical AI: A Comprehensive Survey
//               </h3>
//               <p className="text-academic-gray mb-2">
//                 Michael Brown, <span className="font-medium">Sarah Chen</span>, Lisa Thompson
//               </p>
//               <p className="text-sm text-gray-500 mb-3">
//                 <em>AI in Medicine (2021)</em>
//               </p>
//               <div className="flex flex-wrap gap-4 text-sm">
//                 <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-survey-pdf">PDF</a>
//                 <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-survey-bibtex">BibTeX</a>
//               </div>
//             </div>

//             <div className="border-l-4 border-gray-300 pl-6 py-3">
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                 Deep Learning for Climate Data Analysis: Challenges and Opportunities
//               </h3>
//               <p className="text-academic-gray mb-2">
//                 <span className="font-medium">Sarah Chen</span>, Robert Kim, Maria Gonzalez
//               </p>
//               <p className="text-sm text-gray-500 mb-3">
//                 <em>Environmental Data Science (2020)</em>
//               </p>
//               <div className="flex flex-wrap gap-4 text-sm">
//                 <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-climate-pdf">PDF</a>
//                 <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-climate-bibtex">BibTeX</a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* External Links */}
//         <section className="mt-16 bg-academic-light rounded-xl p-8" data-testid="section-profiles">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-6">Academic Profiles</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             <a href="https://scholar.google.com" className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200" data-testid="link-google-scholar">
//               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
//                 <ExternalLink className="w-6 h-6 text-blue-600" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-900">Google Scholar</h3>
//                 <p className="text-gray-600 text-sm">Citation metrics & papers</p>
//               </div>
//             </a>
            
//             <a href="https://orcid.org" className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200" data-testid="link-orcid">
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
//                 <ExternalLink className="w-6 h-6 text-green-600" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-900">ORCID</h3>
//                 <p className="text-gray-600 text-sm">Research identifier</p>
//               </div>
//             </a>
            
//             <a href="https://dblp.org" className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200" data-testid="link-dblp">
//               <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
//                 <ExternalLink className="w-6 h-6 text-purple-600" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-900">DBLP</h3>
//                 <p className="text-gray-600 text-sm">Computer science bibliography</p>
//               </div>
//             </a>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }
