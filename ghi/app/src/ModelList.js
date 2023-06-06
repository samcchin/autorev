import React, {useEffect, useState} from "react"

function ModelList(props){
    const [models, setModels] = useState([]);

    if (!props.models || !Array.isArray(props.models)){
        return null;
    }


    return (
      <>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Manufacturer</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {props.models.map((model) => {
              return (
                <tr key={model.id}>
                  <td>{model.name}</td>
                  <td>{model.manufacturer.name}</td>
                  <td><img src={model.picture_url}/> </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
}

export default ModelList
