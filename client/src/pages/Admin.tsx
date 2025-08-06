import { useQuery } from "@tanstack/react-query";
import { Calendar, Mail, User, ExternalLink } from "lucide-react";
import type { Contact } from "@shared/schema";

export default function Admin() {
  const { data: contacts, isLoading, error } = useQuery<Contact[]>({
    queryKey: ["/api/admin/contacts"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-admin-heading">
              Admin Dashboard
            </h1>
            <p className="text-xl text-academic-gray" data-testid="text-admin-subtitle">
              Contact Messages & Site Management
            </p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-academic-blue" data-testid="loading-spinner"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-admin-heading">
              Admin Dashboard
            </h1>
            <p className="text-red-600 mb-4" data-testid="text-error-message">Failed to load contact messages</p>
            <p className="text-gray-600" data-testid="text-error-details">Please check your connection and try again</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-admin-heading">
            Admin Dashboard
          </h1>
          <p className="text-xl text-academic-gray" data-testid="text-admin-subtitle">
            Contact Messages & Site Management
          </p>
        </div>

        {/* Contact Messages Section */}
        <section className="mb-16">
          <div className="bg-academic-light rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4" data-testid="text-messages-heading">
              Contact Messages ({contacts?.length || 0})
            </h2>
            <p className="text-gray-600">
              All messages received through the contact form. Messages are sorted by most recent first.
            </p>
          </div>

          {!contacts || contacts.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-xl">
              <Mail className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg" data-testid="text-no-messages">
                No contact messages yet. Messages will appear here when visitors submit the contact form.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {contacts.map((contact, index) => (
                <div 
                  key={contact.id} 
                  className={`bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow duration-200 ${
                    index === 0 ? 'border-academic-blue border-l-4' : 'border-gray-200'
                  }`}
                  data-testid={`contact-message-${contact.id}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-academic-blue bg-opacity-10 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-academic-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900" data-testid={`contact-name-${contact.id}`}>
                          {contact.name}
                        </h3>
                        <p className="text-sm text-gray-600" data-testid={`contact-email-${contact.id}`}>
                          {contact.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      <time dateTime={new Date(contact.createdAt).toISOString()}>
                        {new Date(contact.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </time>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2" data-testid={`contact-subject-${contact.id}`}>
                      Subject: {contact.subject}
                    </h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap" data-testid={`contact-message-content-${contact.id}`}>
                        {contact.message}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <a 
                      href={`mailto:${contact.email}?subject=Re: ${contact.subject}`}
                      className="inline-flex items-center px-4 py-2 bg-academic-blue text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      data-testid={`button-reply-${contact.id}`}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Reply via Email
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Site Stats */}
        <section className="bg-academic-light rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Site Statistics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-academic-blue mb-2">
                {contacts?.length || 0}
              </div>
              <p className="text-gray-600">Total Messages</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {contacts?.filter(c => new Date(c.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length || 0}
              </div>
              <p className="text-gray-600">This Week</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {contacts?.filter(c => new Date(c.createdAt) > new Date(Date.now() - 24 * 60 * 60 * 1000)).length || 0}
              </div>
              <p className="text-gray-600">Today</p>
            </div>
          </div>
        </section>

        {/* Admin Instructions */}
        <section className="mt-16 bg-yellow-50 border border-yellow-200 rounded-xl p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Admin Access Instructions</h2>
          <div className="text-sm text-gray-700 space-y-2">
            <p><strong>Access:</strong> This admin page is accessible at <code>/admin</code></p>
            <p><strong>Security:</strong> In production, add authentication to protect this page</p>
            <p><strong>Email Replies:</strong> Click "Reply via Email" to respond to messages using your default email client</p>
            <p><strong>Data Storage:</strong> Messages are currently stored in memory and will reset when the server restarts</p>
          </div>
        </section>
      </div>
    </div>
  );
}