"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {

  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      // ================================
      // SEND MAIN EMAIL
      // ================================

      const mainResponse = await emailjs.sendForm(

        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,

        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,

        formRef.current,

        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      );

      console.log("MAIN EMAIL SUCCESS:", mainResponse);

      // ================================
      // SEND AUTO REPLY
      // ================================

      const autoReplyResponse = await emailjs.send(

        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,

        process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID,

        {
          to_name: formRef.current.name.value,
          to_email: formRef.current.email.value,
          subject: formRef.current.subject.value,
          message: formRef.current.message.value,
        },

        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      );

      console.log("AUTO REPLY SUCCESS:", autoReplyResponse);

      alert("Message sent successfully!");

      formRef.current.reset();

    } catch (error) {

      console.error("EMAIL ERROR:", error);

      alert("Failed to send message");

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
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded-lg p-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded-lg p-4"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full border border-gray-300 rounded-lg p-4"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
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