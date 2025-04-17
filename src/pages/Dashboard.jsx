import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Activity, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    const mockAppointments = [
      {
        id: '1',
        doctorName: 'Dr. Sarah jhon',
        date: '2024-02-20',
        time: '10:00',
        status: 'upcoming'
      },
      {
        id: '2',
        doctorName: 'Dr. saud abdurhman',
        date: '2024-02-15',
        time: '14:30',
        status: 'completed'
      }
    ];
    setAppointments(mockAppointments);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user.displayName || 'User'}!</h1>
        <p className="text-gray-600">Manage your appointments and track your wellness journey</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-blue-50 p-6 rounded-lg"
        >
          <Calendar className="w-8 h-8 text-blue-600 mb-2" />
          <h3 className="font-semibold mb-1">Upcoming Appointments</h3>
          <p className="text-2xl font-bold text-blue-600">
            {appointments.filter(a => a.status === 'upcoming').length}
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <h2 className="text-xl font-bold mb-4">Upcoming Appointments</h2>
          {appointments.filter(a => a.status === 'upcoming').map((appointment) => (
            <div key={appointment.id} className="border-b py-4 last:border-0">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{appointment.doctorName}</p>
                  <p className="text-gray-600">
                    {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                  </p>
                </div>
                <button className="text-red-600 hover:text-red-700">
                  Cancel
                </button>
              </div>
            </div>
          ))}
          <Link
            to="/appointment"
            className="mt-4 inline-block text-blue-600 hover:text-blue-700"
          >
            Book New Appointment →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
