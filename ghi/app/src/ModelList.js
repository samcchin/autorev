function ModelList({models}){
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
          {models?.map((model) => {
            return (
              <tr key={model.id}>
                <td>{model.name}</td>
                <td>{model.manufacturer.name}</td>
                <td><img alt="" height="100" width="100" src={model.picture_url}/> </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ModelList
