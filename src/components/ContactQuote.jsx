
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const ContactQuote = () => {
  return (
    <div className="text-center flex flex-row">
      <div className="mb-4">
        <FontAwesomeIcon icon={faQuoteLeft} className="text-4xl text-blue" />
      </div>

      <p className="text-lg italic">
        The first step to building a lasting relationship is a simple conversation. Let's connect and create something amazing together.
      </p>

      <div className="mt-4">
        <FontAwesomeIcon icon={faQuoteRight} className="text-4xl text-blue" />
      </div>
    </div>
  );
}

export default ContactQuote;
