import './style.css'
import React from 'react'
import Wordpress from '../assets/first.jpg'
import Second from '../assets/second.jpg'
import Third from '../assets/third.jpg'
import Fourth from '../assets/fourth.jpg'
const Project = () => {
  return (
    <section className="project">
      <div className="project-titles">
        <h2 className='project-title'>Projects</h2>
      </div>
      <div className="project-boxes">
        <div className="project-box">
          <img className="card-img"src={Wordpress} alt="wordpress-images" />
          <div className="overlay">
           <div className="card-title"><h1 >Wordpress</h1></div>
           <div  className="card-para"><p>I made this project within 2weeks and the main feature of this project is learning about security and efficiency in website</p></div>
            <div className='card-link'> <a target='_blank' rel="noopener noreferrer" href="https://youbut.com">More..</a></div>
          </div>
        </div>
        {/* second box */}
        <div className="project-box">
          <img className="card-img"src={Second} alt="wordpress-images" />
          <div className="overlay">
           <div className="card-title"><h1 >Wordpress</h1></div>
           <div  className="card-para"><p>I made this project within 2weeks and the main feature of this project is learning about security and efficiency in website</p></div>
            <div className='card-link'> <a target='_blank' rel="noopener noreferrer" href="https://youbut.com">More..</a></div>
          </div>
        </div>
        {/* third box */}
        <div className="project-box">
          <img className="card-img"src={Third} alt="wordpress-images" />
          <div className="overlay">
           <div className="card-title"><h1 >Wordpress</h1></div>
           <div  className="card-para"><p>I made this project within 2weeks and the main feature of this project is learning about security and efficiency in website</p></div>
            <div className='card-link'> <a target='_blank' rel="noopener noreferrer" href="https://youbut.com">More..</a></div>
          </div>
        </div>
        {/* fourth box */}
        <div className="project-box">
          <img className="card-img"src={Fourth} alt="wordpress-images" />
          <div className="overlay">
           <div className="card-title"><h1 >Wordpress</h1></div>
           <div  className="card-para"><p>I made this project within 2weeks and the main feature of this project is learning about security and efficiency in website</p></div>
            <div className='card-link'> <a target='_blank' rel="noopener noreferrer" href="https://youbut.com">More..</a></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project