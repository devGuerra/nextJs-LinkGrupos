import Head from 'next/head';
import React, { useState } from 'react';
import { Pagination } from '@material-ui/lab';

import api from '../services/api';

import { GetParam } from '../constants/functions';

import Header from '../Components/Header';
import Categories from '../Components/Categories';
import GroupCard from '../Components/GroupCard';
import Footer from '../Components/Footer';

export default function Home({ categories, groups }) {
  const [groupsList, setGroups] = useState(groups.GroupList);
  const [totalPages, setTotalPages] = useState(groups.totalPages);
  const [pageIndex, setPageIndex] = useState(1);

  function handlePage(page) {
    if (page === pageIndex) return;
    setPageIndex(page);
    api.get(`/v2/groups?page=${page}`).then((response) => {
      setGroups(response.data.GroupList);
      setTotalPages(response.data.totalPages);
      // window.scrollTo(0, 0);
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    });
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Categories categories={categories} />
      <main className="container">
        <h1 className="title">Grupos do Whatsapp</h1>
        <div className="feed">
          {groupsList &&
            groupsList.map((group) => (
              <GroupCard key={group._id} data={group} />
            ))}
        </div>

        <Pagination
          variant="outlined"
          shape="rounded"
          page={pageIndex}
          count={totalPages}
          onChange={(func, page) => handlePage(page)}
        />
      </main>
      <Footer />
      <style jsx>{``}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background: #172a3a;
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
          padding: 10px 50px;
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          justify-content: center;
          grid-gap: 15px;
          width: 100%;
        }
        .title {
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
            padding: 0 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const CategoryList = await fetch(
    'https://knots-whatsapp.herokuapp.com/category'
  );
  const categories = await CategoryList.json();

  const GroupList = await fetch(
    'https://knots-whatsapp.herokuapp.com/v2/groups'
  );

  const groups = await GroupList.json();
  return {
    props: {
      categories: categories.CategoryList,
      groups: groups,
    },
  };
}
