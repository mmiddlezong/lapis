import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

function DecksPage({ decks }) {
    const router = useRouter()
    const [isRefreshing, setIsRefreshing] = useState(false);
    const refreshData = () => {
        router.replace(router.asPath);
        setIsRefreshing(true);
    };
    useEffect(() => {
        setIsRefreshing(false);
    }, [decks]);
    
    const [deck, setDeck] = useState('')

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

        <div className="container">
            <div className="my-3">
                <label htmlFor="title" className="form-label">New deck title</label>
                <input id="title" className='form-control' type='text' value={deck} onChange={(e) => setDeck(e.target.value)}></input>
            </div>
            <button onClick={submitComment} className="btn btn-primary mb-3">Submit</button>

            <div className="row">
                <h1>Decks</h1>
                <hr></hr>
                {decks.map((deck) => {
                    return (
                        <div className="col border p-3">
                            <Link href={`/decks/${deck.id}`}><h1>{deck.data.title}</h1></Link>
                            {deck.data.cards.map((card) => {

                                return (<>
                                    <p>{card.front} | {card.back}</p>

                                </>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>


    </>)
}

export default DecksPage

export async function getServerSideProps(context) {
    /* const connectionString = process.env.DB_URL
    const client = new Client({
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        port: process.env.PGPOST,
        ssl: true
    })

    client.connect()

    const _res = await client.query('SELECT * FROM decks;')
    await client.end() */
    const decks = await prisma.deck.findMany()
    return {
        props: {
            decks,
        },
    }
}