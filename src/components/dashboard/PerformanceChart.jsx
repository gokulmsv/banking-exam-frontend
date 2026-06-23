import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function PerformanceChart() {
  const data = [
    { week: "W1", score: 60 },
    { week: "W2", score: 65 },
    { week: "W3", score: 72 },
    { week: "W4", score: 78 },
    { week: "W5", score: 85 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold mb-5">
        Performance Trend
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PerformanceChart;