import { useState, useEffect } from 'react'

function DecksPage() {

    const [decks, setDecks] = useState([])



    const fetchDecks = async () => {
        const response = await fetch('/api/decks')
        const data = await response.json()
        setDecks(data)
    }

    useEffect(() => {
        fetchDecks()
    })

    return (<>

        <div className="container">
            <div className="row">
                <h1>Decks</h1>
                <hr></hr>
                {decks.map((deck) => {
                    return (<div className="col border p-3">
                        <h1>{deck.title}</h1>
                        {deck.cards.map((card) => {
                            return <p>{card.front} | {card.back}</p>
                        })}
                    </div>)
                })}
            </div>
        </div>


    </>)
}

export default DecksPage