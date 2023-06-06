import React, { useEffect, useState } from "react";

function ModelForm(models){
    const [manufacturers, setManufacturers] = useState([])
    const [name, setName] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [manufacturer, setManufacturer] = useState('');

    const fetchData = async () => {
        const url = 'http://localhost:8100/api/manufacturers/'
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            setManufacturers(data.manufacturers);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        console.log(data)
        data.name = name;
        data.picture_url = pictureUrl;
        data.manufacturer = manufacturer;

        const modelUrl = 'http://localhost:8100/api/models/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(modelUrl, fetchConfig);
        console.log(response)
        if (response.ok) {
          const newModel = await response.json();
          console.log(newModel)
          setName('');
          setPictureUrl('');
          setManufacturer('');
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value)
    }

    const handlePictureUrlChange = (event) => {
        const value = event.target.value;
        setPictureUrl(value)
    }

    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturer(value)
    }



    return (
        <>
          <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create a vehicle model</h1>
              <form onSubmit={handleSubmit} id="create-vehicle-model-form">
                <div className="form-floating mb-3">
                  <input
                  onChange={handleNameChange}
                  placeholder="Model name"
                  required value ={name}
                  type="text" name="model_name" id="model_name" className="form-control"/>
                  <label htmlFor="model_name name">Model Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                  onChange={handlePictureUrlChange}
                  placeholder="Picture URL"
                  required value ={pictureUrl}
                  type="text" name="picture_url" id="picture_url" className="form-control"/>
                  <label htmlFor="pictureUrl">Picture URL</label>
                </div>
                <div className="mb-3">
                  <select
                    onChange={handleManufacturerChange}
                    required
                    value={manufacturer}
                    name="manufacturer"
                    id="manufacturer"
                    className="form-select">
                    <option value="">Choose a manufacturer</option>
                    {manufacturers.map(manufacturer=>{
                      return (
                          <option key={manufacturer.id} value={manufacturer.href}>
                            {manufacturer.name}
                          </option>
                      )
                    })}
                  </select>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
        </>
        );
}
export default ModelForm
