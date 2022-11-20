import React from "react"
import Penanggulangan1 from "../Components/Penanggulangan/Penanggulangan1"
import Penanggulangan2 from "../Components/Penanggulangan/Penanggulangan2"
import DataFetching1 from "../Components/DataFetching/DataFetching1"
import DataFetching2 from "../Components/DataFetching/DataFetching2"
import DataFetching3 from "../Components/DataFetching/DataFetching3"
import Penanggulangan3 from "../Components/Penanggulangan/Penanggulangan3"

// import '../css/readmore.css'
// import '../css/style-penanggulangan.css'

const PenanggulanganPage = () => {
    return(
        <div id="penanggulanganpagee">
        
            <DataFetching1/>
            <Penanggulangan1/>
            <DataFetching2/>
            <Penanggulangan2/>
            <DataFetching3/>
            <Penanggulangan3/>
        </div>
    )
}

export default PenanggulanganPage