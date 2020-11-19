import React, {Component} from "react"



export default class Portfolio extends Component{
    render(){
        return(
            <div className="container-sm">
  <div className="row">
    <div className="col-md-4 col-12 pb-2">
      <a href="https://vicscherman.github.io/homework5/" target="_blank">
        <img src="../../assets/shrek.png" alt="shrekdayplanner" style={{height: '250px', width: '350px'}} className="img-thumbnail " />
        <figcaption className="figure-caption">Shrek DayPlanner</figcaption>
      </a>
      <a href="https://github.com/vicscherman/homework5" target="_blank">Link to github repo</a>
    </div>
    <div className="col-md-4 col-12 pb-2">
      <a href=" https://vicscherman.github.io/homework6/" target="_blank">
        <img src="../../assets/weather.png" style={{height: '250px', width: '350px'}} alt="weatherdashboard" className="img-thumbnail " />
        <figcaption className="figure-caption">Weather Dashboard</figcaption>
      </a>
      <a href="https://github.com/vicscherman/homework6" target="_blank">Link to github repo</a>
    </div>
    <div className="col-md-4 col-12 pb-2">
      <a href="https://vicscherman.github.io/project1" target="_blank">
        <img src="../../assets/job.png" style={{height: '250px', width: '350px'}} alt="jobfinder" className="img-thumbnail " />
        <figcaption className="figure-caption">Job Finder</figcaption>
      </a>
      <a href="https://github.com/vicscherman/project1" target="_blank">Link to github repo</a>
    </div>
  </div>
  <div className="row">
    <div className="col-md-4 col-12 pb-2">
      <a href="https://glacial-tundra-99933.herokuapp.com/" target="_blank">
        <img src="../../assets/finishedapp.png" style={{height: '250px', width: '350px'}} alt="burger eating app" className="img-thumbnail " />
        <figcaption className="figure-caption">Bobby's Burgers</figcaption>
      </a>
      <a href="https://github.com/vicscherman/11-burger" target="_blank">Link to github repo</a>
    </div>
    <div className="col-md-4 col-12 pb-2">
      <a href="https://stark-springs-75145.herokuapp.com/" target="_blank">
        <img src="../../assets/chatroom.png" style={{height: '250px', width: '350px'}} alt="online chat app" className="img-thumbnail " />
        <figcaption className="figure-caption">Online Chat App</figcaption>
      </a>
      <a href="https://github.com/skar45/Project-2.git" target="_blank">Link to github repo</a>
    </div>
    <div className="col-md-4 col-12 pb-2">
      <a href="https://vicscherman.github.io/homework4/" target="_blank">
        <img src="../../assets/quizapp.png" style={{height: '250px', width: '350px'}} alt="quiz app" className="img-thumbnail " />
        <figcaption className="figure-caption">Online Quiz app</figcaption>
      </a>
      <a href="https://github.com/vicscherman/homework4" target="_blank">Link to github repo</a>
    </div>
  </div>
</div>
        )
    }

}