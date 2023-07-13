import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

  const loadFoodItems = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }

    });
    response = await response.json();
    //console.log(response[1],response[0]);
    setFoodItems(response[0]);
    setFoodCat(response[1]);
  }




  useEffect(() => {
    loadFoodItems()
  }, [])


  return (
    <div>
      <div><Navbar /></div>
      <div><div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>

        <div className="carousel-inner " id='carousel'>
          <div className=" carousel-caption  " style={{ zIndex: "9" }}>
            <div className=" d-flex justify-content-center">  
              <input className="div-control me-2 w-75  " type="search" placeholder="Search...." aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
              {/* <button className="btn text-white bg-danger" type="submit">Search</button> */}
            </div>
          </div>
          <div className="carousel-item active" >
            <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x700/?noodels" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x700/?pizza" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      <div className='container'>
      <div class="tagline">
  <marquee behavior="scroll" direction="left">**NOTE** "The estimated delivery time is 45 minutes, but this may vary depending on the location." </marquee>
</div>

        {
          foodCat !== []
            ? foodCat.map((data) => {
              return (<div className='row mb-3'>
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {foodItems !== []
                  ?
                  foodItems.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))) 
                    .map(filterItems => {
                      return (
                        <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                          <Card foodItem ={filterItems}
                            options={filterItems.options[0]}
                            description={filterItems.description}
                            
                          ></Card>
                        </div>
                      )
                    }
                    ) : <div> no such data found</div>}
              </div>
              )
            })
            : ""
        }


      </div>

      <div><Footer /></div>
    </div>
  )
}
