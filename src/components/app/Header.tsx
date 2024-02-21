import logo from "../../assets/Logo.png" 

function Header() {
  return (
    <nav className="border-2 border-black">
        <img src={logo} alt="" />
    </nav>
  )
}
export default Header