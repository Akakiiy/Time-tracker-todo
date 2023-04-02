import React from 'react';
import './BarChart.css';

const BarChart = () => {
    return (
        <div className="bar-chart">
            <h2>График</h2>
            {/* Здесь будет код для отображения колоночного графика */}
            <img src={"https://media.istockphoto.com/id/1395869783/vector/bar-graph-stock-price-chart-vector-illustration.jpg?s=612x612&w=is&k=20&c=vYkW6pCJhTCv2EHUCFyXOtyJ06qvzsYv9u6D8aLji5E="} alt="Пример колоночного графика" /> {/* Добавьте изображение колоночного графика */}
        </div>
    );
};

export default BarChart;