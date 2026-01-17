import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Testimonials() {
  const testimonials = [
    {
      name: "Shiril Sudheer",
      role: "Homeowner",
      content:
        "Best AC servicing in Kochi. The staff were punctual and the work was perfect.",
      rating: 5,
    },
    {
      name: "Sumeesh K S",
      role: "Business Owner",
      content: "Good AC service and professional work.",
      rating: 5,
    },
    {
      name: "Anandhu A",
      role: "Property Manager",
      content: "Best split AC servicing in Kaloor.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-slate-900 mb-4 text-3xl sm:text-4xl"
            data-aos="fade-up"
          >
            What Our Clients Say
          </h2>
          <p
            className="text-slate-600 max-w-2xl mx-auto text-lg"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            Don&apos;t just take our word for it — hear from our satisfied customers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-slate-200 hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-cyan-500 mb-3" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">
                    {testimonial.content}
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <h4 className="text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-slate-200">
          <div className="text-center" data-aos="zoom-in" data-aos-delay="150">
            <div className="text-3xl text-cyan-600 mb-2">Trusted</div>
            <div className="text-slate-600">Service in Ernakulam</div>
          </div>

          <div className="text-center" data-aos="zoom-in" data-aos-delay="250">
            <div className="text-3xl text-cyan-600 mb-2">24/7</div>
            <div className="text-slate-600">Emergency Service</div>
          </div>

          <div className="text-center" data-aos="zoom-in" data-aos-delay="350">
            <div className="text-3xl text-cyan-600 mb-2">100%</div>
            <div className="text-slate-600">Customer Focus</div>
          </div>
        </div>
      </div>
    </section>
  );
}
