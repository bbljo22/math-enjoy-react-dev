import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    published: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/tutorials", formData);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="App">
      <h1>React POST Request Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <label>Published:</label>
          <input type="checkbox" name="published" checked={formData.published} onChange={() => setFormData({ ...formData, published: !formData.published })} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
