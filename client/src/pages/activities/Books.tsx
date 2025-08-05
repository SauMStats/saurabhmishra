import { BookOpen, Quote, Star, Calendar, User } from "lucide-react";

export default function Books() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-books-heading">
            Books & Reading
          </h1>
          <p className="text-xl text-academic-gray" data-testid="text-books-subtitle">
            Exploring ideas, perspectives, and knowledge through literature
          </p>
        </div>

        {/* Currently Reading */}
        <section className="mb-16" data-testid="section-current">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Currently Reading</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-academic-light p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <BookOpen className="w-6 h-6 text-academic-blue mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    "Weapons of Math Destruction"
                  </h3>
                  <p className="text-academic-gray text-sm">by Cathy O'Neil</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Exploring how algorithms can perpetuate inequality and bias. Highly relevant to my research on fairness in AI systems. O'Neil's insights from her experience in data science provide practical perspectives on algorithmic accountability.
              </p>
              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Started November 2023</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <BookOpen className="w-6 h-6 text-academic-blue mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    "The Overstory"
                  </h3>
                  <p className="text-academic-gray text-sm">by Richard Powers</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                A beautiful novel that weaves together human stories with the lives of trees. As someone working on climate informatics, I find Powers' exploration of our relationship with nature both moving and thought-provoking.
              </p>
              <div className="flex items-center text-xs text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Book club selection</span>
              </div>
            </div>
          </div>
        </section>

        {/* Reading Categories */}
        <section className="mb-16" data-testid="section-categories">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Reading Interests</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-purple-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Tech & Society</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Books exploring the intersection of technology, ethics, and social impact.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Recent reads:</strong> Race After Technology, Algorithms of Oppression, The Age of Surveillance Capitalism
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-green-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Climate & Environment</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Literature on climate science, environmental policy, and our relationship with nature.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Recent reads:</strong> The Uninhabitable Earth, Braiding Sweetgrass, The Ministry for the Future
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Science Communication</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Books on effective science writing and making complex topics accessible.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Recent reads:</strong> The Sense of Style, Made to Stick, The Craft of Research
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-red-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Literary Fiction</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Contemporary and classic literature that offers insight into human experience.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Recent reads:</strong> Klara and the Sun, The Seven Husbands of Evelyn Hugo, Educated
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-yellow-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Biography & Memoir</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Life stories of scientists, researchers, and changemakers who inspire my work.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Recent reads:</strong> Lab Girl, Hidden Figures, The Immortal Life of Henrietta Lacks
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-indigo-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Philosophy & Ethics</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Philosophical works that inform my thinking about AI ethics and responsibility.
              </p>
              <div className="text-xs text-gray-500">
                <strong>Recent reads:</strong> Moral Machines, The Ethical Algorithm, Justice by Michael Sandel
              </div>
            </div>
          </div>
        </section>

        {/* Book Reviews & Reflections */}
        <section className="mb-16" data-testid="section-reviews">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Recent Book Reflections</h2>
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 p-8 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">"Race After Technology" by Ruha Benjamin</h3>
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4 mr-1" />
                  <Star className="w-4 h-4 mr-1" />
                  <Star className="w-4 h-4 mr-1" />
                  <Star className="w-4 h-4 mr-1" />
                  <Star className="w-4 h-4 mr-1" />
                </div>
              </div>
              <div className="mb-4">
                <Quote className="w-6 h-6 text-academic-blue mb-2" />
                <p className="text-gray-600 italic leading-relaxed mb-4">
                  "This book fundamentally changed how I think about the design process in AI systems. Benjamin's concept of the 'New Jim Crow' in technology is essential reading for anyone working in machine learning."
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Benjamin's analysis of how technological design can perpetuate racial bias has directly influenced my approach to fairness-aware machine learning. Her framework for understanding discrimination in automated systems provides both theoretical grounding and practical guidance for my research.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Read: September 2023</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">"Lab Girl" by Hope Jahren</h3>
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4 mr-1" />
                  <Star className="w-4 h-4 mr-1" />
                  <Star className="w-4 h-4 mr-1" />
                  <Star className="w-4 h-4 mr-1" />
                  <Star className="w-4 h-4 mr-1" />
                </div>
              </div>
              <div className="mb-4">
                <Quote className="w-6 h-6 text-academic-blue mb-2" />
                <p className="text-gray-600 italic leading-relaxed mb-4">
                  "Jahren's memoir beautifully captures both the wonder of scientific discovery and the challenges of being a woman in STEM. Her writing style makes complex botanical concepts accessible while sharing deeply personal experiences."
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                This book resonated with me on multiple levels - as a researcher, as a woman in STEM, and as someone who appreciates elegant science writing. Jahren's insights about persistence, mentorship, and the importance of supporting other women in science have influenced my own approach to academic collaboration.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Read: July 2023</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">"The Ministry for the Future" by Kim Stanley Robinson</h3>
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4 mr-1" />
                  <Star className="w-4 h-4 mr-1" />
                  <Star className="w-4 h-4 mr-1" />
                  <Star className="w-4 h-4 mr-1" />
                  <span className="w-4 h-4 mr-1"></span>
                </div>
              </div>
              <div className="mb-4">
                <Quote className="w-6 h-6 text-academic-blue mb-2" />
                <p className="text-gray-600 italic leading-relaxed mb-4">
                  "Robinson's vision of how we might address climate change is both sobering and hopeful. The book's exploration of technological solutions and global cooperation provides valuable perspective for my climate informatics research."
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                This novel's detailed examination of climate intervention technologies and their social implications has helped me think more broadly about the applications of my research. Robinson's emphasis on interdisciplinary approaches to climate solutions aligns with my belief in collaborative research.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Read: May 2023</span>
              </div>
            </div>
          </div>
        </section>

        {/* Book Club & Discussion */}
        <section className="mb-16" data-testid="section-book-club">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Reading Communities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-academic-light p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 text-academic-blue mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Stanford Graduate Book Club</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Active member of interdisciplinary book club focusing on books at the intersection of technology, society, and ethics. We meet monthly to discuss our selections and their relevance to our research.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Role:</strong> Discussion facilitator (rotating), Member since 2022
              </div>
            </div>

            <div className="bg-academic-light p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 text-academic-blue mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Women in STEM Reading Group</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Co-founded reading group focused on books by and about women in science, technology, and mathematics. We alternate between memoirs, research on gender in STEM, and related fiction.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Role:</strong> Co-founder and coordinator
              </div>
            </div>
          </div>
        </section>

        {/* Reading Goals & Stats */}
        <section className="bg-academic-light rounded-xl p-8" data-testid="section-stats">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Reading Journey</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Reading is essential to both my personal growth and professional development. I typically read 2-3 books per month, balancing technical works relevant to my research with literature that broadens my perspective and provides creative inspiration.
            </p>
            <p>
              I maintain detailed reading notes and often find unexpected connections between seemingly unrelated books. Some of my best research insights have emerged from the intersection of scientific literature and humanities perspectives.
            </p>
            <p>
              Through book clubs and reading groups, I've built meaningful connections with researchers across disciplines, enriching both my understanding of complex topics and my approach to collaborative work.
            </p>
          </div>
          
          <div className="mt-6 grid md:grid-cols-4 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-academic-blue mb-2">47</div>
              <div className="text-gray-600 text-sm">Books This Year</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-academic-blue mb-2">2</div>
              <div className="text-gray-600 text-sm">Book Clubs</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-academic-blue mb-2">15</div>
              <div className="text-gray-600 text-sm">Book Reviews Written</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-academic-blue mb-2">230+</div>
              <div className="text-gray-600 text-sm">Books in Personal Library</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
