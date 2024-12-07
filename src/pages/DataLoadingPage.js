import React from 'react';
import Papa from 'papaparse';
import { useDispatch } from 'react-redux';
import { loadData, loadDataError } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const DataLoadingPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'text/csv') {
            Papa.parse(file, {
                header: true,
                complete: (results) => {
                    const parsedData = results.data;
                    if (parsedData.length > 0) {
                        const keys = Object.keys(parsedData[0]);
                        const dataArray = [
                            keys, 
                            ...parsedData.map((row) => keys.map((key) => (isNaN(row[key]) ? row[key] : parseFloat(row[key])))),
                        ];
                        dispatch(loadData(dataArray)); 
                        navigate('/graph'); 
                    } else {
                        dispatch(loadDataError('Parsed data is empty.'));
                    }
                },
                error: (error) => {
                    dispatch(loadDataError('Error parsing CSV file.'));
                },
            });
        } else {
            dispatch(loadDataError('Invalid file format. Please upload a CSV file.'));
        }
    };

    
    return (
        <div className="data-loading-page bg-blue-100 p-8 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl text-blue-700 mb-6">Upload CSV File</h1>
            <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="mb-6 p-3 border rounded bg-white shadow-md"
            />
            <button
                onClick={() => navigate('/graph')}
                className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 shadow-lg"
            >
                Go to Graph
            </button>
        </div>
    );
};

export default DataLoadingPage;
