import "../style/displayMeteo.css";
import cloudIcon from "../assets/cloud-icon-8.png";

const DisplayMeteo = ({ meteoData }) => {
    console.log("IM IN ", meteoData)

    if (!meteoData?.hourly) {
        return;
    }

    return (
        <div className="cardMeteoDiv">
            {meteoData.hourly.time?.map((e: any, index: number) => {
                const separateDateAndHour = e.split("T");
                const temperature = meteoData.hourly.temperature_2m[index];
                const date = separateDateAndHour[0];
                const hour = separateDateAndHour[1];
                return (
                <div className="cardMeteo">
                    <h3>{date}</h3>
                    <ul>
                        <li>
                            <h3>{hour}</h3>
                            <img src={cloudIcon}/>
                            <h3>{temperature} C</h3>
                        </li>
                    </ul>
                </div>
                )
            })}
        </div>
    );
};

export default DisplayMeteo;
