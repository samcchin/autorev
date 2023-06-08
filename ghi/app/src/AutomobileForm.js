import { useEffect, useState } from 'react';

function AutomobileForm({ getAutomobiles }){
  const [models, setModels] = useState([]);
  const [color, setColor] = useState('');
  const [year, setYear] = useState('');
  const [vin, setVin] = useState('');
  const [model, setModel] = useState('');

  useEffect(() => {
    async function getModels() {
      const modelUrl = 'http://localhost:8100/api/models/';
      const response = await fetch(modelUrl);

      if (response.ok) {
        const data = await response.json();
        setModels(data.models);
      }
    }
    getModels();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.color = color;
    data.year = year;
    data.vin = vin;
    data.model_id = model;

    const automobileUrl = 'http://localhost:8100/api/automobiles/'
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type':'application/json',
      }
    };
    const response = await fetch(automobileUrl, fetchConfig);
    if (response.ok){
      const newAutomobile = await response.json();
      console.log(newAutomobile)
      getAutomobiles();
      setColor('');
      setYear('');
      setVin('');
      setModel('');
      window.location.reload();
    }
  }

  const handleColorChange = (event) => {
    setColor(event.target.value)
  }

  const handleYearChange = (event) => {
    setYear(event.target.value)
  }

  const handleVinChange = (event) => {
    setVin(event.target.value)
  }

  const handleModelChange = (event) => {
    setModel(event.target.value)
  }

  return (
      <>
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Add an automobile to inventory</h1>
              <form onSubmit={handleSubmit} id="add-automobile-form">
                <div className="form-floating mb-3">
                  <input
                  onChange={handleColorChange}
                  placeholder="Color"
                  required value ={color}
                  type="text" name="color" id="color" className="form-control"/>
                  <label htmlFor="color">Color</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                  onChange={handleYearChange}
                  placeholder="Year"
                  required value ={year}
                  type="text" name="year" id="year" className="form-control"/>
                  <label htmlFor="year">Year</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                  onChange={handleVinChange}
                  placeholder="VIN"
                  required value ={vin}
                  type="text" name="vin" id="vin" className="form-control"/>
                  <label htmlFor="vin">VIN</label>
                </div>
                <div className=" mb-3">
                  <select
                    onChange={handleModelChange}
                    required
                    value={model}
                    name="model"
                    id="model"
                    className="form-select">
                    <option value="">Choose a model</option>
                    {models?.map(model=>{
                      return (
                        <option key={model.id} value={model.id}>
                          {model.name}
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

export default AutomobileForm;
