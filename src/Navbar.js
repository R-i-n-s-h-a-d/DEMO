import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {

  return (

    <nav class="navbar">
      <div class="left">
      
        <h3> <a class="navlo" href="/"><i class="fab fa-asymmetrik"></i>  Culture</a>  </h3>
      </div>
      <div class="right">
        <input type="checkbox" id="check" />
        <label for="check" class="checkBtn">
          <i class="fa fa-bars"></i>
        </label>
        <ul class="list">
          <li className="na"><a href="/">Home</a></li>
          <li className="na"><a href="/cloth">Cloth</a></li>
          <li className="na"><a href="/about">Services</a></li>
          <li className="na"><a href="/about">About Us</a></li>
          <li className="na"><a href="/about">Contact Us</a></li>
         <a href="/cart" ><i class="fab fa-opencart">Cart</i></a>
        </ul>
      </div>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
