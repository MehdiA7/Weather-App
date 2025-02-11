import { FC, useState } from "react";
import "../style/searchBar.css";

type SearchBarProps = {
    belgianCities: string[];
};

const SearchBar: FC<SearchBarProps> = ({ belgianCities }) => {
    const [cityInput, setCityInput] = useState<string>("");
    return (
        <div className="mainDiv">
            <div className="searchBarDiv">
                <input
                    className="searchBar"
                    type="text"
                    placeholder="Type your city..."
                    value={cityInput}
                    onChange={(e) => setCityInput(e.target.value)}
                />
                <button>🔍</button>
            </div>
            <div className="autoCompleteDiv">
                <ul key={Date.now()}>
                    {belgianCities.map((e) => <li>{e}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default SearchBar;
