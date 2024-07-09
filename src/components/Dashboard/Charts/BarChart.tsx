import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface ChartData {
	label: string;
	value: number;
}

interface ChartProps {
	data: ChartData[];
}

const BarChart: React.FC<ChartProps> = ({ data }) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		if (!canvasRef.current) {
			console.error("Canvas element not found!");
			return;
		}

		const ctx = canvasRef.current.getContext("2d");
		if (!ctx) {
			console.error("Failed to get canvas context!");
			return;
		}

		// Create gradient
		const gradient = ctx.createLinearGradient(
			0,
			0,
			ctx.canvas.width,
			ctx.canvas.height
		);
		gradient.addColorStop(0, "#7928CA"); // Starting color
		gradient.addColorStop(1, "#FF0080"); // Ending color

		const chartInstance = new Chart(ctx, {
			type: "bar",
			data: {
				labels: data.map((item) => item.label),
				datasets: [
					{
						label: "Candidates Votes",
						borderWidth: 0,
						borderRadius: 4,
						borderSkipped: false,
						backgroundColor: gradient, // Use gradient as background color
						data: data.map((item) => item.value),
						maxBarThickness: 20,
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: true,
					},
				},
				interaction: {
					intersect: true,
					mode: "index",
				},
				scales: {
					y: {
						border: {
							display: false,
						},
						grid: {
							drawOnChartArea: true,
							drawTicks: true,
						},
						ticks: {
							padding: 15,
							font: {
								size: 14,
								family: "Open Sans",
								style: "normal",
								lineHeight: 2,
							},
							color: "black",
						},
					},
					x: {
						border: {
							display: false,
						},
						grid: {
							drawOnChartArea: false,
							drawTicks: true,
						},
						ticks: {
							display: true,
						},
					},
				},
			},
		});

		// Cleanup function to destroy chart instance on component unmount
		return () => {
			chartInstance.destroy();
		};
	}, [data]); // Dependency array now only includes data

	return (
		<div className="card mb-3">
			<div className="card-body p-3">
				<div className="chart">
					<canvas
						ref={canvasRef}
						className="chart-canvas"
						height="450"></canvas>
				</div>
			</div>
		</div>
	);
};

export default BarChart;
