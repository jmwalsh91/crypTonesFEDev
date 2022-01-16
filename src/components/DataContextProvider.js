import React from "react";
import { DataAV } from "./dataAV";
import PlayData from "./tonepromise";


const DataContext = React.createContext(null)

const useDataContext = () => React.useContext(DataContext)

const DataProvider = ({ data }) => {
    
    
    return (
        <DataContext.Provider value={data}>
            <DataAV/>
            <PlayData/>
        </DataContext.Provider>
    )
}

export { DataProvider, useDataContext }

