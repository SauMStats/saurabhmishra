import { Users, MapPin, ExternalLink, Mail, Building } from "lucide-react";

export default function Collaborators() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-collaborators-heading">
            Collaborators
          </h1>
          <p className="text-xl text-academic-gray" data-testid="text-collaborators-subtitle">
            Research partnerships and academic collaborations
          </p>
        </div>

        {/* Academic Collaborators */}
        <section className="mb-16" data-testid="section-academic">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Academic Collaborators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Collaborator 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                  alt="Dr. Michael Johnson" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  data-testid="img-collaborator-johnson"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Dr. Michael Johnson</h3>
                  <p className="text-academic-gray text-sm">Professor of Computer Science</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Stanford University</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Stanford, CA</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Collaboration on interpretable neural architecture search for medical applications. Co-authored 3 papers on automated ML for healthcare.
              </p>
              <div className="flex space-x-3">
                <a href="mailto:mjohnson@stanford.edu" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-johnson-email">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-johnson-profile">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Collaborator 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b31c8dc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                  alt="Dr. Lisa Wang" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  data-testid="img-collaborator-wang"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Dr. Lisa Wang</h3>
                  <p className="text-academic-gray text-sm">Associate Professor</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>MIT CSAIL</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Cambridge, MA</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Joint research on fairness in machine learning systems. Leading expert in algorithmic bias detection and mitigation strategies.
              </p>
              <div className="flex space-x-3">
                <a href="mailto:lwang@mit.edu" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-wang-email">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-wang-profile">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Collaborator 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                  alt="Dr. Robert Kim" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  data-testid="img-collaborator-kim"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Dr. Robert Kim</h3>
                  <p className="text-academic-gray text-sm">Senior Research Scientist</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>NOAA Climate Center</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Boulder, CO</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Collaboration on climate informatics and deep learning applications for environmental science. Expert in atmospheric modeling.
              </p>
              <div className="flex space-x-3">
                <a href="mailto:rkim@noaa.gov" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-kim-email">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-kim-profile">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Collaborator 4 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                  alt="Dr. Maria Gonzalez" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  data-testid="img-collaborator-gonzalez"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Dr. Maria Gonzalez</h3>
                  <p className="text-academic-gray text-sm">Professor of Medicine</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>UCSF Medical School</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Interdisciplinary research on AI applications in healthcare. Provides clinical expertise for medical AI ethics research.
              </p>
              <div className="flex space-x-3">
                <a href="mailto:mgonzalez@ucsf.edu" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-gonzalez-email">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-gonzalez-profile">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Collaborator 5 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                  alt="Dr. David Rodriguez" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  data-testid="img-collaborator-rodriguez"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Dr. David Rodriguez</h3>
                  <p className="text-academic-gray text-sm">Assistant Professor</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>UC Berkeley</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Berkeley, CA</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Research collaboration on ethical AI systems and responsible machine learning practices. Joint work on fairness metrics.
              </p>
              <div className="flex space-x-3">
                <a href="mailto:drodriguez@berkeley.edu" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-rodriguez-email">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-rodriguez-profile">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Collaborator 6 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100" 
                  alt="Dr. Emily Zhang" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  data-testid="img-collaborator-zhang"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Dr. Emily Zhang</h3>
                  <p className="text-academic-gray text-sm">Research Scientist</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Google Research</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Mountain View, CA</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Industry collaboration on scalable machine learning systems. Joint research on automated hyperparameter optimization.
              </p>
              <div className="flex space-x-3">
                <a href="mailto:ezhang@google.com" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-zhang-email">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-zhang-profile">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Research Networks */}
        <section className="mb-16" data-testid="section-networks">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Networks & Consortiums</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-academic-light rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-academic-blue mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">Partnership on AI</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Member of the Partnership on AI, a multi-stakeholder organization focused on AI's benefits for people and society. Contributing to working groups on fairness and transparency.
              </p>
              <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200 text-sm" data-testid="link-partnership-ai">
                Learn more →
              </a>
            </div>

            <div className="bg-academic-light rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-academic-blue mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">AI for Social Good</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Participating in the AI for Social Good research network, collaborating on projects that apply AI to address societal challenges in healthcare and climate change.
              </p>
              <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200 text-sm" data-testid="link-ai-social-good">
                Learn more →
              </a>
            </div>

            <div className="bg-academic-light rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-academic-blue mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">Climate Change AI</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Active member of Climate Change AI, a global community of researchers applying machine learning to tackle climate change challenges.
              </p>
              <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200 text-sm" data-testid="link-climate-ai">
                Learn more →
              </a>
            </div>

            <div className="bg-academic-light rounded-xl p-8">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-academic-blue mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">Medical AI Consortium</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Founding member of the Medical AI Consortium, bringing together researchers, clinicians, and industry partners to advance healthcare applications of AI.
              </p>
              <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200 text-sm" data-testid="link-medical-ai">
                Learn more →
              </a>
            </div>
          </div>
        </section>

        {/* Collaboration Opportunities */}
        <section className="bg-academic-light rounded-xl p-8" data-testid="section-opportunities">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Collaboration Opportunities</h2>
          <p className="text-gray-600 mb-6">
            I'm always interested in new collaborative opportunities, particularly in the following areas:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Interdisciplinary Research</h3>
              <p className="text-gray-600 text-sm">
                Collaborations between computer science and domain experts in healthcare, climate science, and social sciences
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Industry Partnerships</h3>
              <p className="text-gray-600 text-sm">
                Working with industry partners to deploy research solutions in real-world applications
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">International Collaborations</h3>
              <p className="text-gray-600 text-sm">
                Cross-border research initiatives addressing global challenges in AI ethics and climate change
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Open Source Projects</h3>
              <p className="text-gray-600 text-sm">
                Contributing to open source initiatives that advance the state of interpretable and fair AI systems
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a href="/contact" className="inline-flex items-center px-6 py-3 bg-academic-blue text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200" data-testid="button-contact-collaborate">
              Get in Touch
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
