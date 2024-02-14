import React from 'react'
import img1 from "../component/Images/Team/team1-free-img.png";
import img2 from "../component/Images/Team/team2-free-img.png";
import img3 from "../component/Images/Team/team3-free-img.png";
import img4 from "../component/Images/Team/team4free-img.png";
import img5 from "../component/Images/Team/team5-free-img.png";
import img6 from "../component/Images/Team/team6-free-img.png";

const Data = [
    {
        id: 1,
        img: img1,
        name: "Jessica Pearson",
        post: "Founder - CEO"
    },
    {
        id: 2,
        img: img2,
        name: "Harvey Spector",
        post: "Product Manager"
    },
    {
        id: 3,
        img: img3,
        name: "Rachel Zain",
        post: "Marketing Head"
    },
    {
        id: 4,
        img: img4,
        name: "Luise Litt",
        post: "Accounting Manager"
    },
    {
        id: 5,
        img: img5,
        name: "Katrina Bennett",
        post: "Designer"
    },
    {
        id: 6,
        img: img6,
        name: "Mike Ross",
        post: "Lead Developer"
    },
]

const Team = () => {
  return (
    <div className='team-div'>
      <div className='text-center'>
      <div className="top-margin mx-auto"></div>
      <h1 className="wlc text-black about-heading
       mx-auto mt-4">
        Our Team
      </h1>
      <p className="hero-text mt-1 mb-5">
        Meet some of our team members     
      </p>
      </div>
      <div className='d-flex flex-wrap justify-content-center gap-3 member-card-div'>
        {
            Data.map((elem) => {
                return (
                    <div className='member-card d-flex flex-column justify-content-center align-items-center gap-4'>
                        <img src={elem.img} className='img-fluid team-img'/>
                        <div className='text-center'>
                        <h5>{elem.name}</h5>
                        <p>{elem.post}</p>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Team
