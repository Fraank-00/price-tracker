import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Alerts from "./pages/Alerts";

function App() {

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (nuevo) => {
    setProducts([...products, { id: Date.now(), ...nuevo }]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const updateProduct = (actualizado) => {
    setProducts(
      products.map((p) =>
        p.id === actualizado.id ? actualizado : p
      )
    );
  };

  const alerts = products.filter(
    (p) => Number(p.change) > 20
  );

  return (
    <BrowserRouter>

      <div className="flex flex-col md:flex-row">

        {/* Sidebar */}
        <Sidebar />

        {/* Contenido */}
        <div className="flex-1">

          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  products={products}
                  alerts={alerts}
                  addProduct={addProduct}
                />
              }
            />

            <Route
              path="/products"
              element={
                <Products
                  products={products}
                  deleteProduct={deleteProduct}
                  updateProduct={updateProduct}
                />
              }
            />

            <Route
              path="/alerts"
              element={<Alerts alerts={alerts} />}
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;