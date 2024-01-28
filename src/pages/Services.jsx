import ServiceCard from '../components/ServiceCard';
import servicesData from "../data/servicesData"

const Services = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Services I Offer</h2>
          <p className="mt-4 text-gray-300">
          As a skilled professional, I offer a range of services to meet your digital needs. Check out the services I provide to enhance your projects and business.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded bg-blue px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};



export default Services;
