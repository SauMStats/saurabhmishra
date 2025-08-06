import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-contact-heading">
            Contact Me
          </h1>
          <p className="text-xl text-academic-gray" data-testid="text-contact-subtitle">
            Get in touch for collaborations, speaking opportunities, or research discussions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6" data-testid="text-contact-info-heading">
                Get In Touch
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                I'm always interested in discussing research collaborations, speaking at events, or exploring new opportunities in AI ethics and machine learning. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center" data-testid="contact-email">
                <Mail className="w-6 h-6 text-academic-blue mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <a href="mailto:saurabh.mishra@iith.ac.in" className="text-academic-blue hover:text-blue-700 transition-colors duration-200">
                    saurabh.mishra@iith.ac.in
                  </a>
                </div>
              </div>

              <div className="flex items-center" data-testid="contact-office">
                <MapPin className="w-6 h-6 text-academic-blue mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Office</h3>
                  <p className="text-gray-600">
                    Department of Mathematics<br />
                    IIT Hyderabad<br />
                    Kandi, Sangareddy 502285<br />
                    Telangana, India
                  </p>
                </div>
              </div>

              <div className="flex items-center" data-testid="contact-phone">
                <Phone className="w-6 h-6 text-academic-blue mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900">Office Hours</h3>
                  <p className="text-gray-600">
                    Wednesdays 2:00-4:00 PM<br />
                    Fridays 10:00 AM-12:00 PM<br />
                    <span className="text-sm text-gray-500">(By appointment)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4" data-testid="text-social-heading">Connect Online</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/saurabhmishra" 
                  className="p-3 bg-academic-light rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  data-testid="link-linkedin-contact"
                >
                  <Linkedin className="w-5 h-5 text-academic-blue" />
                </a>
                <a 
                  href="https://github.com/saurabhmishra" 
                  className="p-3 bg-academic-light rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  data-testid="link-github-contact"
                >
                  <Github className="w-5 h-5 text-academic-blue" />
                </a>
                <a 
                  href="mailto:saurabh.mishra@iith.ac.in" 
                  className="p-3 bg-academic-light rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  data-testid="link-email-contact"
                >
                  <Mail className="w-5 h-5 text-academic-blue" />
                </a>
              </div>
            </div>

            {/* Research Interests */}
            <div className="bg-academic-light p-6 rounded-lg" data-testid="section-collaboration">
              <h3 className="font-semibold text-gray-900 mb-3">Collaboration Interests</h3>
              <ul className="text-gray-600 text-sm space-y-1">
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

          {/* Contact Form */}
          <div>
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center" data-testid="contact-success">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Message Sent!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for your message. I'll get back to you within 24-48 hours.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  data-testid="button-send-another"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6" data-testid="text-form-heading">
                  Send a Message
                </h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your full name" 
                              {...field} 
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="your.email@example.com" 
                              {...field} 
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Brief subject line" 
                              {...field} 
                              data-testid="input-subject"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message here..."
                              rows={6}
                              {...field} 
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-academic-blue hover:bg-blue-700 text-white"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit-contact"
                    >
                      {contactMutation.isPending ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>

                <p className="text-gray-500 text-sm mt-4 text-center">
                  * Required fields. I typically respond within 24-48 hours.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <section className="mt-16 bg-academic-light rounded-xl p-8" data-testid="section-response-time">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Response Times & Availability</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Academic Inquiries</h3>
              <p className="text-gray-600 text-sm mb-4">
                Research collaboration requests, academic discussions, and conference-related inquiries typically receive responses within 24-48 hours.
              </p>
              <h3 className="font-semibold text-gray-900 mb-3">Speaking Requests</h3>
              <p className="text-gray-600 text-sm">
                Please provide at least 4-6 weeks notice for speaking engagements. Include event details, audience information, and preferred topics.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Student Inquiries</h3>
              <p className="text-gray-600 text-sm mb-4">
                Questions from students about research opportunities, course materials, or academic advice are welcome. Please be specific about your interests and background.
              </p>
              <h3 className="font-semibold text-gray-900 mb-3">Media & Press</h3>
              <p className="text-gray-600 text-sm">
                For media inquiries about my research or expert commentary, please include your deadline and specific questions in your initial message.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
