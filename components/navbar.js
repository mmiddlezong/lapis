import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const Navbar = props => {
    const router = useRouter()
    const { data: session, status } = useSession()

    return (<>

        <nav className="navbar navbar-expand bg-white sticky-top border-bottom border-3">
            <div className="container justify-content-between position-relative">
                <a className="navbar-brand fw-bolder position-absolute top-50 start-50 translate-middle" href="/">Lapis</a>
                <div className="collapse navbar-collapse">

                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link link-dark" href="/latest">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-dark" href="/decks">Decks</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-auto">
                    </ul>


                    <ul className="navbar-nav">

                        <form className="me-5" role="search">
                            <input className="form-control border border-2 rounded rounded-3" type="search" placeholder="Search..." aria-label="Search" />
                        </form>

                        {/* If not loading and not signed in, display the Log In button */}
                        {status !== 'authenticated' && !session && (

                            <li className="nav-item me-3">
                                <Link className="nav-link link-dark fs-6" href='/api/auth/signin' onClick={(e) => {
                                    e.preventDefault()
                                    signIn({ callbackUrl: '/latest' })
                                }}>Log In</Link>
                            </li>

                        )}

                        {/* If signed in, display the Logout button */}
                        {status !== 'unauthenticated' && session && (
                            <li className="nav-item me-3">
                                <Link className="nav-link link-dark fs-6" href='/api/auth/signout' onClick={(e) => {
                                    e.preventDefault()
                                    signOut({ callbackUrl: '/' })
                                }}>Logout</Link>
                            </li>
                        )}


                    </ul>
                </div>
            </div>
        </nav>

    </>)
}

export default Navbar