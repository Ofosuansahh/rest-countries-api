import React from "react";
import CardList from "../../Components/CardList";
import { CountryProvider } from "../../Components/Country";
import { ErrorBoundary } from "../../Components/ErrorBoundary";
import FilterButton from "../../Components/FilterButton";
import SearchButton from "../../Components/SearchButton";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const { countries, view, region, search, loading, error, word } = useFetch();

  return (
    <div>
      <div className="display_top">
        <div className="filter_container">
          <CountryProvider
            countries={countries}
            search={search}
            filter={undefined}
            load={loading}
            word={""}
            error={error}
          >
            <SearchButton />
          </CountryProvider>
          <CountryProvider
            countries={countries}
            filter={region}
            search={undefined}
            load={loading}
            word={""}
            error={error}
          >
            <FilterButton />
          </CountryProvider>
        </div>
      </div>
      <div className="display_bottom">
        <ErrorBoundary>
          <CountryProvider
            countries={view}
            filter={undefined}
            word={word}
            search={undefined}
            load={loading}
            error={error}
          >
            <CardList />
          </CountryProvider>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Home;
