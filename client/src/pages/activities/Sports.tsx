import { Trophy, Calendar, MapPin, Users, Target, Dumbbell, Activity } from "lucide-react";


export default function Sports() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6" data-testid="text-sports-heading">
            Sports & Fitness
          </h1>
          <p className="text-xl text-academic-gray dark:text-gray-400" data-testid="text-sports-subtitle">
            Maintaining physical fitness and enjoying sports at IIT Hyderabad
          </p>
        </div>

        {/* ================= Gym & Strength Training (ADDED) ================= */}
        <section className="mb-16" data-testid="section-gym">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8">
            Gym & Strength Training
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Gym Routine */}
            <div className="bg-academic-light dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Dumbbell className="w-6 h-6 text-academic-blue mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Weekly Gym Routine
                </h3>
              </div>

              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>Frequency</span>
                  <span className="font-medium text-academic-blue">
                    5 days / week
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Training Style</span>
                  <span className="font-medium text-academic-blue">
                    Push / Pull / Legs
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Session Duration</span>
                  <span className="font-medium text-academic-blue">
                    60–75 minutes
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Focus</span>
                  <span className="font-medium text-academic-blue">
                    Strength & consistency
                  </span>
                </div>
              </div>
            </div>

            {/* Personal Records */}
            <div className="bg-academic-light dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Activity className="w-6 h-6 text-academic-blue mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Personal Records (PRs)
                </h3>
              </div>

              <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>🏋️ Squat</span>
                  <span className="font-semibold text-academic-blue">110 kg</span>
                </div>
                <div className="flex justify-between">
                  <span>💪 Bench Press</span>
                  <span className="font-semibold text-academic-blue">85 kg</span>
                </div>
                <div className="flex justify-between">
                  <span>🔩 Deadlift</span>
                  <span className="font-semibold text-academic-blue">140 kg</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ================= END ADDITION ================= */}
        

        {/* Current Activities */}
        <section className="mb-16" data-testid="section-current">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8">Sports Activities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Table Tennis */}
            <div className="bg-academic-light dark:bg-gray-800 border-l-4 border-academic-blue p-6 rounded-r-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Table Tennis</h3>
                <Trophy className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>2-3 evenings per week</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>IIT Hyderabad Sports Complex</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Competitive level</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Active member of the campus table tennis community, participating in inter-department tournaments and regular practice sessions. The sport sharpens reflexes, improves focus, and serves as an effective stress reliever after long work hours.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">Tournament Player</span>
                <span className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">Evening Practice</span>
                <span className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">Campus Team</span>
              </div>
            </div>

            {/* Running */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Running</h3>
                <Trophy className="w-6 h-6 text-green-500" />
              </div>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>2-3x (morning runs)</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>IITH Atheletics Track</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Fitness</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I enjoy running and jogging 2–3 times a week to support my overall fitness and endurance.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">5+ kmpw</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">Fitness</span>    {/* Marathon */}
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">Running</span>
              </div>
            </div>

            {/* Badminton */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Badminton</h3>
                <Trophy className="w-6 h-6 text-red-500" />
              </div>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>1-2x per week</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>SNCC, IIT Hyderabad</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Intermediate</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                I enjoy the game for its high intensity and physical demand. I value the endurance, fast pace, and full-body workout that come with sustained rallies and constant movement. The game provides an excellent cardiovascular workout and a satisfying way to stay active and energized.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">High Intensity</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">Endurance</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">Indoor</span>
              </div>
            </div>

            {/* Swimming */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Swimming</h3>
                <Trophy className="w-6 h-6 text-blue-500" />
              </div>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>2x per week</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>SNCC, IIT Hyderabad</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-2 text-academic-blue" />
                  <span>Learning</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {/* I use swimming as an alternative to morning running(when I skip), primarily to learn proper swimming techniques while maintaining fitness. */}
                I occasionally trade my morning run for a swim — partly to keep things interesting, partly to keep myself honest.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">Learning</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">Technique</span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">Cross-Training</span>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        {/* <section className="mb-16" data-testid="section-achievements">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8">Athletic Achievements</h2>
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
        </section> */}

        {/* Team Involvement */}
        {/* <section className="mb-16" data-testid="section-teams">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8">Team Involvement</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 p-6 rounded-lg">
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

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 p-6 rounded-lg">
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
        </section> */}

        {/* Sports Philosophy */}
        <section className="bg-academic-light dark:bg-gray-800 rounded-xl p-8" data-testid="section-philosophy">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Sports & Work Balance</h2> {/* Sports & Research Balance */}
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Physical activity is an important part of my routine. It helps me stay grounded, manage stress, and maintain overall well-being. Whether it's training for endurance or simply staying active, sports provide structure, balance, and a welcome reset from long days. I find that regular movement supports both physical health and mental clarity.
            </p>
            <p>
              I value a sustainable, balanced lifestyle and believe staying active makes everyday work more enjoyable and productive.
            </p>
          </div>
          
          {/* <div className="mt-6 grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-academic-blue mb-2">8+</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Hours/Week Training</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-academic-blue mb-2">4</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Active Sports</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-academic-blue mb-2">4</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">Years Competing</div>
            </div>
          </div> */}
        </section>
      </div>
    </div>
  );
}