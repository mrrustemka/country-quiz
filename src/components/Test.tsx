import React, { useState } from "react";

type Country = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: any;
  };
  capital: string[];
  region: string;
  subregion: string;
  languages: any;
  borders: string[];
  area: number;
  maps: any;
  population: number;
  timezones: string[];
};

function Test() {
  async function fetchCountry<T>(resourceUrl: string): Promise<T> {
    const response = await fetch(resourceUrl);
    return await response.json();
  }

  fetchCountry<Country>(
    "https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,languages,borders,area,maps,population,timezones,continetns,flags,coatOfArms"
  ).then((CountryItem: Country) => {
    // assigning the response data `toDoItem` directly to `myNewToDo` variable which is
    // of Todo type
    let myNewCountry: Country = CountryItem;
    // It is possible to access Todo object attributes easily
    console.log(myNewCountry);
  });
  return <div>Test</div>;
}

export default Test;
