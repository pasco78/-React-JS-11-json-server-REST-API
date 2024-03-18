import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>
        <a href="/">양산 업무 폴더</a>
      </h1>

      <div className="menu">
        <Link to="/create_word" className="link">
          자료 입력
        </Link>
        <a href="#x" className="link">
          항목 추가
        </a>
      </div>
    </div>
  );
};

export default Header;
