import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { decks } from '../../data/decks'
import { PrismaClient } from '@prisma/client'
import useSWR, { useSWRConfig } from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function DeckPage() {
    const router = useRouter()
    const { deckId } = router.query
    const { mutate } = useSWRConfig()
    const [cardFront, setCardFront] = useState()
    const [cardBack, setCardBack] = useState()

    const { data, error } = useSWR(`/api/decks/${deckId}`, fetcher)
    

    if (error) return <p>Error fetching data.</p>
    if (!data) return <p>Loading...</p>

    const submitCard = async () => {
        const response = await fetch('/api/decks', {
            method: 'PUT',
            body: JSON.stringify({ id: deckId, card: { 'front': cardFront, 'back': cardBack } }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        setCardFront('')
        setCardBack('')
        mutate(`/api/decks/${deckId}`)
    }
    return (<>

        <div className="container">
            <div className="col">
                <div>
                    <div className="my-3">
                        <label htmlFor="title" className="form-label">Card front</label>
                        <input id="title" maxLength="200" className='form-control' type='text' value={cardFront} onChange={(e) => setCardFront(e.target.value)}></input>
                    </div>
                    <div className="my-3">
                        <label htmlFor="title" className="form-label">Card back</label>
                        <input id="title" maxLength="200" className='form-control' type='text' value={cardBack} onChange={(e) => setCardBack(e.target.value)}></input>
                    </div>
                    <button type="submit" onClick={submitCard} className="btn btn-primary mb-3">Submit</button>

                </div>
                <h1 className="mt-3">{data.data.title}</h1>
                <h1 className="mt-3 fs-3">{data.data.cards.length} cards</h1>
                {data.data.cards.map((card) => {
                    return <>
                        <div className="py-2">
                            <div className="border border-2 bg-light rounded rounded-3 p-3" style={{ height: "60px" }}>
                                <div className="h-100 row text-center text-muted align-items-center">
                                    <div className="col-6 border-end">
                                        <div className="text-truncate">{card.front}</div>
                                    </div>
                                    <div className="col-6">
                                        <div className="text-truncate">{card.back}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                })}




            </div>
        </div>


    </>)
}

export default DeckPage

