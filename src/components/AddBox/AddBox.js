import React, { useState} from "react";

// function AveragePoint(points){
//     for (let i = 0, len = points.length, text = ""; i < len; i++) {
//         text += cars[i] + "<br>";
//       } 
// }
var holder = [];
const compile = () =>{
    let lat = 0;
    let lon = 0;
    for (let i = 0; i < holder.length; i++) {
        console.log(holder[i].latitude);
        lat += Number(holder[i].latitude);
        lon += Number(holder[i].longitude);
      } 
    lat = lat/holder.length;
    lon = lon/holder.length;
    console.log("lattitude: ", lat, " longitude: ", lon);
}
function AddBox(){
    const [formFields, setFormFields] = useState([
        {latitude: '', longitude: ''},
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
            latitude: '',
            longitude: ''
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
                name='latitude'
                placeholder='latitude'
                onChange={event => handleFormChange(event, index)}
                value={form.latitude}
            />
            <input
                name='longitude'
                placeholder='longitude'
                onChange={event => handleFormChange(event, index)}
                value={form.longitude}
            />
            <button type="button" onClick={() => removeFields(index)}>X</button>
        </div>
        )
        })}
        <button onClick={() => {
            submitCoord(window.event);
            compile();
        }}>Submit</button>
        </form>
    </div>
)
}
export default AddBox;