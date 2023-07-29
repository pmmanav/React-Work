import './navbar.scss'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src="logo.svg" alt="" />
            <span>lamadmin</span>
        </div>
        <div className="icons">
            <img src="/search.svg" alt="" className="icon" />
            <img src="/app.svg" alt="" className="icon" />
            <img src="/expand.svg" alt="" className="icon" />
            <div className="notification">
                <img src="/notifications.svg" alt="" />
                <span>1</span>
            </div>
            <div className="user">
                <img src="https://yt3.ggpht.com/yti/AOXPAcXTUx2lLmeYGHsWnXwsL77vKZsl5SMHhLoC4g=s88-c-k-c0x00ffffff-no-rj"
                 alt=""
                />
                <span>Pratyush</span>
            </div>
            <img src="./settings.svg" alt="" className="icon" />
        </div>
    </div>
  )
}
