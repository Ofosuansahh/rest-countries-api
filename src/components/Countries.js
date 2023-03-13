import { useState, useEffect } from "react";
import Article from "./Article";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const regions = [
    {
      name: "Africa",
    },
    {
      name: "Antarctic",
    },
    {
      name: "America",
    },
    {
      name: "Asia",
    },
    {
      name: "Europe",
    },
    {
      name: "Oceania",
    },
  ];

  useEffect(() => {
    document.title = `Rest Countries Api`;
  }, []);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };

    getCountries();
  }, []);

  async function searchCountry() {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchText}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function filterByRegion(region) {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSearchCountry(e) {
    e.preventDefault();
    searchCountry();
  }

  function handleFilterByRegion(e) {
    e.preventDefault();
    filterByRegion();
  }

  return (
    <div>
      {!countries ? (
        {/* <h1 className="text-gray-900 font-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text-4xl dark:text-white">
          Loading...
        </h1> */}
      ) : (
        <section className="container mx-auto p-8">
          {/* form */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
            <form
              onSubmit={handleSearchCountry}
              autoComplete="off"
              className="max-w-2xl md:flex-1"
             >
                <button className="icon bgchange">
                  <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </button>
              <input
                type="text"
                name="search"
                id="search"
                placeholder= "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search for a country..."
                required
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="py-3 px-4 ml-5 md:ml-20 w-full shadow rounded outline-none  transition-all duration-200 bgchange"
              />
            </form>

            <form onSubmit={handleFilterByRegion}>
              <select
                name="filter-by-region"
                id="filter-by-region"
                className="w-52 py-3 px-4 md:ml-0 ml-5 md:mt-10 outline-none shadow rounded bgchange"
                value={regions.name}
                onChange={(e) => filterByRegion(e.target.value)}
               >
                {regions.map((region, index) => (
                  <option key={index} value={region.name}>
                    {region.name}
                  </option>
                ))}
              </select>
            </form>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ml-5">
            {countries.map((country) => (
              <Article key={country.name.common} {...country}/>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
