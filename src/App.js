import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './containers/Layout/Layout';

const app = () => {
//   fetch("http://localhost:1337/cities", {
//   method: "GET",
//   headers: {
//      'Content-Type': 'application/json'
//   },
// }).then(response => response.json())
//   .then(data => console.log(data));
    return (
      <div>
        <Layout/>
      </div>
    );
}

export default app;
