import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link component={RouterLink} to='/'>
          Home
        </Link>
      </li>
      <li>
        <Link component={RouterLink} to='/about'>
          About
        </Link>
      </li>
      <li>
        <Link component={RouterLink} to='/users'>
          Users
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
