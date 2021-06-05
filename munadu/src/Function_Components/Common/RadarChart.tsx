import { Radar } from "react-chartjs-2";
import { ChartOptions } from "chart.js";

interface IProps {
  label: string[];
  data: any;
  width: number;
  height: number;
  displayScales: boolean;
}

const RadarChart = ({ label, data, width, height, displayScales }: IProps) => {
  const chartData = {
    labels: label,
    datasets: [
      {
        data: data,
        label: "사형의 조언",
        backgroundColor: "rgba(255, 168, 5, 0.7)",
        borderColor: "#eeeeee",
        pointBackgroundColor: "rgb(255, 200, 99)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 200, 99)",
      },
    ],
  };
  const chartOptions: ChartOptions = {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    scales: {
      r: {
        max: 5,
        min: 0,
        ticks: {
          display: displayScales,
          stepSize: 1,
        },
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <Radar
        type="radar"
        data={chartData}
        options={chartOptions}
        width={width}
        height={height}
      ></Radar>
    </>
  );
};

export default RadarChart;
