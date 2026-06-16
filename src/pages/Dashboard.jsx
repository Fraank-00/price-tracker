import { useState } from "react";

import StatCard from "../components/StatCard"; 
import PriceChart from "../components/PriceChart";
import AddProductForm from "../components/AddProductForm";

import { FaBox, FaBell, FaArrowUp, FaChartLine } from "react-icons/fa";

function Dashboard({ products, alerts, addProduct }) {

  const [search, setSearch] = useState("");

  const highestIncrease = Math.max(
    ...products.map((p) => Number(p.change)),
    0
  );

  const avgChange =
    products.length > 0
      ? (
          products.reduce((acc, p) => acc + Number(p.change), 0) /
          products.length
        ).toFixed(1)
      : 0;

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="max-w-7xl mx-auto px-6 py-8">

        <h2 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">

          <StatCard
            title="Productos rastreados"
            value={products.length}
            icon={<FaBox />}
          />

          <StatCard
            title="Alertas activadas"
            value={alerts.length}
            icon={<FaBell />}
          />

          <StatCard
            title="Mayor aumento"
            value={`+${highestIncrease}%`}
            icon={<FaArrowUp />}
          />

          <StatCard
            title="Cambio promedio"
            value={`${avgChange}%`}
            icon={<FaChartLine />}
          />

        </div>

        {/* Chart */}
        <div className="mt-8">
          <PriceChart products={products} />
        </div>

        {/* Add Product */}
        <div className="mt-8">
          <AddProductForm addProduct={addProduct} />
        </div>

        {/* Search (opcional para UX) */}
        <div className="flex gap-4 mt-6 items-center">

          <input
            type="text"
            placeholder="Buscar producto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-lg w-full md:w-64"
          />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;