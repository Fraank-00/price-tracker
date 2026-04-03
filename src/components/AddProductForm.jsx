import { useState } from "react";

function AddProductForm({ addProduct }) {

  const [product, setProduct] = useState({
    name: "",
    supermarket: "",
    price: "",
    change: ""
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    addProduct(product);

    setProduct({
      name: "",
      supermarket: "",
      price: "",
      change: ""
    });
  };
  return (
    <div className="bg-white p-6 rounded-xl shadow mt-8">

      <h3 className="text-lg font-semibold mb-4">
        Agregar producto
      </h3>

      <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-4">

        <input
          type="text"
          name="name"
          placeholder="Producto"
          className="border p-2 rounded"
          onChange={handleChange}
        />

        <input
          type="text"
          name="supermarket"
          placeholder="Supermarcado"
          className="border p-2 rounded"
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Precio"
          className="border p-2 rounded"
          onChange={handleChange}
        />

        <input
          type="text"
          name="change"
          placeholder="Cambio %"
          className="border p-2 rounded"
          onChange={handleChange}
        />

        <button
          className="col-span-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Agregar
        </button>

      </form>

    </div>
  );
}

export default AddProductForm;