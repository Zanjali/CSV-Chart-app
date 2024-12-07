import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import DataLoadingPage from './pages/DataLoadingPage';
import GraphPage from './pages/GraphPage';
import './index.css'; 

const App = () => (
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/data-loading" element={<DataLoadingPage />} />
                <Route path="/graph" element={<GraphPage />} />
                <Route
                    path="/"
                    element={
                        <div className="bg-blue-100 min-h-screen flex justify-center items-center">
                            <h1 className="text-4xl">Welcome to CSV Chart App</h1>
                        </div>
                    }
                /> {/* Default route */}
            </Routes>
        </Router>
    </Provider>
);

export default App;
