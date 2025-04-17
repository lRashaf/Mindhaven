import { motion } from 'framer-motion';
import { Users, Heart, Award, Globe2 } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">About MindCare</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Dedicated to making mental healthcare accessible, personal, and effective for everyone.
        </p>
      </motion.div>

      {/* Mission & Values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
      >
        <div className="text-center p-6">
          <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To make mental healthcare accessible and stigma-free for everyone who needs it.
          </p>
        </div>
        <div className="text-center p-6">
          <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Values</h3>
          <p className="text-gray-600">
            Empathy, professionalism, and continuous innovation in mental healthcare.
          </p>
        </div>
        <div className="text-center p-6">
          <Globe2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Impact</h3>
          <p className="text-gray-600">
            Helping thousands of people improve their mental well-being globally.
          </p>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
              alt="Dr. Sarah Thompson"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold">Dr. Sarah Thompson</h3>
            <p className="text-gray-600">Founder & Chief Psychiatrist</p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
              alt="Dr. saud abdurhman"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold">Dr. Michael Chen</h3>
            <p className="text-gray-600">Clinical Director</p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
              alt="Dr. Emily Rodriguez"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold">Dr. Emily Rodriguez</h3>
            <p className="text-gray-600">Head of Therapy</p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
              alt="Dr. James Wilson"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold">Dr. James Wilson</h3>
            <p className="text-gray-600">Research Lead</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
