import { useState } from "react";

type geoCodingData = {
    country:string;
    latitude:number;
    longitude:number;
    name:string;
    state:string;
}

const useGeocoding = () => {
    // this call take a cites name to latitude and longitude
    const [coordinateData, setCoordinateDate] = useState<geoCodingData[]>([])
    const fetchGeocoding = async (cityName:string) => {
        try {
            const response = await fetch(`https://api.api-ninjas.com/v1/geocoding?city=${cityName}&country=BE`, {
                method:"GET",
                headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": "spfGSOvWI9EeaqmYc8TcVg==JWVgoZpORq8uD8bb"
                }
            });
            setCoordinateDate(await response.json());
        } catch(err) {
            console.log("Huston we have a problem ... : ", err);
        }
    }

    return {
        coordinateData,
        fetchGeocoding
    }
}

export default useGeocoding;