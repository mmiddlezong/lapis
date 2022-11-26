import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { decks } from '../../data/decks'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

function DeckPage({ deck }) {
    const router = useRouter()
    const { deckId } = router.query

    const [cardFront, setCardFront] = useState()
    const [cardBack, setCardBack] = useState()

    const [isRefreshing, setIsRefreshing] = useState(false);
    const refreshData = () => {
        router.replace(router.asPath);
        setIsRefreshing(true);
    };
    useEffect(() => {
        setIsRefreshing(false);
    }, [decks]);
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
        refreshData()
    }
    return (<>

        <div className="container">
            <div className="col border p-3">
                <h1>{deck.data.title}</h1>
                {deck.data.cards.map((card) => {
                    return <p>{card.front} | {card.back}</p>
                })}
                <div class="my-3">
                    <label htmlFor="title" class="form-label">Card front</label>
                    <input id="title" className='form-control' type='text' value={cardFront} onChange={(e) => setCardFront(e.target.value)}></input>
                </div>
                <div class="my-3">
                    <label htmlFor="title" class="form-label">Card back</label>
                    <input id="title" className='form-control' type='text' value={cardBack} onChange={(e) => setCardBack(e.target.value)}></input>
                </div>
                <button type="submit" onClick={submitCard} className="btn btn-primary mb-3">Submit</button>


            </div>
        </div>


    </>)
}

export default DeckPage


export async function getServerSideProps(context) {
    const { params } = context
    const { deckId } = params
    const deck = await prisma.deck.findUnique({
        where: {
            id: parseInt(deckId)
        }
    })
    return {
        props: {
            deck,
        },
    }
}