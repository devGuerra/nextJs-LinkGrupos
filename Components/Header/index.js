import React, { useState } from 'react';
// import ReactGA from 'react-ga';
// import { useDispatch, useSelector } from 'react-redux';
// import logo from '/favicon.ico';

// import { signOut } from '~/store/modules/auth/actions';

function Header() {
  const [signed] = useState(true);

  return (
    <header>
      <div className="container">
        <ul>
          <li className="title">
            <img src="newLogoColor.svg" alt="" />
            <h2>LinkGrupos</h2>
          </li>
          {signed ? (
            <li className="buttons">
              <a href="/new-group" className="new__group">
                Adicionar Grupo
              </a>
              <button onClick={() => console.log('a')} className="login">
                Sair
              </button>
            </li>
          ) : (
            <li className="buttons">
              <a href="/new-group" className="new__group">
                Adicionar Grupo
              </a>
              <a href="/login" className="button_login">
                Login
              </a>
            </li>
          )}
        </ul>
      </div>

      <style jsx>{`
        header {
          height: 60px;
          background-color: #128c7e;
          display: flex;
          justify-content: center;
          width: 100%;
          padding: 0 20px;
        }

        ul {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          width: 100%;
        }

        li {
          height: 100%;
          display: flex;
          align-items: center;
        }

        .title img {
          height: 80%;
          background-color: #fff;
          display: block;
          border-radius: 5px;
        }

        .title h2 {
          color: #fff;
          font-size: 18px;
          margin-left: 5px;
          align-items: center;
        }

        .buttons a,
        .buttons button {
          font-size: 16px;
          text-decoration: none;
          color: #000;
          background: #fff;
          padding: 10px 10px;
          border-radius: 5px;
          border: 0;
          white-space: nowrap;
        }

        .login {
          margin-left: 5px;
        }

        @media (max-width: 600px) {
          .title img {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
