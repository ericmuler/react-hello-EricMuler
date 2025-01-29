import React from "react";


const Card = (props) => {
    const { image, description } = props.cards;
    return (
        <div className="card h-100 bg-info-subtle border border-3 border-info border border-top-0">
            <img src={image} className="card-img-top " style={{ height: '200px', objectFit: 'cover' }}/>  
            <div className="card-body">
                <p className="card-text">{description}</p>
                <hr style={{ border: 'none', height: '1px', backgroundColor: '#343a40', margin: '0 -15px', marginBottom: '20px' }} />
                <button className="btn btn-primary border border-3 border-info ">
                let's go!
                </button>
            </div>
        </div>
    );
};
export default Card;