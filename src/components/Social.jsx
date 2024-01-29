/* 
 * File: Social.jsx
 * Student's Name: Kausar Parveen
 * StudentID: 301369416
 * Date: 29/01/2024
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faFacebook, faDiscord } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    // Social media icon and links
    <div className="fixed bottom-0 left-0 p-1 bg-blue bg-opacity-50 rounded-md ml-3">
      <FontAwesomeIcon icon={faTwitter} className="text-kwhite text-2xl m-2 transition-transform transform hover:scale-110 hover:cursor-pointer" />
      <FontAwesomeIcon icon={faLinkedin} className="text-kwhite text-2xl m-2 transition-transform transform hover:scale-110 hover:cursor-pointer" />
      <FontAwesomeIcon icon={faFacebook} className="text-kwhite text-2xl m-2 transition-transform transform hover:scale-110 hover:cursor-pointer" />
      <FontAwesomeIcon icon={faDiscord} className="text-kwhite text-2xl m-2 transition-transform transform hover:scale-110 hover:cursor-pointer" />
    </div>
  );
}

export default SocialIcons;
