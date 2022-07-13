import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Navigate} from "react-router-dom";
import {ScopedCssBaseline} from "@mui/material";
import Challenge from "./Challenge/Challenge";
import Handle404 from "./DoNotMove/Handle404";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ScopedCssBaseline>
            <Router>
                <Handle404>
                    <Route path={"/"} element={<Navigate to={'App/Challenge/page1'}/>}/>
                    <Route path={"App/*"} element={<Challenge/>}/>
                </Handle404>
            </Router>
        </ScopedCssBaseline>
    </React.StrictMode>
);
