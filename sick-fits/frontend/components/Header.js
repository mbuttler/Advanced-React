import Nav from './Nav'

const Header = () => (
    <div>
        <div className="bar">
        <a href="">Sick Fits</a>
        <Nav></Nav>
        </div>
        <div className="sub-bar">
        <p>Search</p>
        </div>
        <div className="cart">
        <p>cart</p>
        </div>
    </div>
)
export default Header;