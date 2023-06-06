function AutomobileList({automobiles}){
    console.log("automobiles in AutomobileList:", automobiles);
    return(
        <div>
            <h1>Automobiles</h1>
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
                    {automobiles?.map(automobile => {
                        return(
                            <tr key={ automobile.id }>
                                <td>{ automobile.vin }</td>
                                <td>{ automobile.color }</td>
                                <td>{ automobile.year }</td>
                                <td>{ automobile.model }</td>
                                <td>{ automobile.manufacturer }</td>
                                <td>{ automobile.sold }</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AutomobileList;
