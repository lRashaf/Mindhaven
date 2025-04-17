import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">
          We're here to help. Reach out to us with any questions or concerns.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">contact@mindcare.com</p>
                <p className="text-gray-600">support@mindcare.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-6 h-6 text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-gray-600">+1 (555) 987-6543</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">
                  123 Healing Street<br />
                  Mental Health District<br />
                  Wellness City, WC 12345
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="w-6 h-6 text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="font-semibold">Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 8:00 AM - 8:00 PM<br />
                  Saturday: 9:00 AM - 5:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          
          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-green-50 text-green-600 p-4 rounded-lg"
            >
              Thank you for your message! We'll get back to you soon.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded-md"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full p-2 border rounded-md"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded-md"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full p-2 border rounded-md"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
