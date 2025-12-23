export function Gallery() {
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1760904730891-8a63cde68d3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwaHZhYyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjU2MTA2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'HVAC Equipment',
      category: 'Equipment',
    },
    {
      url: 'https://images.unsplash.com/photo-1637327534911-ee8057d51aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwYWlyJTIwY29uZGl0aW9uZXJ8ZW58MXx8fHwxNzY1NjEwNjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Residential AC Unit',
      category: 'Installation',
    },

    {
      url: 'https://images.unsplash.com/photo-1757219525975-03b5984bc6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBjb25kaXRpb25pbmclMjBpbnN0YWxsYXRpb24lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY1NjEwNjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Maintainance Service',
      category: 'Maintenance',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4 text-3xl sm:text-4xl">Our Work</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Take a look at some of our recent installations and maintenance projects
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all aspect-square"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-cyan-500 text-white rounded-full mb-2">
                    {image.category}
                  </span>
                  <h4 className="text-white">{image.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
