import { Phone, ArrowRight, Snowflake, Shield, Clock } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1757219525975-03b5984bc6e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBjb25kaXRpb25pbmclMjBpbnN0YWxsYXRpb24lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY1NjEwNjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Professional AC Installation"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/98 via-slate-900/90 to-cyan-900/80"></div>
        
        {/* Animated Circles */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full mb-6 backdrop-blur-sm">
            <Snowflake className="h-4 w-4 text-cyan-400" />
            <span className="text-cyan-100">Trusted AC Specialists in Kochi</span>
          </div>

          <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-7xl leading-tight">
            Professional AC Services<br />
            <span className="text-cyan-400">You Can Trust</span>
          </h1>
          
          <p className="text-slate-200 mb-10 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Expert air conditioning installation, repair, and maintenance services across Ernakulam. 
            Fast response, certified technicians, and guaranteed customer satisfaction.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-7 text-lg shadow-xl shadow-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white hover:bg-slate-50 text-slate-900 border-2 border-white px-8 py-7 text-lg shadow-xl"
              onClick={() => window.location.href = 'tel:+918089596969'}
            >
              <Phone className="mr-2 h-5 w-5" />
              08089596969
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <Clock className="h-5 w-5 text-cyan-400" />
              </div>
              <span>24/7 Emergency Service</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <Shield className="h-5 w-5 text-cyan-400" />
              </div>
              <span>Certified Technicians</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <Snowflake className="h-5 w-5 text-cyan-400" />
              </div>
              <span>15+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400/60 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-cyan-400/80 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
