import React, { useState } from 'react';
import ChartDisplay from './ChartDisplay';

const ChartSelector = () => {
    const [chartType, setChartType] = useState('LineChart');

    return (
        <div className="chart-selector">
            <select onChange={(e) => setChartType(e.target.value)} className="mb-4 p-2 border rounded">
                <option value="LineChart">Line Chart</option>
                <option value="BarChart">Bar Chart</option>
            </select>
            <ChartDisplay chartType={chartType} />
        </div>
    );
};

export default ChartSelector;
