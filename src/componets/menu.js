import { Link } from "react-router-dom"

const Menu = ({menuHandle}) =>{
    return <ul className="menuCon">
    <li className="menuBox"  >권인승님, 안녕하세요!</li>
    <Link to="/products/list">
    <li className="menuBox pointer"   onClick={menuHandle}><img src='product_ico.png'/>상품 리스트 페이지</li>
    </Link>
    <Link to="/bookmark">
    <li className="menuBox pointer"  onClick={menuHandle}><img src='bookmark_ico.png'/>북마크 페이지</li>
    </Link>
    
    </ul>
}

export default Menu