import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleCountry() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };

    getSingleCountry();
  }, [name]);

  useEffect(() => {
    document.title = `Countries | ${name}`;
  }, [name]);
  

  return (
    <>
      <section className="p-8 md:py-0 max-w-7xl mx-auto">
            <Link
              to="/"
                className="inline-block md:mt-8 mb-12 py-2 px-6  rounded shadow transition-all duration-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400 bgchange"
              >
              &larr; Back
            </Link>
        {country.map((item) => (
          <div
            key={item.population}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen"
           >
            <article>
              <img src={item.flags.svg} alt={item.name.common} />
            </article>

            <article>
              <h1 className="mb-8 font-bold dark:text-white text-4xl lg:text-6xl">
                {item.name.official}
              </h1>

            <div className="grid grid-cols-2 gap-10">
                <ul className="my-4 flex flex-col items-start justify-start gap-2  dark:text-gray-400">
                  <li>Native Name: {item.name.nativeName.common}</li>
                  <li>Population: {item.population.toLocaleString()}</li>
                  <li>Region: {item.region}</li>
                  <li>Sub Region: {item.subregion}</li>
                  <li>Capital: {item.capital[0]}</li>
                </ul>

                <ul className="mt-3">
                  <li>Top Level Domain: {item.topLevelDomain}</li>
                  <li>Currencies: {}</li>
                  <li>Languages: {}</li>
                </ul>
            </div>
              
            

            <div className="md:grid md:grid-cols-2 md:gap-5 mt-6 borders">
                {item.borders && (
                  <>
                    <h3 className="font-bold text-lg mb-2 dark:text-white">
                      Border Countries:
                    </h3>
                    <ul className="flex flex-wrap items-start justify-start gap-2">
                      {item.borders.map((border, index) => (
                        <li
                          key={index}
                          className=" p-2 rounded text-xs tracking-wide shadow"
                        >
                          {border}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
            </div>
             
            </article>
          </div>
        ))}
      </section>
    </>
  );
}
