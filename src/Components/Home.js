import React, { useEffect, useState } from 'react'
import CardC from './CardC'
import CarouselC from './CarouselC'
import '../Styles/style.css'
import { json } from 'react-router-dom'

const Home = () => {

    const dataLoad=async()=>{
            let responseFromBackEnd=await fetch("http://localhost:3001/getFoodList",{
                method:"GET",
                headers:{
                    'Content-Type':'application/json'
                }
            });
            responseFromBackEnd=await responseFromBackEnd.json();
             setFoodItems(responseFromBackEnd);
            //  console.log(responseFromBackEnd);
            // console.log('In LoadData method')
    }
        
const [foodItems,setFoodItems]=useState([]);
const [input,setInput]=useState();
const [search,setSearch]=useState('');

useEffect(()=>{
        // console.log('In useEffect method')
        dataLoad();
},[])

 
function searchItem(e)
{
e.preventDefault();
setSearch(input)
// alert('clicked button',search)
}

    return (
        <div className='home' >
            <CarouselC/>
             <div className='search-bar'>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search"  onChange={(e)=>setInput(e.target.value)} aria-label="Search" />
                <button className="btn btn-outline-success" type="submit" onClick={searchItem}>Search</button>
            </form>
            </div>
            <div className='cards'>
            {/* { console.log('item searched ',search)} */}
            { 
            search=== '' ?foodItems.map((item,idx)=>{
                return   <CardC  foodItemProp={item} />  
            }):
            foodItems.map((item,idx)=>{
                return item.name.toLowerCase().includes(search)? <CardC  foodItemProp={item} /> : ""
            })
            }
            </div>
        </div>
    )
}

export default Home
