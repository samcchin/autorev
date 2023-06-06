function ModelList(props){
    if (!props.models || !Array.isArray(props.models)){
        return null;
    }


    return (
      <>
        <h1>Vehicle Models</h1>
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
                  <td><img alt="" src={model.picture_url}/> </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
}

export default ModelList
