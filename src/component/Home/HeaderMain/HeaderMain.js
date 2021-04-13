import React from 'react';
import Chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main style={{height:'800px'}} className="row d-flex align-items-center">
            <div className="col-md-5 offset-md-1">
                <h1 style={{color:'#3A4256'}}>You New Smile <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio deserunt eius laudantium ullam doloremque? Accusamus!</p>
                <button className="btn btn-primary">Get Appoentment</button>
            </div>
            <div className="col-md-6">
                <img src={Chair} alt="" className="img-fluid w-75"/>
            </div>
        </main>
    );
};

export default HeaderMain;