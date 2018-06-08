import React , { Component } from 'react';
import Header from  "../Header/Header";

class ContactUs extends Component{

    render(){
        return(
            <div className="Contact">
             <Header />   
             <br/><br/><br/><br/><br/>
             <form className="form-horizontal" action="/action_page.php">
             <div className="form-group">
               <label className="control-label col-sm-2" htmlFor="email">Email:</label>
               <div className="col-sm-8 col-sm-offset-2">
                 <input type="email" className="form-control" id="email" placeholder="Enter email" />
               </div>
             </div>
             <div className="form-group">
               <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
               <div className="col-sm-8 col-sm-offset-2"> 
                 <input type="password" className="form-control" id="pwd" placeholder="Enter password" />
               </div>
             </div>
             <div className="form-group"> 
               <div className="col-sm-offset-2 col-sm-10">
                 <div className="checkbox">
                   <label><input type="checkbox" /> Remember me</label>
                 </div>
               </div>
             </div>
             <div className="form-group"> 
               <div className="col-sm-offset-2 col-sm-10">
                 <button type="submit" className="btn btn-success">Submit</button>
               </div>
             </div>
           </form>
            </div>
        )
    }
}

export default ContactUs ;