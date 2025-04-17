import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MindCare</h3>
            <p className="text-gray-400">
              Professional mental health care services for everyone.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/doctors" className="text-gray-400 hover:text-white">Find a Doctor</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-white">Resources</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/appointment" className="text-gray-400 hover:text-white">Book Appointment</Link></li>
              <li><Link to="/wellness-tracker" className="text-gray-400 hover:text-white">Wellness Tracker</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-white">Testimonials</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-white">Mental Health Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-400">Email: contact@mindcare.com</p>
              <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} MindCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
