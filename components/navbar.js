function Navbar(){
    return (<>

<nav class="navbar navbar-expand bg-white sticky-top border-bottom border-3">
    <div class="container justify-content-between position-relative">
      <a class="navbar-brand fw-bolder position-absolute top-50 start-50 translate-middle" href="/">Lapis</a>
      <div class="collapse navbar-collapse">

        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link link-dark" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-dark" href="/decks">Decks</a>
          </li>
        </ul>
        <ul class="navbar-nav me-auto">
        </ul>
        
          
        <ul class="navbar-nav">         
          
          <form class="me-5" role="search">
            <input class="form-control border border-2 rounded rounded-3" type="search" placeholder="Search..." aria-label="Search"/>
          </form>
          <li class="nav-item">
            <a class="nav-link link-dark" href="{% url 'logout' %}">Logout</a>
          </li>
          <li class="nav-item me-3">
            <a class="nav-link link-dark fs-6" href="{% url 'login' %}">Log In</a>
          </li>
          <li class="nav-item bg-warning rounded rounded-4">
            <a class="nav-link link-dark fs-6" href="{% url 'register' %}">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    </>)
}

export default Navbar