import { useEffect, useState } from 'react';

function ManufacturerForm(manufacturers){
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
        }
    }

    const handleManufacturerNameChange = (event) =>{
        const value = event.target.value;
        setManufacturerName(value)
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


// function ManufacturerForm({getManufacturers}){
//     const [name, setName] = useState("");

//     async function handleSubmit(event){
//         event.preventDefault();
//         const data = {name}
//         const url = "http://localhost:8100/api/models/";
//         const fetchConfig = {
//             method: "post",
//             body: JSON.stringify(data),
//             header: {
//                 "content-type": "application/json",
//             },
//         };
//         const response = await fetch(url, fetchConfig);
//         if(response.ok){
//             const newManufacturer = await response.json();
//             console.log(newManufacturer);
//             setName("");
//         }
//     }


//     function handleNameChange(event){
//         setName(event.target.value);
//     }

//     return(
//         <div className="row">
//             <div className="offset-3 col-6">
//                 <div className="shadow p-4 mt-4">
//                     <h1>Create a manufacturer</h1>
//                     <form onSubmit={handleSubmit}>
//                         <div className ="form-floating mb-3">
//                             <input value={name} onChange={handleNameChange} placeholder="Manfacturer Name" required type="text" name="name" id="name" className="form-control"/>
//                             <label htmlFor="name"> Manufacturer Name... </label>
//                         </div>
//                         <button type="submit" className="btn btn-outline-primary">Create</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }
