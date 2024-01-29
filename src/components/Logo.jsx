/* 
 * File: Logo.jsx
 * Student's Name: Kausar Parveen
 * StudentID: 301369416
 * Date: 29/01/2024
 */

import { Link } from "react-router-dom";

const Logo = () => {
  return (
    // Logo wrapper
    <div className="logo-wrapper bg-blue p-2 transform rotate-45 rounded-md">
      <Link to="/" className=" text-white text-2xl font-serif">
        KP
      </Link>
    </div>
  )
};


export default Logo