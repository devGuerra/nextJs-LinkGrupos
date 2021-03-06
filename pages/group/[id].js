import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import api from '../../services/api';
import GroupCard from '../../Components/GroupCard';
import Categories from '../../Components/Categories';
import Header from '../../Components/Header';
import Ad from '../../Components/Ad';

const Group = (props) => {
  const [group, setGroup] = useState([]);
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      api
        .get(`/groups/${id}`)
        .then((response) => setGroup(response.data.group));
    }
    api.get(`/category`).then((response) => {
      setCategories(response.data.CategoryList);
    });
  }, [router.query.id]);

  return (
    <>
      <Head>
        <title>LinkGroups - Grupos do whatsapp</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          type="text/javascript"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
      </Head>
      <Header />
      <Categories categories={categories} />
      <main>
        <div id="groupDetails" className="feed container">
          <h1>{group.name}</h1>
          <div className="group feed">
            <GroupCard data={group} />{' '}
          </div>
        </div>
        <Ad slotId="5480228173" width={1024} height={90} />
        {/* <Ad slotId="9000794686" width={1024} height={90} /> */}
      </main>

      <style jsx global>{`
        html,
        body,
        #__next {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background: #172a3a;
          height: 100%;
        }

        #groupDetails {
          justify-content: start;
          margin-bottom: 100px;
        }

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-family: 'Roboto', sans-serif;
          text-decoration: none;
        }

        .feed,
        .feedOne {
          display: flex;
          justify-content: center;
          grid-gap: 15px;
          width: 100%;
        }
        main {
          text-align: center;
          height: 100%;
        }
        main h1 {
          margin: 20px 0 30px;
          text-align: center;
          font-size: 22px;
          color: #fff;
        }

        ins.adsbygoogle {
          margin: 0 auto 10px;
          // background-color: #fff;
          max-width: 1100px;
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
};

export default Group;
