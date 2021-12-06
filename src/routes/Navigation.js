import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <Link to="/">게임 목록 </Link>
          <li>
            <Link to="gugudan">구구단</Link>
          </li>
          <li>
            <Link to="word-relay">끝말 잇기</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
