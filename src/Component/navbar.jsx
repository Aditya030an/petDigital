

// import React, { useState } from "react";
// import { FaPhone, FaEnvelope, FaUser, FaBars, FaTimes } from "react-icons/fa";
// import logo from "./photos/DigitalLogo.png"
// import { FaPhoneAlt } from "react-icons/fa"; // Import the correct icon
// import { Link } from "react-router-dom";


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-lg relative">
//       {/* Logo Section */}
//       <div className="flex items-center">
//       <Link to="/">
//   <img 
//     src={logo}
//     alt="Logo" 
//     className="h-20 w-auto cursor-pointer transition-all duration-300 transform hover:scale-110"
//   />
// </Link>
// </div>

//       {/* Hamburger Menu for Mobile */}
//       <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black text-2xl focus:outline-none z-50">
//         {isOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Navigation Links & Contact Section */}
//       <div className={`md:flex md:items-center md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-slate-300 md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 flex flex-col md:flex-row transition-all duration-300 ${isOpen ? "flex" : "hidden"} z-40`}>
//         <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">


// <div className="flex items-center space-x-2 font-[lato] text-gray-700 hover:text-blue-600 transition duration-300">
//   <FaPhoneAlt className="text-xl" /> {/* Corrected icon */}
//   <span className="text-lg font-semibold">+91 9424094362</span>
// </div>
//           <div className="flex items-center space-x-2 font-[lato] text-gray-700 hover:text-blue-600 transition duration-300">
//             <FaEnvelope className="text-xl" />
//             <span className="text-lg font-semibold">Digitalpetclinic@gmail.com</span>
//           </div>

//           <a
//               href="/Contact"
//               className="bg-blue-600 text-white font-[lato] font-semibold px-6 py-2 rounded-full text-lg shadow-md hover:shadow-lg hover:bg-blue-500 transition duration-300">

//               Contact now 
//             </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./photos/DigitalLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-2 font-[lato] bg-white shadow-lg relative">
      {/* Logo Section */}
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-16 w-auto cursor-pointer transition-all duration-300 transform hover:scale-110"
        />
      </Link>

      {/* Hamburger Menu for Mobile */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black text-2xl focus:outline-none z-50">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links & Contact Section */}
      <div className={`md:flex md:items-center md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 flex flex-col md:flex-row transition-all duration-300 ${isOpen ? "flex" : "hidden"} z-40`}>
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">

          <Link to="/" className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300">
            Home
          </Link>

          {/* Services Dropdown with Premium Design */}
          <div className="relative group">
        

            {/* Dropdown Menu */}
            <div className="relative group">
  {/* Parent Element (Trigger) - No extra button */}
  <div className="relative group">
            <button
              className="flex items-center text-lg font-semibold text-gray-700 hover:text-blue-600 transition duration-300"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <FaChevronDown className="ml-1 text-sm" />
            </button></div>

  {/* Dropdown Menu */}
  <div
    className={`absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-300 transform scale-95 opacity-0 pointer-events-none 
      group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto 
      ${servicesOpen ? "opacity-100 scale-100 pointer-events-auto" : ""}`}
  >
    <ul className="py-2">
      {[
        "First aid and emergency advice",
        "Disease diagnosis and treatment",
        "Parasite control",
        "Nutrition and diet guidance",
        "Enclosure and husbandry setup",
        "Breeding and neonatal care",
        "Second opinion - expert's review",
      ].map((service, index, array) => (
        <li
          key={index}
          className={`px-5 py-3 text-gray-700 transition-all duration-300 ease-in-out cursor-pointer 
            ${index === 0 ? "rounded-t-lg" : ""} 
            ${index === array.length - 1 ? "rounded-b-lg" : "border-b border-gray-200"} `}
        >
          {service}
        </li>
      ))}
    </ul>
  </div>
</div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-300">
            <FaPhoneAlt className="text-xl" />
            <span className="text-lg font-semibold">+91 9424094362</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition duration-300">
            <FaEnvelope className="text-xl" />
            <span className="text-lg font-semibold">Digitalpetclinic@gmail.com</span>
          </div>

          {/* Contact Now Button */}

        </div>
        {/* <Link to="/BookConsultation">
            <button className="bg-green-600 text-white font-semibold px-6 py-2 rounded-full text-lg shadow-md hover:shadow-lg hover:bg-green-500 transition duration-300">
              Book Consultation
            </button>
          </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
