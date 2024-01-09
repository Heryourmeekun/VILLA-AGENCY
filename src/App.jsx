
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes , Route , Link} from "react-router-dom"
import Properties from './Properties';
import Property_detils from './Property_detils';
import Contct from './Contct';
import Schedule_visit from './Schedule_visit';
import Home from "./Home_components/Home"
import Loader from './loader'





export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  
      if (isLoading) {
        return <Loader />;
      }
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Properties" element={<Properties />} />

          <Route path="Property_detils" element={<Property_detils />} />

          <Route path="/Contct" element={<Contct />} />

          <Route path="/Schedule_visit" element={<Schedule_visit />} />
        </Routes>
       

      </BrowserRouter>
    </div>
  );
}

