import { Chart, ArcElement } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
import { Heading, Subheading } from '../../Texts/Texts';
Chart.register(ArcElement);

const data = {
  labels: ['Red', 'Blue'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [70, 30],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
      hoverOffset: 4,
    },
  ],
};

export default function HalfDoughnut({ label }: { label?: string }) {
  return (
    <div>
      <div className='h-28'>
        <Doughnut
          data={data}
          options={{
            rotation: -90,
            circumference: 180,
          }}
        />
      </div>

      <div className='-translate-y-[80%]'>
        {label && <Subheading text={label} textAlign='center' />}
      </div>
    </div>
  );
}
