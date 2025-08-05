import { BookOpen, Clock, Users, Star, ExternalLink } from "lucide-react";

export default function Courses() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-courses-heading">
            Courses
          </h1>
          <p className="text-xl text-academic-gray" data-testid="text-courses-subtitle">
            Courses taught and developed
          </p>
        </div>

        {/* Current Courses */}
        <section className="mb-16" data-testid="section-current">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Current Courses (2023-2024)</h2>
          <div className="space-y-8">
            {/* Course 1 */}
            <div className="bg-academic-light border-l-4 border-academic-blue p-8 rounded-r-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    CS 229: Machine Learning
                  </h3>
                  <p className="text-academic-gray">Stanford University • Fall 2023</p>
                </div>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                  <span className="px-3 py-1 bg-academic-blue text-white text-sm rounded-full">Co-Instructor</span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm text-gray-600">4.8/5.0</span>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>180 students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>3 credit hours</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Graduate level</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Advanced course covering machine learning theory and applications. Topics include supervised learning, unsupervised learning, deep learning, and reinforcement learning. Emphasis on mathematical foundations and practical implementation.
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Topics:</h4>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="px-3 py-1 bg-white text-gray-700 rounded-full border">Linear Regression</span>
                  <span className="px-3 py-1 bg-white text-gray-700 rounded-full border">Neural Networks</span>
                  <span className="px-3 py-1 bg-white text-gray-700 rounded-full border">SVM</span>
                  <span className="px-3 py-1 bg-white text-gray-700 rounded-full border">Clustering</span>
                  <span className="px-3 py-1 bg-white text-gray-700 rounded-full border">Deep Learning</span>
                  <span className="px-3 py-1 bg-white text-gray-700 rounded-full border">Reinforcement Learning</span>
                </div>
              </div>

              <div className="flex space-x-4 text-sm">
                <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-cs229-syllabus">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Syllabus
                </a>
                <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-cs229-materials">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Course Materials
                </a>
              </div>
            </div>

            {/* Course 2 */}
            <div className="bg-white border border-gray-200 p-8 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    CS 330: Deep Multi-Task and Meta Learning
                  </h3>
                  <p className="text-academic-gray">Stanford University • Winter 2024</p>
                </div>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Guest Lecturer</span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm text-gray-600">4.9/5.0</span>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>45 students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>3 lectures</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Graduate level</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Guest lectures on neural architecture search and automated machine learning. Covered theoretical foundations and practical applications of AutoML in multi-task learning scenarios.
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Lecture Topics:</h4>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Neural Architecture Search</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">AutoML</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Meta-Learning</span>
                </div>
              </div>

              <div className="flex space-x-4 text-sm">
                <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-cs330-slides">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Lecture Slides
                </a>
                <a href="#" className="flex items-center text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-cs330-video">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Recording
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Previous Courses */}
        <section className="mb-16" data-testid="section-previous">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Previous Courses</h2>
          <div className="space-y-6">
            {/* Previous Course 1 */}
            <div className="border-l-4 border-gray-300 pl-6 py-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    CS 109: Introduction to Probability for Computer Scientists
                  </h3>
                  <p className="text-academic-gray">Stanford University • Spring 2023</p>
                </div>
                <div className="flex items-center space-x-4 mt-2 md:mt-0">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Head TA</span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm text-gray-600">4.7/5.0</span>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>300 students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>3 credit hours</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Undergraduate</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Led teaching team of 8 TAs. Developed new problem sets and exam questions focusing on applications to machine learning and data science.
              </p>

              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-cs109-materials">Course Materials</a>
                <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-cs109-evaluations">Teaching Evaluations</a>
              </div>
            </div>

            {/* Previous Course 2 */}
            <div className="border-l-4 border-gray-300 pl-6 py-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    CS 106A: Programming Methodology
                  </h3>
                  <p className="text-academic-gray">Stanford University • Fall 2022</p>
                </div>
                <div className="flex items-center space-x-4 mt-2 md:mt-0">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Section Leader</span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm text-gray-600">4.6/5.0</span>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>25 students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>2 sections/week</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Introductory</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Led weekly sections for introductory programming course. Focused on helping students develop problem-solving skills and programming fundamentals in Java.
              </p>

              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-cs106a-sections">Section Materials</a>
              </div>
            </div>

            {/* Previous Course 3 */}
            <div className="border-l-4 border-gray-300 pl-6 py-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Mathematics for Machine Learning
                  </h3>
                  <p className="text-academic-gray">MIT Summer Program • Summer 2022</p>
                </div>
                <div className="flex items-center space-x-4 mt-2 md:mt-0">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Instructor</span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm text-gray-600">4.8/5.0</span>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>35 students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>6 weeks intensive</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Graduate prep</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Designed and taught intensive summer course covering essential mathematical concepts for machine learning, including linear algebra, calculus, and probability theory.
              </p>

              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-math-ml-notes">Course Notes</a>
                <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-math-ml-feedback">Student Feedback</a>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section className="bg-academic-light rounded-xl p-8" data-testid="section-philosophy">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Teaching Philosophy</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              My teaching philosophy centers on making complex concepts accessible and engaging for students at all levels. I believe in the importance of connecting theoretical foundations to practical applications, helping students understand not just how algorithms work, but why they matter.
            </p>
            <p>
              In my courses, I emphasize interactive learning through hands-on projects, collaborative problem-solving, and real-world case studies. I strive to create an inclusive classroom environment where students feel comfortable asking questions and exploring ideas.
            </p>
            <p>
              I am particularly committed to increasing diversity in computer science and actively work to support underrepresented students through mentorship and inclusive teaching practices.
            </p>
          </div>
          
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-academic-blue mb-2">500+</div>
              <div className="text-gray-600 text-sm">Students Taught</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-academic-blue mb-2">4.7</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-academic-blue mb-2">8</div>
              <div className="text-gray-600 text-sm">Courses Developed</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
