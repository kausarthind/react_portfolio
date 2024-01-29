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
    <div className="p-1 rounded-md ml-3">
      <FontAwesomeIcon icon={faTwitter} className="text-gray text-2xl m-2 transition-transform transform hover:scale-110 hover:cursor-pointer hover:text-blue" />
      <FontAwesomeIcon icon={faLinkedin} className="text-gray text-2xl m-2 transition-transform transform hover:scale-110 hover:cursor-pointer hover:text-blue" />
      <FontAwesomeIcon icon={faFacebook} className="text-gray text-2xl m-2 transition-transform transform hover:scale-110 hover:cursor-pointer hover:text-blue" />
      <FontAwesomeIcon icon={faDiscord} className="text-gray text-2xl m-2 transition-transform transform hover:scale-110 hover:cursor-pointer hover:text-blue" />
    </div>
  );
}

export default SocialIcons;
