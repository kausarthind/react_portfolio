/* 
 * File: ServiceCard.jsx
 * Student's Name: Kausar Parveen
 * StudentID: 301369416
 * Date: 29/01/2024
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServiceCard = ({ icon, title, description }) => (
  // Card with link to more info on the service offered
    <a
      className="service-wrapper block rounded-md border border-gray p-8 shadow-xl transition hover:text-kwhite hover:bg-blue"
      href="/services"
    >
      <FontAwesomeIcon icon={icon} className="text-blue text-xl cursor-pointer" />
      <h2 className="mt-4 text-xl font-bold text-blue">{title}</h2>
      <p className="mt-1 text-sm text-gray">{description}</p>
    </a>
  );


  export default ServiceCard;