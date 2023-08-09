import React, { useState, useEffect  } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Todo from './Todo';
import { Add } from "../redux/actions/Action";
import { useDispatch, useSelector  } from 'react-redux';
import { Clear_Users, countUsers } from "../redux/actions/Action";
import "./home.css"
// import {  } from "../redux/actions/Action";



// const { User_data } = useSelector((state) => state.todoreducers);



const Home = () => {

    const { User_data,userCount } = useSelector((state) => state.todoreducers);

    const [data, setData] = useState("")
    // console.log(data);

    const dispatch = useDispatch();


    const addData = () => {
        dispatch(Add(data))
        setData('');
    }

    const handleClearUsers = () => {
        dispatch(Clear_Users(""));
    };




    // useEffect(() => {
    //     // Count the users and dispatch the action
    //     const userCount = User_data.length;
    //     dispatch(countUsers(userCount));
    //     console.log(userCount);
    //   }, [dispatch, User_data]);
      useEffect(() => {
        // Count the users and dispatch the action
        const userCount = User_data.length;
        dispatch(countUsers(userCount));
    }, [dispatch, User_data]);

    return (
        <>
            <div className='container'>
                <section className='mt-3 text-center'>
                    <h3>Enter Your Task</h3>
                    <div className='todo col-lg-5 mx-auto d-flex jutify-content-between align-items-center'>
                        <input type="text" value={data} className='form-control' onChange={(e) => setData(e.target.value)} />
                        <Button variant='contained' className='mx-2 mx-2'
                            onClick={() => addData()}>
                            <AddIcon />
                        </Button>
                    </div>
                    <Todo />
                </section>
            </div>

                    <div className='clrcntbtn '>
                        {/* Clear all Users data button */}
                        <Button variant='contained' className='mx-2 mx-2' onClick={handleClearUsers} >Clear Users</Button>
                        <p >User Count: {userCount}</p>
                    </div>
        </>
    )
}

export default Home