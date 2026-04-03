import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">

      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600">
        PriceTracker
      </h1>

      {/* Navegación */}
      <div className="flex gap-6">

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
              : "text-gray-600 hover:text-blue-600"
          }
        >
          Inicio
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
              : "text-gray-600 hover:text-blue-600"
          }
        >
          Productos
        </NavLink>

        <NavLink
          to="/alerts"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
              : "text-gray-600 hover:text-blue-600"
          }
        >
          Alertas
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;