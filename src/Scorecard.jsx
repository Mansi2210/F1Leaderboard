import React, { useEffect, useState } from "react";
import './Scorecard.css'


const Scorecard = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/1kxyNvI-2_9eifgyNzLZC5reFSbd4F1EpDi8Kq_aQVfU/values/scores/?key=AIzaSyC4ywFcfOCY7hdiZyfsfbnJQZU1RGMcpOo",
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        console.log("Fetched Data:", result);
        setData(result.values);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, []); // Empty dependency array ensures this runs only once on mount.

 
  return (
    <div className="containertab">
      <table className="styled-table">
        <thead className="header">
          <tr>
            {data.length > 0 &&
              data[0].map((header, index) => (
                <th key={index}>{header}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Scorecard
