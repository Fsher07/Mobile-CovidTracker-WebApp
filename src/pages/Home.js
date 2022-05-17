import React from 'react';
import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/air_pollution?lat=75&lon=80&appid=ae6fdb1b65ea48560d9af18a6a280e28';

const Home = () => {
  const getMetrics = () => {
    axios.get(URL).then(res => {
      console.log(res);
    });
  };
  getMetrics();
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
