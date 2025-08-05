import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";

export default function Bio() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-bio-heading">
            About Me
          </h1>
          <p className="text-xl text-academic-gray" data-testid="text-bio-subtitle">
            My academic journey and research background
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Profile Image */}
          <div className="md:col-span-1">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500" 
              alt="Dr. Sarah Chen" 
              className="w-full rounded-lg shadow-lg object-cover"
              data-testid="img-bio-profile"
            />
          </div>

          {/* Bio Content */}
          <div className="md:col-span-2 space-y-8">
            <div data-testid="section-background">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Background</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                I am a PhD candidate in Computer Science at Stanford University, specializing in machine learning and artificial intelligence. My research focuses on developing interpretable and fair AI systems, particularly for applications in healthcare and climate science.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Prior to my doctoral studies, I completed my Master's degree in Computer Science at MIT and my Bachelor's degree in Mathematics and Computer Science at UC Berkeley. My interdisciplinary background allows me to approach complex problems from both theoretical and practical perspectives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I am passionate about bridging the gap between cutting-edge research and real-world applications, ensuring that AI systems are not only technically advanced but also ethically sound and socially beneficial.
              </p>
            </div>

            <div data-testid="section-education">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Education</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="w-6 h-6 text-academic-blue mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">PhD in Computer Science</h3>
                    <p className="text-academic-gray">Stanford University</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>2020 - Present</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                      Dissertation: "Interpretable Neural Architecture Search for Healthcare Applications"
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <GraduationCap className="w-6 h-6 text-academic-blue mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Master of Science in Computer Science</h3>
                    <p className="text-academic-gray">Massachusetts Institute of Technology</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>2018 - 2020</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                      Focus: Machine Learning and Artificial Intelligence
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <GraduationCap className="w-6 h-6 text-academic-blue mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Bachelor of Science</h3>
                    <p className="text-academic-gray">University of California, Berkeley</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>2014 - 2018</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                      Double Major: Mathematics and Computer Science, Summa Cum Laude
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div data-testid="section-interests">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Research Interests</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-academic-light p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Neural Architecture Search</h3>
                  <p className="text-gray-600 text-sm">
                    Automated design of neural network architectures with interpretability constraints
                  </p>
                </div>
                <div className="bg-academic-light p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">AI Ethics & Fairness</h3>
                  <p className="text-gray-600 text-sm">
                    Developing fair and unbiased machine learning systems for healthcare
                  </p>
                </div>
                <div className="bg-academic-light p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Climate Informatics</h3>
                  <p className="text-gray-600 text-sm">
                    Applying deep learning to climate modeling and environmental science
                  </p>
                </div>
                <div className="bg-academic-light p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Interpretable AI</h3>
                  <p className="text-gray-600 text-sm">
                    Creating transparent and explainable artificial intelligence systems
                  </p>
                </div>
              </div>
            </div>

            <div data-testid="section-awards">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Awards & Honors</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Award className="w-5 h-5 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">NSF Graduate Research Fellowship</h3>
                    <p className="text-gray-600 text-sm">National Science Foundation, 2021</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="w-5 h-5 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Outstanding Paper Award</h3>
                    <p className="text-gray-600 text-sm">NeurIPS Conference, 2023</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="w-5 h-5 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Google PhD Fellowship</h3>
                    <p className="text-gray-600 text-sm">Machine Learning, 2022</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="w-5 h-5 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phi Beta Kappa</h3>
                    <p className="text-gray-600 text-sm">UC Berkeley, 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
