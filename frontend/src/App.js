import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddEntryForm from './components/AddEntryForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-4">
        <Dashboard />
        <AddEntryForm />
      </div>
    </div>
  );
}

export default App;