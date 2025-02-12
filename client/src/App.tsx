import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./style/index.css";
import useCitiesList from "./hooks/useCitiesList";
import useOpenMeteo from "./hooks/useOpenMeteo";
import useGeocoding from "./hooks/useGeocoding";
import DisplayMeteo from "./components/displayMeteo";
import { useEffect } from "react";

function App() {
    const { belgianCities } = useCitiesList();
    const { meteoData, fetchMeteo } = useOpenMeteo();
    const {coordinateData, fetchGeocoding} = useGeocoding();

    useEffect(() => {
        if(coordinateData){
            console.log("This is the coordinate data : \n", coordinateData);
            fetchMeteo(coordinateData[0]?.latitude, coordinateData[0]?.longitude)
        }
    }, [coordinateData])

    return (
        <>
            <Header />
            <SearchBar belgianCities={belgianCities} exportCityName={fetchGeocoding} />
            <DisplayMeteo meteoData={meteoData} />
        </>
    );
}

export default App;
