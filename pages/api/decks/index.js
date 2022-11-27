
import { PrismaClient } from '@prisma/client'
import prisma from '../../../lib/prisma'



export default async function handler(req, res) {
    try {
        if (req.method === 'GET') {
            const decks = await prisma.deck.findMany()
            res.status(200).json(decks)
        } else if (req.method === 'PUT') {
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
    catch (e) {
        console.log(e)
        return res.status(500).send({ success : false })
    }
}

