import './Home.css'
import icon from '../assets/Home-Icon.png'
import shampoo from '../assets/shampoo.png'

function Home(){
    return(
        <>
            <div className="container-home" id='Home'>
                <div className="left-cont">
                    <div className="header">
                        <p>Welcome to<br></br></p>
                        <h2>PawPals</h2>
                    </div>
                    <div className="explore">
                        <p>Explore Now</p>
                    </div>
                </div>
                <div className="right-cont">
                    <div className="img-cont">
                        <img src={icon} alt="dog" />
                    </div>
                </div>
            </div>
            <div className="container-shop" id='shop'>
            <div className="shop-header">
                <h2>Top Deals</h2>
            </div>
            <div className="shop-cont">
                    <div className="item-container">
                        <div className="item-img">
                            <img src={shampoo} alt="dog" className='product' />
                        </div>
                        <div className='product-description'>
                            <div className="item-name">
                                <p className="font-">Item Name</p>
                                <p>Price</p>
                            </div>
                            <div className="explore-more">
                                <p className='explore-shop'>Explore More</p>
                            </div>
                        </div>
                    </div>
                    <div className="item-container">
                        <div className="item-img">
                            <img src={shampoo} alt="dog" className='product' />
                        </div>
                        <div className='product-description'>
                            <div className="item-name">
                                <p className="">Item Name</p>
                                <p>Price</p>
                            </div>
                            <div className="explore-more">
                                <p className='explore-shop'>Explore More</p>
                            </div>
                        </div>
                    </div>
                    <div className="item-container">
                        <div className="item-img">
                            <img src={shampoo} alt="dog" className='product' />
                        </div>
                        <div className='product-description'>
                            <div className="item-name">
                                <p className="text-orange-700">Item Name</p>
                                <p>Price</p>
                            </div>
                            <div className="explore-more">
                                <p className='explore-shop'>Explore More</p>
                            </div>
                        </div>
                    </div>
            </div>
            <p className="explore-shop">Explore Shop</p>
            </div>                                    
        </>
    )
}

export default Home 
