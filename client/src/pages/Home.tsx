import { Link } from "wouter";
import { Download, Mail, Lightbulb, Heart, Cloud, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                alt="Dr. Sarah Chen - Academic Researcher" 
                className="w-32 h-32 rounded-full mx-auto shadow-lg object-cover"
                data-testid="img-profile"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight" data-testid="text-name">
              Saurabh Mishra
            </h1>
            <p className="text-xl md:text-2xl text-academic-gray mb-8 font-light" data-testid="text-title">
              PhD Student in Mathematics | Biostatistics Researcher
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed" data-testid="text-bio">
              Advancing statistical genetics and biostatistics through genome-wide association analysis (GWAS) and transcriptome-wide association analysis (TWAS), with focus on gene-environment interactions in complex traits.
            </p>
            
          </div>


        </div>
      </section>

      {/* Research Highlights */}
      <section className="bg-academic-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="text-research-heading">
              Research Highlights
            </h2>
            <p className="text-lg text-academic-gray max-w-2xl mx-auto" data-testid="text-research-subtitle">
              Current research focuses on developing interpretable AI systems for critical applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Research Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-200" data-testid="card-research-nas">
              <div className="w-12 h-12 bg-academic-blue bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-academic-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" data-testid="text-gwas-title">
                GWAS & Statistical Genetics
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed" data-testid="text-gwas-description">
                Developing advanced statistical methods for genome-wide association analysis to identify genetic variants associated with complex traits.
              </p>
              <Link href="/research/group" className="text-academic-blue font-medium hover:text-blue-700 transition-colors duration-200" data-testid="link-nas-learn-more">
                Learn more →
              </Link>
            </div>

            {/* Research Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-200" data-testid="card-research-ethics">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" data-testid="text-twas-title">
                Transcriptome-Wide Association
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed" data-testid="text-twas-description">
                Integrating gene expression data with genetic variants to understand the molecular mechanisms underlying complex diseases.
              </p>
              <Link href="/research/group" className="text-academic-blue font-medium hover:text-blue-700 transition-colors duration-200" data-testid="link-ethics-learn-more">
                Learn more →
              </Link>
            </div>

            {/* Research Card 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-200" data-testid="card-research-climate">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Cloud className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4" data-testid="text-interaction-title">
                Gene-Environment Interactions
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed" data-testid="text-interaction-description">
                Investigating how genetic variants interact with environmental factors to influence complex traits and disease risk.
              </p>
              <Link href="/research/group" className="text-academic-blue font-medium hover:text-blue-700 transition-colors duration-200" data-testid="link-climate-learn-more">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="text-publications-heading">
              Recent Publications
            </h2>
            <p className="text-lg text-academic-gray" data-testid="text-publications-subtitle">
              Selected recent papers from top-tier conferences and journals
            </p>
          </div>

          <div className="space-y-8">
            {/* Publication 1 */}
            <div className="border-l-4 border-academic-blue pl-6 py-4" data-testid="publication-nas">
              <h3 className="text-xl font-semibold text-gray-900 mb-2" data-testid="text-pub1-title">
                Interpretable Neural Architecture Search for Medical Image Analysis
              </h3>
              <p className="text-academic-gray mb-3" data-testid="text-pub1-authors">
                <span className="font-medium">Sarah Chen</span>, Michael Johnson, Lisa Wang
              </p>
              <p className="text-sm text-gray-500 mb-3" data-testid="text-pub1-venue">
                <em>Advances in Neural Information Processing Systems (NeurIPS 2023)</em>
              </p>
              <p className="text-gray-600 leading-relaxed mb-4" data-testid="text-pub1-abstract">
                We present a novel approach to neural architecture search that provides interpretable explanations for architectural choices while maintaining competitive performance on medical imaging tasks.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-pub1-pdf">PDF</a>
                <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-pub1-code">Code</a>
                <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-pub1-bibtex">BibTeX</a>
              </div>
            </div>

            {/* Publication 2 */}
            <div className="border-l-4 border-gray-300 pl-6 py-4" data-testid="publication-fairness">
              <h3 className="text-xl font-semibold text-gray-900 mb-2" data-testid="text-pub2-title">
                Fairness-Aware Deep Learning for Healthcare Applications
              </h3>
              <p className="text-academic-gray mb-3" data-testid="text-pub2-authors">
                <span className="font-medium">Sarah Chen</span>, David Rodriguez, Emily Zhang
              </p>
              <p className="text-sm text-gray-500 mb-3" data-testid="text-pub2-venue">
                <em>Journal of Medical Internet Research (JMIR 2023)</em>
              </p>
              <p className="text-gray-600 leading-relaxed mb-4" data-testid="text-pub2-abstract">
                This work addresses algorithmic bias in healthcare AI systems by developing fairness-aware training methods that ensure equitable outcomes across demographic groups.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-pub2-pdf">PDF</a>
                <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-pub2-supplementary">Supplementary</a>
                <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-pub2-bibtex">BibTeX</a>
              </div>
            </div>

            {/* Publication 3 */}
            <div className="border-l-4 border-gray-300 pl-6 py-4" data-testid="publication-climate">
              <h3 className="text-xl font-semibold text-gray-900 mb-2" data-testid="text-pub3-title">
                Climate Pattern Recognition Using Transformer Networks
              </h3>
              <p className="text-academic-gray mb-3" data-testid="text-pub3-authors">
                Robert Kim, <span className="font-medium">Sarah Chen</span>, Maria Gonzalez
              </p>
              <p className="text-sm text-gray-500 mb-3" data-testid="text-pub3-venue">
                <em>Nature Climate Change (2023)</em>
              </p>
              <p className="text-gray-600 leading-relaxed mb-4" data-testid="text-pub3-abstract">
                We demonstrate how transformer architectures can be adapted for climate data analysis, achieving state-of-the-art performance in weather pattern recognition tasks.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-pub3-pdf">PDF</a>
                <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-pub3-dataset">Dataset</a>
                <a href="#" className="text-academic-blue hover:text-blue-700 transition-colors duration-200" data-testid="link-pub3-bibtex">BibTeX</a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/research/publications" className="inline-flex items-center text-academic-blue font-medium hover:text-blue-700 transition-colors duration-200" data-testid="link-all-publications">
              View all publications
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-academic-light py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-testid="text-blog-heading">
              Latest Blog Posts
            </h2>
            <p className="text-lg text-academic-gray" data-testid="text-blog-subtitle">
              Thoughts on research, academia, and the future of AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Blog Post 1 */}
            <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-200" data-testid="card-blog-math">
              <div className="flex items-center text-sm text-gray-500 mb-4" data-testid="text-blog1-meta">
                <time dateTime="2023-11-15">November 15, 2023</time>
                <span className="mx-2">•</span>
                <span>5 min read</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 hover:text-academic-blue transition-colors duration-200" data-testid="text-blog1-title">
                <Link href="/blog">
                  The Mathematics Behind Neural Architecture Search
                </Link>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4" data-testid="text-blog1-excerpt">
                Exploring the mathematical foundations of automated neural network design, including gradient-based optimization techniques and the role of differentiable architecture search.
              </p>
              <Link href="/blog" className="text-academic-blue font-medium hover:text-blue-700 transition-colors duration-200" data-testid="link-blog1-read-more">
                Read more →
              </Link>
            </article>

            {/* Blog Post 2 */}
            <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-200" data-testid="card-blog-ethics">
              <div className="flex items-center text-sm text-gray-500 mb-4" data-testid="text-blog2-meta">
                <time dateTime="2023-10-28">October 28, 2023</time>
                <span className="mx-2">•</span>
                <span>8 min read</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 hover:text-academic-blue transition-colors duration-200" data-testid="text-blog2-title">
                <Link href="/blog">
                  Building Ethical AI Systems: Lessons from Healthcare
                </Link>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4" data-testid="text-blog2-excerpt">
                Reflections on developing responsible AI systems for medical applications, addressing bias, fairness, and the importance of interdisciplinary collaboration.
              </p>
              <Link href="/blog" className="text-academic-blue font-medium hover:text-blue-700 transition-colors duration-200" data-testid="link-blog2-read-more">
                Read more →
              </Link>
            </article>
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="inline-flex items-center text-academic-blue font-medium hover:text-blue-700 transition-colors duration-200" data-testid="link-all-posts">
              View all posts
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
