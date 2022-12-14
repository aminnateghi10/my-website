import {useEffect, useState} from "react";
import {Button, Modal, Table} from "react-bootstrap";
import {toast} from "react-toastify";

import {NextPageWithLayout} from "../_app";
import callApi from "../../app/helpers/callApi";
import UserPanelLayout from "../../app/components/admin/userPanelLayout";
import {TicketInterface} from "../../app/contracts/interface";

const Messages: NextPageWithLayout = () => {
    const [data, setData] = useState<TicketInterface[]>();
    const [show, setShow] = useState(false);

    const [massageView, setMassageView] = useState<TicketInterface>({
        "id": 0,
        "name": '',
        "email": '',
        "subject": '',
        "body": '',
    })
    const handleClose = () => setShow(false);
    const handleShow = (item: TicketInterface) => {
        setMassageView(item)
        setShow(true);
    };

    useEffect(() => {
        callApi().get('tickets').then(res => setData(res.data.data))
    }, [])

    const deleteItem = async (id: number) => {
        try {
            let res = await callApi().delete(`tickets/${id}`);
            let newList = data?.filter((item) => item.id != id);
            setData(newList);
            console.log(newList)
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
        } catch (err) {
            console.log(err)
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
                    <th className="d-none d-md-table-cell">Subject</th>
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
                        : data?.map((item, index: number) => (
                            <tr data-radium="true" key={item.id}>
                                <td className="text-center">{index}</td>
                                <td>{item.name}</td>
                                <td className="d-none d-md-table-cell">{item.email}</td>
                                <td className="d-none d-md-table-cell">{item.subject}</td>
                                <td className="text-center">
                                    <button onClick={() => handleShow(item)} type="button"
                                            className="btn btn-info mr-1 h6">view
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
                            <td>Subject</td>
                            <td>{massageView?.subject}</td>
                        </tr>
                        <tr>
                            <td>Massage</td>
                            <td>{massageView?.body}</td>
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