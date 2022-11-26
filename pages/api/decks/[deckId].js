import { decks } from "../../../data/decks";
import { Client } from "pg"
export default async function handler(req, res) {
    const { deckId } = req.query
    const client = new Client({
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        port: process.env.PGPOST,
        ssl: true
    })

    if (req.method === "GET") {

        client.connect()

        const _res = await client.query(`SELECT * FROM decks WHERE id=${parseInt(deckId)};`)
        await client.end()
        res.status(200).json(_res.rows[0])
    } else if (req.method === "DELETE") {
        client.connect()
        const _res = await client.query(`DELETE FROM decks WHERE id=${parseInt(deckId)};`)
        await client.end()
        res.status(200).json(_res.rows[0])
    }

}