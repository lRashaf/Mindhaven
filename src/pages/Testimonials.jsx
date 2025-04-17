import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah ',
    image: 'https://media.istockphoto.com/id/522484813/photo/arabian-businesswoman-business-concept.jpg?s=612x612&w=0&k=20&c=UAKMSyJe0_ZmlKZbK2iM-ofnwftenjdE2wHzv8wbn3Q=',
    text: 'The support I received here completely transformed my approach to mental health. The therapists are incredibly understanding and professional.',
    rating: 5,
    profession: 'Teacher'
  },
  {
    id: 2,
    name: 'lamia',
    image: 'https://www.worldbank.org/content/dam/photos/768x768/2022/may/Saudi%20Recruitment%20Drive2.jpg',
    text: 'Finding the right therapist was so easy through this platform. The booking process is seamless, and the care is exceptional.',
    rating: 5,
    profession: 'Software Engineer'
  },
  {
    id: 3,
    name: 'Emily ',
    image: '',
    text: 'The online resources combined with regular therapy sessions have made a huge difference in my mental well-being.',
    rating: 5,
    profession: 'Marketing Manager'
  },
  {
    id: 4,
    name: 'noura ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Iq5osXWtbShiNQ42S9NSi0QNI0zHVZhCkz-5ruDEK9Bee32I4QGOHnNJ472BdprqUKc&usqp=CAU',
    text: 'I appreciate the holistic approach to mental health. The wellness tracking features help me stay mindful of my progress.',
    rating: 4,
    profession: 'Business Owner'
  }
];

export default function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold mb-4">Success Stories</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Read about the experiences of people who have found support and healing through our platform
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <div className="flex items-start mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm">{testimonial.profession}</p>
                <div className="flex items-center mt-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-100 transform -scale-x-100" />
              <p className="text-gray-700 pl-6">{testimonial.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
