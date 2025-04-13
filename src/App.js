import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "./Hero.css"
import CountryDetails from "./Components/CountryDetails";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./Components/Title/Title"

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCountry, setCurrentCountry] = useState(null);

  useEffect(() => {
    axios
      .get("https://countries-api-abhishek.vercel.app/countries")
      .then((response) => {
        setCountries(response.data.data);
        setFilteredCountries(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
        setLoading(false);
      });
  }, []);

  const fetchCountryDetails = (border) => {
    setLoading(true);

    const country = countries.find((c) => c.name === border);

    if (country) {
      setCurrentCountry(country);
    } else {
      console.error("Country not found!");
    }

    setLoading(false);
  };

  const handleSearch = (query) => {
    setCurrentCountry(null);

    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const filterByPopulation = () => {
    const sorted = [...countries].sort((a, b) => b.population - a.population);
    setFilteredCountries(sorted);
    setCurrentCountry(null);
  };

  const filterByRegion = (region = "Asia") => {
    const filtered = countries.filter((country) => country.region === region);
    setFilteredCountries(filtered);
    setCurrentCountry(null);
  };
  
  const handleFilter = (type) => {
    if (type === "all") {
      setFilteredCountries(countries);
    } else if (type === "population") {
      filterByPopulation();
    } else {
      filterByRegion(type);
    }
  };

  return (
    <>
      <Header className="header-fixed" onSearch={handleSearch} onFilter={handleFilter} />
      
      <div className="hero-text">
        
        <h1 className="hero">Empowering Your Apps with Global Knowledge.</h1>
           <p className="paragraph">Effortless access to accurate, country-specific data 
            to power your apps. From population stats to currency details, our free API 
            delivers it all—fast, reliable, and always up-to-date.</p>
     
            <Title subTitle='WORLD EXPLORATION' title='Lets explore different countries in the world...'/>
        {loading ? (
          <p className="text-center">
            <strong>Loading country's data...</strong>
          </p>
        ) : (
          <>
            {currentCountry ? (
              <CountryDetails
                country={currentCountry}
                onClick={fetchCountryDetails}
              />
            ) : (
              <ul className="list-group">
                {filteredCountries.map((country, index) => (
                  <CountryDetails
                    key={index}
                    country={country}
                    onClick={fetchCountryDetails}
                  />
                ))}
              </ul>
            )}
          </>
        )}
      </div>
      <Footer className="footer-fixed" />
    </>
  );
}

export default App;