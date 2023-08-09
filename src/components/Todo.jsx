import { Delete, ModeEdit, RemoveRedEye } from '@mui/icons-material'
import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { Remove, Update_data } from "../redux/actions/Action";
import { DeleteContext } from './context/ContextProvider';


const Todo = () => {

    const { User_data } = useSelector((state) => state.todoreducers);
    // console.log(User_data);

    const { dlttask, setDlttask } = useContext(DeleteContext)


    const dispatch = useDispatch()

    // show modal states 
    const [showeye, setShoweye] = useState(false)
    // and set the getValue
    const [showeyevalue, setShoweyeValue] = useState('')

    const [show, setShow] = useState(false)

    const [update, setUpdate] = useState('')

    const [ind, setInd] = useState('')

    const handleClose = () => setShow(false);




    const handleShow = (e) => {
        setShow(true)
        setUpdate(e)
    }

    // delete data function 
    const remove = (id) => {
        // console.log(id)
        dispatch(Remove(id))
        setDlttask(true)
    }

    // updata text data function 
    const usertask_update = () => {
        dispatch(Update_data(update, ind))
        handleClose()
    }

    return (
        <>
            <div className="todo_data col-lg-5 mx-auto mt-2">
                {
                    User_data.map((e, k) => {
                        return (
                            <>
                                <div className="todo_container mb-2 d-flex justify-content-between align-items-center px-2"
                                    style={{ background: "#dcdde1", borderRadius: "3px", minHeight: "45px" }}>

                                    <li style={{ listStyle: "none" }}> {e} </li>

                                    <div className="edit_dlt col-lg-3 py-2 d-flex justify-content-between align-items-center " key={k}>
                                        <ModeEdit
                                            onClick={() => {
                                                handleShow(e)
                                                setInd(k)
                                            }}
                                            style={{ color: "#0d6efd", cursor: "pointer" }} />
                                        <Delete
                                            onClick={() => remove(k)}
                                            style={{ color: "#dc3545", cursor: "pointer" }} />
                                        <RemoveRedEye
                                            onClick={() => {
                                                setShoweye(true)
                                                setShoweyeValue(e)
                                            }}
                                            style={{ color: "#20c997", cursor: "pointer" }} />
                                    </div>
                                </div>
                            </>
                        )
                    })
                }


                {/* read  function */}
                <Modal show={showeye}>
                    <h3 className='text-center py-2'>{showeyevalue}</h3>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShoweye(false)}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>



                {/* upDate  function */}
                <Modal show={show} onHide={handleClose}>
                    <h3 className='text-center mt-2'>updata your task</h3>
                    <Modal.Header >
                        <div className='todo col-lg-5 mx-auto d-flex jutify-content-between align-items-center'>
                            <input type="text" value={update} className='form-control col-lg-5 mt-2' onChange={(e) => setUpdate(e.target.value)} />

                        </div>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => usertask_update()}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                
            </div>
        </>
    )
}

export default Todo