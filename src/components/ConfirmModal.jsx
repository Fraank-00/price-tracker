function ConfirmModal({ isOpen, onClose, onConfirm, mensaje }) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">

      <div className="bg-white rounded-xl p-6 w-80 shadow-lg">

        <h2 className="text-lg font-semibold mb-4">
          Confirmar acción
        </h2>

        <p className="text-gray-600 mb-6">
          {mensaje}
        </p>

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-lg"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Eliminar
          </button>

        </div>

      </div>

    </div>
  );
}

export default ConfirmModal;