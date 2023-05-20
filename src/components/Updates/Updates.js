import React, { useEffect, useState } from "react";
import "./updates.css"


const Updates = () => {
  const [allData, setAllData] = useState([]);
  const [stateData, setStateData] = useState([]);
  

  const getData = async ()=>{
    try {
    const res = await fetch('https://data.covid19india.org/data.json');
      const actualData = await res.json();
      // const  useFullData= actualData.statewise[0];
      setAllData(actualData.statewise.slice(0,1));
      setStateData(actualData.statewise);
      // console.log(useFullData);
      // console.log(allData);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    // console.log(allData)
    getData();
  }, []);
  return(<div className="updates">
    <h1>Covid Live <span>Updates</span></h1>
    <span>India</span>
    <div className="data">
    { allData.map((item,id)=>(<>
      <div key={id} className="heading_update">
    
        <div className="cards">
        <h1>Total Active</h1>
        {/* <i className="fa-solid fa-viruses"></i> */}
        <i className="fa-solid fa-disease"></i>
        <span>{item.active}</span>
        </div>

        <div className="cards">
        <h1>Total Confirmed</h1>
        <i className="fa-solid fa-viruses"></i>
        <span>{item.confirmed}</span>
        </div>

        <div className="cards">
        <h1>Total Recovered</h1>
        <i className="fa-solid fa-heart-pulse"></i>
        <span>{item.deltarecovered}</span>
        </div>

        <div className="cards">
        <h1>Total Death</h1>
        <i className="fa-solid fa-skull-crossbones"></i>
        <span>{item.deaths}</span>
        </div>
      </div>
    </>
    ))}
    <div className="table">
          <table>
           <thead>
            <tr>
            <th>State/UT</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Deaths</th>
            <th>Daily Confirmed</th>
            <th>Daily Recovered</th>
            <th>Daily Deaths</th>
            </tr>
            </thead> 
            <tbody>
            {stateData.map((item)=>(
              <tr>
                <td>{item.state}</td>
                <td>{item.confirmed}</td>
                <td>{item.active}</td>
                <td>{item.recovered}</td>
                <td>{item.deaths}</td>
                <td>{item.deltaconfirmed}</td>
                <td>{item.deltarecovered}</td>
                <td>{item.deltadeaths}</td>
              </tr>
            ))}
            </tbody>
          </table>
    </div>
    </div>
  </div>
  );
};

export default Updates;
