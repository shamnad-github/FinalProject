import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ContactProvider from "./ContactContext";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import EditContact from "./EditContact";


export function App() {
  return (
    <ContactProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/add">ADD CONTACT</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/add">
            <ContactForm/>
          </Route>
          <Route path="/edit/:id,:name,:email,:phone" component={EditContact}/>
          <Route path="/">
            <ContactList/>
          </Route>
        </Switch>
      </Router>
    </ContactProvider>
  );
}

