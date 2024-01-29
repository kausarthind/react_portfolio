/* 
 * File: Home.jsx
 * Student's Name: Kausar Parveen
 * StudentID: 301369416
 * Date: 29/01/2024
 */

import { Link } from 'react-router-dom';
import profileImage from "../assets/images/MyProfileImage.jpeg"

const Home = () => {
  return (
    // Background image
    <div className="bg-cover bg-center bg-fixed h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')" }}>
      <div className="bg-blue bg-opacity-70 h-full w-full absolute"></div>

      <div className="container mx-auto h-full flex items-center justify-center relative">
        <div className="bg-white p-8 rounded-lg  text-center">
          {/* Profile Image */}
          <div className="mb-4">
            <img src={profileImage} alt="Profile" className="image-wrapper w-24 h-24 rounded-full mx-auto border-4 border-kwhite" />
          </div>

          {/* Name with curly font and tilted */}
          <h1 className="name-wrapper text-4xl font-dancing-script text-kwhite">-KausarParveen-</h1>

          {/* Mission Statement */}
          <p className="text-kwhite p-10 text-xl">
          Elegance. breeds. Efficiency
          </p>
          <span
          className="mt-8 inline-block rounded bg-blue px-12 py-3 text-grey text-sm font-medium text-kwhite transition  focus:outline-none focus:ring"
        >
          <Link to="/about">About Me</Link>
        </span>
        </div>
      </div>
    </div>
  );
}


export default Home