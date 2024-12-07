import React from 'react';
import { Chart } from 'react-google-charts';
import { useSelector } from 'react-redux';

const ChartDisplay = ({ chartType }) => {
    const data = useSelector((state) => state.data);
    const error = useSelector((state) => state.error);

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (!data.length) {
        console.log('No data available.');
        return <div>No data available. Please upload a CSV file.</div>;
    }

    console.log('Chart Data:', data); 

    return (
        <Chart
            chartType={chartType}
            data={data}
            width="100%"
            height="400px"
            options={{ title: 'Dynamic Chart' }}
        />
    );
};

export default ChartDisplay;
