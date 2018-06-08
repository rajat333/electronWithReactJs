import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../Header/Header';

class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // reset login status
    // }

    render() {
       return (
            <div className="Home">         
            <Header />
            </div>
        );
    }
}

export default Home;