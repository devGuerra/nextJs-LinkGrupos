import React, { useState } from 'react';
import api from '../../services/api';

function CardApprove({ group }) {
  const [grupo, setGrupo] = useState(group);
  const [finish, setFinish] = useState(false);

  const handleReprove = async () => {
    try {
      await api.delete(`/groups/${grupo._id}`);
      setFinish(true);
    } catch (err) {
      console.log({ error: err });
    }
  };
  const handleApprove = async () => {
    try {
      await api.post(`/approval/${grupo._id}`, {
        active: true,
      });
      setFinish(true);
    } catch (err) {
      console.log({ error: err });
    }
  };
  return (
    <>
      {finish ? null : (
        <div
          className="groupCard"
          href={grupo.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="groupContent">
            <img src={grupo.avatar} alt={grupo.name} />
            <div className="groupDescription">
              <h2>{grupo.name}</h2>
              {grupo.description && <span>{grupo.description}</span>}
            </div>
          </div>
          <div className="btn-container">
            <button className="btn-reprove" onClick={() => handleReprove()}>
              Reprovar
            </button>
            <button className="btn-chat">
              <a href={`https://chat.whatsapp.com/${grupo.url}`} target="_blank">
                Link
              </a>
            </button>
            <button className="btn-approve" onClick={() => handleApprove()}>
              Aprovar
            </button>
          </div>
        </div>
      )}
      <style jsx>{`
         {
          /* .feed {
          display: none;
          grid-template-columns: repeat(4, 1fr);
          justify-content: center;
          grid-gap: 15px;
        } */
        }
        .groupCard {
          display: block;
          max-width: 250px;
        }

        .groupContent {
          border-radius: 5px;
          overflow: hidden;
          position: relative;
          background-color: #ccc;
          height: 100%;
          margin-bottom: 10px;
          box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
        }

        .groupContent img {
          height: 100%;
          width: 100%;
        }

        .groupDescription {
          width: 100%;
          padding: 10px;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          position: absolute;
          bottom: 0;
          left: 0;
          color: #000;
          overflow: hidden;
        }

        h2 {
          font-size: 16px;
          margin-bottom: 5px;
        }

        span {
          font-size: 14px;
          -webkit-line-clamp: 2;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          text-transform: lowercase;
        }

        .btn-container {
          justify-content: space-between;
          display: flex;
        }
        button {
          font-size: 16px;
          padding: 10px;
          border: 0;
        }
        button:focus {
          outline: none;
        }

        button:nth-child(1) {
          background-color: red;
          color: #fff;
        }
        button:nth-child(3) {
          background-color: forestgreen;
          color: #fff;
        }

        .groupButton {
          height: 60px;
          width: 100%;
          border: 0;
          display: flex;
          border-radius: 5px;
          justify-content: center;
          align-items: center;
          color: #fff;
          background-color: #128c7e;
          cursor: pointer;
          margin-bottom: 5px;
        }

        groupButton:active {
          opacity: 0.6;
        }

        .report {
          background-color: rgb(107, 18, 18);
          border: none;
          border-radius: 2px;
          padding: 5px 20px;
          color: #fff;
          margin-top: 2px;
          cursor: pointer;
        }

        .report:active {
          opacity: 0.6;
        }

        @media (max-width: 600px) {
          img {
            margin: 0 auto;
          }
        }

        @media (min-width: 767px) {
          .feed {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            justify-content: center;
            grid-gap: 15px;
          }
        }
      `}</style>

      <style jsx>{`
        #addGroup .container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 20px;
          max-width: 1100px;
          margin: 0 auto;
        }
        h1 {
          color: #fff;
          font-size: 22px;
          margin-bottom: 20px;
        }

        .box {
          display: flex;
          flex-direction: column;
        }

        .avatar {
          height: 250px;
          width: 100%;
          background: #ccc;
          border-radius: 5px;
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        img {
          height: 100%;
        }

        button {
          height: 50px;
          background: $warmBlack;
          border: 0;
          border-radius: 5px;
          font-size: 16px;
          color: #fff;
          cursor: pointer;
        }
        button:active {
          opacity: 0.6;
        }

        input,
        textarea {
          color: #fff;
        }
        .groupValid {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        span {
          color: #fff;
          background-color: $yankeesBlue;
        }

        input {
          height: 50px;
          border-radius: 5px;
          font-size: 16px;
          padding-left: 5px;
          color: #fff;
        }

        .formGroup {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        span {
          color: #fff;
          background-color: $yankeesBlue;
        }

        select {
          color: #ffff;
          height: 50px;
          width: 100%;
          background-color: transparent;
          border-radius: 10px;
          border: 1px solid #ccc;
          margin-bottom: 10px;
        }
        option {
          color: #000;
        }

        @media (min-width: 767px) {
          .box {
            width: 100%;
            max-width: 450px;
          }
        }
      `}</style>
    </>
  );
}

export default CardApprove;
