import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/red" />
        </li>
        <li>
          <Link to="/blue" />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
