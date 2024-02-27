import logo from "../../../assets/Logo.svg" 

function Header() {
  return (
    <nav className=" flex  py-[30px] items-center px-11 justify-between  bg-white container">
        <img src={logo} alt="" />

        <ul className="flex space-x-[25px] text-[18px] font-semibold leading-[24px]">
            <li>Why Open Enterprise</li>
            <li>Features</li>
            <li>Contribute</li>
            <li className="text-[#71A894]">Request early access</li>
        </ul>
    </nav>
  )
}
export default Header