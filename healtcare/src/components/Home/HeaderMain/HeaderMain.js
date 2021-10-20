import React from 'react';
const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center w-100">
            <div className="col-md-12 col-lg-4 offset-md-1 mb-4 fw-bolder text-dark">
                <p>Plan your trip now</p>
                <h1>Save <span style={{color:'#ff4d30'}}>big</span> with our <br/> healthcare rental</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci perferendis fuga officia dicta, voluptatem provident!</p>
                <a href="#book-ride" style={{backgroundImage: 'linear-gradient(to left,#f0561d,#fff,#ff6830,#f0561d)'}} className="btn btn-lg fw-bolder">Book Ride</a>
            </div>
            <div className="col-md-12 col-lg-6">
                <img src="https://www.iotworldtoday.com/files/2018/10/GettyImages-962094932-1-877x432.jpg" alt="" className="img-fluid w-100"/>
            </div>
        </main>
    );
};

export default HeaderMain;