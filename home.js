import React,{useState} from 'react';
import logo from '../ui/tc.png';
function Homepage(){

    const [popularCourse ,setPopularCourse] = useState([
        {ID: 1,
         title:"learning  how to create beautiful scenes in illustrator",   
        tutor:{
            ID:1,
            name:"john doe",
            username:"@johnndd",
            dp:"http://placeimg.com/100/100/people?tutor-"+1,
        },
        duraton:"80 mins",
        poster:"../ui/course-1.png"
        }])
    var tutorList =[];
    for(let i=0;i<8;i++){
        tutorList.push(
            <button className="tutor rel" key={"tutor-live-" +i} >
               <img src={"http://placeimg.com/100/100/people?" + i}  className="bl" />
            </button>
        );
    }
    var courseList =[];
    for(let i=0;i < PopularCourse.length;i++){
        courseList.push(
            <a href="#" className="course rel" key={"popular-course-" +i} >
               <div className="block" style={{
                background: "#e2e2e2 url(" + popularCourse[i].poster +") no-repeat center"
               }}>

               </div>
            </a>
        );
    }
    return(
        

        
        <div className="home-page rel">
            <div className="section">
                <h2 className="title s24 fontb">Streaming<span className="fontn"> Now </span></h2>


            <div className="tutors rel flex">
                {tutorList}

            </div>
            <div className="home-page rel">
            <div className="section">
                <h2 className="title s24 fontb">Popular<span className="fontn"> This week</span></h2>


            <div className="courses rel flex">
                {courseList}
            </div>
            </div>
            </div>
            </div>

        </div>
    )
}
export default Homepage;
