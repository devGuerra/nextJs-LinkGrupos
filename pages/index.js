import Head from 'next/head';

import Header from '../Components/Header';
import Categories from '../Components/Categories';

export default function Home({ categories }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Categories categories={categories} />
      <main className="container"></main>

      <style jsx>{``}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
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
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        @media (min-width: 1280px) {
          .container {
            max-width: 1100px;
            padding: 0 20px;
            display: flex;
            flex-direction: row;
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
  const res = await fetch('https://knots-whatsapp.herokuapp.com/category');
  const json = await res.json();
  return {
    props: {
      categories: json.CategoryList,
    },
  };
}
