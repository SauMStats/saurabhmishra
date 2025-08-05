import { Calendar, Users, BookOpen, Award, CheckCircle } from "lucide-react";

export default function TA() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-ta-heading">
            Teaching Assistant Experience
          </h1>
          <p className="text-xl text-academic-gray" data-testid="text-ta-subtitle">
            Supporting student learning through mentorship and instruction
          </p>
        </div>

        {/* TA Summary */}
        <section className="mb-16" data-testid="section-summary">
          <div className="bg-academic-light rounded-xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-academic-blue mb-2">6</div>
                <div className="text-gray-600">Semesters</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-academic-blue mb-2">800+</div>
                <div className="text-gray-600">Students Helped</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-academic-blue mb-2">4.8</div>
                <div className="text-gray-600">Avg Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-academic-blue mb-2">3</div>
                <div className="text-gray-600">TA Awards</div>
              </div>
            </div>
          </div>
        </section>

        {/* Current TA Positions */}
        <section className="mb-16" data-testid="section-current">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Current TA Positions</h2>
          <div className="space-y-8">
            {/* Current Position 1 */}
            <div className="bg-academic-light border-l-4 border-academic-blue p-8 rounded-r-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Head Teaching Assistant
                  </h3>
                  <p className="text-academic-gray">CS 229: Machine Learning • Fall 2023</p>
                </div>
                <span className="px-4 py-2 bg-academic-blue text-white text-sm rounded-full self-start mt-2 md:mt-0">Active</span>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>180 students</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Sep 2023 - Dec 2023</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Graduate level</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Leading a team of 12 teaching assistants for Stanford's flagship machine learning course. Responsible for coordinating office hours, grading assignments, and managing the course discussion forum.
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    <span>Supervise 12 teaching assistants</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    <span>Coordinate weekly staff meetings</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    <span>Design and grade assignments</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    <span>Hold weekly office hours</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    <span>Develop course materials</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    <span>Moderate discussion forums</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Previous TA Positions */}
        <section className="mb-16" data-testid="section-previous">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Previous TA Positions</h2>
          <div className="space-y-6">
            {/* Previous Position 1 */}
            <div className="border-l-4 border-gray-300 pl-6 py-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Head Teaching Assistant
                  </h3>
                  <p className="text-academic-gray">CS 109: Introduction to Probability • Spring 2023</p>
                </div>
                <div className="flex items-center space-x-3 mt-2 md:mt-0">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Outstanding TA Award</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>300 students</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Jan 2023 - Jun 2023</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Undergraduate</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Led team of 8 TAs for large undergraduate probability course. Developed new problem sets incorporating machine learning applications. Received outstanding TA award for exceptional student support.
              </p>

              <div className="text-sm text-gray-500">
                <em>"Sarah's clear explanations and patient guidance helped me understand complex probability concepts. Best TA I've had at Stanford!"</em> - Student feedback
              </div>
            </div>

            {/* Previous Position 2 */}
            <div className="border-l-4 border-gray-300 pl-6 py-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Teaching Assistant
                  </h3>
                  <p className="text-academic-gray">CS 229: Machine Learning • Fall 2022</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full self-start mt-2 md:mt-0">Promoted to Head TA</span>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>160 students</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Sep 2022 - Dec 2022</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Graduate level</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                First-time TA for CS 229. Held office hours, graded assignments, and provided student support. Strong performance led to promotion to Head TA position the following year.
              </p>
            </div>

            {/* Previous Position 3 */}
            <div className="border-l-4 border-gray-300 pl-6 py-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Section Leader
                  </h3>
                  <p className="text-academic-gray">CS 106A: Programming Methodology • Fall 2022</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>25 students per section</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Sep 2022 - Dec 2022</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Introductory</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Led weekly discussion sections for introductory programming course. Helped students with Java programming concepts and debugging. Focused on creating supportive learning environment for programming beginners.
              </p>
            </div>

            {/* Previous Position 4 */}
            <div className="border-l-4 border-gray-300 pl-6 py-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Teaching Assistant
                  </h3>
                  <p className="text-academic-gray">6.034: Artificial Intelligence • MIT • Spring 2020</p>
                </div>
                <div className="flex items-center space-x-3 mt-2 md:mt-0">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">Excellence in Teaching</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>120 students</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Feb 2020 - May 2020</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Undergraduate</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                TA for MIT's undergraduate AI course during master's program. Assisted with labs on search algorithms, machine learning, and knowledge representation. Received teaching excellence award.
              </p>
            </div>

            {/* Previous Position 5 */}
            <div className="border-l-4 border-gray-300 pl-6 py-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Undergraduate Teaching Assistant
                  </h3>
                  <p className="text-academic-gray">CS 61A: Structure and Interpretation of Computer Programs • UC Berkeley • Fall 2017</p>
                </div>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full self-start mt-2 md:mt-0">First TA Role</span>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>30 students</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Aug 2017 - Dec 2017</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Undergraduate</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                First teaching experience as undergraduate TA. Led discussion sections on functional programming concepts in Python and Scheme. Discovered passion for teaching and helping students learn programming.
              </p>
            </div>
          </div>
        </section>

        {/* Teaching Awards */}
        <section className="mb-16" data-testid="section-awards">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Teaching Awards & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-yellow-500 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">Outstanding TA Award</h3>
                  <p className="text-sm text-gray-600">Stanford CS Department</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Awarded for exceptional dedication to student learning and innovative teaching methods in CS 109.
              </p>
              <p className="text-xs text-gray-500 mt-2">Spring 2023</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-green-500 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">Excellence in Teaching</h3>
                  <p className="text-sm text-gray-600">MIT EECS Department</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Recognized for outstanding contributions to undergraduate education in artificial intelligence.
              </p>
              <p className="text-xs text-gray-500 mt-2">Spring 2020</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-blue-500 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">Rising Star TA</h3>
                  <p className="text-sm text-gray-600">UC Berkeley</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Awarded to promising new teaching assistants who show exceptional potential in education.
              </p>
              <p className="text-xs text-gray-500 mt-2">Fall 2017</p>
            </div>
          </div>
        </section>

        {/* TA Training & Development */}
        <section className="bg-academic-light rounded-xl p-8" data-testid="section-training">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">TA Training & Development</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Throughout my TA experience, I have actively participated in professional development opportunities to enhance my teaching skills and support other teaching assistants.
            </p>
          </div>
          
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Training Completed</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span>Inclusive Teaching Workshop</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span>Active Learning Strategies</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span>Supporting Struggling Students</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span>TA Leadership Program</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Mentorship Activities</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span>Mentor to 5 new TAs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span>TA Training Workshop Leader</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span>Diversity & Inclusion Advocate</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span>Student Support Coordinator</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
