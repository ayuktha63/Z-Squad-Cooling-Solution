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
    // IMPORTANT: relative + overflow-hidden blocks diagonal background bleed
    <section className="relative py-20 bg-slate-900 text-white overflow-hidden">

      {/* HARD BACKGROUND LAYER – blocks global patterns */}
      <div className="absolute inset-0 bg-slate-900 z-0"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-8 w-8 text-cyan-400" />
              <h2 className="text-3xl sm:text-4xl">
                Service Areas
              </h2>
            </div>

            <p className="text-slate-300 mb-8 text-lg">
              We proudly serve all major locations across Ernakulam district within a
              30 km radius from Kaloor. Our technicians ensure fast response and reliable service.
            </p>

            {/* AREA LIST */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-200">{area}</span>
                </div>
              ))}
            </div>

            {/* INFO BOX */}
            <div className="p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
              <p className="text-cyan-300">
                <strong>30 km service radius from Kaloor.</strong>{' '}
                If your area is not listed, feel free to contact us — service availability may still apply.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT – GOOGLE MAP */}
          <div className="rounded-xl overflow-hidden h-96 border border-slate-700 bg-slate-800">
            <iframe
              src="https://www.google.com/maps?q=Z+Squad+Cooling+Solutions+Kochi&output=embed"
              className="w-full h-full scale-[1.01]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Z Squad Cooling Solutions Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
