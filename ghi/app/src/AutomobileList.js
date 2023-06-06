function AutomobileList(props){
    if (!props.automobiles || !Array.isArray(props.automobiles)){
        return null;
    }
    return(
        <>
            <h1>Automobiles</h1>
            <table className="table table-striped table-hover">
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
                    {props.automobiles.map((automobile) => {
                        console.log(props.automobiles)
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
        </>
    );
}

export default AutomobileList;
