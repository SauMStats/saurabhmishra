// import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";

// export default function Talks() {
//   return (
//     <div className="min-h-screen bg-white py-16">
//       <div className="max-w-4xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-talks-heading">
//             Talks & Presentations
//           </h1>
//           <p className="text-xl text-academic-gray" data-testid="text-talks-subtitle">
//             Recent invited talks, conference presentations, and seminar series
//           </p>
//         </div>

//         {/* Upcoming Talks */}
//         <section className="mb-16" data-testid="section-upcoming">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-8">Upcoming Talks</h2>
//           <div className="space-y-6">
//             <div className="bg-academic-light border-l-4 border-academic-blue p-6 rounded-r-lg">
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">
//                   "Interpretable AI for Healthcare: Challenges and Opportunities"
//                 </h3>
//                 <span className="px-3 py-1 bg-academic-blue text-white text-sm rounded-full self-start">Keynote</span>
//               </div>
//               <div className="space-y-2 text-gray-600">
//                 <div className="flex items-center">
//                   <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
//                   <span>December 15, 2023</span>
//                 </div>
//                 <div className="flex items-center">
//                   <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
//                   <span>International Conference on Medical AI, Boston, MA</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Users className="w-4 h-4 mr-2 text-academic-blue" />
//                   <span>Expected attendance: 500+ researchers</span>
//                 </div>
//               </div>
//               <p className="text-gray-600 mt-4">
//                 This keynote will explore the current state of interpretable AI in healthcare, discussing both technical challenges and practical deployment considerations for clinical settings.
//               </p>
//             </div>

//             <div className="bg-white border border-gray-200 p-6 rounded-lg">
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">
//                   "Neural Architecture Search: From Theory to Practice"
//                 </h3>
//                 <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full self-start">Invited Talk</span>
//               </div>
//               <div className="space-y-2 text-gray-600">
//                 <div className="flex items-center">
//                   <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
//                   <span>January 10, 2024</span>
//                 </div>
//                 <div className="flex items-center">
//                   <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
//                   <span>MIT Computer Science Seminar Series</span>
//                 </div>
//               </div>
//               <p className="text-gray-600 mt-4">
//                 A technical deep-dive into recent advances in neural architecture search, with a focus on practical applications and real-world deployment challenges.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Recent Talks */}
//         <section data-testid="section-recent">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-8">Recent Talks</h2>
//           <div className="space-y-8">
//             {/* NeurIPS 2023 */}
//             <div className="border-l-4 border-gray-300 pl-6">
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">
//                   "Interpretable Neural Architecture Search for Medical Image Analysis"
//                 </h3>
//                 <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full self-start">Conference Paper</span>
//               </div>
//               <div className="space-y-2 text-gray-600 mb-4">
//                 <div className="flex items-center">
//                   <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
//                   <span>December 12, 2023</span>
//                 </div>
//                 <div className="flex items-center">
//                   <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
//                   <span>NeurIPS 2023, New Orleans, LA</span>
//                 </div>
//               </div>
//               <p className="text-gray-600 mb-4">
//                 Presented our award-winning paper on interpretable neural architecture search, demonstrating how automated architecture design can be made transparent and explainable for medical applications.
//               </p>
//               <div className="flex space-x-4 text-sm">
//                 <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-neurips-slides">
//                   <ExternalLink className="w-4 h-4 mr-1" />
//                   Slides
//                 </a>
//                 <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-neurips-video">
//                   <ExternalLink className="w-4 h-4 mr-1" />
//                   Video
//                 </a>
//               </div>
//             </div>

//             {/* Google Research */}
//             <div className="border-l-4 border-gray-300 pl-6">
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">
//                   "Building Fair AI Systems: Lessons from Healthcare"
//                 </h3>
//                 <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full self-start">Industry Talk</span>
//               </div>
//               <div className="space-y-2 text-gray-600 mb-4">
//                 <div className="flex items-center">
//                   <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
//                   <span>November 8, 2023</span>
//                 </div>
//                 <div className="flex items-center">
//                   <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
//                   <span>Google Research, Mountain View, CA</span>
//                 </div>
//               </div>
//               <p className="text-gray-600 mb-4">
//                 Shared insights on developing ethical AI systems with Google's AI research team, focusing on practical approaches to addressing algorithmic bias in healthcare applications.
//               </p>
//               <div className="flex space-x-4 text-sm">
//                 <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-google-slides">
//                   <ExternalLink className="w-4 h-4 mr-1" />
//                   Slides
//                 </a>
//               </div>
//             </div>

//             {/* Stanford AI Seminar */}
//             <div className="border-l-4 border-gray-300 pl-6">
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">
//                   "Climate Pattern Recognition Using Deep Learning"
//                 </h3>
//                 <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full self-start">Seminar</span>
//               </div>
//               <div className="space-y-2 text-gray-600 mb-4">
//                 <div className="flex items-center">
//                   <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
//                   <span>October 15, 2023</span>
//                 </div>
//                 <div className="flex items-center">
//                   <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
//                   <span>Stanford Institute for Human-Centered AI</span>
//                 </div>
//               </div>
//               <p className="text-gray-600 mb-4">
//                 Presented our work on applying transformer networks to climate data analysis, demonstrating state-of-the-art performance in weather pattern recognition tasks.
//               </p>
//               <div className="flex space-x-4 text-sm">
//                 <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-stanford-slides">
//                   <ExternalLink className="w-4 h-4 mr-1" />
//                   Slides
//                 </a>
//                 <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-stanford-video">
//                   <ExternalLink className="w-4 h-4 mr-1" />
//                   Video
//                 </a>
//               </div>
//             </div>

//             {/* ICML Workshop */}
//             <div className="border-l-4 border-gray-300 pl-6">
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">
//                   "Fairness-Aware AutoML: Challenges and Solutions"
//                 </h3>
//                 <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full self-start">Workshop</span>
//               </div>
//               <div className="space-y-2 text-gray-600 mb-4">
//                 <div className="flex items-center">
//                   <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
//                   <span>July 28, 2023</span>
//                 </div>
//                 <div className="flex items-center">
//                   <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
//                   <span>ICML 2023 Workshop on Responsible AI, Honolulu, HI</span>
//                 </div>
//               </div>
//               <p className="text-gray-600 mb-4">
//                 Workshop presentation on integrating fairness constraints into automated machine learning pipelines, with particular focus on healthcare applications.
//               </p>
//               <div className="flex space-x-4 text-sm">
//                 <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-icml-slides">
//                   <ExternalLink className="w-4 h-4 mr-1" />
//                   Slides
//                 </a>
//                 <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-icml-poster">
//                   <ExternalLink className="w-4 h-4 mr-1" />
//                   Poster
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Speaking Topics */}
//         <section className="mt-16 bg-academic-light rounded-xl p-8" data-testid="section-topics">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-6">Speaking Topics</h2>
//           <p className="text-gray-600 mb-6">
//             I'm available to speak on the following topics. Please feel free to reach out if you'd like me to present at your event or seminar.
//           </p>
//           <div className="grid md:grid-cols-2 gap-4">
//             <div className="bg-white p-4 rounded-lg">
//               <h3 className="font-semibold text-gray-900 mb-2">Neural Architecture Search</h3>
//               <p className="text-gray-600 text-sm">
//                 Automated design of neural networks, interpretability, and practical applications
//               </p>
//             </div>
//             <div className="bg-white p-4 rounded-lg">
//               <h3 className="font-semibold text-gray-900 mb-2">AI Ethics & Fairness</h3>
//               <p className="text-gray-600 text-sm">
//                 Algorithmic bias, fairness metrics, and responsible AI deployment
//               </p>
//             </div>
//             <div className="bg-white p-4 rounded-lg">
//               <h3 className="font-semibold text-gray-900 mb-2">Healthcare AI</h3>
//               <p className="text-gray-600 text-sm">
//                 Medical AI applications, regulatory considerations, and clinical deployment
//               </p>
//             </div>
//             <div className="bg-white p-4 rounded-lg">
//               <h3 className="font-semibold text-gray-900 mb-2">Climate Informatics</h3>
//               <p className="text-gray-600 text-sm">
//                 Deep learning for climate science, environmental monitoring, and policy
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }


import { Calendar, MapPin, Users } from "lucide-react";

export default function Talks() {
  return (
    /* CHANGED: Added dark:bg-gray-900 */
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          {/* CHANGED: Added dark:text-gray-100 */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Talks & Presentations
          </h1>
          {/* CHANGED: Added dark:text-gray-400 */}
          <p className="text-xl text-academic-gray dark:text-gray-400">
            Conference presentations, seminars, and invited talks
          </p>
        </div>

        {/* Talks Section */}
        <section className="space-y-10">
          {/* Talk 1 */}
          {/* CHANGED: Added dark:bg-gray-800 */}
          <div className="bg-academic-light dark:bg-gray-800 border-l-4 border-academic-blue p-6 rounded-r-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              {/* CHANGED: Added dark:text-gray-100 */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                A Multivariate Approach to Joint Testing of Main Genetic and
                Gene–Environment Interaction Effects
              </h3>
              <span className="px-4 py-1 bg-academic-blue text-white text-sm rounded-full self-start">
                Conference
              </span>
            </div>

            {/* CHANGED: Added dark:text-gray-300 */}
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                <span>December 27–31, 2024</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                <span>
                  Annual Conference of the International Indian Statistical
                  Association (IISA 2024), Cochin University of Science and
                  Technology
                </span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Contributed talk presenting a multivariate statistical framework
              for jointly testing genetic main effects and gene–environment
              interactions across correlated phenotypes, with applications to
              complex traits.
            </p>
          </div>

          {/* Talk 2 */}
          {/* CHANGED: Added dark:border-gray-600 */}
          <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                A Multivariate Approach to Joint Testing of Main Genetic and
                Gene–Environment Interaction Effects
              </h3>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full self-start">
                Conference
              </span>
            </div>

            <div className="space-y-2 text-gray-600 dark:text-gray-300 mb-3">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                <span>February 12–14, 2024</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                <span>
                  National Conference on Recent Developments in Mathematical
                  Sciences (NCRDMS 2024), University of Hyderabad
                </span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300">
              Oral presentation focusing on multivariate inference for joint
              testing of genetic and gene–environment interaction effects,
              highlighting methodological advantages over univariate
              approaches.
            </p>
          </div>

          {/* Talk 3 */}
          <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                A p-Value Aggregation Approach to Robust Gene–Environment
                Interaction Testing
              </h3>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full self-start">
                Symposium
              </span>
            </div>

            <div className="space-y-2 text-gray-600 dark:text-gray-300 mb-3">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                <span>January 31, 2026</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                <span>
                  Collaborative Research Symposium on Mathematics, IIT Hyderabad
                </span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300">
              Presented a robust p-value aggregation framework for testing
              gene–environment interactions, emphasizing stability, power, and
              applicability to large-scale genetic studies.
            </p>
          </div>
        </section>

        {/* Speaking Topics */}
        {/* CHANGED: Added dark:bg-gray-800 */}
        <section className="mt-16 bg-academic-light dark:bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Speaking Topics
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I am available to give seminars and conference talks on the following
            topics:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {/* CHANGED: Added dark:bg-gray-700 to all topic cards */}
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Statistical Genetics
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Genetic association studies, polygenic models, and inference for
                complex traits
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Gene–Environment Interactions
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Methodology for detecting and testing G×E effects in GWAS and
                biobank-scale data
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Multivariate Methods
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Joint testing, correlated phenotypes, and multivariate
                hypothesis testing
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                GWAS & TWAS Methodology
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Genome-wide and transcriptome-wide association studies, power,
                and modeling challenges
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}