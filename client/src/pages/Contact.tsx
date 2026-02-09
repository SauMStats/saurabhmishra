import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6" data-testid="text-contact-heading">
            Contact Me
          </h1>
          <p className="text-xl text-academic-gray" data-testid="text-contact-subtitle">
            Get in touch for collaborations, speaking opportunities, or research discussions
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6" data-testid="text-contact-info-heading">
                  Get In Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  I'm always interested in discussing research collaborations, speaking at conferences, or exploring new opportunities in biostatistics and statistical genetics. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center" data-testid="contact-email">
                  <Mail className="w-6 h-6 text-academic-blue mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <a href="mailto:saurabh.mishra@iith.ac.in" className="text-academic-blue hover:text-blue-700 transition-colors duration-200">
                      saurabh.iith.stats@iith.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center" data-testid="contact-office">
                  <MapPin className="w-6 h-6 text-academic-blue mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Office</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Department of Mathematics<br />
                      IIT Hyderabad<br />
                      Kandi, Sangareddy 502285<br />
                      Telangana, India
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-center" data-testid="contact-phone">
                  <Phone className="w-6 h-6 text-academic-blue mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Office Hours</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Wednesdays 2:00-4:00 PM<br />
                      Fridays 10:00 AM-12:00 PM<br />
                      <span className="text-sm text-gray-500 dark:text-gray-400">(By appointment)</span>
                    </p>
                  </div>
                </div> */}
              </div>

              {/* Social Links */}
              {/* <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4" data-testid="text-social-heading">Connect Online</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/in/saurabhmishra" 
                    className="p-3 bg-academic-light dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    data-testid="link-linkedin-contact"
                  >
                    <Linkedin className="w-5 h-5 text-academic-blue" />
                  </a>
                  <a 
                    href="https://github.com/saurabhmishra" 
                    className="p-3 bg-academic-light dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    data-testid="link-github-contact"
                  >
                    <Github className="w-5 h-5 text-academic-blue" />
                  </a>
                  <a 
                    href="mailto:saurabh.mishra@iith.ac.in" 
                    className="p-3 bg-academic-light dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    data-testid="link-email-contact"
                  >
                    <Mail className="w-5 h-5 text-academic-blue" />
                  </a>
                </div>
              </div> */}

              {/* Research Interests */}
              <div className="bg-academic-light dark:bg-gray-700 p-6 rounded-lg" data-testid="section-collaboration">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Collaboration Interests</h3>
                <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  <li>• Statistical Genetics & GWAS Methodology</li>
                  <li>• Transcriptome-Wide Association Studies</li>
                  <li>• Gene-Environment Interaction Analysis</li>
                  <li>• Machine Learning in Biostatistics</li>
                  <li>• Causal Inference Methods</li>
                  <li>• Large-Scale Biological Data Analysis</li>
                  <li>• Academic Conference Speaking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        {/* <section className="mt-16 bg-academic-light dark:bg-gray-800 rounded-xl p-8 border border-gray-100 dark:border-gray-700" data-testid="section-response-time">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Response Times & Availability</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Academic Inquiries</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Research collaboration requests, academic discussions, and conference-related inquiries typically receive responses within 24-48 hours.
              </p>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Speaking Requests</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Please provide at least 4-6 weeks notice for speaking engagements. Include event details, audience information, and preferred topics.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Student Inquiries</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Questions from students about research opportunities, course materials, or academic advice are welcome. Please be specific about your interests and background.
              </p>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Media & Press</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                For media inquiries about my research or expert commentary, please include your deadline and specific questions in your initial message.
              </p>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}
