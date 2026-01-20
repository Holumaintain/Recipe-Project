import { Link } from "react-router-dom";

export default function MegaMenu() {
  return (
    <div className="dropdown-menu p-4">
      <Link to="/recipes?cuisine=italian" className="dropdown-item">Italian</Link>
      <Link to="/recipes?diet=vegan" className="dropdown-item">Vegan</Link>
      <Link to="/recipes?meal=dinner" className="dropdown-item">Dinner</Link>
    </div>
  );
}
