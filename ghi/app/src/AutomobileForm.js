import { useEffect, useState } from 'react';

function AutomobileForm(props){
    const [models, setModels] = useState([]);
    const [color, setColor] = useState('');
    const [year, setYear] = useState('');
    const [vin, setVin] = useState('');
    const [model, setModel] = useState('');

    const fetchData = async () => {
        const url = 'http://localhost:8100/api/models/'
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            setModels(data.models);
        }
    };

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
            setColor('')
            setYear('')
            setVin('')
            setModel('')
            window.location.reload()
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value)
    }

    const handleYearChange = (event) => {
        const value = event.target.value;
        setYear(value)
    }

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value)
    }

    const handleModelChange = (event) => {
        const value = event.target.value;
        setModel(value)
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
                    {models.map(model=>{
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



// function AutomobileForm({getAutomobiles, getModels}){
//     const [models, setModels] = useState([]);
//     const [model, setModel] = useState('');
//     const [vin, setVin] = useState('');
//     const [color, setColor] = useState('');
//     const [year, setYear] = useState('');
//     useEffect(() => {
//         getModels();
//     }, []);
//     async function handleSubmit(event){
//         event.preventDefault();
//         const data = {
//             color,
//             year,
//             model,
//             vin,
//         };
//         const url = "http://localhost:8100/api/automobiles/";
//         const fetchConfig = {
//             method: "post",
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         };
//         const response = await fetch(url, fetchConfig);
//         if(response.ok){
//             const newAutomobile = await response.json();
//             console.log("new automobile: ", newAutomobile);
//             getAutomobiles();
//             setColor("");
//             setYear("");
//             setModel("");
//             setVin("");
//         }
//     }
//     function handleColorChange(event){
//         setColor(event.target.value);
//     }
//     function handleYearChange(event) {
//         setYear(event.target.value);
//     }
//     function handleModelChange(event) {
//         setModel(event.target.value);
//     }
//     function handleVinChange(event) {
//         setVin(event.target.value);
//     }
//     return(
//         <div className="row">
//             <div className="offset-3">
//                 <div className="shadow p-4 mt-4">
//                     <h1>Add an automobile to inventory</h1>
//                     <form onSubmit={handleSubmit} id="add-auto-form">
//                         <div className ="form-floating mb-3">
//                             <input onChange={handleYearChange} value={year} placeholder='year' required type="number" name="year" id="year" className="form-control" />
//                             <label htmlFor="year">Year...</label>
//                         </div>
//                         <div className ="form-floating mb-3">
//                         <input onChange={handleColorChange} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
//                         <label htmlFor="color"> Color... </label>
//                         </div>
//                         <div className ="form-floating mb-3">
//                             <input onChange={handleVinChange} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" />
//                             <label htmlFor="vin"> VIN... </label>
//                         </div>
//                         <div className ="form-floating mb-3">
//                             <select onChange={handleModelChange} required name = "model" id="model" className="form-select">
//                                 <option value="">Choose a model...</option>
//                                 {models.map(model => {
//                                     return (
//                                         <option key={model.id} value={model.id}>
//                                             {model.name} {model.manfacturer.name}
//                                         </option>
//                                     );
//                                 }
//                                     )}
//                             </select>
//                         </div>
//                         <div className="d-grid col-md 6 mx-auto">
//                             <button className="btn btn-outline-primary">Create</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }
export default AutomobileForm;
