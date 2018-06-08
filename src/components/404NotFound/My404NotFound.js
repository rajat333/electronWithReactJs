import React ,{ Component  } from 'react';
// import { Link } from 'react-router-dom';
import Header from "../Header/Header";

class My404NotFound extends Component {

       render() {
           return (
            <div className="not-found">
              <Header />
                <h1>404 Not Found</h1>
            </div>   
           );
       };
          
}

export default My404NotFound;