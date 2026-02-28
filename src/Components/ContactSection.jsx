import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const phoneNumber = "201147204750"; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello, my name is ${formData.name}%0AEmail: ${formData.email}%0A%0A${formData.message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-softBeige py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE - CONTACT INFO */}
        <div>
          <h2 className="text-4xl font-bold text-richBlack mb-6">
            Let’s Create Something Beautiful
          </h2>

          <p className="text-warmGray mb-8">
            Available for weddings, portraits, brand shoots and creative projects.
            Feel free to reach out through any platform below.
          </p>

          <div className="space-y-6 text-richBlack">

            <div className="flex items-center gap-4">
              <FaInstagram className="text-terracotta text-xl" />
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                className="hover:text-terracotta transition"
              >
                _by_abdallah
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-terracotta text-xl" />
              <span>01147204750</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-terracotta text-xl" />
              <span>Cairo, Egypt</span>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-whiteSmoke p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-richBlack mb-6">
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-mutedGold/40 focus:ring-2 focus:ring-terracotta outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-mutedGold/40 focus:ring-2 focus:ring-terracotta outline-none"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-mutedGold/40 focus:ring-2 focus:ring-terracotta outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-terracotta text-whiteSmoke rounded-full hover:scale-105 transition duration-300 shadow-md"
            >
              Send via WhatsApp
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}