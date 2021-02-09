import React from 'react'
import HotelCards from './HotelCards'
import Header from './Header'
import Sidebar from './Sidebar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import CreateCard from './CreateCard'
import HotelDetailsPage from './HotelDetailsPage'

function HomeTemplate() {

    return (
        <Router>
            <Sidebar />
            <div className="homepage">
                <Header />
                <div className="content">
                    <Switch>
                        <Route path="/" exact component={HotelCards}/>
                        <Route path="/card-create" exact component={CreateCard}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/details-page/:id" exact component={HotelDetailsPage}/>
                    </Switch>
                </div>
                <footer className="footer">Footer</footer>
            </div>
        </Router>
    )
}

export default HomeTemplate
