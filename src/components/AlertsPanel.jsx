function AlertsPanel({ alerts }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h3 className="text-lg font-semibold mb-4">
        Alerta de Precios
      </h3>

      {alerts.length === 0 ? (
        <p className="text-gray-500">
          No alertas
        </p>
      ) : (
        <ul className="space-y-3">
          {alerts.map((alert) => (
            <li
              key={alert.id}
              className="p-3 bg-red-50 border border-red-200 rounded-lg"
            >
              <span className="font-medium">
                {alert.name}
              </span>{" "}
              increased{" "}
              <span className="text-red-500 font-semibold">
                +{alert.change}%
              </span>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}

export default AlertsPanel;