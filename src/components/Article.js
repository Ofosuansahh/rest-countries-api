import React from "react";
import { Link } from "react-router-dom";

export default function Article({
  flags,
  name,
  population,
  region,
  capital,
  subregion,
  topLevelDomain,
  currencies,
  languages,
  nativeName
}) {
  return (
    <div>
      <Link to={`/${name.common}`}>
        <article className=" transition-all duration-200 rounded-lg shadow overflow-hidden countries">
          <img src={flags.svg} alt="" className="md:h-52 w-full object-cover" />
          <div className="p-4 details">
            <h2 className="font-bold text-lg dark:text-white mb-2">
              {name.common}
            </h2>
            <ul className="flex flex-col items-start justify-start gap-2 dark:text-gray-900 pop">
              <li>Population: <span>{population.toLocaleString()}</span></li>
              <li>Region: <span>{region}</span></li>
              <li>Capital: <span>{capital}</span></li>
            </ul>
          </div>
        </article>
      </Link>
    </div>
  );
}
