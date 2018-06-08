import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link ,Route } from "react-router-dom";
import Pagination from "react-js-pagination";
import Sidebar from "../Sidebar/Sidebar";
import { userActions } from "../../actions/users-action";
import "./Dashboard.css";
import SingleUser from './SingleUser/SingleUser';
import PrivateRoute from "../PrivateRoute/PrivateRoute";

class Dashboard extends Component{

    constructor(props){
        super(props);
        console.log("..Dashboard props...",this.props);
        this.state = {
            activePage: 1,
            itemsCountPerPage: 5,
            totalItemsCount: 10,
            pageRangeDisplayed: 4,
            listOfData: [],
           };
        this.handlePageChange = this.handlePageChange.bind(this);   
    }

    componentWillMount(){
        // console.log("...Calling getallregisateruser...");
        this.props.getRegisteredUsers();
    }

    componentWillReceiveProps(nextProps){
        // console.log("..in component will recieve props..",this.props,nextProps);
        const usersData = nextProps.userList;
        // console.log("...userData...",usersData,usersData.length,this.state.itemsCountPerPage);
        // var noOfPages = Math.ceil(usersData.length / this.state.itemsCountPerPage);
        // console.log("..no of pages...",noOfPages);
        var filterData = usersData.slice((this.state.activePage-1),this.state.itemsCountPerPage);
        // console.log("...filter..",filterData);
        this.setState({
             listOfData: filterData,
             totalItemsCount: usersData.length,
        })
    }
  
    handlePageChange(pageno){
        // console.log("...handlePageChange..",pageno);
        const usersData = this.props.userList;
        // console.log("...userData...",usersData,usersData.length,this.state.itemsCountPerPage);
        // console.log("...this.state.activePage..",this.state.activePage);
        console.log("...offset...",(pageno-1)* this.state.itemsCountPerPage);
       var offset = (pageno-1)* this.state.itemsCountPerPage;
        var filterData = usersData.slice(offset,(this.state.itemsCountPerPage+ offset));
        // console.log("...filter..",filterData);
        this.setState({
             listOfData: filterData,
             activePage: pageno,

        })
    }

    render(){
        return(
            <div className="Dashboard">
            <Sidebar />
            <div className="main">
               
               <h1>Dashboard Data will be here </h1> 
               <br /><br />
               <table className="table table-hover table-striped table-bordered">
                    <thead>
                    <tr style={ { fontSize:"17px", } }>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>UserName</th>
                    </tr>
                    </thead>
                    <tbody>
               {
                   this.state.listOfData.map( (eachElement,index) => 
                      <tr key={ index }>
                      <td><Link to={ this.props.match.url+'/'+index} key={index}>{ eachElement.firstName }</Link></td>
                      <td>{ eachElement.lastName }</td>
                      <td>{ eachElement.username }</td>
                    
                      </tr>
                )
               }
               </tbody>
               </table> 
               
               <div className="pagination">
               <Pagination
                    prevPageText='prev'
                    nextPageText='next'
                    firstPageText='first'
                    lastPageText='last'
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    totalItemsCount={this.state.totalItemsCount}
                    pageRangeDisplayed={this.state.pageRangeDisplayed }
                    onChange={ this.handlePageChange}
               />
           </div>
            </div>
            <PrivateRoute path="/dashboard/:id" component={ SingleUser } />
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    // console.log("....state...Dashboard....",state);
    return{ 
        userList : state.users.userList,
     };   
 }

const mapDispatchToProps = dispatch =>{
    //  console.log("...In mapDIspatchToProps....");
     return {
         // different func for performing action
         getRegisteredUsers: ()=> dispatch( userActions.getAll() ),
     } 
 }
 
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);