import { Trophy, Calendar, MapPin, Users, Target } from "lucide-react";

export default function Sports() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-sports-heading">
            Sports & Athletics
          </h1>
          <p className="text-xl text-academic-gray" data-testid="text-sports-subtitle">
            Staying active and competitive outside the lab
          </p>
        </div>

        {/* Current Activities */}
        <section className="mb-16" data-testid="section-current">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Current Activities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tennis */}
            <div className="bg-academic-light border-l-4 border-academic-blue p-6 rounded-r-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Tennis</h3>
                <Trophy className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>3x per week</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Stanford Tennis Courts</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Competitive level</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Member of Stanford Graduate Tennis Club. Compete in local tournaments and maintain a USTA 4.5 rating. Tennis provides excellent stress relief and helps maintain focus for research work.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-white text-gray-700 rounded-full">USTA 4.5</span>
                <span className="px-2 py-1 bg-white text-gray-700 rounded-full">Club Member</span>
                <span className="px-2 py-1 bg-white text-gray-700 rounded-full">Tournament Player</span>
              </div>
            </div>

            {/* Running */}
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Distance Running</h3>
                <Trophy className="w-6 h-6 text-green-500" />
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Daily (morning runs)</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Stanford Dish Trail</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Marathon training</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Regular morning runner averaging 40+ miles per week. Training for the 2024 Boston Marathon. Running helps clear my mind and generates some of my best research ideas.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full">40+ mpw</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full">Marathon</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full">Trail Running</span>
              </div>
            </div>

            {/* Rock Climbing */}
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Rock Climbing</h3>
                <Trophy className="w-6 h-6 text-red-500" />
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>2x per week</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Planet Granite & Yosemite</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>5.10a/b grade</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Indoor and outdoor climbing enthusiast. Enjoy both bouldering and sport climbing. Weekend trips to Yosemite and other Bay Area crags. Climbing teaches problem-solving skills that transfer to research.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full">5.10a/b</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full">Bouldering</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full">Outdoor</span>
              </div>
            </div>

            {/* Swimming */}
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Swimming</h3>
                <Trophy className="w-6 h-6 text-blue-500" />
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>2x per week</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Stanford Aquatic Center</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Masters swimming</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Member of Stanford Masters Swimming program. Focus on technique improvement and endurance training. Swimming provides excellent cross-training for running and overall fitness.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full">Masters</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full">Technique</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full">Endurance</span>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16" data-testid="section-achievements">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Athletic Achievements</h2>
          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <div className="flex items-center mb-3">
                <Trophy className="w-6 h-6 text-yellow-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Bay Area Tennis Tournament</h3>
                <span className="ml-auto text-sm text-gray-500">2023</span>
              </div>
              <p className="text-gray-600">
                Second place in women's open division. Competed against players from across the Bay Area in this annual tournament.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
              <div className="flex items-center mb-3">
                <Trophy className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Big Sur Marathon</h3>
                <span className="ml-auto text-sm text-gray-500">2023</span>
              </div>
              <p className="text-gray-600">
                Completed the Big Sur Marathon in 3:28:15. Qualified for Boston Marathon with this performance on one of the most scenic courses in California.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <div className="flex items-center mb-3">
                <Trophy className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Stanford Masters Swimming</h3>
                <span className="ml-auto text-sm text-gray-500">2022</span>
              </div>
              <p className="text-gray-600">
                Team captain for Stanford Masters Swimming team. Led team to regional championship and improved personal best times in multiple events.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <div className="flex items-center mb-3">
                <Trophy className="w-6 h-6 text-red-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Yosemite Valley Climbing</h3>
                <span className="ml-auto text-sm text-gray-500">2022</span>
              </div>
              <p className="text-gray-600">
                Successfully climbed "Snake Dike" on Half Dome, a classic 5.7 multi-pitch route. This was a significant milestone in my outdoor climbing progression.
              </p>
            </div>
          </div>
        </section>

        {/* Team Involvement */}
        <section className="mb-16" data-testid="section-teams">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Team Involvement</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-academic-blue mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Stanford Graduate Tennis Club</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Active member and former social coordinator. Organize weekly group practices, social events, and coordinate participation in local tournaments.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Role:</strong> Social Coordinator (2022-2023)
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-academic-blue mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Bay Area Running Club</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Member of local running group that meets for weekly long runs and track workouts. Great community of runners supporting each other's goals.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Involvement:</strong> Regular participant, pace group leader
              </div>
            </div>
          </div>
        </section>

        {/* Sports Philosophy */}
        <section className="bg-academic-light rounded-xl p-8" data-testid="section-philosophy">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Sports & Research Balance</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Athletics play a crucial role in my academic success and overall well-being. Regular physical activity helps me maintain focus, manage stress, and approach research challenges with a clear mind.
            </p>
            <p>
              The discipline and goal-setting skills developed through sports training directly translate to my research methodology. Whether it's the persistence required for marathon training or the problem-solving approach needed in rock climbing, these activities complement and enhance my academic work.
            </p>
            <p>
              I believe in the importance of work-life balance and encourage fellow graduate students to find physical activities they enjoy. The research community benefits when we take care of our physical and mental health.
            </p>
          </div>
          
          <div className="mt-6 grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-academic-blue mb-2">8+</div>
              <div className="text-gray-600 text-sm">Hours/Week Training</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-academic-blue mb-2">4</div>
              <div className="text-gray-600 text-sm">Active Sports</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-academic-blue mb-2">6</div>
              <div className="text-gray-600 text-sm">Years Competing</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
