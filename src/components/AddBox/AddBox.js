import React, { useState} from "react";

import Geocode from "react-geocode";

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyBcl3VjVi9proDuHUMVBuAJW6jKPTU9Yds");
// set response language. Defaults to english.
Geocode.setLanguage("en");

const converter = (location) =>{
    Geocode.fromAddress(location).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
        //   console.log('ding')
        //   console.log(lat, lng);
            const foo = {lat, lng}
            // console.log(foo)
          return(foo)
        },
        (error) => {
          console.error(error);
        }
      );
}

var holder = [];
const compile = async () => {
    let latitude = 0;
    let longitude = 0;
    for (let i = 0; i < holder.length; i++) {
        const response = await Geocode.fromAddress(holder[i].city);
        const { lat, lng } = response.results[0].geometry.location;
        const foo = {lat, lng}
        longitude += Number(foo.lng);
        console.log(longitude)
        latitude += Number(foo.lat);
        console.log(latitude)
    } 
    // console.log("lat: " + latitude)
    latitude = latitude/holder.length;
    longitude = longitude/holder.length;
    console.log("lattitude: ", latitude, " longitude: ", longitude);
    const coordinates = document.getElementById("coordinates");
    coordinates.textContent = latitude + " " + longitude;
    let city, state, country;
    Geocode.fromLatLng(latitude, longitude).then(
        (response) => {
            for (let i = 0; i < response.results[0].address_components.length; i++) {
              for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
                switch (response.results[0].address_components[i].types[j]) {
                  case "locality":
                    city = response.results[0].address_components[i].long_name;
                    break;
                  case "administrative_area_level_1":
                    state = response.results[0].address_components[i].long_name;
                    break;
                  case "country":
                    country = response.results[0].address_components[i].long_name;
                    break;
                }
              }
            }
            console.log(city, state, country);
            const cityresult = document.getElementById("city");
            cityresult.textContent = city + ", " + state + ", " + country;
          },
          (error) => {
            console.error(error);
          }
      );
};
function AddBox(){
    const [formFields, setFormFields] = useState([
        {city: ''},
    ])

    const handleFormChange = (event, index) => {
        console.log(index, event.target.name)
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
    }

    const submitCoord = (e) => {
        e.preventDefault();
        holder = formFields
    }

    const addFields = () => {
        window.event.preventDefault();
        let object = {
            city: '',
        }

        setFormFields([...formFields, object])
    }

    const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
    }
return(
    <div className="App">
        <button onClick={addFields}>Add More..</button>
        <br/>
        <form onSubmit={() => {
            // submitCoord(window.event);
            compile();
        }}>
        {formFields.map((form, index) =>{
        return(
            <div key={index}>
            <input
                name='city'
                placeholder='city'
                onChange={event => handleFormChange(event, index)}
                value={form.city}
            />
            {/* <input
                name='longitude'
                placeholder='longitude'
                onChange={event => handleFormChange(event, index)}
                value={form.longitude}
            /> */}
            <button type="button" onClick={() => removeFields(index)}>X</button>
        </div>
        )
        })}
        <button onClick={() => {
            submitCoord(window.event);
            compile();
        }}>Submit</button>
        </form>
        <div className="result">
            <h2 id="city">City</h2>
            <h3 id="coordinates">0.0 0.0</h3>
        </div>
    </div>
)
}
export default AddBox;