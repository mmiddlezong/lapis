import { PrismaClient } from '@prisma/client'
import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
    const { deckId } = req.query
    if (req.method === "GET") {

        const deck = await prisma.deck.findUnique({
            where: {
                id: parseInt(deckId)
            }
        })
        res.status(200).json(deck)
    } else if (req.method === "DELETE") {
        const deck = await prisma.deck.delete({
            where: {
                id: parseInt(deckId)
            }
        })
        res.status(200).json(deck)
    }

}