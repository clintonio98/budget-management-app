import React, { useState } from 'react';

function AddEntryForm() {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // Handle form submission here
    console.log({ category, amount, description });
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold">Add New Entry</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category"
          className="w-full p-2 my-2 border"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          className="w-full p-2 my-2 border"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className="w-full p-2 my-2 border"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white mt-2">
          Add Entry
        </button>
      </form>
    </div>
  );
}

export default AddEntryForm;