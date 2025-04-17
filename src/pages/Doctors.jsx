import { useState, useMemo } from 'react';
import { Star, Calendar, Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { doctors } from '../data/doctors';
import BookingModal from '../components/BookingModal';
import { useNavigate } from 'react-router-dom';

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const navigate = useNavigate();

  const specialties = [...new Set(doctors.map(doctor => doctor.specialty))];
  const languages = [...new Set(doctors.flatMap(doctor => doctor.languages))];

  const filteredDoctors = useMemo(() => {
    return doctors.filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty = !selectedSpecialty || doctor.specialty === selectedSpecialty;
      const matchesLanguage = !selectedLanguage || doctor.languages.includes(selectedLanguage);
      return matchesSearch && matchesSpecialty && matchesLanguage;
    });
  }, [searchTerm, selectedSpecialty, selectedLanguage]);

  const handleBooking = (doctor) => {
    const user = localStorage.getItem('user');
    if (!user) {
      sessionStorage.setItem('intendedBooking', doctor.id);
      navigate('/login', { state: { message: 'Please log in to book an appointment' } });
      return;
    }
    setSelectedDoctor(doctor);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl font-bold mb-8"
      >
        Find a Doctor
      </motion.h1>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white p-6 rounded-lg shadow-sm mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search
            </label>
            <input
              type="text"
              placeholder="Search by name or specialty..."
              className="w-full px-4 py-2 border rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Specialty
            </label>
            <select
              className="w-full px-4 py-2 border rounded-md"
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              <option value="">All Specialties</option>
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Language
            </label>
            <select
              className="w-full px-4 py-2 border rounded-md"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option value="">All Languages</option>
              {languages.map((language) => (
                <option key={language} value={language}>{language}</option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img src={doctor.image} alt={doctor.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
              <p className="text-gray-600 mb-2">{doctor.specialty}</p>
              <button 
                onClick={() => handleBooking(doctor)}
                className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </motion.div>

      {filteredDoctors.length === 0 && (
        <motion.div className="text-center py-12">
          <p className="text-gray-500">No doctors found matching your criteria.</p>
        </motion.div>
      )}

      {selectedDoctor && (
        <BookingModal
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
        />
      )}
    </motion.div>
  );
}
