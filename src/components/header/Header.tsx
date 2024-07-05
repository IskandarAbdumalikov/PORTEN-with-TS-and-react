import { FC, useState } from "react";
import "./header.scss";
import logo from "../../assets/logo.svg";
import { FaBars, FaCartPlus, FaSearch } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";

const Header: FC = () => {
  const [showList, setShowList] = useState(false);
  return (
    <header className="header">
      <div className="container header__nav">
        <div className="header__nav__logo">
          <img src={logo} alt="" />
        </div>
        <ul
          className={
            showList ? "header__nav__list show__list" : "header__nav__list"
          }
        >
          <a href="#">Понравилось</a>
          <a href="#">личный кабинет</a>
          <a href="#">настройки</a>
          <button onClick={() => setShowList(false)} className="cancel">
            <FcCancel />
          </button>
        </ul>

        <div className="header__nav__btns">
          <button onClick={() => setShowList(true)} className="bar">
            <FaBars />
          </button>
          <button>
            <FaCartPlus />
          </button>
          <button>
            <FaSearch />
          </button>
        </div>
      </div>
      {showList ? (
        <div onClick={() => setShowList(false)} className="overlay"></div>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
