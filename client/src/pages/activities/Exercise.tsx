import { Activity, Calendar, Target, TrendingUp, Clock, Award } from "lucide-react";

export default function Exercise() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-exercise-heading">
            Exercise & Fitness
          </h1>
          <p className="text-xl text-academic-gray" data-testid="text-exercise-subtitle">
            Maintaining physical and mental well-being through regular exercise
          </p>
        </div>

        {/* Current Routine */}
        <section className="mb-16" data-testid="section-current-routine">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Current Fitness Routine</h2>
          <div className="bg-academic-light p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Weekly Training Schedule</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Activity className="w-5 h-5 text-academic-blue mr-2" />
                  Cardiovascular Training
                </h4>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Morning runs</span>
                    <span className="text-academic-blue font-medium">Daily, 5-8 miles</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Swimming</span>
                    <span className="text-academic-blue font-medium">2x/week, 2000m</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cycling</span>
                    <span className="text-academic-blue font-medium">Weekend, 20-30 miles</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Target className="w-5 h-5 text-academic-blue mr-2" />
                  Strength & Flexibility
                </h4>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Weight training</span>
                    <span className="text-academic-blue font-medium">3x/week, 45min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Yoga/Stretching</span>
                    <span className="text-academic-blue font-medium">Daily, 15-30min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Core work</span>
                    <span className="text-academic-blue font-medium">4x/week, 20min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fitness Goals */}
        <section className="mb-16" data-testid="section-fitness-goals">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Current Fitness Goals</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Marathon Training</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Training for the 2024 Boston Marathon. Current weekly mileage: 45-50 miles with a focus on building endurance and speed.
              </p>
              <div className="bg-green-50 p-3 rounded text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Target time:</span>
                  <span className="font-semibold text-green-700">3:15:00</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Strength Building</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Focused on functional strength training to support endurance activities and prevent injury. Progressive overload with compound movements.
              </p>
              <div className="bg-blue-50 p-3 rounded text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Focus areas:</span>
                  <span className="font-semibold text-blue-700">Core, Legs, Back</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Activity className="w-6 h-6 text-purple-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Flexibility & Mobility</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Improving flexibility and mobility to enhance athletic performance and reduce injury risk. Daily stretching and weekly yoga sessions.
              </p>
              <div className="bg-purple-50 p-3 rounded text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Daily practice:</span>
                  <span className="font-semibold text-purple-700">20+ minutes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workout Schedule */}
        <section className="mb-16" data-testid="section-schedule">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Weekly Workout Schedule</h2>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid grid-cols-8 gap-0">
              <div className="bg-gray-50 p-4 font-semibold text-gray-900 text-sm">Day</div>
              <div className="bg-gray-50 p-4 font-semibold text-gray-900 text-sm">Morning</div>
              <div className="bg-gray-50 p-4 font-semibold text-gray-900 text-sm">Afternoon</div>
              <div className="bg-gray-50 p-4 font-semibold text-gray-900 text-sm">Duration</div>
              <div className="bg-gray-50 p-4 font-semibold text-gray-900 text-sm">Focus</div>
              <div className="bg-gray-50 p-4 font-semibold text-gray-900 text-sm">Intensity</div>
              <div className="bg-gray-50 p-4 font-semibold text-gray-900 text-sm">Location</div>
              <div className="bg-gray-50 p-4 font-semibold text-gray-900 text-sm">Notes</div>

              {/* Monday */}
              <div className="p-4 border-t font-medium text-gray-900">Mon</div>
              <div className="p-4 border-t text-sm text-gray-600">Easy run (6 miles)</div>
              <div className="p-4 border-t text-sm text-gray-600">Strength training</div>
              <div className="p-4 border-t text-sm text-gray-600">90 min</div>
              <div className="p-4 border-t text-sm text-gray-600">Base building</div>
              <div className="p-4 border-t text-sm text-academic-blue">Moderate</div>
              <div className="p-4 border-t text-sm text-gray-600">Trail + Gym</div>
              <div className="p-4 border-t text-sm text-gray-600">Recovery focused</div>

              {/* Tuesday */}
              <div className="p-4 border-t font-medium text-gray-900">Tue</div>
              <div className="p-4 border-t text-sm text-gray-600">Swimming</div>
              <div className="p-4 border-t text-sm text-gray-600">Yoga</div>
              <div className="p-4 border-t text-sm text-gray-600">75 min</div>
              <div className="p-4 border-t text-sm text-gray-600">Cross-training</div>
              <div className="p-4 border-t text-sm text-green-600">Easy</div>
              <div className="p-4 border-t text-sm text-gray-600">Pool + Home</div>
              <div className="p-4 border-t text-sm text-gray-600">Active recovery</div>

              {/* Wednesday */}
              <div className="p-4 border-t font-medium text-gray-900">Wed</div>
              <div className="p-4 border-t text-sm text-gray-600">Tempo run (5 miles)</div>
              <div className="p-4 border-t text-sm text-gray-600">Core work</div>
              <div className="p-4 border-t text-sm text-gray-600">70 min</div>
              <div className="p-4 border-t text-sm text-gray-600">Speed work</div>
              <div className="p-4 border-t text-sm text-red-600">High</div>
              <div className="p-4 border-t text-sm text-gray-600">Track + Gym</div>
              <div className="p-4 border-t text-sm text-gray-600">Quality workout</div>

              {/* Thursday */}
              <div className="p-4 border-t font-medium text-gray-900">Thu</div>
              <div className="p-4 border-t text-sm text-gray-600">Easy run (4 miles)</div>
              <div className="p-4 border-t text-sm text-gray-600">Strength training</div>
              <div className="p-4 border-t text-sm text-gray-600">80 min</div>
              <div className="p-4 border-t text-sm text-gray-600">Recovery + strength</div>
              <div className="p-4 border-t text-sm text-academic-blue">Moderate</div>
              <div className="p-4 border-t text-sm text-gray-600">Trail + Gym</div>
              <div className="p-4 border-t text-sm text-gray-600">Upper body focus</div>

              {/* Friday */}
              <div className="p-4 border-t font-medium text-gray-900">Fri</div>
              <div className="p-4 border-t text-sm text-gray-600">Swimming</div>
              <div className="p-4 border-t text-sm text-gray-600">Stretching</div>
              <div className="p-4 border-t text-sm text-gray-600">60 min</div>
              <div className="p-4 border-t text-sm text-gray-600">Cross-training</div>
              <div className="p-4 border-t text-sm text-green-600">Easy</div>
              <div className="p-4 border-t text-sm text-gray-600">Pool + Home</div>
              <div className="p-4 border-t text-sm text-gray-600">Pre-weekend prep</div>

              {/* Saturday */}
              <div className="p-4 border-t font-medium text-gray-900">Sat</div>
              <div className="p-4 border-t text-sm text-gray-600">Long run (12-16 miles)</div>
              <div className="p-4 border-t text-sm text-gray-600">Core + stretch</div>
              <div className="p-4 border-t text-sm text-gray-600">120 min</div>
              <div className="p-4 border-t text-sm text-gray-600">Endurance</div>
              <div className="p-4 border-t text-sm text-academic-blue">Moderate</div>
              <div className="p-4 border-t text-sm text-gray-600">Trail</div>
              <div className="p-4 border-t text-sm text-gray-600">Key workout</div>

              {/* Sunday */}
              <div className="p-4 border-t font-medium text-gray-900">Sun</div>
              <div className="p-4 border-t text-sm text-gray-600">Cycling or rest</div>
              <div className="p-4 border-t text-sm text-gray-600">Yoga</div>
              <div className="p-4 border-t text-sm text-gray-600">60-120 min</div>
              <div className="p-4 border-t text-sm text-gray-600">Recovery</div>
              <div className="p-4 border-t text-sm text-green-600">Easy</div>
              <div className="p-4 border-t text-sm text-gray-600">Road + Home</div>
              <div className="p-4 border-t text-sm text-gray-600">Flexible</div>
            </div>
          </div>
        </section>

        {/* Exercise Benefits */}
        <section className="mb-16" data-testid="section-benefits">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Exercise & Academic Performance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Clock className="w-5 h-5 text-academic-blue mr-3" />
                  <h3 className="font-semibold text-gray-900">Time Management</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Regular exercise helps me maintain a structured schedule and improved time management skills. Morning workouts create momentum for productive research days.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Activity className="w-5 h-5 text-academic-blue mr-3" />
                  <h3 className="font-semibold text-gray-900">Stress Management</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Physical activity serves as an excellent stress outlet, particularly during intense research periods and conference deadlines. Running helps clear my mind and process complex problems.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <TrendingUp className="w-5 h-5 text-academic-blue mr-3" />
                  <h3 className="font-semibold text-gray-900">Mental Clarity</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Regular cardiovascular exercise improves cognitive function and memory. Some of my best research insights have come during or immediately after workouts.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-academic-blue mr-3" />
                  <h3 className="font-semibold text-gray-900">Goal Setting</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Training for athletic goals like marathons has taught me discipline and long-term planning skills that directly transfer to research project management.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Award className="w-5 h-5 text-academic-blue mr-3" />
                  <h3 className="font-semibold text-gray-900">Resilience</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Pushing through challenging workouts builds mental resilience that helps me persist through difficult research problems and setbacks.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Activity className="w-5 h-5 text-academic-blue mr-3" />
                  <h3 className="font-semibold text-gray-900">Energy Levels</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Consistent exercise maintains high energy levels throughout long research days. Better physical fitness translates to sustained mental performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fitness Philosophy */}
        <section className="bg-academic-light rounded-xl p-8" data-testid="section-philosophy">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Fitness Philosophy</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              I believe that physical fitness is not separate from academic success—it's foundational to it. Regular exercise provides the energy, mental clarity, and resilience needed for sustained high-level research work.
            </p>
            <p>
              My approach to fitness emphasizes consistency over intensity. By maintaining a sustainable routine that includes cardiovascular exercise, strength training, and flexibility work, I can support both my athletic goals and my academic performance.
            </p>
            <p>
              Exercise also provides important social connections through running clubs, gym communities, and training partners. These relationships offer support, motivation, and a healthy perspective outside of academic work.
            </p>
          </div>
          
          <div className="mt-6 grid md:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-academic-blue mb-2">45+</div>
              <div className="text-gray-600 text-sm">Weekly Miles</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-academic-blue mb-2">6</div>
              <div className="text-gray-600 text-sm">Days/Week Active</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-academic-blue mb-2">3:28</div>
              <div className="text-gray-600 text-sm">Marathon PR</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-academic-blue mb-2">5</div>
              <div className="text-gray-600 text-sm">Years Training</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
