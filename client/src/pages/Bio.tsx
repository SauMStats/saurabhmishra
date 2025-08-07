import { GraduationCap, Award, MapPin, Calendar, Download } from "lucide-react";

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
              alt="Saurabh Mishra" 
              className="w-full rounded-lg shadow-lg object-cover"
              data-testid="img-bio-profile"
            />
            
            {/* CV Download Button */}
            <div className="mt-6 text-center">
              <a 
                href="/cv.pdf" 
                className="inline-flex items-center px-6 py-3 bg-academic-blue text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm"
                data-testid="button-download-cv"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </div>
          </div>

          {/* Bio Content */}
          <div className="md:col-span-2 space-y-8">
            <div data-testid="section-background">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Background</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                I am a PhD student in Mathematics at IIT Hyderabad, specializing in biostatistics and statistical genetics. My research focuses on developing advanced statistical methods for genome-wide association studies (GWAS) and transcriptome-wide association studies (TWAS), with particular emphasis on gene-environment interactions in complex traits.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                My interdisciplinary approach combines mathematical rigor with computational biology to address fundamental questions in genetics and genomics. I work on developing novel statistical frameworks for analyzing large-scale biological datasets and understanding the genetic architecture of complex diseases.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I am passionate about translating theoretical advances in biostatistics into practical tools that can advance our understanding of human genetics and contribute to precision medicine initiatives.
              </p>
            </div>

            <div data-testid="section-education">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Education</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="w-6 h-6 text-academic-blue mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">PhD in Mathematics (Biostatistics)</h3>
                    <p className="text-academic-gray">IIT Hyderabad</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>2022 - Present</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                      Dissertation: "Advanced Statistical Methods for Genome-Wide Association Studies and Gene-Environment Interactions"
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <GraduationCap className="w-6 h-6 text-academic-blue mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Master of Science in Statistics</h3>
                    <p className="text-academic-gray">Indian Statistical Institute</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>2020 - 2022</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                      Focus: Mathematical Statistics and Biostatistics
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <GraduationCap className="w-6 h-6 text-academic-blue mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Bachelor of Science in Mathematics</h3>
                    <p className="text-academic-gray">University of Delhi</p>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>2017 - 2020</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                      Honors in Mathematics, First Class with Distinction
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div data-testid="section-interests">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Research Interests</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-academic-light p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Statistical Genetics</h3>
                  <p className="text-gray-600 text-sm">
                    Developing novel statistical methods for genome-wide association studies and genetic mapping
                  </p>
                </div>
                <div className="bg-academic-light p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">TWAS Methodology</h3>
                  <p className="text-gray-600 text-sm">
                    Transcriptome-wide association studies to understand gene expression and disease susceptibility
                  </p>
                </div>
                <div className="bg-academic-light p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Gene-Environment Interactions</h3>
                  <p className="text-gray-600 text-sm">
                    Investigating how genetic variants interact with environmental factors in complex traits
                  </p>
                </div>
                <div className="bg-academic-light p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Computational Biology</h3>
                  <p className="text-gray-600 text-sm">
                    Applying advanced computational methods to large-scale biological and genomic datasets
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
                    <h3 className="font-semibold text-gray-900">INSPIRE Fellowship</h3>
                    <p className="text-gray-600 text-sm">Department of Science and Technology, India, 2023</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="w-5 h-5 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">CSIR-NET Fellowship</h3>
                    <p className="text-gray-600 text-sm">Council of Scientific and Industrial Research, 2022</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="w-5 h-5 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Best Student Paper Award</h3>
                    <p className="text-gray-600 text-sm">Indian Society for Medical Statistics, 2023</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="w-5 h-5 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">University Gold Medal</h3>
                    <p className="text-gray-600 text-sm">University of Delhi, 2020</p>
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
