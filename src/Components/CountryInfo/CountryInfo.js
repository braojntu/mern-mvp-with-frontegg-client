import React from 'react';
import {useState, useEffect} from 'react';
import './countryinfo.css';

export default function CountryInfo() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setIsLoaded(true);
      setCountries(data);
      (error) => {
        setIsLoaded(true);
        setError(error);
      };
    }
    getData();
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = countries.filter((item) => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  console.log(filteredResults);

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div>
        <h2>COUNTRY DATA</h2>
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search"
              onChange={(e) => searchItems(e.target.value)}
            />
          </label>
        </div>
        <div className="wrapper">
          {(filteredResults.length > 0 ? filteredResults : countries).map(
            (cn, index) => (
              <div key={index}>
                <Card
                  flag={cn.flags.png}
                  name={cn.name.common}
                  capital={cn.capital}
                  region={cn.region}
                  pop={cn.population}
                />
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}

function Card(props) {
  return (
    <div className="card">
      <div>
        <img src={props.flag} alt="flag"></img>
      </div>
      <div className="card-detail">
        <div className="c-name">{props.name} </div>
        <div className="oth-det">Capital: {props.capital} </div>
        <div className="oth-det">Region: {props.region} </div>
        <div className="oth-det">Population: {props.pop} </div>
      </div>
    </div>
  );
}
