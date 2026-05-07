import React, { useState } from "react";

function ExpenseForm({ addexpense }) {

    // e.target.value is ALWAYS a string, even if input type is number.

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");

  //HANDLE SUBMIT KE LIYE

  function handleSubmit(e) {
    e.preventDefault();//to prevent default from reload

    if (!date || !category || !amount) {
      alert("Fill all the details");
      return;
    }
    const expense = {
      id: Date.now(),
      amount: Number(amount),
      category,
      date,
    };

    //ye value addexpense naam ke ek function me pass ho rha hai jo app.jsx me hai
    //taki submit hoone ke baad sb default value pr aa jaiye

    addexpense(expense);
    setAmount("");
    setCategory("Food");
    setDate("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
          Amount
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm select-none">₹</span>
          <input
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border-2 border-slate-100 hover:border-slate-300 focus:border-slate-800 rounded-xl pl-7 pr-4 py-3 text-sm text-slate-800 font-semibold placeholder-slate-300 focus:outline-none transition-all duration-200 bg-slate-50 focus:bg-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
          Category
        </label>
        <div className="relative">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border-2 border-slate-100 hover:border-slate-300 focus:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-800 font-semibold bg-slate-50 focus:bg-white appearance-none focus:outline-none transition-all duration-200"
          >
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Health</option>
            <option>Bills</option>
            <option>Others</option>
          </select>
          <svg className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
          Date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border-2 border-slate-100 hover:border-slate-300 focus:border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-700 font-semibold bg-slate-50 focus:bg-white focus:outline-none transition-all duration-200"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-slate-800 hover:bg-slate-700 active:scale-95 text-white text-sm font-bold py-3.5 rounded-xl transition-all duration-150 flex items-center justify-center gap-2 shadow-lg shadow-slate-200 mt-1"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;