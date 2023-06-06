// function ManufacturerList({manufacturers}){
//     return(
//         <div>
//             <h1>Manufacturers</h1>
//             <table className="table table-striped table-hover">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {manufacturers?.map(manufacturer => {
//                         return(
//                             <tr key={manufacturer.id}>
//                                 <td>{manufacturer.name}</td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default ManufacturerList;

function ManufacturerList({manufacturers}){
    console.log("manufacturers in manufacturerlist", manufacturers);
    return(
        <>
            <h1>Manufacturers</h1>
            <table className="table table-striped table-hover">
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
        </>
    );
}
export default ManufacturerList;
