import React, {Component} from "react"

export default class Contact extends Component{
    render(){
        return(
            <div className="container-sm">
            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Name</label>
                <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={4} placeholder="Enter a message" defaultValue={""} />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
           
        )
    }
}