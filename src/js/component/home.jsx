import React from "react";
import Navbar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./footer";


const cards = [
	{
		image: "https://restaurantespuebla.wordpress.com/wp-content/uploads/2017/02/restaurantes_puebla_cocteles_exoticos_05.jpg?w=1000",
		description: "Chupito cucaracha",
	},
	{
		image: "https://picsum.photos/id/60/200/300",
		description: "Ofice",
	},
	{
		image: "https://picsum.photos/id/1/200/300",
		description: "Codigo",
	},
	{
		image: "https://www.sddistribuciones.com/Portadas/GSC16948128.JPG",
		description: "Juego",
	}
];


const Home = () => {
	return (
		<div className="text-center bg-body-secondary">
			<Navbar/>
			<Jumbotron/>
			<div className="container">
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer/>
		</div>
	);
};
export default Home;