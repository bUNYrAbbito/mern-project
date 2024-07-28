import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ month }) => {
  const [barData, setBarData] = useState({});

  useEffect(() => {
    fetchBarChartData();
  }, [month]);

  const fetchBarChartData = async () => {
    const response = await axios.get('http://localhost:5000/transactions/bar-chart', { params: { month } });
    const data = response.data;

    setBarData({
      labels: Object.keys(data),
      datasets: [
        {
          label: 'Number of Items',
          data: Object.values(data),
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
        },
      ],
    });
  };

  return <Bar data={barData} />;
};

export default BarChart;
