import React, {Component} from "react"
import chatroom from "./assets/chatroom.png"
import finishedapp from "./assets/finishedapp.png"
import job from "./assets/job.png"
import quizapp from "./assets/quizapp.png"

import shrek from "./assets/shrek.png"

import weather from "./assets/weather.png"

export default class Portfolio extends Component{
    render(){
        return(
            <div className="container-sm">
  <div className="row">
    <div className="col-md-4 col-12 pb-2">
      <a href="https://vicscherman.github.io/homework5/" target="_blank">
        <img src={shrek} alt="shrekdayplanner" style={{height: '250px', width: '350px'}} className="img-thumbnail " />
        <figcaption className="figure-caption">Shrek DayPlanner</figcaption>
      </a>
      <a href="https://github.com/vicscherman/homework5" target="_blank">Link to github repo</a>
    </div>
    <div className="col-md-4 col-12 pb-2">
      <a href=" https://vicscherman.github.io/weatherForecast/" target="_blank">
        <img src={weather} style={{height: '250px', width: '350px'}} alt="weatherdashboard" className="img-thumbnail " />
        <figcaption className="figure-caption">Weather Dashboard</figcaption>
      </a>
      <a href="https://github.com/vicscherman/weatherForecast" target="_blank">Link to github repo</a>
    </div>
    <div className="col-md-4 col-12 pb-2">
      <a href=" https://vicscherman.github.io/JobFinder/" target="_blank">
        <img src={job} style={{height: '250px', width: '350px'}} alt="jobfinder" className="img-thumbnail " />
        <figcaption className="figure-caption">Job Finder</figcaption>
      </a>
      <a href="https://github.com/vicscherman/JobFinder" target="_blank">Link to github repo</a>
    </div>
  </div>
  <div className="row">
    <div className="col-md-4 col-12 pb-2">
      <a href="https://glacial-tundra-99933.herokuapp.com/" target="_blank">
        <img src={finishedapp} style={{height: '250px', width: '350px'}} alt="burger eating app" className="img-thumbnail " />
        <figcaption className="figure-caption">Bobby's Burgers</figcaption>
      </a>
      <a href="https://github.com/vicscherman/BurgerEater" target="_blank">Link to github repo</a>
    </div>
    <div className="col-md-4 col-12 pb-2">
      <a href="https://stark-springs-75145.herokuapp.com/" target="_blank">
        <img src={chatroom} style={{height: '250px', width: '350px'}} alt="online chat app" className="img-thumbnail " />
        <figcaption className="figure-caption">Online Chat App</figcaption>
      </a>
      <a href="https://github.com/vicscherman/ChatterLadder" target="_blank">Link to github repo</a>
    </div>
    <div className="col-md-4 col-12 pb-2">
      <a href="https://vicscherman.github.io/homework4/" target="_blank">
        <img src={quizapp} style={{height: '250px', width: '350px'}} alt="quiz app" className="img-thumbnail " />
        <figcaption className="figure-caption">Online Quiz app</figcaption>
      </a>
      <a href="https://github.com/vicscherman/homework4" target="_blank">Link to github repo</a>
    </div>
  </div>
</div>
        )
    }

}