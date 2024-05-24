import './Map.css';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


//AIzaSyD46BVRzxRTFYbAO3BSzKCpXcmR28BIAmE

export default function Map(){
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyD46BVRzxRTFYbAO3BSzKCpXcmR28BIAmE"
  })

  const position = {
    lat: -22.8899167,
    lng: -43.1218042
  }
  
  return(
    <div className='divmap'>
    <h2>Endereço</h2> 
    <div className='map'>    
         
      {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{width: '100%', height: '100%'}}
            center={position}
            zoom={15}
            Marker={position}
            ></GoogleMap>          
      ) : <></>}
    </div>
      </div>
  )
}