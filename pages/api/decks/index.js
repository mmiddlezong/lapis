
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export default async function handler(req, res) {
    /* const client = new Client({
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        port: process.env.PGPOST,
        ssl: true
    }) */
    if (req.method === 'GET') {
        const decks = await prisma.deck.findMany()
        res.status(200).json(decks)

    } else if (req.method === 'PUT') {
        /* client.connect()
        try {

            await client.query('BEGIN')
            const id = req.body.id
            const card = req.body.card

            const _resSelect = await client.query(`SELECT * FROM decks WHERE id=${parseInt(id)}`)
            const deck = _resSelect.rows[0].data
            deck['cards'].push(card)

            const queryText = 'UPDATE decks SET data = $1 WHERE id=$2'
            const _resUpdate = await client.query(queryText, [JSON.stringify(deck), parseInt(id)])
            await client.query('COMMIT')
            res.status(201).json(deck)
        } catch (e) {
            await client.query('ROLLBACK')
            throw e
        } finally {
            client.end()
        } */
        const id = req.body.id
        const card = req.body.card
        const deck = await prisma.deck.findUnique({
            where: {
                id: parseInt(id)
            }
        })

        const deckData = deck.data

        deckData['cards'].push(card)

        const newDeck = await prisma.deck.update({
            where: {
                id: parseInt(id)
            },

            data: {
                data: deckData
            }
        })
        res.status(201).json(newDeck)
    }
    else if (req.method === 'POST') {

        /* client.connect()

        try {

            await client.query('BEGIN')
            const title = req.body.title
            const newDeck = {
                title: title,
                cards: []
            }
            const queryText = 'INSERT INTO decks(data) VALUES($1)'
            const _res = await client.query(queryText, [JSON.stringify(newDeck)])
            await client.query('COMMIT')
            res.status(201).json(newDeck)
        } catch (e) {
            await client.query('ROLLBACK')
            throw e
        } finally {
            client.end()
        } */
        const deck = await prisma.deck.create({
            data: {
                data: {
                    title: req.body.title,
                    cards: []
                }
            }
        })
        res.status(201).json(deck)

    }

}