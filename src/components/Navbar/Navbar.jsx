import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="./public/images/logo.png" alt="Logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
