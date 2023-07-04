import ".//index.css"


function ManufacturerList({manufacturers}){
    return(
        <div className="list-page">
            <h1>Manufacturers</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {manufacturers?.map((manufacturer) => {
                        return(
                            <tr key={manufacturer.id}>
                                <td>{manufacturer.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default ManufacturerList;
