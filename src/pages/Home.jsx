import { Link } from 'react-router-dom';
import { Calendar, Users, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Mental Health Matters
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Professional care and support when you need it most
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/doctors"
                className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-200"
              >
                Find a Specialist
              </Link>
              <Link
                to="/appointment"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition duration-200"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Online Booking</h3>
              <p className="text-gray-600">
                Easy and convenient appointment scheduling with our specialists
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Expert Therapists</h3>
              <p className="text-gray-600">
                Qualified professionals specialized in various mental health areas
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Resources</h3>
              <p className="text-gray-600">
                Access to mental health articles, tips, and educational content
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                "The care and support I received here has been transformative. The doctors are incredibly professional and understanding."
              </p>
              <p className="font-semibold">- Sarah M.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                "Booking appointments was seamless, and the therapy sessions have helped me tremendously in my journey."
              </p>
              <p className="font-semibold">- James R.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                "The online resources and regular check-ins have made a real difference in my mental well-being."
              </p>
              <p className="font-semibold">- Emily K.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
