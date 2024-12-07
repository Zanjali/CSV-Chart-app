import React from 'react';
import Papa from 'papaparse';
import { useDispatch } from 'react-redux';
import { loadData, loadDataError } from '../redux/actions';

const FileUpload = () => {
    const dispatch = useDispatch();

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'text/csv') {
            console.log('File uploaded:', file);
            Papa.parse(file, {
                header: true,
                complete: (results) => {
                    const parsedData = results.data;
                    if (parsedData.length > 0) {
                        const keys = Object.keys(parsedData[0]);
                        const dataArray = [keys, ...parsedData.map(row => keys.map(key => row[key]))];
                        console.log('Parsed Data:', dataArray); // Debugging line
                        dispatch(loadData(dataArray));
                    } else {
                        console.error("Parsed data is empty.");
                        dispatch(loadDataError("Parsed data is empty."));
                    }
                },
                error: (error) => {
                    console.error("Error parsing CSV file:", error);
                    dispatch(loadDataError("Error parsing CSV file."));
                },
            });
        } else {
            console.error("Invalid file format. Please upload a CSV file.");
            dispatch(loadDataError("Invalid file format. Please upload a CSV file."));
        }
    };

    return (
        <div className="file-upload">
            <input type="file" accept=".csv" onChange={handleFileUpload} />
        </div>
    );
};

export default FileUpload;
