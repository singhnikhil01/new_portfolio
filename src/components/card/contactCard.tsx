"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import dynamic from "next/dynamic";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { sendEmail } from "@/app/actions/email/sendEmail";
import { userEmail, Phone, center, location } from "@/constants/contact";


// Dynamically import MapContainer and related components to avoid SSR issues
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer ), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer ), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) =>  mod.Marker ), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup ), { ssr: false });


import "leaflet/dist/leaflet.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}


export function ContactCard() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<string>("");

  useEffect(() => {
    if (submitStatus === "Message sent successfully!") {
      const timer = setTimeout(() => {
        setSubmitStatus("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await sendEmail({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      if (response && response.ok) {
        setSubmitStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.log(error)
      setSubmitStatus("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg text-center">
      <p className="text-3xl py-10 font-bold text-orange-400">Let&apos;s Connect</p>
        <form onSubmit={handleSubmit} className="space-y-6 text-start py-0">
          <div>
            <label
              htmlFor="name"
              className="block text-sm  font-medium text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 bg-gray-700 text-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 bg-gray-700 text-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 bg-gray-700 "
              required
            ></textarea>
          

            
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2 bg-gradient-to-r from-orange-600 to-blue-700 text-white font-semibold rounded-md hover:shadow-lg transition-all"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
          {submitStatus && (
            <p
              className={`text-center text-sm py-2 rounded-sm font-bold ${
                submitStatus.includes("success")
                  ? "bg-green-400 text-gray-950"
                  : "bg-red-500 text-white"
              }`}
            >
              {submitStatus}
            </p>
          )}
        </form>
      </div>

      <div className="space-y-8">
        <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-6">
            Contact Information
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="w-6 h-6 text-orange-500" />
              <a href={`mailto:${userEmail}`} target="_blank" rel="noopener noreferrer" className="text-gray-300">
                {userEmail}
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="w-6 h-6 text-blue-500" />
              <a className="text-gray-300" href={`tel:${Phone}`}>
                {Phone}
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="w-6 h-6 text-purple-500" />
              <address className="text-gray-300">{location}</address>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-6">
            My Location
          </h3>
          <div className="h-64 md:h-80 rounded-md overflow-hidden">
            <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="h-full w-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
              />
              <Marker position={center}>
                <Popup>I&apos;m here! Let&apos;s meet.</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
