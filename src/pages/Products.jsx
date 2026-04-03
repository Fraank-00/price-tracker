import { useState } from "react";
import ProductTable from "../components/ProductTable";

function Products({ products, deleteProduct, updateProduct }) {

  const [search, setSearch] = useState("");
  const [filterMarket, setFilterMarket] = useState("All");
  const [sortBy, setSortBy] = useState("none");

  const defaultMarkets = ["Coto", "Carrefour", "Día", "Jumbo"];

  const supermarkets = [
    "All",
    ...new Set([...defaultMarkets, ...products.map((p) => p.supermarket)])
  ];

  // 🔍 filtro
  const filteredProducts = products
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      filterMarket === "All"
        ? true
        : p.supermarket === filterMarket
    );

  // 🔃 orden
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price") return Number(a.price) - Number(b.price);
    if (sortBy === "change") return Number(b.change) - Number(a.change);
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Products
          </h2>
          <p className="text-gray-500">
            Manage and track your product prices
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-xl shadow flex flex-wrap gap-4 items-center">

          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-lg w-64"
          />

          <select
            value={filterMarket}
            onChange={(e) => setFilterMarket(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-white"
          >
            {supermarkets.map((market) => (
              <option key={market}>
                {market}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="none">Sort</option>
            <option value="price">Price</option>
            <option value="change">Price Change</option>
          </select>

        </div>

        {/* Table */}
        <div className="mt-6">
          <ProductTable
            products={sortedProducts}
            deleteProduct={deleteProduct}
            updateProduct={updateProduct}
          />
        </div>

      </div>

    </div>
  );
}

export default Products;