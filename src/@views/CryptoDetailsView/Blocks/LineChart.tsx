import { Grid } from '@mui/material';
import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale } from 'chart.js';
// import { Line } from 'react-chartjs-2';

// ChartJS.register(CategoryScale);

interface Props {
  coinHistory: any;
  currentPrice: any;
  coinName: any;
}

const LineChart: React.FC<Props> = ({
  coinHistory,
  currentPrice,
  coinName,
}) => {
  const coinPrice = [];

  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString(),
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  //   const options = {
  //     scales: {
  //       yAxes: [
  //         {
  //           ticks: {
  //             beginAtZero: true,
  //           },
  //         },
  //       ],
  //     },
  //   };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  return (
    <Grid item xs={12}>
      <span>chart</span>
      {/* <Line data={data} options={options} /> */}
    </Grid>
  );
};

export default LineChart;
