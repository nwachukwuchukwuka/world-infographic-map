import axios from 'axios'

const API_ENDPOINT = "https://restcountries.com/v2";

export const getAllCountries = () => {
 return axios.get(`${API_ENDPOINT}/all`)
}

 export const getCountryDetail = (id) => {
    return axios.get(`${API_ENDPOINT}/alpha/${id}`)
    
 }

 export const getFilteredCountries = (region) => {
    return axios.get(`${API_ENDPOINT}/region/${region}`)
    
 }
 export const getFilteredCountriesByName = (countryName) => {
    return axios.get(`${API_ENDPOINT}/name/${countryName}?fullText=true`)
    
 }