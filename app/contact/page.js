"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Environment Variables
  const SERVICE_ID =
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

  const TEMPLATE_ID =
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  const AUTO_REPLY_TEMPLATE_ID =
    process.env.NEXT_PUBLIC_EMAILJS_AUTO_TEMPLATE_ID;

  const PUBLIC_KEY =
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    try {
      // Send email to you
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Jayadip",
        },
        PUBLIC_KEY
      );

      // Send auto reply to client
      await emailjs.send(
        SERVICE_ID,
        AUTO_REPLY_TEMPLATE_ID,
        {
          from_name: "Jayadip",
          to_name: formData.name,
          to_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-20">
      <div className="max-w-2xl mx-auto px-4">
        
        <h2 className="text-4xl font-bold mb-8 text-center">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border outline-none focus:ring-2"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border outline-none focus:ring-2"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border outline-none focus:ring-2"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border outline-none focus:ring-2"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-4 rounded-xl hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-600 text-center font-medium">
              Message sent successfully!
            </p>
          )}

        </form>
      </div>
    </section>
  );
}