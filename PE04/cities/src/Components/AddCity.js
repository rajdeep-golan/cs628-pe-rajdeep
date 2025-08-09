import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCity({ addCity }) {
  const [form, setForm] = useState({ name: "", country: "", population: "", description: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCity(form);
    navigate("/cities"); // Redirect after adding
  };

  return (
    <div className="container">
  <div className="details-panel">
    <h2>Add City</h2>
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="City Name" value={form.name} onChange={handleChange} required />
      <input name="country" placeholder="Country" value={form.country} onChange={handleChange} required />
      <input name="population" placeholder="Population" value={form.population} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
      <button type="submit">Add City</button>
    </form>
  </div>
</div>

  );
}

export default AddCity;
