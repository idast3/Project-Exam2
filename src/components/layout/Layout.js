import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Booking from "../booking/Booking";
import Enquiry from "../booking/enquiry/Enquiry";
import BookingDetailContainer from "../booking/detail/BookingDetailContainer";
import Admin from "../admin/Admin";
import AdminBookings from "../admin/adminbookings/AdminBookings";
import AdminEstablishments from "../admin/adminestablishments/AdminEstablishments";
import AdminMessages from "../admin//adminmessages/AdminMessages";
import logo from "./logo.png"

function Layout() {
    return (
      <>
        <Router>
            <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Brand href="#home"><img src={logo} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                    <NavLink to="/booking/" className="nav-link">
                        BOOK A STAY
                    </NavLink>
                        <NavLink to="/about/" className="nav-link">
                            ABOUT
                        </NavLink>
                        <NavLink to="/contact/" className="nav-link">
                            CONTACT
                        </NavLink>

                        <NavLink to="/" exact className="nav-link admin-link">
                            ADMIN SITE
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="Banner">
            <Container>
            <h1 className="Banner_Title">VISIT BERGEN</h1>
            <p className="Banner_Text">Book a stay at our finest hotels, B&Bs and guesthouses in the city of Bergen.</p>
            </Container>
           </div>


            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/booking" component={Booking} />
                    <Route path="/enquiry" component={Enquiry} />
                    <Route path="/booking/:id" component={BookingDetailContainer} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/adminbookings" component={AdminBookings} />
                    <Route path="/adminestablishments" component={AdminEstablishments} />
                    <Route path="/adminmessages" component={AdminMessages} />
                </Switch>
            </Container>
        </Router>


          <div className="Footer">
          <img src={logo} alt="Logo" /><p className="Footer-Text">Copyright © 2020</p>
          </div>




        </>
    );
}

export default Layout;