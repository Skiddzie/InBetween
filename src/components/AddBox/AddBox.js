import React, { useState} from "react";
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

    const submit = (e) => {
        e.preventDefault();
        console.log(formFields, " yippee")
    }

    const addFields = () => {
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
        <form onSubmit={submit}>
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
            <button onClick={() => removeFields(index)}>X</button>
        </div>
        )
        })}
        </form>

        <button onClick={addFields}>Add More..</button>
        <br/>
        <button onClick={submit}>Submit</button>
    </div>
)
}
export default AddBox;