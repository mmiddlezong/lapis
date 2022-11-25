

function Home() {
  return (<>
    <div className="row my-5 bg-transparent align-items-center gx-5 justify-content-evenly">
      <div className="col-sm-5">
        <img src='/clock.png' className="img-fluid" alt="Responsive image" />
      </div>
      <div className="col-sm-4">
        <h1 className="display-3">The Most Time-Efficient Way to Study</h1>
      </div>
    </div>

    <div className="p-4 bg-light">
      <div className="text-start">
        <p className="fs-3 fw-bold">Why Lapis?</p>
      </div>
      <div className="row justify-content-evenly align-items-center">
        <div className="col-sm-3">
          <img src='/clock.png' className="img-fluid" alt="Responsive image" />
          <p className="my-3">Lapis has been highly regarded by Innovation Foundry.</p>
        </div>
        <div className="col-sm-3">
          <img src='/clock.png' className="img-fluid" alt="Responsive image" />
          <p className="my-3">Lapis has been shown to Improve Test Results by 25%.</p>
        </div>
        <div className="col-sm-3 ">
          <img src='/clock.png' className="img-fluid" alt="Responsive image" />
          <p className="my-3">Lapis is Science Based: The Pomodoro Technique & Spaced Repetition.</p>
        </div>
      </div>
    </div>

  </>)
}

export default Home