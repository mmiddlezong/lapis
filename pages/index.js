

function Home() {
  return (<>
    <div class="row my-5 bg-transparent align-items-center gx-5 justify-content-evenly">
      <div class="col-sm-5">
        <img src='/clock.png' class="img-fluid" alt="Responsive image" />
      </div>
      <div class="col-sm-4">
        <h1 class="display-3">The Most Time-Efficient Way to Study</h1>
      </div>
    </div>

    <div class="p-4 bg-light">
      <div class="text-start">
        <p class="fs-3 fw-bold">Why Lapis?</p>
      </div>
      <div class="row justify-content-evenly align-items-center">
        <div class="col-sm-3">
          <img src='/clock.png' class="img-fluid" alt="Responsive image" />
          <p class="my-3">Lapis has been highly regarded by Innovation Foundry.</p>
        </div>
        <div class="col-sm-3">
          <img src='/clock.png' class="img-fluid" alt="Responsive image" />
          <p class="my-3">Lapis has been shown to Improve Test Results by 25%.</p>
        </div>
        <div class="col-sm-3 ">
          <img src='/clock.png' class="img-fluid" alt="Responsive image" />
          <p class="my-3">Lapis is Science Based: The Pomodoro Technique & Spaced Repetition.</p>
        </div>
      </div>
    </div>

  </>)
}

export default Home