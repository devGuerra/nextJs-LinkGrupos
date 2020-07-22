/* eslint-disable react/prop-types */
import React from 'react';

function GroupCard({ data }) {
  return (
    <>
      {data.url ? (
        <>
          <a
            className="groupCard"
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="groupContent">
              <img src={data.avatar} alt={data.name} />
              <div className="groupDescription">
                <h2>{data.name}</h2>
                {data.description && <span>{data.description}</span>}
              </div>
            </div>
            <button type="button" className="groupButton">
              Entrar
            </button>
          </a>
          {/* <button className="report">reportar</button> */}
        </>
      ) : (
        <a className="groupCard" href={`/group/${data._id}`}>
          <div className="groupContent">
            <img src={data.avatar} alt={data.name} />
            <div className="groupDescription">
              <h2>{data.name}</h2>
              {data.description && <span>{data.description}</span>}
            </div>
          </div>
        </a>
      )}
      <style jsx>{`
        .feed {
          display: none;
          grid-template-columns: repeat(4, 1fr);
          justify-content: center;
          grid-gap: 15px;
        }
        .groupCard {
          max-width: 350px;
          display: block;
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
          width: 100%;
        }

        .groupDescription {
          width: 100%;
          // height: 30%;
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
            height: 250px;
            width: 100%;
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
          .groupCard {
            max-width: 250px;
          }
        }
      `}</style>
    </>
  );
}

export default GroupCard;
