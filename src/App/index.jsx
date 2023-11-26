import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import PreloadMedia from "../Components/PreloadMedia";
import App from "./App";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import "../../public/Fonts/Morganite/morganiteFont.css";
import projects from '../Constants/constants';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>     
     <ToastContainer />
      <PreloadMedia data={projects}>
        <App />
      </PreloadMedia>
    </BrowserRouter>
  </React.StrictMode>
);
