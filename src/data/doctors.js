export const doctors = [
  {
    id: '1',
    name: 'Dr. Sarah Thompson',
    specialty: 'Clinical Psychology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
    experience: '15 years',
    languages: ['English', 'Spanish'],
    rating: 4.8,
    reviews: [
      {
        id: '1',
        userId: '1',
        userName: 'John D.',
        rating: 5,
        comment: 'Dr. Thompson is incredibly understanding and professional.',
        date: '2024-01-15'
      }
    ],
    availability: ['Monday', 'Wednesday', 'Friday']
  },
  {
    id: '2',
    name: 'Dr. Saud Abdulrahman',
    specialty: 'Psychiatry',
    image: 'https://media.istockphoto.com/id/1494356290/photo/handsome-saudi-arabian-middle-eastern-man-with-traditional-thwab-portrait-in-studio.jpg?s=612x612&w=0&k=20&c=yeptOvQE9uVdAlez0hvYMiUGQeENWQyoaRIeGLKpG3c=',
    experience: '12 years',
    languages: ['English', 'Arabic'],
    rating: 4.9,
    reviews: [
      {
        id: '2',
        userId: '2',
        userName: 'Emma S.',
        rating: 5,
        comment: 'Excellent doctor with great attention to detail.',
        date: '2024-01-10'
      }
    ],
    availability: ['Tuesday', 'Thursday', 'Saturday']
  },
  {
    id: '3',
    name: 'Dr. Aisha Al-Mutairi',
    specialty: 'Nutrition & Dietetics',
    image: 'https://www.abouther.com/sites/default/files/2019/08/06/main_-_esraa_al_buti.jpg',
    experience: '10 years',
    languages: ['Arabic', 'English'],
    rating: 4.7,
    reviews: [
      {
        id: '3',
        userId: '3',
        userName: 'Ali R.',
        rating: 5,
        comment: 'Very knowledgeable and helpful with dietary plans.',
        date: '2024-02-01'
      }
    ],
    availability: ['Monday', 'Wednesday']
  },
  {
    id: '4',
    name: 'Dr. David Reynolds',
    specialty: 'Neurology',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHxAvVyTX1fmjDVg-S2w6ubfsYk-yRuRoBpwfAFBesush-9sHsw9ID6BY81xM-RgnlIs&usqp=CAU',
    experience: '20 years',
    languages: ['English', 'French'],
    rating: 4.6,
    reviews: [
      {
        id: '4',
        userId: '4',
        userName: 'Sophia L.',
        rating: 4.5,
        comment: 'Expert in his field, but appointments take a while.',
        date: '2024-02-05'
      }
    ],
    availability: ['Tuesday', 'Friday']
  },
  {
    id: '5',
    name: 'Dr. Khalid Al-Farisi',
    specialty: 'Sleep Medicine',
    image: 'https://media.istockphoto.com/id/484758778/photo/arabian-man-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=tzKs6hXAOqOmw4iD9et84NdAovmbSTbNngnDmKebPYE=',
    experience: '14 years',
    languages: ['Arabic', 'English'],
    rating: 4.8,
    reviews: [
      {
        id: '5',
        userId: '5',
        userName: 'Noura A.',
        rating: 5,
        comment: 'Helped me improve my sleep schedule naturally.',
        date: '2024-02-10'
      }
    ],
    availability: ['Monday', 'Thursday']
  },
  {
    id: '6',
    name: 'Dr. Emily Carter',
    specialty: 'Behavioral Therapy',
    image: 'https://www.online-psychology-degrees.org/wp-content/uploads/2020/04/Do-All-Psychologists-Have-Their-Doctorate-Degree.jpg',
    experience: '18 years',
    languages: ['English'],
    rating: 4.9,
    reviews: [
      {
        id: '6',
        userId: '6',
        userName: 'Jake M.',
        rating: 5,
        comment: 'Life-changing therapy sessions!',
        date: '2024-02-15'
      }
    ],
    availability: ['Wednesday', 'Saturday']
  },
  {
    id: '7',
    name: 'Dr. Ahmed Al-Ghamdi',
    specialty: 'Sports Medicine',
    image: 'https://media.istockphoto.com/id/1394149742/photo/indoor-portrait-of-bearded-saudi-man-in-late-20s.jpg?s=612x612&w=0&k=20&c=fJHAptet4JItqoEkVP9fqkdUzqqszVNDfwS1hHbw8aQ=',
    experience: '11 years',
    languages: ['Arabic', 'English'],
    rating: 4.7,
    reviews: [
      {
        id: '7',
        userId: '7',
        userName: 'Hassan B.',
        rating: 5,
        comment: 'Great at treating sports-related injuries.',
        date: '2024-02-20'
      }
    ],
    availability: ['Sunday', 'Tuesday']
  },
  {
    id: '8',
    name: 'Dr. Michael Johnson',
    specialty: 'Occupational Therapy',
    image: 'https://www.manipalhospitals.com/uploads/doctors_photo/dr-radhakrishna-nayak-s-consultant-obstetrics-gynecology.png',
    experience: '22 years',
    languages: ['English'],
    rating: 4.5,
    reviews: [
      {
        id: '8',
        userId: '8',
        userName: 'Lisa K.',
        rating: 4.5,
        comment: 'Very patient and understanding.',
        date: '2024-02-25'
      }
    ],
    availability: ['Monday', 'Thursday']
  },
  {
    id: '9',
    name: 'Dr. Laila Hassan',
    specialty: 'Child Psychology',
    image: 'https://www.worldbank.org/content/dam/photos/768x768/2022/may/Saudi%20Recruitment%20Drive2.jpg',
    experience: '13 years',
    languages: ['Arabic', 'English'],
    rating: 4.9,
    reviews: [
      {
        id: '9',
        userId: '9',
        userName: 'Mariam O.',
        rating: 5,
        comment: 'Helped my child tremendously!',
        date: '2024-03-01'
      }
    ],
    availability: ['Tuesday', 'Friday']
  },
  {
    id: '10',
    name: 'Dr. Omar Al-Rashid',
    specialty: 'Clinical Depression Therapy',
    image: 'https://media.istockphoto.com/id/1390994387/photo/headshot-of-bearded-saudi-man-in-traditional-attire.jpg?s=612x612&w=0&k=20&c=4fp7roSaxOP1oSq3ighOiyyYbhwSoy1tDvyZRjDhUeo=',
    experience: '16 years',
    languages: ['Arabic', 'English'],
    rating: 4.8,
    reviews: [
      {
        id: '10',
        userId: '10',
        userName: 'Fahad J.',
        rating: 5,
        comment: 'Professional and empathetic.',
        date: '2024-03-05'
      }
    ],
    availability: ['Wednesday', 'Saturday']
  }
];
