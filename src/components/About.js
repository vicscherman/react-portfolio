import React, {Component} from "react"

export default class About extends Component{
    render(){
        return(
            <div className="container-sm">
  <h1>About Me</h1>
  <div className="media">
    <img src="assets/vicpic.jpg" width="350" className="align-self-start mr-3" alt="A pic of Vic" />
    <div className="media-body">
      <h5 className="mt-0">Driven and excited about the future</h5>
      <p>2020 has been a crazy year that I bet nobody saw coming. I started the year in a sales/marketing job that I didn't even realize I hated! I'm so thankful I've been giving the opportunity to find new passions, make new friends, and learn new things.</p>
      <p>I'm so excited to be able to use my new skills to achieve great things in 2021 and beyond.</p>
    </div>
  </div>
</div>

        )
    }
}