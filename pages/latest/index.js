function Home() {

    const height_ = 163
    return (<>

        <div class="container">
            <h1 class="my-3">Hey,</h1>

            <div class="row bg-light border border-2 rounded rounded-4 justify-content-center align-items-center">
                <div class="col-md-3 fs-2 m-4">Jump back in...</div>
                <div class="col-md-2 offset-md-5 m-4 p-0" style={{ height: height_ + "px"}}>
                    <div class="d-flex flex-column shadow-sm bg-white border border-2 rounded rounded-4 p-3 h-100">
                        <p class="fs-5 fw-bold text-truncate">Introduction to Anatomy</p>
                        <p class="fs-6 mt-auto text-muted">42 cards</p>
                        <div class="progress position-relative rounded rounded-4 border border-secondary border-1 h-25">
                            <div class="position-absolute top-50 start-50 translate-middle text-muted">25% matured</div>
                            <div class="progress-bar" role="progressbar" style={{ width: 25 + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row my-4 justify-content-between align-items-center">
                <div class="col-md-3 fs-4">Your recent decks</div>
                <a href="#" role="button" class="col-auto btn btn-light border border-2 rounded-5 px-5 py-3 d-flex justify-content-center align-items-center h6">+ CREATE A DECK</a>
            </div>



            <div class="row my-4 justify-content-left align-items-stretch" style={{ height: height_ + "px"}}>

                <div class="col me-5 p-0 h-100">
                    <div class="d-flex flex-column shadow-sm bg-white border border-2 rounded rounded-4 p-3 h-100">
                        <p class="fs-5 fw-bold text-truncate">adada</p>
                        <p class="fs-6 mt-auto text-muted">42 cards</p>
                        <div class="progress position-relative rounded rounded-4 border border-secondary border-1 h-25">
                            <div class="position-absolute top-50 start-50 translate-middle text-muted">25% matured</div>
                            <div class="progress-bar" role="progressbar" style={{ width: 25 + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div class="col me-5 p-0 h-100">
                    <div class="d-flex flex-column shadow-sm bg-white border border-2 rounded rounded-4 p-3 h-100">
                        <p class="fs-5 fw-bold text-truncate">adada</p>
                        <p class="fs-6 mt-auto text-muted">42 cards</p>
                        <div class="progress position-relative rounded rounded-4 border border-secondary border-1 h-25">
                            <div class="position-absolute top-50 start-50 translate-middle text-muted">25% matured</div>
                            <div class="progress-bar" role="progressbar" style={{ width: 25 + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div class="col me-5 p-0 h-100">
                    <div class="d-flex flex-column shadow-sm bg-white border border-2 rounded rounded-4 p-3 h-100">
                        <p class="fs-5 fw-bold text-truncate">adada</p>
                        <p class="fs-6 mt-auto text-muted">42 cards</p>
                        <div class="progress position-relative rounded rounded-4 border border-secondary border-1 h-25">
                            <div class="position-absolute top-50 start-50 translate-middle text-muted">25% matured</div>
                            <div class="progress-bar" role="progressbar" style={{ width: 25 + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div class="col me-5 p-0 h-100">
                    <div class="d-flex flex-column shadow-sm bg-white border border-2 rounded rounded-4 p-3 h-100">
                        <p class="fs-5 fw-bold text-truncate">adada</p>
                        <p class="fs-6 mt-auto text-muted">42 cards</p>
                        <div class="progress position-relative rounded rounded-4 border border-secondary border-1 h-25">
                            <div class="position-absolute top-50 start-50 translate-middle text-muted">25% matured</div>
                            <div class="progress-bar" role="progressbar" style={{ width: 25 + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="row my-4 justify-content-left align-items-center">
                <div class="col-md-3 fs-4">Recommended for you</div>
            </div>

            <div class="row my-4 justify-content-left align-items-center">

            </div>
        </div>

    </>)
}

export default Home