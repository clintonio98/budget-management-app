import React, { useState } from 'react';

function ReceiptUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload-receipt', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      alert('Receipt uploaded successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} className="my-2" />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Upload Receipt
      </button>
    </form>
  );
}

export default ReceiptUpload;