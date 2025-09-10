import { useState } from 'react'
import gitHubLogo from './assets/github.svg'
import linkApi from './assets/link.svg'
import love from './assets/heart.svg'
import aboutAutor from './assets/internet.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=" text-light min-vh-100">
      {/* navigation */}
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark px-4 border-bottom border-secondary navbar-blur">
        <div className="container-fluid">
            <a className="navbar-brand fw-bold text-warning" href="#">
            SW <span className="text-warning">swapi</span>
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Films
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  People
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Planets
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Species
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Vehicles
                </a>
              </li>
              <li className="nav-item mx-">
                <a className="nav-link" href="#">
                  Starships
                </a>
              </li>
              <li className="nav-item mx-2">
                <a href="https://github.com/SivaramPg/swapi.info" className="nav-link"><img src={gitHubLogo} alt="pic" /></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* main */}
      <header className="text-center py-5 position-relative z-1">
          <div className="background-img"></div>
              <h1 className="fw-bold text-warning mt-4">SWAPI Reborn!</h1>
            <h4 className="mb-3 text-warning">Star Wars APIs & Explorer</h4>
            <p className='fw-bold fs-5 text-secondary py-4'>
              All the Star Wars data you’ve ever wanted! <br />
              <span className="text-light">
                Planets, Spaceships, Vehicles, People, Films & Species
              </span>
            </p>
            <div className="d-flex justify-content-center gap-3 my-4" style = {{ flexWrap: "wrap" }}>
              <button className="btn btn-warning fw-bold">Playground</button>
              <button className="btn btn-warning fw-bold">About</button>
              <button className="btn btn-warning fw-bold">Documentation</button>
            </div>
            <p className="fw-bold text-light fs-5">
              🎉🎉🎉 Over <span className="text-warning">1,000,000+</span> API Requests
              served daily! 🎉🎉🎉
            </p>
          {/* input */}
          <div className="input-group input-group-lg shadow justify-content-center" style={{ flexWrap: "nowrap" }}>
          <span className="input-group-text bg-light">🌐</span>
          <input
            type="text"
            className="form-control"
            readOnly 
            defaultValue="swapi.info/api/"
            style={{ minWidth: "200px", flex: "1 1 300px", maxWidth: "600px"}}
          />
          <button className="btn btn-warning fw-bold">Copy</button>
        </div>
      </header>

      {/* category */}
        <section className="py-5 text-white container">
      <h5 className="fw-bold mb-4 fs-4 text-secondary text-start">View a category:</h5>
      <div className="row gx-0 gy-3">
          {['Films', 'People', 'Planets', 'Species', 'Vehicles', 'Starships'].map((item) => 
            (<div className="col-12 col-md-4" key={item}>
              <button className="btn btn-dark w-75 d-flex justify-content-between align-items-center py-3 rounded border">
               {item}
                <svg width="15px" height="25px" viewBox="-19.04 0 75.804 75.804" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(-831.568 -384.448)">
                <path d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,
                1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z" fill="#ffffffff"/>
              </g>
            </svg>
              </button>
            </div>)
          )}
        </div>
      {/*API*/}
      <h3 className="fw-bold mt-5 mb-3 text-secondary text-start">Visit the API endpoint:</h3>
      <ol className="d-flex flex-column justify-content-center align-items-start gap-2">
        <li>
          <a href="#" className="text-white">swapi.info/api/films
              <img src={linkApi} alt="pic"/>
          </a>
        </li>
        <li>
          <a href="#" className="text-white">swapi.info/api/people
            <img src={linkApi} alt="pic"/>
          </a>
        </li>
        <li>
          <a href="#" className="text-white">swapi.info/api/planets
            <img src={linkApi} alt="pic"/>
          </a>
        </li>
        <li>
          <a href="#" className="text-white">swapi.info/api/species</a>
            <img src={linkApi} alt="pic"/>
        </li>
        <li>
          <a href="#" className="text-white">swapi.info/api/vehicles</a>
            <img src={linkApi} alt="pic"/>
        </li>
        <li>
          <a href="#" className="text-white">swapi.info/api/starships</a>
            <img src={linkApi} alt="pic"/>
        </li>
      </ol>
    </section>
    <section className="border-top border-secondary">
      <div className="container py-5" style={{color: '#cbcbcbff'}}>
        <div className="row text-center text-md-start">
        
        {/* INFO */}
        <div className="col-md-4 mb-4">
          <h3 className="fw-bold mb-3 text-light">What is this ?</h3>
          <p>
            The Star Wars API, or "swapi" (Swah-pee) is the world’s first
            quantified and programmatically-accessible data source for all the
            data from the Star Wars canon universe!
          </p>
          <p>
            We’ve taken all the rich contextual stuff from the universe and
            formatted into something easier to consume with software. Then we
            went and stuck an API on the front so you can access it all!
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <h3 className="fw-bold mb-3 text-light">How can I use it ?</h3>
          <p>
            All the data is accessible through our HTTP web API. Consult our
            explorer pages if you’d like to get started.
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <h3 className="fw-bold mb-3 text-light">Promise of longevity</h3>
          <p>
            Swapi.info is here to stay!. Created as service which runs solely
            via static files, this service does not require database or
            expensive hosting to run.
          </p>
          <p>
            Currently hosted on the generosity of Vercel, the only barrier to
            utilization is a public facing domain. No other costs associated
            with running this project yourself as well.
          </p>
        </div>
      </div>
      </div>
    </section>

      {/* footer */}
      <footer className="text-center py-4 border-top border-secondary">
        <div className="container text-light">
          <div className="row align-items-center">
            <div className="col-12 col-md-8 text-start">
              <p className="mb-1">Made with <img src={love} alt=""/> by <a href="#" className="text-decoration-underline text-light fw-bold">Sivaram P</a> ©2025</p>
              <p className="mb-0">Credits: <a href="#" className="text-decoration-underline text-light">Paul Hallett</a> & <a href="#" className="text-decoration-underline text-light">Juriy Bura</a></p>
            </div>
            <div className="col-md-4 text-md-end">
              <a href="https://sivaramp.com/" className="me-3"><img src={aboutAutor} alt="pic" /></a>
              <a href="https://github.com/SivaramPg" className=""><img src={gitHubLogo} alt="pic" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App
