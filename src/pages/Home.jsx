import React, { useEffect, useState } from "react";

import CountryCard from "../components/CountryCard";
import { getAllCountries, getFilteredCountries, getFilteredCountriesByName } from "../utils";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import HeroSection from "../components/HeroSection";

const Home = () => {
  const [countryList, setCountryList] = useState([]);
  const [region, setRegion] = useState("");
  const [countryName, setCountryName] = useState("");
  const [filteredCountryListName, setFilteredCountryListName] = useState("");

  const handleChange = (event) => {
    setRegion(event.target.value);
  };
  const handleCountryChange = (event) => {
    setCountryName(event.target.value);
  };

  useEffect(() => {
    getAllCountries().then((result) => {
      const countries = result.data;
      setCountryList(countries);
    });
  }, []);

  useEffect(() => {
    getFilteredCountries(region).then((result) => {
      const countries = result.data;
      setCountryList(countries);
    });

    getFilteredCountriesByName(countryName).then((result) => {
      const countries = result.data;
      setCountryList(countries);
    });
  }, [region, countryName]);



  return (
    <section>
       <HeroSection />
       <div className="app">
       <div className="filters-wrapper">
        <TextField
       className="text_field"
          id="outlined-basic"
          label="Search by name"
          variant="outlined"
          value={countryName}
          onChange={handleCountryChange}
        />
        <FormControl className="input_label" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Search by Region
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={region}
            label="Filter by Region"
            onChange={handleChange}
          >
            <MenuItem value={"Africa"}>Africa</MenuItem>
            <MenuItem value={"America"}>America</MenuItem>
            <MenuItem value={"Asia"}>Asia</MenuItem>
            <MenuItem value={"Europe"}>Europe</MenuItem>
            <MenuItem value={"Oceania"}>Oceania</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="country-card-wrapper">
        {countryList.map((country) => (
          <Link to={`/countries/${country?.alpha3Code}`}>
            <CountryCard
              key={country.alpha3Code}
              name={country.name}
              capital={country.capital}
              population={country.population}
              flagUrl={country.flags.png}
            />
          </Link>
        ))}
      </div>
       </div>
      
    </section>
  );
};

export default Home;
