import { useState } from "react";


const useOpenMeteo = () => {
    const [meteoData, setMeteoData] = useState<{}>({});
    
    const fetchMeteo = async (latitude:number, longitude:number) => {
        try {
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&past_days=2&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`);
            const data = await response.json();
            setMeteoData(data);
            console.log("This is the openMeteo fetch : \n",meteoData)
        } catch(err) {
            console.log("Oh this is bad... : ", err);
        }
    }

    return {
        meteoData,
        fetchMeteo
    }
}

export default useOpenMeteo;