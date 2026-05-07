import React from "react";

const categoryEmoji = {
  Food: "🍔",
  Travel: "✈️",
  Shopping: "🛍️",
  Health: "💊",
  Bills: "🧾",
  Others: "📦",
};

const categoryColor = {
  Food: "bg-orange-100 text-orange-700",
  Travel: "bg-blue-100 text-blue-700",
  Shopping: "bg-pink-100 text-pink-700",
  Health: "bg-green-100 text-green-700",
  Bills: "bg-red-100 text-red-700",
  Others: "bg-gray-100 text-gray-700",
};

function Summary({ expenses }) {
  // exp → current expense object summ=0(initial value)
  const total = expenses.reduce((summ, exp) => summ + Number(exp.amount), 0);
  
  //Grouping our category

  const categoryData = {};
  expenses.forEach((exp) => {
    if (categoryData[exp.category]) {
      categoryData[exp.category] += Number(exp.amount);
    } else {
      categoryData[exp.category] = Number(exp.amount);
    }
  });

  if (expenses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="text-4xl mb-3">📊</div>
        <p className="text-slate-500 font-semibold text-sm">No data yet</p>
        <p className="text-slate-400 text-xs mt-1">Add an expense to see your summary</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">

    {/* total spending */}

      <div className="bg-gradient-to-br from-slate-800 to-slate-600 rounded-2xl px-5 py-4 text-white">
        <p className="text-slate-300 text-xs font-bold uppercase tracking-widest mb-1">Total Spending</p>
        <p className="text-3xl font-extrabold tracking-tight">₹{total.toLocaleString('en-IN')}</p>
        <p className="text-slate-400 text-xs mt-1">{expenses.length} transaction{expenses.length !== 1 ? 's' : ''}</p>
      </div>

      {/* .entries()->It converts an object into an array */}
      {/* category,amt] This is array destructuring ex=["Food", 500] */}

      <div>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">By Category</p>
        <ul className="space-y-2">
          {Object.entries(categoryData).map(([category, amt]) => {
            const percent = Math.round((amt / total) * 100);
            const colorClass = categoryColor[category] || "bg-gray-100 text-gray-700";
            const emoji = categoryEmoji[category] || "📦";
            return (
              <li key={category}>
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${colorClass}`}>
                    {emoji} {category}
                  </span>
                  <span className="text-slate-700 font-bold text-sm">₹{amt.toLocaleString('en-IN')}</span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-slate-100 rounded-full h-1.5">
                  <div
                    className="bg-slate-700 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>

    </div>
  );
}

export default Summary;