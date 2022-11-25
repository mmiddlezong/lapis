import Link from 'next/link'

function Navbar(){
    return (<>

<nav className="navbar navbar-expand bg-white sticky-top border-bottom border-3">
    <div className="container justify-content-between position-relative">
      <a className="navbar-brand fw-bolder position-absolute top-50 start-50 translate-middle" href="/">Lapis</a>
      <div className="collapse navbar-collapse">

        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link link-dark" aria-current="page" href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link-dark" href="/decks">Decks</Link>
          </li>
        </ul>
        <ul className="navbar-nav me-auto">
        </ul>
        
          
        <ul className="navbar-nav">         
          
          <form className="me-5" role="search">
            <input className="form-control border border-2 rounded rounded-3" type="search" placeholder="Search..." aria-label="Search"/>
          </form>
          <li className="nav-item">
            <a className="nav-link link-dark" href="{% url 'logout' %}">Logout</a>
          </li>
          <li className="nav-item me-3">
            <a className="nav-link link-dark fs-6" href="{% url 'login' %}">Log In</a>
          </li>
          <li className="nav-item bg-warning rounded rounded-4">
            <a className="nav-link link-dark fs-6" href="{% url 'register' %}">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    </>)
}

export default Navbar