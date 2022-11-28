import {useEffect, useState} from "react";
import {Button, Modal, Table} from "react-bootstrap";
import {toast} from "react-toastify";
import axios from "axios";

import {NextPageWithLayout} from "../_app";
import UserPanelLayout from "../../app/components/admin/userPanelLayout";
import callApi from "../../app/helpers/callApi";

interface MassageItemProps {
    "id": number,
    "name": string,
    "email": string,
    "subject": string,
    "body": string,
    "created_at"?: string,
    "updated_at"?: string
}

const Messages: NextPageWithLayout = () => {

    const [data, setData] = useState<MassageItemProps[]>();

    const [show, setShow] = useState(false);
    const [massageView , setMassageView] = useState<MassageItemProps>({
        "id": 0,
        "name": '',
        "email": '',
        "subject": '',
        "body": '',
    })
    const handleClose = () => setShow(false);
    const handleShow = (item:MassageItemProps) =>{
        setMassageView(item)
        setShow(true);
    };

    useEffect(() => {
        axios.get('https://api.a-nateghi.ir/api/v1/tickets').then(res => setData(res.data.data))
        callApi().get('ticket').then(res=>  console.log(res))
    }, [])

    const deleteItem = async (id: number) => {
        let res = await axios.delete(`https://api.a-nateghi.ir/api/v1/tickets/${id}`);
        if (res.status == 201) {
            let newList = data?.filter((item: MassageItemProps) => item.id != id);
            setData(newList);
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
            setShow(false);
        }
    }


    return (
        <div className="px-4">
            <Table className="table table-striped table-hover table-vcenter" data-radium="true">
                <thead data-radium="true">
                <tr data-radium="true">
                    <th className="text-center" data-radium="true">Row</th>
                    <th>name</th>
                    <th className="d-none d-md-table-cell">Email</th>
                    <th className="d-none d-md-table-cell">subject</th>
                    <th className="text-center" data-radium="true">operations</th>
                </tr>
                </thead>
                <tbody>
                {
                    data === undefined ?
                        <tr className="d-flex justify-content-center mt-3 bg-light">
                            <td>
                                <div className="spinner-grow" role="status"><span className="sr-only">Loading...</span>
                                </div>
                            </td>
                        </tr>
                        : data?.map((item: MassageItemProps, index: number) => (
                            <tr data-radium="true" key={item.id}>
                                <td className="text-center">{index}</td>
                                <td>{item.name}</td>
                                <td className="d-none d-md-table-cell">{item.email}</td>
                                <td className="d-none d-md-table-cell">{item.subject}</td>
                                <td className="text-center">
                                    <button onClick={()=>handleShow(item)} type="button" className="btn btn-info mr-1 h6">view
                                    </button>
                                    <button onClick={() => deleteItem(item.id)} type="button" className="btn btn-danger h6">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                }
                </tbody>
            </Table>

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
                            <td>{massageView?.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{massageView?.email}</td>
                        </tr>
                        <tr>
                            <td>subject</td>
                            <td>{massageView?.subject}</td>
                        </tr>
                        <tr>
                            <td>Massage</td>
                            <td>{massageView?.body}</td>
                        </tr>
                        <tr>
                            <td>shipping time</td>
                            <td>{massageView?.created_at}</td>
                        </tr>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <button onClick={() => deleteItem(massageView.id)} type="button" className="btn btn-danger h6">
                        Delete
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

Messages.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>

export default Messages;