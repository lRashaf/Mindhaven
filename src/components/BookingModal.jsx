import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export default function BookingModal({ doctor, onClose }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const today = new Date().toISOString().split('T')[0];
  
  useEffect(() => {
    if (!user?.uid) {
      setError('Please login to book an appointment');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!user?.uid) {
        throw new Error('Please login first');
      }

      const appointmentId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      await setDoc(doc(db, 'appointments', appointmentId), {
        doctorId: doctor.id,
        doctorName: doctor.name,
        userId: user.uid,
        userEmail: user.email,
        date: selectedDate,
        time: selectedTime,
        status: 'scheduled',
        paymentMethod,
        createdAt: new Date().toISOString(),
      });

      alert('Appointment booked successfully!');
      onClose();
      
    } catch (error) {
      console.error('Booking error:', error);
      setError(error.message || 'Failed to book appointment');
    }

    setLoading(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-lg max-w-md w-full p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-xl font-semibold"
            >
              Book Appointment with {doctor.name}
            </motion.h2>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-red-50 text-red-500 rounded-md"
            >
              {error}
            </motion.div>
          )}

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Date
              </label>
              <input
                type="date"
                required
                min={today}
                className="w-full p-2 border rounded-md"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Time
              </label>
              <select
                required
                className="w-full p-2 border rounded-md"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="">Select a time</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
              </select>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Payment Method
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  Credit/Debit Card
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  PayPal
                </label>
              </div>
            </motion.div>

            <motion.div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading || !user?.uid}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? 'Processing...' : 'Confirm Booking'}
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
