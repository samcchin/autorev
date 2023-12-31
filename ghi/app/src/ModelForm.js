import React, { useEffect, useState } from "react";

function ModelForm({ getModels }){
  const [name, setName] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [manufacturers, setManufacturers] = useState([])

  useEffect(() => {
    async function getManufacturers() {
      const manufacturerUrl = 'http://localhost:8100/api/manufacturers/';
      const response = await fetch(manufacturerUrl);

      if (response.ok) {
        const data = await response.json();
        setManufacturers(data.manufacturers);
      }
    }
    getManufacturers();
  }, []);

  const handleSubmit = async (event)=>{
    event.preventDefault();
    const data = {};
    data.name = name;
    data.picture_url = pictureUrl;
    data.manufacturer_id = manufacturer;

    const modelUrl = 'http://localhost:8100/api/models/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(modelUrl, fetchConfig);
    if (response.ok) {
      const newModel = await response.json();
      console.log(newModel)
      getModels();

      setName('');
      setPictureUrl('');
      setManufacturer('');
      window.location.reload()
    }
  }

  const handleNameChange = (event) => {
      setName(event.target.value)
  }

  const handlePictureUrlChange = (event) => {
      setPictureUrl(event.target.value)
  }

  const handleManufacturerChange = (event) => {
      setManufacturer(event.target.value)
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
                <label htmlFor="model_name">Model Name</label>
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
                        <option key={manufacturer.id} value={manufacturer.id}>
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
