import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";

export default function Talks() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-talks-heading">
            Talks & Presentations
          </h1>
          <p className="text-xl text-academic-gray" data-testid="text-talks-subtitle">
            Recent invited talks, conference presentations, and seminar series
          </p>
        </div>

        {/* Upcoming Talks */}
        <section className="mb-16" data-testid="section-upcoming">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Upcoming Talks</h2>
          <div className="space-y-6">
            <div className="bg-academic-light border-l-4 border-academic-blue p-6 rounded-r-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">
                  "Interpretable AI for Healthcare: Challenges and Opportunities"
                </h3>
                <span className="px-3 py-1 bg-academic-blue text-white text-sm rounded-full self-start">Keynote</span>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>December 15, 2023</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>International Conference on Medical AI, Boston, MA</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Expected attendance: 500+ researchers</span>
                </div>
              </div>
              <p className="text-gray-600 mt-4">
                This keynote will explore the current state of interpretable AI in healthcare, discussing both technical challenges and practical deployment considerations for clinical settings.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">
                  "Neural Architecture Search: From Theory to Practice"
                </h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full self-start">Invited Talk</span>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>January 10, 2024</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>MIT Computer Science Seminar Series</span>
                </div>
              </div>
              <p className="text-gray-600 mt-4">
                A technical deep-dive into recent advances in neural architecture search, with a focus on practical applications and real-world deployment challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Recent Talks */}
        <section data-testid="section-recent">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Recent Talks</h2>
          <div className="space-y-8">
            {/* NeurIPS 2023 */}
            <div className="border-l-4 border-gray-300 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">
                  "Interpretable Neural Architecture Search for Medical Image Analysis"
                </h3>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full self-start">Conference Paper</span>
              </div>
              <div className="space-y-2 text-gray-600 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>December 12, 2023</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>NeurIPS 2023, New Orleans, LA</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Presented our award-winning paper on interpretable neural architecture search, demonstrating how automated architecture design can be made transparent and explainable for medical applications.
              </p>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-neurips-slides">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Slides
                </a>
                <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-neurips-video">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Video
                </a>
              </div>
            </div>

            {/* Google Research */}
            <div className="border-l-4 border-gray-300 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">
                  "Building Fair AI Systems: Lessons from Healthcare"
                </h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full self-start">Industry Talk</span>
              </div>
              <div className="space-y-2 text-gray-600 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>November 8, 2023</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Google Research, Mountain View, CA</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Shared insights on developing ethical AI systems with Google's AI research team, focusing on practical approaches to addressing algorithmic bias in healthcare applications.
              </p>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-google-slides">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Slides
                </a>
              </div>
            </div>

            {/* Stanford AI Seminar */}
            <div className="border-l-4 border-gray-300 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">
                  "Climate Pattern Recognition Using Deep Learning"
                </h3>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full self-start">Seminar</span>
              </div>
              <div className="space-y-2 text-gray-600 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>October 15, 2023</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Stanford Institute for Human-Centered AI</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Presented our work on applying transformer networks to climate data analysis, demonstrating state-of-the-art performance in weather pattern recognition tasks.
              </p>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-stanford-slides">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Slides
                </a>
                <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-stanford-video">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Video
                </a>
              </div>
            </div>

            {/* ICML Workshop */}
            <div className="border-l-4 border-gray-300 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">
                  "Fairness-Aware AutoML: Challenges and Solutions"
                </h3>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full self-start">Workshop</span>
              </div>
              <div className="space-y-2 text-gray-600 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>July 28, 2023</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>ICML 2023 Workshop on Responsible AI, Honolulu, HI</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Workshop presentation on integrating fairness constraints into automated machine learning pipelines, with particular focus on healthcare applications.
              </p>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-icml-slides">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Slides
                </a>
                <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-icml-poster">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Poster
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Speaking Topics */}
        <section className="mt-16 bg-academic-light rounded-xl p-8" data-testid="section-topics">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Speaking Topics</h2>
          <p className="text-gray-600 mb-6">
            I'm available to speak on the following topics. Please feel free to reach out if you'd like me to present at your event or seminar.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Neural Architecture Search</h3>
              <p className="text-gray-600 text-sm">
                Automated design of neural networks, interpretability, and practical applications
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">AI Ethics & Fairness</h3>
              <p className="text-gray-600 text-sm">
                Algorithmic bias, fairness metrics, and responsible AI deployment
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Healthcare AI</h3>
              <p className="text-gray-600 text-sm">
                Medical AI applications, regulatory considerations, and clinical deployment
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Climate Informatics</h3>
              <p className="text-gray-600 text-sm">
                Deep learning for climate science, environmental monitoring, and policy
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
