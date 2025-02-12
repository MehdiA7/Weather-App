import { FC, useState } from "react";
import "../style/searchBar.css";

type SearchBarProps = {
    belgianCities: string[];
    exportCityName: (city:string) => void
};

const SearchBar: FC<SearchBarProps> = ({ belgianCities, exportCityName }) => {
    const [cityInput, setCityInput] = useState<string>("");

    const sendCity = (city: string) => {
        exportCityName(city)
    };

    return (
        <div className="mainDiv">
            <div className="searchBarDiv">
                <input
                    className="searchBar"
                    type="text"
                    placeholder="Choose your city in the list..."
                    value={cityInput}
                    onChange={(e) => setCityInput(e.target.value)}
                />
            </div>
            {/* List of cities */}
            <div className="autoCompleteDiv">
                {cityInput && (
                    <ul key={Date.now()}>
                        {belgianCities
                            .filter((city) => city.includes(cityInput))
                            .map((city, index) => (
                                <li key={index} onClick={() => sendCity(city)}>
                                    <a>{city}</a>
                                </li>
                            ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
