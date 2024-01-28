import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="bg-blue p-2 rounded-full transform rotate-45">
      <Link to="/" className=" text-white text-2xl font-serif">
        KT
      </Link>
    </div>
  )
};


export default Logo