function Alerts({ alerts }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">

      <h2 className="text-3xl font-bold mb-6">
        Alerts
      </h2>

      {alerts.length === 0 ? (
        <p className="text-gray-500">
          No alerts
        </p>
      ) : (
        <ul className="space-y-3">
          {alerts.map((alert) => (
            <li
              key={alert.id}
              className="p-3 bg-red-50 border border-red-200 rounded-lg"
            >
              <strong>{alert.name}</strong> increased +{alert.change}%
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}

export default Alerts;