import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function PriceChart({ products }) {

  const data = products.map((product) => ({
    name: product.name,
    price: Number(product.price)
  }));

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h3 className="text-lg font-semibold mb-4">
        Tendencias de precios
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="price"
            stroke="#3b82f6"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default PriceChart;