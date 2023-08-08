import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Todo from './Todo';
// import {Add} from "../redux/actions/Action"
import { Add } from "../redux/actions/Action";
import { useDispatch } from 'react-redux';

const Home = () => {

    const [data,setData]=useState("")
    // console.log(data);

    const dispatch = useDispatch();


    const addData = () =>{
        dispatch(Add(data))
        setData('');
    }

  return (
    <>
        <div className='container'>
            <section className='mt-3 text-center'>
                <h3>Enter Your Task</h3>
                <div className='todo col-lg-5 mx-auto d-flex jutify-content-between align-items-center'>
                    <input type="text"  value={data} className='form-control' onChange={(e)=>setData(e.target.value)}/>
                    <Button variant='contained' className='mx-2 mx-2'
                        onClick={()=> addData()}>
                        <AddIcon  />
                    </Button>
                </div>
                <Todo />
            </section>
        </div>
    </>
  )
}

export default Home