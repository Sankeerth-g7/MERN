import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

function App() {
  const [students, setStudents] = useState([]);
  
  useEffect(() =>{
    axios.get('http://localhost:4000/api/students').then(
      response =>{
        console.log(response.json)
        setStudents(response.data);
      }
    )
    .catch(err =>{
      console.log(err);
    });
  },[]);
  return (
    <div>
      <h1>student Data</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LatName</th>
            <th>Email</th>
          </tr>
        </thead>
      <tbody>
        {students.map(student => (
          <tr key = {student.id}>
            <td>{student.id}</td>
            <td>{student.first_name}</td>
            <td>{student.last_name}</td>
            <td>{student.email}</td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
}

export default App;
