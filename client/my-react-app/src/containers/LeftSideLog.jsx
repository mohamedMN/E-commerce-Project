import "./../styles/LeftSideLog.css"
import Logo from "./../assets/GoodiesAdmin.svg"


export default function LeftSideLog() {
  return (
    <div className="LeftSideLog">
        <div className="Logo-container-left">
        <img 
        className="Logo-Left-Admin"
        src={Logo}
        alt="Logo"     
        />
        </div>
        <div className="Welcome-Label">
Welcome Back
        </div>
        <div className="additional-speech">
        if you’re encountering issures with logging in please contact your administrator.
        </div>
    </div>
  )
}
