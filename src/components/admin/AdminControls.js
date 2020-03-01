
import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import AdminBookings from "./adminbookings/AdminBookings";
import AdminEstablishments from "./adminestablishments/AdminEstablishments";
import AdminMessages from "./adminmessages/AdminMessages";

function AdminControls() {
    return (
      <>
        <Router>

          <Container>
              <NavLink to="/adminbookings/" className="nav-link Admin__Control">
                  Manage booking enquiries ›
              </NavLink>
              <NavLink to="/adminestablishments/" className="nav-link Admin__Control">
                  Manage establishments ›
              </NavLink>
              <NavLink to="/adminmessages/" className="nav-link Admin__Control">
                  Manage messages ›
              </NavLink>
          </Container>


            <Container>
                <Switch>
                    <Route path="/adminbookings" component={AdminBookings} />
                    <Route path="/adminestablishments" component={AdminEstablishments} />
                    <Route path="/adminmessages" component={AdminMessages} />
                </Switch>
            </Container>

        </Router>

        </>
    );
}

export default AdminControls;
