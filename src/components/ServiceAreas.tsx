import { MapPin, CheckCircle } from 'lucide-react';

export function ServiceAreas() {
  const areas = [
    'Kaloor',
    'Palarivattom',
    'Edappally',
    'Kakkanad',
    'Aluva',
    'Thrippunithura',
    'Ernakulam South',
    'Ernakulam North',
    'Vyttila',
    'Petta',
    'Kadavanthra',
    'Panampilly Nagar',
    'MG Road',
    'Marine Drive',
    'Fort Kochi',
    'Thevara',
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-8 w-8 text-cyan-400" />
              <h2 className="text-3xl sm:text-4xl">Service Areas</h2>
            </div>
            <p className="text-slate-300 mb-8 text-lg">
              We proudly serve all areas across Ernakulam district with a 30 km radius from Kaloor. 
              Our expert technicians are ready to help with all your AC servicing needs.
            </p>

            {/* Areas Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-200">{area}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
              <p className="text-cyan-300">
                <strong>Serving 30 km radius from Kaloor.</strong> Don't see your area? Contact us - we may still be able to serve your location!
              </p>
            </div>
          </div>

          {/* Right Content - Map Placeholder */}
          <div className="bg-slate-800 rounded-xl overflow-hidden h-96 border border-slate-700">
            <div className="w-full h-full flex items-center justify-center text-center p-8">
              <div>
                <MapPin className="h-20 w-20 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl mb-2">All Over Ernakulam</h3>
                <p className="text-slate-400">
                  Fast response times across all service zones
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
