import React, { useEffect } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
    MDBInputGroup
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { getCartTotal } from '../features/cartSlice';


export default function Navbar() {
    const dispatch = useDispatch();

const {cart,totalQuantity} = useSelector((state)=>state.allCart);
 
useEffect(()=>{
    dispatch(getCartTotal());
 
},[cart])



    return (
        <MDBNavbar light bgColor='light'>
            <MDBContainer fluid>
                
                    <MDBNavbarBrand>Navbar</MDBNavbarBrand>
                    <span>
                        <Link to="/"> 
                        All product
                        </Link>
                        </span>
                        <MDBBtn className='me-1' color='secondary'>
                        <Link to="/cart"> 
                        Cart ({totalQuantity})
                        </Link>
                        </MDBBtn>
               
            </MDBContainer>
        </MDBNavbar>
    );
}