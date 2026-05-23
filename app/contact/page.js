"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // HANDLE FORM SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      // CHECK ENV VARIABLES
      if (
        !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ) {

        alert("Missing EmailJS environment variables");
        console.error("Missing env variables");

        setLoading(false);

        return;

      }

      // =========================================
      // SEND EMAIL TO YOU
      // =========================================

      const mainEmailResponse = await emailjs.send(

        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,

        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,

        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },

        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      );

      console.log("Main email success:", mainEmailResponse);

      // =========================================
      // SEND AUTO REPLY TO USER
      // =========================================

      try {

        const autoReplyResponse = await emailjs.send(

          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,

          process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID,

          {
            to_name: formData.name,
            recipient: formData.email,
            subject: formData.subject,
            message: formData.message,
          },

          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

        );

        console.log("Auto reply success:", autoReplyResponse);

      } catch (autoReplyError) {

        console.error("Auto reply failed:", autoReplyError);

      }

      // =========================================
      // SUCCESS ALERT
      // =========================================

      alert("Message sent successfully!");

      // =========================================
      // RESET FORM
      // =========================================

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {

      console.error("Main email failed:", error);

      alert("Failed to send message.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-2xl">

        <h1 className="text-4xl font-bold text-center mb-8">
          Contact Me
        </h1>

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
            className="w-full border border-gray-300 rounded-lg p-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-4"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-4"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-4"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white rounded-lg py-4 text-lg"
          >

            {loading ? "Sending..." : "Send Message"}

          </button>

        </form>

      </div>

    </div>

  );

}