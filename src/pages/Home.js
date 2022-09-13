import logo from '../images/minimal.jpg'
import sale_png from '../images/sale-png.jpg'
import sale_male_png from '../images/sale-male-png.jpg'
import { Link } from 'react-router-dom'
import '../styles.css'
const Home = () => {
    return (
        <div>
            <div className='container'>
                <div className='navbar'>
                    {/* <div className='logo'> */}
                    <img src={logo} className='logo' />
                    {/* </div> */}
                    <div className='links'>
                        <div className='link'>
                            <Link to='/product' className='link'>product  </Link>

                        </div>
                        <div className='link'>
                            <Link to='/cart' className='link'>cart  </Link>

                        </div>
                        <div>
                            <Link to='/profile' className='link'>profile  </Link>

                        </div>
                    </div>

                </div>
                <h1 className='sale_h'>sale</h1>
                <div className='content'>
                    {/* <div className='sale'> */}
                        <div>
                            <p className='sale_p'>sale 20% wait you</p>
                        </div>
                        <div className='sale_png'>
                            <img src={sale_png} className='sale_png' />
                        </div>
                    {/* </div> */}

                </div>
                <div className='sale_male'>
                    {/* <div className='sale'> */}
                        <div className='sale_male_png'>
                            <img src={sale_male_png} className='sale_male_png' />
 

                        </div>
                        <div className='sale_male_p'>
                                <p className='sale_male_p'>sale 40% for male</p>
                        </div>
                    {/* </div> */}
                </div>
                <div className='contact'>
                    
                </div>   
            </div>
        </div>
    )
}
export default Home