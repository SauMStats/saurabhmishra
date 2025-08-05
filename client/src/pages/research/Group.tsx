import { Users, Target, Microscope, BookOpen } from "lucide-react";

export default function ResearchGroup() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-group-heading">
            Research Group
          </h1>
          <p className="text-xl text-academic-gray max-w-3xl mx-auto" data-testid="text-group-subtitle">
            The Interpretable AI Lab focuses on developing transparent, fair, and robust machine learning systems for critical applications
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-16" data-testid="section-mission">
          <div className="bg-academic-light rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-academic-blue mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              We believe that artificial intelligence should be transparent, fair, and beneficial to all members of society. Our research group is dedicated to developing machine learning methods that are not only technically advanced but also interpretable and ethically sound.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By focusing on applications in healthcare, climate science, and social good, we aim to create AI systems that can be trusted and understood by domain experts and the broader public.
            </p>
          </div>
        </section>

        {/* Research Areas */}
        <section className="mb-16" data-testid="section-research-areas">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-academic-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <Microscope className="w-6 h-6 text-academic-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Neural Architecture Search</h3>
              <p className="text-gray-600 leading-relaxed">
                Developing automated methods for discovering interpretable neural network architectures that maintain high performance while providing explainable decision-making processes.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fairness in AI</h3>
              <p className="text-gray-600 leading-relaxed">
                Investigating algorithmic bias and developing methods to ensure equitable outcomes across different demographic groups, particularly in healthcare applications.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Climate Informatics</h3>
              <p className="text-gray-600 leading-relaxed">
                Applying deep learning techniques to climate modeling, weather prediction, and environmental monitoring to support climate change research and policy.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="mb-16" data-testid="section-team">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Team Members</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Principal Investigator */}
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
                alt="Dr. Sarah Chen" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                data-testid="img-pi"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Dr. Sarah Chen</h3>
              <p className="text-academic-gray text-sm mb-2">Principal Investigator</p>
              <p className="text-gray-600 text-xs">PhD Computer Science, Stanford</p>
            </div>

            {/* PhD Students */}
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
                alt="Alex Rodriguez" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                data-testid="img-student1"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Alex Rodriguez</h3>
              <p className="text-academic-gray text-sm mb-2">PhD Student</p>
              <p className="text-gray-600 text-xs">Focus: Neural Architecture Search</p>
            </div>

            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b31c8dc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
                alt="Emily Zhang" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                data-testid="img-student2"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Emily Zhang</h3>
              <p className="text-academic-gray text-sm mb-2">PhD Student</p>
              <p className="text-gray-600 text-xs">Focus: AI Fairness & Ethics</p>
            </div>

            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
                alt="David Kim" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                data-testid="img-student3"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-1">David Kim</h3>
              <p className="text-academic-gray text-sm mb-2">PhD Student</p>
              <p className="text-gray-600 text-xs">Focus: Climate Informatics</p>
            </div>
          </div>
        </section>

        {/* Current Projects */}
        <section data-testid="section-projects">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Projects</h2>
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AutoML for Healthcare</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Developing automated machine learning systems specifically designed for medical applications, with built-in fairness constraints and interpretability requirements. This project aims to make AI more accessible to healthcare professionals while ensuring ethical deployment.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-academic-blue bg-opacity-10 text-academic-blue text-sm rounded-full">NSF Funded</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Collaboration with UCSF</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Climate Pattern Recognition</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Using transformer networks and other deep learning architectures to identify and predict climate patterns from large-scale environmental datasets. This work supports climate change research and policy development.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">NOAA Partnership</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Open Source</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Interpretable Deep Learning</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Developing new methods for understanding and explaining deep neural network decisions, particularly in high-stakes applications where transparency is crucial for trust and adoption.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full">Industry Collaboration</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">Under Review</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
