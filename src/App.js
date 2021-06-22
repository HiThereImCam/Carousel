import React, { useState, useEffect } from "react";
import "./App.css";
import Carousel from "./Carousel/Carousel";
import Loader from "react-loader-spinner";

function App() {
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // maybe create it's own hook to be able to pass any api?
  useEffect(() => {
    const fetchData = async () => {
      const fetchResult = await fetch(
        `https://frontend-assessment-service.vcomm.io`
      );
      const resultJSON = await fetchResult.json();

      let result = resultJSON.data.map((dataObj) => dataObj);

      setApiData(result);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <div className="loader">
          <Loader type="TailSpin" color="#00000" height={60} width={60} />;
        </div>
      ) : (
        <Carousel data={apiData} />
      )}
      {/* {apiData !== null ? (
        <Carousel data={apiData} />
      ) : (
        <div className="loader">
          <Loader type="TailSpin" color="#00000" height={60} width={60} />
        </div>
      )} */}
    </div>
  );
}

export default App;
