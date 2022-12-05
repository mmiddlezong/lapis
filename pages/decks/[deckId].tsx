import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
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
}