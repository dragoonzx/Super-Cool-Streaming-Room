import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const texts = ["Super", "Cool", "Streaming", "Room"];

const Logo = () => {
  return (
    <Link to="/">
      <motion.span
        style={{ color: "#ff1f8f" }}
        className="font-portico uppercase"
      >
        Super Cool
      </motion.span>
      {/* <motion.span
        style={{ color: "#ff1f8f" }}
        className="font-portico uppercase"
      >
        Streaming Room
      </motion.span> */}
    </Link>
  );
};

export default Logo;
