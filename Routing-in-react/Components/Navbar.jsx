import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
     
      <ul>
        <li>
          <Link to='/'> Home </Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/dashboard'> Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
