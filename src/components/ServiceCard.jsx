import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServiceCard = ({ icon, title, description }) => (
    <a
      className="service-wrapper block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:text-kwhite hover:bg-blue"
      href="/services/digital-campaigns"
    >
      <FontAwesomeIcon icon={icon} className="text-blue text-xl cursor-pointer" />
      <h2 className="mt-4 text-xl font-bold text-white">{title}</h2>
      <p className="mt-1 text-sm text-gray-300">{description}</p>
    </a>
  );


  export default ServiceCard;