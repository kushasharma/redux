import React from "react";
import axios from "axios";
class Admin extends React.Component{
    constructor(props){
    super(props)
    this.state={
    id:"",
    name:"",
    email:"",
    password:""
    }
}

addAdmin(admin){
    const tempAdmin="";
    axios.post(`http://localhost:8080/admin/addAdmin/${admin}`,tempAdmin)
    .then(response => this.setState())
}


    
}
export default Admin