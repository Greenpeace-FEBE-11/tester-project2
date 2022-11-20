import React, {useState, useEffect} from "react";
import axios from "axios";

function DataFetching1(){
    const [penanggulangan, setPenanggulangan] = useState([])
    const [penanggulangan2, setPenanggulangan2] = useState([])

    useEffect(()=>{
        axios.get('https://63539aa2ccce2f8c02f98d91.mockapi.io/penanggulangan')
        .then(res => {
            console.log(res.data)
            setPenanggulangan(res.data)
        })
    },[]);

    useEffect(()=>{
        axios.get('https://63539aa2ccce2f8c02f98d91.mockapi.io/penanggulangan2')
        .then(res => {
            console.log(res.data)
            setPenanggulangan2(res.data)
        })
    },[]);
    
    return(
        <>
            {penanggulangan.map((item, index) => (
                <div key={index} className="row me-0">
                    <div className="col-xl-6 me-0" id="gambar">
                        <img src={item.img} className="img-fluid me-0" style={{borderRadius: "20px", marginTop: "2rem"}}/>
                    </div>
                    <div className="col-md" id="ket-gambar">
                        {item.title}
                    </div>
                </div>
            ))}

            {penanggulangan2.map((item, index) => (
                <div className="container">
                <div className=" row datfec1b" key={index}>
                    <div className="col" id="gambar">
                        <h1>
                            {item.title}
                        </h1>
                        <br/>
                        <p>
                            {item.content}
                        </p>
                    </div>
                    <div className="col">
                        <img src={item.img} className="img-fluid" id="gambar2" width={200}/>
                    </div>
                </div>
                </div>
            ))}
        </>
    )
}

export default DataFetching1