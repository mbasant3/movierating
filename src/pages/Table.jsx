import React, { useState } from 'react';

const Table = () => {
  const [filters, setFilters] = useState({
    name: '',
    age: '',
    gender: '',
  });
  const [data, setData] = useState([
    { name: 'John', age: 25, gender: 'Male' },
    { name: 'Jane', age: 30, gender: 'Female' },
    { name: 'Bob', age: 35, gender: 'Male' },
  ]);

  const handleFilterChange = (event, column) => {
    setFilters({
      ...filters,
      [column]: event.target.value,
    });
  };

  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      item.age.toString().includes(filters.age.toLowerCase()) &&
      item.gender.toLowerCase().includes(filters.gender.toLowerCase())
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              Name{' '}
              <input
                type="text"
                value={filters.name}
                onChange={(e) => handleFilterChange(e, 'name')}
              />
            </th>
            <th>
              Age{' '}
              <input
                type="text"
                value={filters.age}
                onChange={(e) => handleFilterChange(e, 'age')}
              />
            </th>
            <th>
              Gender{' '}
              <input
                type="text"
                value={filters.gender}
                onChange={(e) => handleFilterChange(e, 'gender')}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
