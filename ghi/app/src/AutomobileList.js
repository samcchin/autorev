function AutomobileList({automobiles}){
    console.log("automobiles:", automobiles);
    return (
        <div className='container'>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>VIN</th>
            <th>Color</th>
            <th>Year</th>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Sold</th>
          </tr>
        </thead>
        <tbody>
        {automobiles.map(automobile => {
          return (
            <tr key={automobile.id}>
              <td>{ automobile.vin }</td>
              <td>{ automobile.color }</td>
              <td>{ automobile.year }</td>
              <td>{ automobile.model.name }</td>
              <td> {automobile.model.manufacturer.name}</td>
              <td>{ automobile.sold.toString()}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
    )
}



export default AutomobileList;
