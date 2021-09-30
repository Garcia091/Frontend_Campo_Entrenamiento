import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import App from "../components/App";


export default function Ppicontainer() {
  return (
     <BrowserRouter>
       <Route path="/" exact component={App}/>
     </BrowserRouter>
  );
}
