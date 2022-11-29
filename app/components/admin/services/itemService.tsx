import {useState} from "react";
import {useDispatch} from "react-redux";
import {Button, Modal, Table} from "react-bootstrap";

import {deleteItemServices} from "../../../store/services";
import callApi from "../../../helpers/callApi";
import {toast} from "react-toastify";

const ItemService = ({item}:any)=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(!show);

    const dispatch = useDispatch()

    const deleteItem =async (id:number) => {
        try {
        let res = await callApi().delete(`services/${id}`)

        dispatch(deleteItemServices(id))

        toast.success('Removed successfully', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        }catch (err){
            console.log(err)
        }
    }

    return(
        <>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td><img style={{width: '50px'}} src={`http://localhost:8000/${item.image}`}/></td>
            <td>
                <div>
                    <button type="button" className="btn btn-info mr-1 h6" onClick={handleClose}>view</button>
                    <button type="button" className="btn btn-danger h6" onClick={()=>deleteItem(item.id)}>Delete</button>
                </div>
            </td>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>
                    <Table>
                        <tr>
                            <td>Name</td>
                            <td>{item?.title}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{item?.body}</td>
                        </tr>
                        <tr>
                            <td>subject</td>
                            <td>{item?.subject}</td>
                        </tr>
                        <tr>
                            <img style={{width: '50px'}} src={`http://localhost:8000/${item.image}`}/>
                        </tr>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <button onClick={()=>deleteItem(item.id)} type="button" className="btn btn-danger h6">
                        Delete
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ItemService;