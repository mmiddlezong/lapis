import { decks } from "../../../data/decks";


export default function handler(req, res) {
    res.status(200).json(decks)
}