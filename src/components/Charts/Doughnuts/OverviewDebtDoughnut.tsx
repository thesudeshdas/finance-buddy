import { Chart, ArcElement } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
Chart.register(ArcElement);

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
      hoverOffset: 4,
    },
  ],
};

export default function OverviewDebtDoughnut() {
  return (
    <div className='h-28'>
      <Doughnut data={data} />
    </div>
  );
}
