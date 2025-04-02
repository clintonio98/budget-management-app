import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch('/api/expenses')
      .then((res) => res.json())
      .then((data) => setExpenses(data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {expenses.map((expense, index) => (
          <div key={index} className="p-4 border">
            <p>{expense.category}</p>
            <p>${expense.amount}</p>
            <p>{expense.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;