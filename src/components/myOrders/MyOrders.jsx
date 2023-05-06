import React from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineEye } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMyOrders } from '../../redux/actions/order';
import Loader from '../layout/Loader';
import { toast } from 'react-hot-toast';

const MyOrders = () => {

    const dispatch = useDispatch();
    const {orders,loading,error} =useSelector((state)=>state.orders);

    useEffect(()=>{

        if(error){
            toast.error(error);
            dispatch({type:"clearError"});
        }
        dispatch(getMyOrders());
    },[dispatch,error]);
  return (
    <section className='tableClass'>
        {
            loading===false?(<main>
                <table>

                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Status</th>
                        <th>Item Qty</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                
                <tbody>
                   {
                    orders && orders.map((i)=>(
                        <tr key={i._id}>
                        <td>#{i._id}</td>
                        <td>{i.orderStatus}</td>
                        <td>
                            {i.orderitems?.cheeseBurger.quantity+
                            i.orderitems?.vegCheeseBurger.quantity+
                            i.orderitems?.burgerWithFries.quantity}
                            </td>
                        <td>₹{i.totalAmount}</td>
                        <td>{i.paymentMethod}</td>
                        <td><Link to={`/order/${i._id}`}><AiOutlineEye/></Link></td> 
                        
                    </tr>
                    ))
                   }
                </tbody>
                </table>
            </main>):(<Loader />)
        }
    </section>
  );
};

export default MyOrders;
