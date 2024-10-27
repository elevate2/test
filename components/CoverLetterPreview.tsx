import React from "react";
import { Phone, Mail } from "lucide-react";

export function CoverLetterPreview() {
  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-xl p-6 space-y-4">
        <h2 className="text-2xl font-bold text-blue-600">RARA IMOON</h2>
        <p className="text-gray-600 uppercase">UI DESIGNER</p>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Phone className="w-4 h-4" />
            <span>+62 877 100-0000</span>
          </div>
          <div className="flex items-center space-x-1">
            <Mail className="w-4 h-4" />
            <span>raraimoon@gmail.com</span>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <p>Malik D&apos;Essentials,</p>
          <p>Keitoro Inc</p>
          <p>September 15, 2023</p>
        </div>
        <p className="font-semibold">To whom it may concern</p>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            I am writing to express my strong interest in the UI Designer
            position at Keitoro Inc as advertised. With a background in UI/UX
            design and a passion for creating exceptional user experiences, I am
            excited about the opportunity to contribute my skills to your
            innovative company.
          </p>
          <p>
            Keitoro Inc has consistently impressed me with its dedication to
            innovation and its commitment to delivering top-notch digital
            products. I am enthusiastic about the possibility of joining your
            team and helping to elevate your product user experiences to new
            heights.
          </p>
          <p>Here&apos;s a brief overview of my qualifications:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              UI/UX Expertise: I specialize in crafting intuitive, visually
              stunning interfaces. From wireframing to design trends, I&apos;ve
              got it covered.
            </li>
            <li>
              Data-Driven Design: Beyond aesthetics, I use data analytics to
              ensure our designs resonate with users and hit the mark.
            </li>
            <li>
              Collaboration Champ: I thrive in collaborative settings,
              seamlessly working with product managers, developers, and fellow
              designers.
            </li>
          </ul>
          <p>
            I&apos;m excited about blending creativity and data to elevate
            Keitoro&apos;s digital products. Let&apos;s discuss how I can steer
            your UI/UX design into the future. Thank you for considering my
            application.
          </p>
          <p>With best regards,</p>
          <p>Raraimoon</p>
        </div>
      </div>
    </div>
  );
}
