import {ServiceInterface} from "../../../contracts/services";

const ItemService = ({item}:any)=>{

    return(
        <>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td><img style={{width: '50px'}} src={`http://localhost:8000/${item.image}`}/></td>
            <td>
                <div>
                    <button type="button" className="btn btn-info mr-1 h6">view</button>
                    <button type="button" className="btn btn-danger h6">Delete</button>
                </div>
            </td>
        </>
    )
}

export default ItemService;