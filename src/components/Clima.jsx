import React from 'react'
import Api from './Api'
import { IoIosCloseCircle } from "react-icons/io";

function Clima({ city, lat, lon }) {
  return (
    <div className='card m-5' style={{width: "18rem", height:"22rem"}}>
        <div className='card-header text-end'>
            <button className='btn' type="submit">
            <IoIosCloseCircle style={{width: "2rem", height:"2rem"}}></IoIosCloseCircle>
            </button>
        </div>
         
        {/* <hr /> */}
        <div className='card-body'>
            <h3 className='card-title text-center' style={{height:"5rem"}}>{city}</h3>
            <div className='text-muted'>
                <h5>Latitud: {lat}</h5>
                <h5>Longitud: {lon}</h5>
                <Api 
                    lat={lat}
                    lon={lon}
                />
            </div>
            <div className='row text-center'>
                <div className='col'>Temp.</div>
                <div className='col'>Vel. Viento</div>
            </div>
        </div>
        
    </div>
  )
}

export default Clima