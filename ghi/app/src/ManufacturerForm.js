import { useState } from 'react';

function ManufacturerForm(){
    const [manufacturerName, setManufacturerName] = useState([])

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const data = {};
        console.log(data);
        data.name = manufacturerName;

        const manufacturerUrl = 'http://localhost:8100/api/manufacturers/'
        const fetchConfig = {
            method:"post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type':'application/json',
            }
        }
        const response = await fetch(manufacturerUrl, fetchConfig);
        console.log(response);
        if (response.ok){
            const newManufacturer = await response.json();
            console.log(newManufacturer);

            setManufacturerName('');
            window.location.reload()
        }
    }

    const handleManufacturerNameChange = (event) => {
        setManufacturerName(event.target.value);
    }

    return(
        <>
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Create a manufacturer</h1>
                <form onSubmit={handleSubmit} id="create-manufacturer-form">
                  <div className="form-floating mb-3">
                    <input
                    onChange={handleManufacturerNameChange}
                    placeholder="Manufacturer Name"
                    required value ={manufacturerName}
                    type="text" name="manufacturer_name" id="manufacturer_name" className="form-control"/>
                    <label htmlFor="manufacturer_name">Manufacturer Name</label>
                  </div>
                  <button className="btn btn-primary">Create</button>
                </form>
              </div>
            </div>
          </div>
        </>
    )

}
export default ManufacturerForm
