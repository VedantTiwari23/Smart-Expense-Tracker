import React from 'react'
//expenses ek object hai
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

function ExpenseList({ expenses }) {
  if (expenses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="text-4xl mb-3">🧾</div>
        <p className="text-slate-500 font-semibold text-sm">No transactions yet</p>
        <p className="text-slate-400 text-xs mt-1">Your expenses will appear here</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {expenses.map((expense, index) => {
        const emoji = categoryEmoji[expense.category] || "📦";
        const colorClass = categoryColor[expense.category] || "bg-gray-100 text-gray-700";
        return (
          <div
            key={expense.id}
            className="flex items-center justify-between bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-2xl px-4 py-3 transition-colors duration-150 group"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${colorClass}`}>
                {emoji}
              </div>
              <div>
                <p className={`text-xs font-bold px-2 py-0.5 rounded-full inline-block ${colorClass}`}>
                  {expense.category}
                </p>
                <p className="text-slate-400 text-xs mt-0.5">{expense.date}</p>
              </div>
            </div>

            <p className="text-slate-800 font-extrabold text-base">
              ₹{Number(expense.amount).toLocaleString('en-IN')}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ExpenseList;