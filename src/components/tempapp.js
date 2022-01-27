import React, { useEffect, useState } from 'react';
import './css/style.css';

const Tempapp = () =>{ 

  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState(null);
  const [search,setSearch] = useState("Pune");
  const [type,setType] = useState(null);

   var month = {
     1: "Jan",
     2: "Feb",
     3: "Mar",
     4: "Apr",
     5: "May",
     6: "Jun",
     7: "Jul",
     8: "Aug",
     9: "Sep",
     10: "Oct",
     11: "Nov",
     12: "Dec",
   };

  var today = new Date();
  var date = today.getDate()+" "+(month[today.getMonth()+1])+" "+today.getFullYear();

 

  useEffect(() => {
    const fetchApi = async () =>{
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=97f25d1485864c2b8f9e4c4d7b451e73`;
        const response = await fetch(url);
        const data = await response.json();
          setCity(data.name);
          setTemp(data.main.temp);
          setType(data.weather[0].main);
    }
    fetchApi();
  },[search]);

    return (
      <>
        <div className="container">
          <div className="widget">
            <div className="inputdata">
              <input
                type="search"
                className="inputfield"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </div>
            {!city ? (
              <p>No Data Found</p>
            ) : (
              <div>
                <div className="date">{date}</div>
                <div className="city">{search}</div>
                <div className="temp">{temp}°C</div>
                <div className="type">{type}</div>
              </div>
            )}
          </div>
        </div>
      </>
    );
}
export default Tempapp;
