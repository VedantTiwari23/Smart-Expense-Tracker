import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

function Charts({ expenses = [] }) {
  // CATEGORY DATA
  const categoryData = {};

  expenses.forEach((exp) => {
    if (categoryData[exp.category]) {
      categoryData[exp.category] += Number(exp.amount);
    } else {
      categoryData[exp.category] = Number(exp.amount);
    }
  });

  const categoryArray = Object.keys(categoryData).map((key) => ({
    name: key,
    value: categoryData[key],
  }));

  // MONTHLY DATA
  const monthlyData = {};

  // Converts date into month name:
  expenses.forEach((exp) => {
    const month = new Date(exp.date).toLocaleString("default", {
      month: "short",
    });

    if (monthlyData[month]) {
      monthlyData[month] += Number(exp.amount);
    } else {
      monthlyData[month] = Number(exp.amount);
    }
  });

  // YHA HAMLOG ARRAY BNA RHE HAI KYUKI OBJECTS ME .MAP USE NHI HOOTA HAI
  const monthlyArray = Object.keys(monthlyData).map((key) => ({
    month: key,
    amount: monthlyData[key],
  }));

  // FOR DAILY DATA
  const dailyData = {};

  expenses.forEach((exp) => {
    const date = new Date(exp.date).getDate();

    if (dailyData[date]) {
      dailyData[date] += Number(exp.amount);
    } else {
      dailyData[date] = Number(exp.amount);
    }
  });

  // now to convert it into array
  const dailyArray = Object.keys(dailyData).map((key) => ({
    day: key,
    amount: dailyData[key],
  }));

  const categoryColors = {
    Food: "#FF6384",
    Travel: "#36A2EB",
    Shopping: "#FFCE56",
    Health: "#2ECC71",
    Bills: "#E67E22",
    Other: "#8E44AD",

  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* PAGE HEADING */}
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        📊 Expense Analytics
      </h2>

      {/* GRID CONTAINER */}
      {/* md:grid-cols-2 => medium screen pr 2 columns */}
      {/* lg:grid-cols-3 => large screen pr 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* PIE CHART */}
        {/* DATAKEY VALUE HSI KYUKI VALUE KEY SE HI DIFFERENTIATE KRENGE */}
        <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition duration-300">
          
          <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">
            Category Wise
          </h3>

          <div className="flex justify-center">
            <PieChart width={300} height={300}>
              <Pie data={categoryArray} dataKey="value" outerRadius={100}>
                
                {categoryArray.map((cat, index) => (
                  // 👉 Adds different colors to slices
                  <Cell
                    key={index}
                    fill={categoryColors[cat.name] || "#8884d8"}
                  />
                ))}

              </Pie>

              {/* 👉 Shows values on hover */}
              <Tooltip />
            </PieChart>
          </div>
        </div>

        {/* BAR CHART */}
        <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition duration-300">
          
          <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">
            Monthly Spending
          </h3>

          <div className="flex justify-center overflow-x-auto">
            <BarChart width={400} height={300} data={monthlyArray}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Bar dataKey="amount" fill="#36A2EB" />
            </BarChart>
          </div>
        </div>

        {/* BAR CHART 2 */}
        <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition duration-300">
          
          <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">
            Daily Spending
          </h3>

          <div className="flex justify-center overflow-x-auto">
            <BarChart width={400} height={300} data={dailyArray}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />

              <Bar dataKey="amount" fill="#FF6384" />
            </BarChart>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Charts;

// “I used Recharts, a React-based charting library.
// First, I transformed raw expense data into grouped formats using reduce() — one grouped by category for the pie chart, and another grouped by month for the bar chart.
// Then I passed this processed data into Recharts components like PieChart and BarChart.
// The dataKey property tells the chart which value to visualize, and components like Tooltip improve interactivity.”
