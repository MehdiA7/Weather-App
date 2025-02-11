import { useState } from "react";

const useOpenWeather = () => {
    const [belgianCities, setBelgianCities] = useState<string[]>([
        "Anvers (Anwerp)",
        "Arlon",
        "Aspirant",
        "Ath",
        "Baudour",
        "Beersel",
        "Beignicourt",
        "Beitem",
        "Belle",
        "Bergen",
        "Beringhen",
        "Binche",
        "Bocholt",
        "Bondy",
        "Braine-l'Alleud",
        "Brasschaat",
        "Breugelen",
        "Brihuegas",
        "Brunehaut",
        "Bruxelles",
        "Camping-heures",
        "Carbonnel",
        "Carrières-sur-Seulles",
        "Cartigny",
        "Chapelain",
        "Charleroi",
        "Chevetone",
        "Chimay",
        "Dinant",
        "Doornik (Dour)",
        "Eghezée",
        "Ellezelles",
        "Flobecq",
        "Gand (Ghent)",
        "Givry",
        "Grâce-Hazebrouck",
        "Haltern",
        "Heist",
        "Herzele",
        "Ixelles",
        "Jemappes",
        "Kortrijk",
        "La Calamine",
        "Lambres-le-Bocage",
        "Landen",
        "Liège",
        "Lier",
        "Lonay",
        "Louvain-la-Neuve",
        "Lugny",
        "Machelen",
        "Maaseik",
        "Mareigny",
        "Marcq-en-Mélantois",
        "Maroilles",
        "Massinnes",
        "Mazy",
        "Mechelen",
        "Merchtem",
        "Monceau-sur-Sambre",
        "Mons",
        "Montaigu",
        "Moussy",
        "Nandrin",
        "Namur",
        "Ostende",
        "Péruwelz",
        "Raftinnes",
        "Rancoud",
        "Rebecq",
        "Saclain",
        "Saint-Ghislain",
        "Saint-Nicolas",
        " Schaerbeek",
        "Schoten",
        "Seraing",
        "Soignies",
        "Tournai",
        "Ursel",
        "Verviers",
        "Walcourt",
        "Wevelgem",
        "Zele",
        "Zinnik",
    ]);

    return {
        belgianCities
    }
};

export default useOpenWeather;
