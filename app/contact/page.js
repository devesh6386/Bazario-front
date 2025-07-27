'use client';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-800 mb-4">
          Contact <span className="text-yellow-600">Us</span>
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          Got a question or feedback? We’re here to help. Reach out to us anytime.
        </p>
      </motion.div>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {[
          {
            icon: <FaPhoneAlt size={30} className="text-yellow-700" />,
            title: 'Phone',
            value: '+91 6123456789',
          },
          {
            icon: <FaEnvelope size={30} className="text-yellow-700" />,
            title: 'Email',
            value: 'support@bazario.in',
          },
          {
            icon: <FaMapMarkerAlt size={30} className="text-yellow-700" />,
            title: 'Location',
            value: 'Patna, India',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg"
          >
            <div className="mb-3 flex justify-center">{item.icon}</div>
            <h3 className="text-lg font-semibold text-yellow-800">{item.title}</h3>
            <p className="text-gray-600 mt-1">{item.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-8 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Message sent successfully!');
        }}
      >
        <div>
          <label className="block text-left text-yellow-800 font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-yellow-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>
        <div>
          <label className="block text-left text-yellow-800 font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-yellow-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>
        <div>
          <label className="block text-left text-yellow-800 font-medium mb-1">Message</label>
          <textarea
            rows="4"
            placeholder="Type your message here..."
            className="w-full border border-yellow-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-yellow-700 transition"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
}
