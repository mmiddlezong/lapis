import { useSession, signIn } from 'next-auth/react'

function Home() {

    const { data : session, status } = useSession({
        required: true,
    })

    const height_ = 163
    return (<>

        <div className="container">
            <h1 className="my-3">die, {session ? session.user.name : ''}</h1>

            <div className="row bg-light border border-2 rounded rounded-4 justify-content-center align-items-center">
                <div className="col-md-3 fs-2 m-4">Jump back in...</div>
                <div className="col-md-2 offset-md-5 m-4 p-0" style={{ height: height_ + "px" }}>
                    <div className="d-flex flex-column shadow-sm bg-white border border-2 rounded rounded-4 p-3 h-100">
                        <p className="fs-5 fw-bold text-truncate">Introduction to Anatomy</p>
                        <p className="fs-6 mt-auto text-muted">42 cards</p>
                        <div className="progress position-relative rounded rounded-4 border border-secondary border-1 h-25">
                            <div className="position-absolute top-50 start-50 translate-middle text-muted">25% matured</div>
                            <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-4 justify-content-between align-items-center">
                <div className="col-md-3 fs-4">Your recent decks</div>
                <button type="button" class="btn btn-primary btn-sm">+ Create</button>
            </div>



            <div className="row my-4 justify-content-left align-items-stretch" style={{ height: height_ + "px" }}>

                <div className="col me-5 p-0 h-100">
                    <div className="d-flex flex-column shadow-sm bg-white border border-2 rounded rounded-4 p-3 h-100">
                        <p className="fs-5 fw-bold text-truncate">adada</p>
                        <p className="fs-6 mt-auto text-muted">42 cards</p>
                        <div className="progress position-relative rounded rounded-4 border border-secondary border-1 h-25">
                            <div className="position-absolute top-50 start-50 translate-middle text-muted">25% matured</div>
                            <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div className="col me-5 p-0 h-100">
                    <div className="d-flex flex-column shadow-sm bg-white border border-2 rounded rounded-4 p-3 h-100">
                        <p className="fs-5 fw-bold text-truncate">adada</p>
                        <p className="fs-6 mt-auto text-muted">42 cards</p>
                        <div className="progress position-relative rounded rounded-4 border border-secondary border-1 h-25">
                            <div className="position-absolute top-50 start-50 translate-middle text-muted">25% matured</div>
                            <div className="progress-bar rounded-pill" role="progressbar" style={{ width: 25 + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div className="col me-5 p-0 h-100">
                    <div className="d-flex flex-column shadow-sm bg-white border border-2 rounded rounded-4 p-3 h-100">
                        <p className="fs-5 fw-bold text-truncate">adada</p>
                        <p className="fs-6 mt-auto text-muted">42 cards</p>
                        <div className="progress position-relative rounded rounded-4 border border-secondary border-1 h-25">
                            <div className="position-absolute top-50 start-50 translate-middle text-muted">25% matured</div>
                            <div className="progress-bar rounded-pill" role="progressbar" style={{ width: 25 + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div className="col me-5 p-0 h-100">
                    <div className="d-flex flex-column shadow-sm bg-white border border-2 rounded rounded-4 p-3 h-100">
                        <p className="fs-5 fw-bold text-truncate">adada</p>
                        <p className="fs-6 mt-auto text-muted">42 cards</p>
                        <div className="progress position-relative rounded rounded-4 border border-secondary border-1 h-25">
                            <div className="position-absolute top-50 start-50 translate-middle text-muted">25% matured</div>
                            <div className="progress-bar rounded-pill" role="progressbar" style={{ width: 25 + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row my-4 justify-content-left align-items-center">
                <div className="col-md-3 fs-4">Recommended for you</div>
            </div>

            <div className="row my-4 justify-content-left align-items-center">

            </div>
        </div>

    </>)
}

export default Home