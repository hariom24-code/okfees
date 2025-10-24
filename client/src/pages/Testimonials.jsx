import React from 'react';

const TestimonialCard = ({ quote, name, institute }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg">
    <p className="text-gray-700">"{quote}"</p>
    <div className="mt-6">
      <div className="font-bold text-gray-900">{name}</div>
      <div className="text-sm text-gray-500">{institute}</div>
    </div>
  </div>
);

export default function Testimonials() {
  const testimonials = [
    { name: 'Dr. Rajesh Kumar', institute: 'Excel Mathematics Academy, Mumbai', quote: 'OkFees has revolutionized our fee management. The automated reminders have improved our collection rate by over 30%!' },
    { name: 'Priya Sharma', institute: 'Success Science Institute, Delhi', quote: 'The analytics dashboard is a game-changer. We can now track student performance and make data-driven decisions like never before.' },
    { name: 'Mohammed Hassan', institute: 'Career Plus Coaching, Bangalore', quote: 'Managing multiple batches was a nightmare. OkFees simplified it completely. The platform is intuitive and incredibly powerful.' },
  ];
  
  const metrics = [
    { value: '500+', label: 'Happy Institutes' },
    { value: '10,000+', label: 'Students Managed' },
    { value: '₹50Cr+', label: 'Fees Processed' },
    { value: '99.9%', label: 'Uptime' },
  ];
  
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">What Our Clients Say</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => <TestimonialCard key={testimonial.name} {...testimonial} />)}
        </div>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((metric) => <div key={metric.label}>
            <p className="text-3xl md:text-4xl font-bold text-primary">{metric.value}</p>
            <p className="mt-1 text-gray-500">{metric.label}</p>
          </div>)}
        </div>
      </div>
    </section>
  );
}
