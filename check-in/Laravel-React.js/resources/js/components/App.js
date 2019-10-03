import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/** Layout */
import Header from './layout/Header';

import Index from '../pages/guests/Index';

function App() {
    return (
        <Router>
            <Header />
            <section className="mt-n5">
                <div className="container">
                    <div className="row justify-content-center">
                        <Route exact path="/" component={Index}></Route>    
                    </div>
                </div>
            </section>
        </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
