import { useState } from 'react';
import { Calendar, Clock, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { doctors } from '../data/doctors';
import { motion } from 'framer-motion';

export default function Appointment() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const navigate = useNavigate();

  const specialties = [...new Set(doctors.map(doctor => doctor.specialty))];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = !selectedSpecialty || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const handleDoctorSelect = (doctor) => {
    navigate(`/doctors?selected=${doctor.id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold mb-4">Book Your Appointment</h1>
        <p className="text-gray-600">Find the right specialist and schedule your visit</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-lg shadow-sm p-6 mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search Doctor
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by doctor name..."
                className="pl-10 w-full p-2 border rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Specialty
            </label>
            <select
              className="w-full p-2 border rounded-md"
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              <option value="">All Specialties</option>
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <motion.div
            key={doctor.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
              <p className="text-gray-600 mb-4">{doctor.specialty}</p>
              
              <div className="flex items-center mb-2">
                <Calendar className="w-5 h-5 text-gray-500 mr-2" />
                <span className="text-gray-600">{doctor.experience} experience</span>
              </div>
              
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 text-gray-500 mr-2" />
                <span className="text-gray-600">
                  Available on: {doctor.availability.join(', ')}
                </span>
              </div>

              <button
                onClick={() => handleDoctorSelect(doctor)}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Schedule Appointment
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No doctors found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
