import Head from 'next/head';
import React, { useEffect } from 'react';

import Header from '../Components/Header';
import Categories from '../Components/Categories';
import GroupCard from '../Components/GroupCard';

export default function Home({ categories, groups }) {
  useEffect(() => {
    console.log(groups);
  }, [categories, groups]);

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
          {groups &&
            groups.map((group) => <GroupCard key={group._id} data={group} />)}
        </div>

        {/* <Pagination
          variant="outlined"
          shape="rounded"
          page={pageIndex}
          count={totalPages}
          onChange={(func, page) => handlePage(page)}
        /> */}
      </main>

      <style jsx>{`
        .feed,
        .feedOne {
          padding: 10px 20px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
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
      `}</style>

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

        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin: 0 auto;
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
      groups: groups.GroupList,
    },
  };
}
