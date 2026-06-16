import { useState } from "react";
import ConfirmModal from "./ConfirmModal";

function ProductTable({ products, deleteProduct, updateProduct }) {

  // edición
  const [editingId, setEditingId] = useState(null);
  const [productoEditado, setProductoEditado] = useState({});

  // modal
  const [modalAbierto, setModalAbierto] = useState(false);
  const [productoAEliminar, setProductoAEliminar] = useState(null);

  // paginación
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 5;

  const indiceFinal = paginaActual * productosPorPagina;
  const indiceInicio = indiceFinal - productosPorPagina;

  const productosPaginados = products.slice(indiceInicio, indiceFinal);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm mt-8">

      <h3 className="text-lg font-semibold text-gray-800 mb-6">
        Lista de Productos
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-[700px] border-separate border-spacing-y-2">

          <thead>
            <tr className="text-left text-gray-500 text-sm">
              <th>Producto</th>
              <th>Supermercado</th>
              <th>Precio</th>
              <th>Cambio</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>

            {productosPaginados.map((product) => (
              <tr
                key={product.id}
                className="bg-gray-50 hover:bg-gray-100 transition rounded-xl"
              >

                {/* Producto */}
                <td className="p-3 font-medium text-gray-800">
                  {editingId === product.id ? (
                    <input
                      value={productoEditado.name}
                      onChange={(e) =>
                        setProductoEditado({
                          ...productoEditado,
                          name: e.target.value
                        })
                      }
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    product.name
                  )}
                </td>

                {/* Supermercado */}
                <td className="p-3">
                  {editingId === product.id ? (
                    <input
                      value={productoEditado.supermarket}
                      onChange={(e) =>
                        setProductoEditado({
                          ...productoEditado,
                          supermarket: e.target.value
                        })
                      }
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    product.supermarket
                  )}
                </td>

                {/* Precio */}
                <td className="p-3">
                  {editingId === product.id ? (
                    <input
                      type="number"
                      value={productoEditado.price}
                      onChange={(e) =>
                        setProductoEditado({
                          ...productoEditado,
                          price: e.target.value
                        })
                      }
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    <span className="font-semibold">
                      ${product.price}
                    </span>
                  )}
                </td>

                {/* Cambio */}
                <td className="p-3">
                  {editingId === product.id ? (
                    <input
                      type="number"
                      value={productoEditado.change}
                      onChange={(e) =>
                        setProductoEditado({
                          ...productoEditado,
                          change: e.target.value
                        })
                      }
                      className="border px-2 py-1 rounded w-20"
                    />
                  ) : (
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${product.change > 0
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                        }`}
                    >
                      {product.change > 0 ? "▲" : "▼"} {product.change}%
                    </span>
                  )}
                </td>

                {/* Acciones */}
                <td className="p-3 whitespace-nowrap">

                  {editingId === product.id ? (
                    <>
                      <button
                        onClick={() => {
                          updateProduct(productoEditado);
                          setEditingId(null);
                        }}
                        className="px-2s py-1 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                      >
                        Guardar
                      </button>

                      <button
                        onClick={() => setEditingId(null)}
                        className="px-3 py-1 text-sm bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                      >
                        Cancelar
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setEditingId(product.id);
                          setProductoEditado(product);
                        }}
                        className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                      >
                        Editar
                      </button>

                      <button
                        onClick={() => {
                          setProductoAEliminar(product.id);
                          setModalAbierto(true);
                        }}
                        className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                      >
                        Borrar
                      </button>
                    </>
                  )}

                </td>

              </tr>
            ))}

          </tbody>

        </table>
      </div>
      {/* Paginación */}
      <div className="flex justify-center mt-6 gap-2">

        <button
          onClick={() => setPaginaActual(paginaActual - 1)}
          disabled={paginaActual === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Anterior
        </button>

        <span className="px-3 py-1 font-medium">
          Página {paginaActual}
        </span>

        <button
          onClick={() => setPaginaActual(paginaActual + 1)}
          disabled={indiceFinal >= products.length}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Siguiente
        </button>

      </div>

      {/* Modal */}
      <ConfirmModal
        isOpen={modalAbierto}
        mensaje="¿Seguro que querés eliminar este producto?"
        onClose={() => setModalAbierto(false)}
        onConfirm={() => {
          deleteProduct(productoAEliminar);
          setModalAbierto(false);
        }}
      />

    </div>
  );
}

export default ProductTable;