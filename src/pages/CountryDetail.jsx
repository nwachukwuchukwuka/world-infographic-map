import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../utils";

const CountryDetail = (props) => {
  const [detail, setDetail] = useState([]);
  const { countryCode } = useParams();

  useEffect(() => {
    getCountryDetail(countryCode).then((result) => {
      setDetail(result.data);
      console.log(result.data);
    });
  }, [countryCode]);

  return (
    <div className="country">
      <div className="country-detail-wrapper">
        <div>
          <img src={detail.flags?.png} alt={detail.name} />
        </div>
        <div className="country-detail">
          <h1> {detail.name}</h1>
          <p>
            {detail.name}, located in {detail.region}, with a population of {" "}
            {detail.population} residents. Its capital city is the {detail.capital}. This unique
            region, whose native name is {detail.nativeName}. One notable aspect of
            {detail.name} is its use of {detail.currencies
              ? detail.currencies.map((currency) => currency.name)
              : "No currency data available"} as its official currency, reflecting
            its connection to the {detail.region} Union. {detail.name} offers a
            captivating blend of history, tradition, and modernity.
          </p>
         
        
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
