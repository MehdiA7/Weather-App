import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./style/index.css";
import useOpenWeather from "./hooks/useOpenWeather";

function App() {
    const { belgianCities } = useOpenWeather();
    return (
        <>
            <Header />
            <SearchBar belgianCities={belgianCities} />
        </>
    );
}

export default App;
