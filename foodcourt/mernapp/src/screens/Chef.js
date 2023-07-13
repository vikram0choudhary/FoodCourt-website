import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const chefs = [
  {
    name: "Chef.Jessica",
    image: "https://media.istockphoto.com/id/1298088270/photo/young-beautiful-smiling-woman-chef-with-arms-crossed-at-kitchen.jpg?s=612x612&w=0&k=20&c=ZtYaFLtiRkuA6mQ8HK05xjZNvpb4ev2BS9g2Uc6mdww=",
    description: "Jessica is a cutting-edge and masterful chef who continually evolves her culinary style.",
    experience: 10
  },
  {
    name: "Chef.Steve",
    image: "https://media.istockphoto.com/id/1192003808/photo/kitchen-chef.jpg?s=612x612&w=0&k=20&c=IhO8ODdtulOun0h_8HroDPL6NZPAnm6Wi12QHkf3ttA=",
    description: "Anthony is a daring and ambitious chef who is unafraid to take risks in pursuit of culinary excellence.",
    experience: 8
  },
  {
    name: "Chef.Mia burj",
    image: "https://media.istockphoto.com/id/1178076349/photo/smiling-young-cook-wearing-chefs-hat.jpg?s=612x612&w=0&k=20&c=5aTVOYcCgD_ioHJE-v2nHqJLXyZdKkBNdO0sCKDB9uM=",
    description: "Mia is an innovative and creative chef who constantly seeks to push culinary boundaries.",
    experience: 6
  },
  {
    name: "Chef.Marco",
    image: "https://media.istockphoto.com/id/1212961298/photo/young-cooker-man-with-beard-wearing-uniform-using-whisk-and-bowl-over-blue-background-doing.jpg?s=612x612&w=0&k=20&c=mkwS9eIpywuWs5z_CxBvnd7UVimGkCCobWPppFuofrs=",
    description: "Marco is a passionate and experienced chef who knows how to balance tradition with innovation.",
    experience: 12
  },
  {
    name: "Chef.Sophia",
    image: "https://media.istockphoto.com/id/1142230160/photo/beautiful-chef-working-in-a-kitchen-at-a-restaurant.jpg?s=612x612&w=0&k=20&c=a_e524ohK5mfy8Ef2QyeENKQHShv7z6vv-ZztCUCeCc=",
    description: "Sophia is a versatile and talented chef who brings energy and expression to her dishes.",
    experience: 9
  },
  {
    name: "Chef.Vikram Choudhary",
    image: "https://media.istockphoto.com/id/526843188/photo/cheerful-happy-chef-holding-kitchen.jpg?s=612x612&w=0&k=20&c=iRPDUixIqvEWLDAbWbX1rwMA06ukkbMHSTX2FFuRtbk=",
    description: "Vikram is a resourceful and talented chef who draws from his multicultural background to create unique and flavorful dishes.",
    experience: 13
  },
  {
    name: "Chef.Kavita",
    image: "https://media.istockphoto.com/id/1311030976/photo/portrait-of-a-young-women-chef-holding-wooden-spoon-and-spatula-standing-isolated-over-white.jpg?s=612x612&w=0&k=20&c=ZwrQBgDEKF9SDrLrvIx6i2RBUz0OoL6UBJeNtoJLx8Y=",
    description: "Kavita is an inspiring and artistic chef who brings a unique cultural perspective to her dishes.",
    experience: 8
  },
  {
    name: "Chef.kaira",
    image: "https://media.istockphoto.com/id/1263972276/photo/the-queen-of-the-catering-industry.jpg?s=612x612&w=0&k=20&c=Csxf57wauGONuCnA17sHdYlBNG_WWx4Wy_jlsOGYOiI=",
    description: "Kaira is a visionary and dynamic chef who is constantly experimenting with new ingredients and techniques.",
    experience: 5
  },
  {
    name: "Chef.David",
    image: "https://media.istockphoto.com/id/1136638047/photo/i-love-my-work-cheerful-young-chef-in-apron-keeping-tattooed-arms-crossed-and-smiling-while.jpg?s=612x612&w=0&k=20&c=XDfN4eo_AWH_LM7KLNL8jHCQY9wjkVwRBFMNo-z_4C8=",
    description: "David is a precise and flawless chef who demands the best from himself and his ingredients.",
    experience: 7
  }
]

function ChefCard({ chef }) {

  return (
    <div className="chef-card">
      <img src={chef.image} alt={chef.name} />
      <div className="chef-details">
        <h2>{chef.name}</h2>
        <p>{chef.description}</p>
        <p>Years of Experience: {chef.experience}</p>
      </div>
      <style jsx>{`
        .chef-card {
          background-color: #333232;
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
          overflow: hidden;
          width: calc(33.33% - 20px);

          transition: transform 0.2s ease-in-out;
}

.chef-card:hover {
  transform: translateY(-5px);
}

 .chef-card img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
        .chef-details {
          padding: 20px;
          flex-grow: 1;
        }
        h2 {
          margin-top: 0;
        }
        p {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}

export default function ChefList() {

  return (
    <div>
      <div><Navbar /></div>
      <div className="chef-list" >
        <h1>Michelin Chefs Cooking in Foodcourt</h1>
        <h3>"Food court are a celebration of diverse cultures and cuisines, all in one place."</h3>
        <div className="chef-cards">
          {chefs.map(chef => (
            <ChefCard key={chef.name} chef={chef} />
          ))}
        </div>
        <style jsx>{`
        .chef-list {
          padding: 20px;
        }
        .chef-cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        h1 {
          font-size: 36px;
          margin-bottom: 20px;
          text-align: center;
        }
        h3 {
            font-size: 18px;
            margin-bottom: 30px;
            text-align: center;
           
          }
      `}</style>
      </div>
      <div><Footer /></div>
    </div>
  );
}


