import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import CardApprove from '../../Components/CardApprove';
import { Pagination } from '@material-ui/lab';
import Header from '../../Components/Header';
import Ad from '../../Components/Ad';

function dashboard({ match }) {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get(`/approval`).then((response) => {
      setGroups(response.data.groups);
    });

    setLoading(false);
    setReady(true);
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h2 className="title">Approve</h2>
          <Ad slotId="5480228173" width={1024} height={90} />
          <div className="feed">
            {groups.map((group) => (
              <CardApprove key={group._id} group={group} />
            ))}
          </div>
          <Pagination page={0} />
          <Ad slotId="9000794686" width={1024} height={90} />
        </div>
      </main>
      <style jsx global>{`
        html,
        body,
        #__next,
        main {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background: #172a3a;
          height: 100%;
        }

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-family: 'Roboto', sans-serif;
          text-decoration: none;
        }

        #toast-container {
          z-index: 1000;
        }

        #toast-message {
          background: #128c7e;
        }
        #toast-message div {
          color: #fff;
        }

        .feed,
        .feedOne {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          grid-gap: 15px;
        }
        main .title {
          margin: 20px 0 30px;
          text-align: center;
          font-size: 22px;
          color: #fff;
        }

        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin: 0 auto;
        }
        .MuiPagination-root {
          display: flex;
          justify-content: center;
          margin: 30px 0;
        }
        .MuiPagination-root ul li .MuiButtonBase-root {
          background-color: #fff;
        }
        .MuiPagination-root ul li .Mui-selected {
          background-color: #128c7e;
          color: #fff;
        }

        @media (min-width: 767px) {
          .feed,
          .feedOne {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .feed,
          .feedOne {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (min-width: 1280px) {
          .container {
            max-width: 1100px;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default dashboard;
