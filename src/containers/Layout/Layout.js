import React, {useState } from 'react';
import Auxiliry from '../../hoc/Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/Sidedrawer/SideDrawer';
import Modal from '../../components/UI/Modal/Modal';
//import 

const layout = () => {

    const api = {
        key:process.env.REACT_APP_WEATHER_API_KEY,
        base:"https://api.openweathermap.org/data/2.5/"
    }
    const [showSideDrawer, setShowSideDrawer] = useState(true);
    const [showWeather, setShowWeather] = useState(false);
    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState({});
    const [temp,setTemp] = useState('');
//     fetch("http://localhost:1337/cities?name=Hubli", {
//   method: "GET",
//   headers: {
//      'Content-Type': 'application/json'
//   },
// }).then(response => response.json())
//   .then(data => console.log(data));

    const select = (props) => {
        if(props.key === "Enter") {
            fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
            .then(response => response.json())
            .then(res => {
                setSearch('');
                setWeather(res);
                setTemp(res.main.temp);
                setShowWeather(true)
            });
        }
    }

    const modalCloseHandler = () => {
        setShowWeather(false);
    }

    const showModal = () => {
        setShowWeather(true);
    }

    const  sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }

    const sideDrawerToggleHandler = () => {
        let status = showSideDrawer;
        setShowSideDrawer(!status)
    }

    return (
        <Auxiliry>
            <Toolbar drawerToggleClicked={sideDrawerToggleHandler}/>
            <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler}/>
            <div className={classes.HeroImage}>
                <div className={classes.container}>
                    <h1><span>WEATHER</span></h1>
                    <span className={classes.subtext}>We provide current weather forecast</span>
                        <div className={classes.searchPart}>
                            <input type='text' placeholder='Search...' className={classes.searchBar} 
                            onChange={event => setSearch(event.target.value)}
                            value={search}
                            onKeyPress={select}
                            
                           />
                        </div>

                        <button onClick={showModal}  className={classes.Button}>ENTER</button>
                </div>
                {(typeof weather !== "undefined") ? (
                    <div>
                    <div>
                        <Modal show={showWeather} modalClosed={modalCloseHandler}>
                            <div className={classes.display}>
                                <div>{weather.name}</div>
                                <div>{Math.round(temp)}°C</div>
                                {/*<div>{weather.weather[0]}</div>
                                <div>{weather.name}</div>
                                <div>{Math.round(weather.temp)}°C</div>*/}
                                
                            </div>
                        </Modal>
                    </div>
                    </div>
                 ) : (
                    <div>
                    <Modal show={showWeather} modalClosed={modalCloseHandler}>
                        <div className={classes.display}>
                            <p>SORRY</p>
                            <p>NO SUCH CITY FOUND!</p>
                        </div>
                    </Modal>
                </div>
                 )}
            </div>
        </Auxiliry>
    );
}

// orderSummary=<OrderSummary ingredients={this.state.ingredients}
// purchaseCancelled={this.purchaseCancelHandler}
// purchaseContinued={this.purchaseContinueHandler}
// price={this.state.totalPrice}/>

export default layout;
