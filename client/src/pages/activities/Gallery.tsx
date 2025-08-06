import { Camera, MapPin, Calendar } from "lucide-react";

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "IIT Hyderabad Campus",
    location: "Telangana, India",
    date: "2023",
    description: "Beautiful campus view during monsoon season"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1594736797933-d0b43e2fac0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Research Lab",
    location: "Mathematics Department",
    date: "2023",
    description: "Working on statistical genetics analysis"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Table Tennis Tournament",
    location: "Sports Complex",
    date: "2023",
    description: "Inter-department table tennis championship"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Badminton Practice",
    location: "Indoor Courts",
    date: "2024",
    description: "Regular evening badminton session"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Conference Presentation",
    location: "ISCB Conference",
    date: "2023",
    description: "Presenting research on GWAS methodology"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Gym Session",
    location: "Campus Fitness Center",
    date: "2024",
    description: "Regular workout routine"
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="text-gallery-heading">
            Photo Gallery
          </h1>
          <p className="text-xl text-academic-gray" data-testid="text-gallery-subtitle">
            Moments from academic life, research, and activities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200"
              data-testid={`photo-card-${photo.id}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  data-testid={`photo-image-${photo.id}`}
                />
                <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                  <Camera className="w-3 h-3 inline mr-1" />
                  Photo
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2" data-testid={`photo-title-${photo.id}`}>
                  {photo.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3" data-testid={`photo-description-${photo.id}`}>
                  {photo.description}
                </p>
                
                <div className="flex items-center text-xs text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>{photo.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{photo.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Section */}
        <section className="mt-16 bg-academic-light rounded-xl p-8 text-center" data-testid="section-upload-info">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Share Your Moments</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            This gallery showcases moments from academic life, research milestones, sports activities, and campus events. 
            Photos capture the journey through PhD studies, research achievements, and the vibrant life at IIT Hyderabad.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Academic Life</h3>
              <p>Research presentations, lab work, conferences, and academic achievements</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Sports & Activities</h3>
              <p>Table tennis, badminton, gym sessions, and recreational activities</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Campus Life</h3>
              <p>IIT Hyderabad campus, events, and memorable moments with colleagues</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}