import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Smile, Moon, Activity, BrainCircuit, Plus } from 'lucide-react';

export default function WellnessTracker() {
  const [logs, setLogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newLog, setNewLog] = useState({
    date: new Date().toISOString().split('T')[0],
    mood: 5,
    sleep: 5,
    anxiety: 5,
    notes: ''
  });

  useEffect(() => {
    const storedLogs = localStorage.getItem('wellnessLogs');
    if (storedLogs) {
      setLogs(JSON.parse(storedLogs));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedLogs = [newLog, ...logs];
    setLogs(updatedLogs);
    localStorage.setItem('wellnessLogs', JSON.stringify(updatedLogs));
    setShowForm(false);
    setNewLog({
      date: new Date().toISOString().split('T')[0],
      mood: 5,
      sleep: 5,
      anxiety: 5,
      notes: ''
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Wellness Tracker</h1>
        <p className="text-gray-600">Monitor your mental health journey and track your progress</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <motion.div className="bg-yellow-50 p-6 rounded-lg">
          <Smile className="w-8 h-8 text-yellow-600 mb-2" />
          <h3 className="font-semibold mb-1">Average Mood</h3>
          <p className="text-2xl font-bold text-yellow-600">{logs.length ? Math.round(logs.reduce((acc, log) => acc + log.mood, 0) / logs.length) : 0}/10</p>
        </motion.div>

        <motion.div className="bg-blue-50 p-6 rounded-lg">
          <Moon className="w-8 h-8 text-blue-600 mb-2" />
          <h3 className="font-semibold mb-1">Sleep Quality</h3>
          <p className="text-2xl font-bold text-blue-600">{logs.length ? Math.round(logs.reduce((acc, log) => acc + log.sleep, 0) / logs.length) : 0}/10</p>
        </motion.div>

        <motion.div className="bg-red-50 p-6 rounded-lg">
          <Activity className="w-8 h-8 text-red-600 mb-2" />
          <h3 className="font-semibold mb-1">Anxiety Level</h3>
          <p className="text-2xl font-bold text-red-600">{logs.length ? Math.round(logs.reduce((acc, log) => acc + log.anxiety, 0) / logs.length) : 0}/10</p>
        </motion.div>

        <motion.div className="bg-purple-50 p-6 rounded-lg">
          <BrainCircuit className="w-8 h-8 text-purple-600 mb-2" />
          <h3 className="font-semibold mb-1">Total Entries</h3>
          <p className="text-2xl font-bold text-purple-600">{logs.length}</p>
        </motion.div>
      </div>

      <motion.button onClick={() => setShowForm(!showForm)} className="mb-8 flex items-center bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
        <Plus className="w-5 h-5 mr-2" /> Add New Entry
      </motion.button>

      {showForm && (
        <motion.form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <input type="number" min="1" max="10" required value={newLog.mood} onChange={(e) => setNewLog({ ...newLog, mood: Number(e.target.value) })} className="w-full p-2 border rounded-md" placeholder="Mood (1-10)" />
            <input type="number" min="1" max="10" required value={newLog.sleep} onChange={(e) => setNewLog({ ...newLog, sleep: Number(e.target.value) })} className="w-full p-2 border rounded-md" placeholder="Sleep Quality (1-10)" />
            <input type="number" min="1" max="10" required value={newLog.anxiety} onChange={(e) => setNewLog({ ...newLog, anxiety: Number(e.target.value) })} className="w-full p-2 border rounded-md" placeholder="Anxiety Level (1-10)" />
          </div>
          <textarea className="w-full p-2 border rounded-md" rows={4} value={newLog.notes} onChange={(e) => setNewLog({ ...newLog, notes: e.target.value })} placeholder="Notes"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 mt-4">Save Entry</button>
        </motion.form>
      )}
    </div>
  );
}
