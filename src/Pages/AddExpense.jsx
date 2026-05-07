import React from 'react'
import ExpenseForm from '../Components/ExpenseForm'
import ExpenseList from '../Components/ExpenseList'
import Summary from '../Components/Summary'

export default function AddExpense({ expenses, addexpense }) {
  return (
    <div className="min-h-screen bg-[#f5f7fa] px-4 py-10">

      <div className="max-w-3xl mx-auto bg-gradient-to-r from-slate-800 to-slate-600 rounded-3xl px-8 py-8 mb-8 shadow-xl">

        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">💰 Expense Tracker</p>
        <h1 className="text-white text-3xl font-extrabold tracking-tight mb-1">Add & Track Expenses</h1>
        <p className="text-slate-300 text-sm">Log your spending and monitor your budget in one place
        </p>
        <div className="mt-5 flex items-center gap-3">
          <div className="bg-white/10 rounded-xl px-4 py-2 text-white text-sm font-semibold">
            📋 {expenses.length} Transaction{expenses.length !== 1 ? 's' : ''}
          </div>
          <div className="bg-white/10 rounded-xl px-4 py-2 text-white text-sm font-semibold">
            💸 ₹{expenses.reduce((s, e) => s + Number(e.amount), 0).toLocaleString('en-IN')} Total
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">


        <div className="bg-white rounded-3xl shadow-md border border-slate-100 p-6">
          <h2 className="text-slate-800 text-base font-bold mb-4 flex items-center gap-2">
            <span className="w-7 h-7 bg-slate-800 rounded-lg flex items-center justify-center text-white text-xs">+</span>
            New Expense
          </h2>
          <ExpenseForm addexpense={addexpense} />
        </div>


        <div className="bg-white rounded-3xl shadow-md border border-slate-100 p-6">
          <h2 className="text-slate-800 text-base font-bold mb-4 flex items-center gap-2">
            <span className="w-7 h-7 bg-slate-800 rounded-lg flex items-center justify-center text-white text-xs">📊</span>
            Summary
          </h2>
          <Summary expenses={expenses} />
        </div>

      </div>

      <div className="max-w-3xl mx-auto mt-6 bg-white rounded-3xl shadow-md border border-slate-100 p-6">
        <h2 className="text-slate-800 text-base font-bold mb-4 flex items-center gap-2">
          <span className="w-7 h-7 bg-slate-800 rounded-lg flex items-center justify-center text-white text-xs">📄</span>
          Recent Transactions
        </h2>
        {/* WE didnt pass setExpenses because it may Break component separation */}

        <ExpenseList expenses={expenses} />
      </div>

    </div>
  )
}