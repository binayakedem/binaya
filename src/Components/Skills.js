import './style.css'
import React from 'react'
import Picture from '../assets/first.jpg'
const Skills = () => {
  return (
    <section className="skill">
      <div className="skill-heading"><h1>Skills</h1></div>
      <div className="skill-level">
         
      <div><h1 className="skill-in">React</h1>
        <div className="react">

        <img src={Picture} alt="just-pictur" />
         <div className="inner-react">
         
         <h1 className="percent">60%</h1>
          
         </div>
        </div>   
      </div>
      <div><h1 className="skill-in">Wordpress</h1>
        <div className="react">

        <img src={Picture} alt="just-pictur" />
         <div className="inner-wordpress">
         
         <h1 className="percent">70%</h1>
          
         </div>
        </div>   
      </div>
      <div><h1 className="skill-in">Css</h1>
        <div className="react">

        <img src={Picture} alt="just-pictur" />
         <div className="inner-css">
         
         <h1 className="percent">65%</h1>
          
         </div>
        </div>   
      </div>
      <div><h1 className="skill-in">HTML</h1>
        <div className="react">

        <img src={Picture} alt="just-pictur" />
         <div className="inner-html">
         
         <h1 className="percent">80%</h1>
          
         </div>
        </div>   
      </div>
      <div><h1 className="skill-in">Javascript</h1>
        <div className="react">

        <img src={Picture} alt="just-pictur" />
         <div className="inner-javascript">
         
         <h1 className="percent">60%</h1>
          
         </div>
        </div>   
      </div>
      </div>
    </section>
  )
}

export default Skills