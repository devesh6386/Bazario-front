'use client';
import { motion } from 'framer-motion';
import { FaStreetView, FaHandHoldingUsd, FaMobileAlt } from 'react-icons/fa';

export default function AboutPage() {
  const features = [
    {
      icon: <FaStreetView size={40} className="text-yellow-700" />,
      title: 'Empowering Vendors',
      desc: 'We help street vendors grow digitally and reach more customers easily.',
    },
    {
      icon: <FaHandHoldingUsd size={40} className="text-yellow-700" />,
      title: 'Affordable & Fair',
      desc: 'Our system supports fair pricing and boosts local business confidence.',
    },
    {
      icon: <FaMobileAlt size={40} className="text-yellow-700" />,
      title: 'Easy to Use',
      desc: 'No tech skills? No problem. Vendors can easily manage their presence.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-800 mb-4">
          About <span className="text-yellow-600">Bazario</span>
        </h1>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          Bazario is a digital platform designed to connect street vendors with local customers.
          Our goal is to bring local food to fingertips while helping vendors grow.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold text-yellow-800">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-20 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-yellow-800 mb-4">Our Vision</h2>
        <p className="text-lg text-gray-700">
          We dream of a digitally inclusive ecosystem where every street vendor can thrive,
          and customers can discover authentic local food with ease and joy.
        </p>
      </motion.div>
    </div>
  );
}
