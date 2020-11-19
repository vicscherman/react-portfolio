import React, {Component} from "react"

export default class Footer extends Component{
    render(){
        return(
            <div className="container-sm">
  <div className="row">
    <footer className="col-md-12 fixed-bottom py-4 text-white-50" style={{backgroundColor: 'cadetblue'}}>
      <h3>Copyright 2020</h3>
      <ul className="nav navbar-nav flex-row justify-content-md-left justify-content-start flex-nowrap ">
        <li className="nav-item pr-2"><a className="nav-link" href="https://github.com/vicscherman" target="_blank"><i className="fa fa-github fa-2x" style={{color: 'rgb(250, 244, 235)'}} aria-hidden="true" /></a> </li>
        <li className="nav-item pr-2"><a className="nav-link" href="https://www.linkedin.com/in/victor-scherman-428a4566/" target="_blank"><i className="fa fa-linkedin-square fa-2x" style={{color: 'rgb(250, 244, 235)'}} aria-hidden="true" /></a> </li>
        <li className="nav-item pr-2"><a className="nav-link" href="assets/ResumeWord.docx (1).pdf" target="_blank"><i className="fas fa-file-invoice fa-2x" style={{color: 'rgb(250, 244, 235)'}} aria-hidden="true" /></a> </li>
      </ul>
    </footer> 
  </div>
</div>

        )
    }
}