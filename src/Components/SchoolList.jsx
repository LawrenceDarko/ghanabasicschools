import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const BASE_URL = "http://127.0.0.1:8000"

function SchoolList() {
  const [schools, setSchools] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [wassePerformanceFilter, setWassePerformanceFilter] = useState();

  useEffect(() => {
    // `${BASE_URL}/products/v1/fetchForMenu/${7}`
    const apiUrl = `${BASE_URL}/api/schools/`;
    const config = {
      params: {
        category: categoryFilter,
        region: regionFilter,
        wassce_performance: wassePerformanceFilter
      }
    };
    axios.get(apiUrl, config)
      .then(response => setSchools(response.data))
      .catch(error => console.log(error));
  }, [categoryFilter, regionFilter, wassePerformanceFilter]);

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegionFilter(event.target.value);
  };

  const handleWassceChange = (event) => {
    setWassePerformanceFilter(event.target.value);
  };

  return (
    <div>
      <h1>List of Schools</h1>
      <div>
        <label htmlFor="category">Filter by Category:</label>
        <select id="category" value={categoryFilter} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="A">Category A</option>
          <option value="B">Category B</option>
          <option value="C">Category C</option>
          <option value="D">Category D</option>
        </select>

      </div>
      <div>
        <label htmlFor="region">Filter by Region:</label>
        <select id="region" value={regionFilter} onChange={handleRegionChange}>
          <option value="">All regions</option>
          <option value="Accra">Greater Accra</option>
          <option value="Ashanti">Ashanti</option>
          <option value="Eastern">Eastern</option>
          <option value="Central">Central</option>
          <option value="Volta">Volta</option>
          <option value="Northern">Northern</option>
          <option value="Upper East">Upper East</option>
          <option value="Upper West">Upper West</option>
          <option value="Western">Western</option>
          <option value="Brong Ahafo">Brong Ahafo</option>
        </select>
      </div>
      <div>
        <label htmlFor="wassce">Filter by WASSCE Performance:</label>
        <input type="text" id="wassce_performance" value={wassePerformanceFilter} onChange={handleWassceChange} />
      </div>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ border: '1px solid black' }}>
            <th style={{ border: '1px solid black', padding: '5px' }}>School</th>
            <th style={{ border: '1px solid black', padding: '5px' }}>Category</th>
            <th style={{ border: '1px solid black', padding: '5px' }}>History</th>
            <th style={{ border: '1px solid black', padding: '5px' }}>WASSCE Performance</th>
            <th style={{ border: '1px solid black', padding: '5px' }}>Region</th>
          </tr>
        </thead>
        <tbody>
          {schools.map(school => (
            <tr key={school.id} style={{ border: '1px solid black' }}>
              <td style={{ border: '1px solid black', padding: '5px' }}>{school.name}, {school.region}</td>
              <td style={{ border: '1px solid black', padding: '5px' }}>{school.category}</td>
              <td style={{ border: '1px solid black', padding: '5px' }}>{school.history}</td>
              <td style={{ border: '1px solid black', padding: '5px' }}>{school.wassce_performance}</td>
              <td style={{ border: '1px solid black', padding: '5px' }}>{school.region}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr style={{ border: '1px solid black' }}>
            <td style={{ border: '1px solid black', padding: '5px' }} colSpan={5}>Total schools: {schools.length}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default SchoolList;
