import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import HotelDetail from "../hotels/HotelDetail"
import About from "../about/About";
import Contact from "../contact/Contact";
import Booking from "../booking/Booking";
import Enquiry from "../hotels/Enquiry";
import BookingDetailContainer from "../booking/detail/BookingDetailContainer";
import Login from "../login/Login";
import Admin from "../admin/Admin";
import AdminBookings from "../admin/adminbookings/AdminBookings";
import AdminEstablishments from "../admin/adminestablishments/AdminEstablishments";
import AdminMessages from "../admin//adminmessages/AdminMessages";
import logo from "./logo.png"
import styles from "./Layout.module.css"

function Layout() {
    return (
        <>
            <div className={styles.content}>
                <Router>
                    <Navbar bg="light" variant="light" expand="lg">
                        <Navbar.Brand><Link to="/"><img src={logo} alt="Logo" /></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <NavLink to="/" exact className="nav-link">
                                HOME
                            </NavLink>
                            <NavLink to="/booking" className="nav-link">
                                BOOK A STAY
                            </NavLink>
                            <NavLink to="/about/" className="nav-link">
                                ABOUT
                            </NavLink>
                            <NavLink to="/contact/" className="nav-link">
                                CONTACT
                            </NavLink>
                            <NavLink to="/login/" className="nav-link">
                                ADMIN LOGIN
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
                            <Route path="/hotel/:id" component={HotelDetail} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/booking" component={Booking} />
                            <Route path="/enquiry" component={Enquiry} />
                            <Route path="/booking/:id" component={BookingDetailContainer} />
                            <Route path="/login" component={Login} />
                            <Route path="/admin" component={Admin} />
                            <Route path="/adminbookings" component={AdminBookings} />
                            <Route path="/adminestablishments" component={AdminEstablishments} />
                            <Route path="/adminmessages" component={AdminMessages} />
                        </Switch>
                    </Container>

                </Router>
            </div>

            <footer class={styles.footer}>
                <Container>
                    <div class={styles.footerContainer}>
                        <img src={logo} alt="Logo" /><span>Copyright &copy; 2020</span>
                    </div>
                </Container>
            </footer>

        </>
    );
}

export default Layout;
