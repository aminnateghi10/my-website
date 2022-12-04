import {useState} from "react";
import {useDispatch} from "react-redux";
import {Button, Modal, Table} from "react-bootstrap";

import callApi from "../../../helpers/callApi";
import {toast} from "react-toastify";
import {deleteItemCustomersAndReviews} from "../../../store/customersAndReviews";
import EditExperiences from "./editExperiences";

const ItemExperience = ({item}:any)=>{

    const [show, setShow] = useState(false);

    const [edit, setEdit] = useState(false);

    const handleClose = () => setShow(!show);

    const dispatch = useDispatch()

    const deleteItem =async (id:number) => {
        try {
            let res = await callApi().delete(`experiences/${id}`)

            dispatch(deleteItemCustomersAndReviews(id))

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

    console.log(item)

    return(
        <>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td>{item.type}</td>
            <td>{item.start}</td>
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
                {
                    edit ?
                        <>
                            <Modal.Body>
                                <EditExperiences item={item}/>

                            </Modal.Body>
                            <Modal.Footer>
                                <button onClick={()=>setEdit(false)} type="button" className="btn btn-warning h6">Cancel</button>
                            </Modal.Footer>
                        </>
                        :
                        <>
                            <Modal.Body>
                                <Table>
                                    <tr>
                                        <td>Experience</td>
                                        <td>{item?.type}</td>
                                    </tr>
                                    <tr>
                                        <td>Title</td>
                                        <td>{item?.title}</td>
                                    </tr>
                                    <tr>
                                        <td>Body</td>
                                        <td>{item?.body}</td>
                                    </tr>
                                    <tr>
                                        <td>Start</td>
                                        <td>{item?.start}</td>
                                    </tr>
                                    <tr>
                                        <td>End</td>
                                        <td>{item?.end}</td>
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
                                <button onClick={()=>setEdit(true)} type="button" className="btn btn-success h6">Edit</button>
                            </Modal.Footer>
                        </>
                }
            </Modal>
        </>
    )
}

export default ItemExperience;