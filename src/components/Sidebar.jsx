import { NavLink } from "react-router-dom";
import { FaHome, FaBox, FaBell } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r flex flex-col p-6">

      <h1 className="text-2xl font-bold text-blue-600 mb-10">
        PriceTracker
      </h1>

      <nav className="flex flex-col gap-3">

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
              isActive
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <FaHome />
          Inicio
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
              isActive
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <FaBox />
          Productos
        </NavLink>

        <NavLink
          to="/alerts"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
              isActive
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <FaBell />
          Alertas
        </NavLink>

      </nav>

    </div>
  );
}

export default Sidebar;