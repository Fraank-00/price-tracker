function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition flex items-center justify-between">

      <div>
        <p className="text-gray-500 text-sm">
          {title}
        </p>
        <h3 className="text-2xl font-bold text-gray-800 mt-1">
          {value}
        </h3>
      </div>

      <div className="text-blue-600 text-2xl bg-blue-100 p-3 rounded-xl">
        {icon}
      </div>

    </div>
  );
}

export default StatCard;