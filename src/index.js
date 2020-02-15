import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import userLocation from './userLocation';


const App = ()=>{
  const [lat, errorMessage ] = userLocation();

    let content;
    if (errorMessage){
      content = <div>{errorMessage}</div>;
    }else if(lat){
      content =<SeasonDisplay lat = {lat} />;
    }else {
      content= <Spinner message="Please accept geolocation request"/>;
    }
    return <div className="border red">{content}</div>;
};


ReactDOM.render(<App />, document.querySelector('#root'));
