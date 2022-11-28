import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { PrismaClient } from '@prisma/client'
import useSWR, { useSWRConfig } from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function DecksPage() {
    const router = useRouter()
    const [deck, setDeck] = useState('')
    const { data, error } = useSWR(`/api/decks/`, fetcher)
    

    if (error) return <p>Error fetching data.</p>
    if (!data) return <p>Loading...</p>


    const submitComment = async () => {
        const response = await fetch('/api/decks', {
            method: 'POST',
            body: JSON.stringify({ title: deck }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        refreshData()
    }

    return (<>



        <div className="bg-light px-5 py-4">



            <div className="container">
                <div className="display-5">Create New</div>

                <div className="row mt-5 justify-content-between gx-5">
                    <div className="col-3 fs-2 text-center">
                        <div>
                            <img style={{ width: "300px", height: "200px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_L-MJC-9VETjxjYINiu7I8Caqp7sk4RU-XVSwoHwC&s" className="img-fluid rounded rounded-3" alt="icon" />
                        </div>
                        <div className="mt-3">
                            Deck
                        </div>
                    </div>
                    <div className="col-3 fs-2 text-center">
                        <div>
                            <img style={{ width: "300px", height: "200px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_L-MJC-9VETjxjYINiu7I8Caqp7sk4RU-XVSwoHwC&s" className="img-fluid rounded rounded-3" alt="icon" />
                        </div>
                        <div className="mt-3">
                            Folder
                        </div>
                    </div>
                    <div className="col-3 fs-2 text-center">
                        <div>
                            <img style={{ width: "300px", height: "200px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_L-MJC-9VETjxjYINiu7I8Caqp7sk4RU-XVSwoHwC&s" className="img-fluid rounded rounded-3" alt="icon" />
                        </div>
                        <div className="mt-3">
                            Class
                        </div>
                    </div>
                </div>

                {/* <div className="my-3">
                    <label htmlFor="title" className="form-label">New deck title</label>
                    <input id="title" className='form-control' type='text' value={deck} onChange={(e) => setDeck(e.target.value)}></input>
                </div>
                <button onClick={submitComment} className="btn btn-primary mb-3">Submit</button> */}
            </div>
        </div>


        <div className="container">
            <div className="row py-5 justify-content-between align-items-center">
                <div className="col dropdown">
                    <button className="btn btn-light btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Recent
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <form className="col" role="search">
                    <div className="position-relative rounded rounded-2 border border-2 h-100 w-100 py-3">
                        <div className="position-absolute top-50 start-0 translate-middle-y p-3">
                            <i className="text-muted bi bi-search"></i>
                        </div>
                        <div className="h-100">
                            <input className="ps-5 h-100 w-100 shadow-none" type="search" placeholder="Search your decks..." aria-label="Search" />
                        </div>
                    </div>

                </form>
                <div className="col d-flex justify-content-end">
                    <button className="btn btn-primary">+ Create</button>
                </div>
            </div>

            <div className="row justify-content-between row-cols-lg-2 gx-5">
                {data.sort((a, b) => (a.data.title.toLowerCase() < b.data.title.toLowerCase()) ? -1 : 1).map((deck) => {
                    return (
                        <div className="col p-4">
                            <Link href={`/decks/${deck.id}`} className="text-decoration-none text-dark">
                                <div className="d-flex flex-column h-100 shadow-sm rounded border border-2 p-3 bg-light align-items-center justify-content-center">
                                    <div className="row w-100 gx-0 my-3">
                                        <div className="col-3 d-flex">
                                            <img className="my-auto img-fluid h-100 rounded border border-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_L-MJC-9VETjxjYINiu7I8Caqp7sk4RU-XVSwoHwC&s" alt="icon" />
                                        </div>
                                        <div className="col-9 px-4">
                                            <div>
                                                <p className="col-11 fw-bold fs-4 position-relative">{deck.data.title}
                                                    <span className="position-absolute top-50 start-100 translate-middle badge bg-danger rounded-pill">4</span>
                                                </p>

                                            </div>
                                            <div className="text-muted fs-6 pt-2">{deck.data.cards.length} cards</div>
                                            <div className="text-primary fs-6 pt-2"><span className="pe-2"><img style={{ width: "35px", height: "35px" }} className="rounded-circle border border-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_L-MJC-9VETjxjYINiu7I8Caqp7sk4RU-XVSwoHwC&s" alt="icon" /></span>chingchongchangyoonkim</div>

                                        </div>
                                    </div>
                                    <div className="row w-100 gx-0 my-2">
                                        <div className="progress bg-white position-relative rounded rounded-pill border border-secondary border-2" style={{ height: "30px" }}>
                                            <div className="position-absolute top-50 start-50 translate-middle text-muted">25% matured</div>
                                            <div className="progress-bar rounded-pill" role="progressbar" style={{ width: 25 + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                </div>
                            </Link>

                        </div>

                    )
                })}
            </div>
        </div>
    </>)
}

export default DecksPage
