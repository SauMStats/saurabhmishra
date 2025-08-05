import { Film, Star, Calendar, Play, Award } from "lucide-react";

export default function Movies() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-movies-heading">
            Movies & Cinema
          </h1>
          <p className="text-xl text-academic-gray" data-testid="text-movies-subtitle">
            Exploring storytelling, creativity, and human experience through film
          </p>
        </div>

        {/* Current Watching */}
        <section className="mb-16" data-testid="section-current">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Currently Watching</h2>
          <div className="bg-academic-light p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Film Club & Recent Viewings</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm an active member of the Stanford Graduate Film Society, where we host weekly screenings and discussions. Our current theme is "Technology and Society in Cinema," exploring how films have portrayed the relationship between humans and technology over the decades.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Recent Club Screening</h4>
                <p className="text-academic-blue font-medium">"Her" (2013) - Spike Jonze</p>
                <p className="text-gray-600 text-sm mt-1">
                  Fascinating exploration of AI and human connection. Led post-screening discussion on the ethics of AI companionship.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Personal Recent Watch</h4>
                <p className="text-academic-blue font-medium">"The Social Dilemma" (2020)</p>
                <p className="text-gray-600 text-sm mt-1">
                  Documentary examining social media's impact on society. Relevant to my research on AI ethics and algorithmic bias.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Favorite Genres */}
        <section className="mb-16" data-testid="section-genres">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Favorite Genres & Themes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Film className="w-6 h-6 text-purple-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Science Fiction</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Particularly drawn to thoughtful sci-fi that explores the implications of technology on society and human relationships.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Favorites:</strong> Blade Runner 2049, Ex Machina, Arrival
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Film className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Documentaries</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Love documentaries that investigate complex topics, especially those related to science, technology, and social issues.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Favorites:</strong> Free Solo, The Age of AI, Won't You Be My Neighbor?
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Film className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">International Cinema</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Appreciate films from different cultures that offer unique perspectives on universal human experiences.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Favorites:</strong> Parasite, Roma, The Handmaiden
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Film className="w-6 h-6 text-red-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Character-Driven Drama</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Drawn to films with complex characters and nuanced storytelling that explore psychological depth.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Favorites:</strong> Lady Bird, Manchester by the Sea, Moonlight
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Film className="w-6 h-6 text-yellow-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Thrillers</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Enjoy well-crafted suspense films that keep me engaged while offering social commentary.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Favorites:</strong> Get Out, Gone Girl, Prisoners
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Film className="w-6 h-6 text-indigo-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Animated Films</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Appreciate the artistry and storytelling innovation in both traditional and computer animation.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Favorites:</strong> Spider-Verse, WALL-E, Studio Ghibli films
              </div>
            </div>
          </div>
        </section>

        {/* Film Analysis & Reviews */}
        <section className="mb-16" data-testid="section-analysis">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Film Analysis & Discussion</h2>
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 p-8 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Tech Ethics in Modern Cinema</h3>
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4 mr-1" />
                  <span className="text-sm text-gray-600">Film Club Presentation</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Led a discussion series examining how contemporary films portray artificial intelligence, social media, and technology's impact on society. Analyzed films like "Ex Machina," "Black Mirror" episodes, and "The Social Network" through the lens of current AI ethics research.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Ongoing series, started Fall 2023</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Women in STEM: Cinematic Representation</h3>
                <div className="flex items-center text-green-500">
                  <Award className="w-4 h-4 mr-1" />
                  <span className="text-sm text-gray-600">Best Discussion Leader</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Organized a film series examining the portrayal of women scientists and engineers in cinema. Screened "Hidden Figures," "The Theory of Everything," and "Contact" while discussing the evolution of female representation in STEM fields on screen.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Spring 2023</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Climate Change Documentaries</h3>
                <div className="flex items-center text-blue-500">
                  <Play className="w-4 h-4 mr-1" />
                  <span className="text-sm text-gray-600">Environmental Film Festival</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Curated a documentary screening series focusing on climate change and environmental issues. Featured "An Inconvenient Truth," "Our Planet," and "Kiss the Ground," connecting the films to current climate informatics research.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Earth Day 2023</span>
              </div>
            </div>
          </div>
        </section>

        {/* Movie Lists */}
        <section className="mb-16" data-testid="section-lists">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Curated Film Lists</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-academic-light p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top 10 AI Films</h3>
              <p className="text-gray-600 text-sm mb-4">
                Personal selection of films that thoughtfully explore artificial intelligence and its implications:
              </p>
              <ol className="text-sm text-gray-600 space-y-1">
                <li>1. Ex Machina (2014)</li>
                <li>2. Her (2013)</li>
                <li>3. Blade Runner 2049 (2017)</li>
                <li>4. WALL-E (2008)</li>
                <li>5. The Matrix (1999)</li>
                <li>6. A.I. Artificial Intelligence (2001)</li>
                <li>7. Ghost in the Shell (1995)</li>
                <li>8. 2001: A Space Odyssey (1968)</li>
                <li>9. Transcendence (2014)</li>
                <li>10. I, Robot (2004)</li>
              </ol>
            </div>

            <div className="bg-academic-light p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Must-Watch Science Docs</h3>
              <p className="text-gray-600 text-sm mb-4">
                Documentaries that every researcher should see:
              </p>
              <ol className="text-sm text-gray-600 space-y-1">
                <li>1. Free Solo (2018)</li>
                <li>2. AlphaGo (2017)</li>
                <li>3. The Social Dilemma (2020)</li>
                <li>4. An Inconvenient Truth (2006)</li>
                <li>5. The Theory of Everything (2014)</li>
                <li>6. Hidden Figures (2016)</li>
                <li>7. The Imitation Game (2014)</li>
                <li>8. A Beautiful Mind (2001)</li>
                <li>9. Good Will Hunting (1997)</li>
                <li>10. Contact (1997)</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Cinema & Research Connection */}
        <section className="bg-academic-light rounded-xl p-8" data-testid="section-connection">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Cinema & Research Synergy</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Film watching is more than entertainment for me—it's a source of inspiration and perspective that enriches my research. Science fiction films often anticipate technological developments and raise ethical questions that become relevant to real-world AI research.
            </p>
            <p>
              Documentaries provide insights into complex social issues and different methodological approaches to investigating problems. The storytelling techniques used in film also help me think about how to communicate research findings to broader audiences.
            </p>
            <p>
              Through the Stanford Graduate Film Society, I've had the opportunity to engage with fellow researchers from diverse fields, leading to interdisciplinary conversations that often spark new research ideas.
            </p>
          </div>
          
          <div className="mt-6 grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-academic-blue mb-2">150+</div>
              <div className="text-gray-600 text-sm">Films This Year</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-academic-blue mb-2">12</div>
              <div className="text-gray-600 text-sm">Discussion Sessions Led</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-academic-blue mb-2">3</div>
              <div className="text-gray-600 text-sm">Film Festival Participations</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
