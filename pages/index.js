import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { Pagination } from '@material-ui/lab';
import { ToastContainer, toast } from 'react-nextjs-toast';
import { useRouter } from 'next/router';

import api from '../services/api';
import { GetParam, ads } from '../constants/functions';
import Header from '../Components/Header';
import Categories from '../Components/Categories';
import GroupCard from '../Components/GroupCard';
import Footer from '../Components/Footer';
import Ad from '../Components/Ad';

export default function Home({ categories, groups }, props) {
  const [groupsList, setGroups] = useState(groups.GroupList);
  const [totalPages, setTotalPages] = useState(groups.totalPages);
  const [pageIndex, setPageIndex] = useState(1);

  const {
    query: { sucess },
  } = useRouter();

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

  useEffect(() => {
    if (sucess === 'true') {
      toast.notify('Você enviou um novo grupo! Em breve estará disponível!', {
        duration: 5,
        type: 'success',
      });
    }
  }, [sucess]);

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta httpEquiv="Content-Language" content="pt-br" />
        <link rel="canonical" href="https://linkgrupos.app" />
        <meta
          name="Description"
          content="Os melhores links de grupos do whatsapp,  encontre as melhores categorias,
                gratis e facil, em apenas um click ja esta com um novo Grupo do whatsapp"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://linkgrupos.app" />
        <meta property="og:image" content="/newLogoColor.svg" />
        <meta
          property="og:title"
          content="Links de Grupos do Whatsapp - LinkGrupos"
        />
        <meta
          property="og:description"
          content="Os melhores links de grupos do whatsapp,  encontre as melhores categorias,
                gratis e facil, em apenas um click ja esta com um novo Grupo do whatsapp"
        />
        <meta property="og:site_name" content="WhatsApp Group Links" />
        <title>Links de Grupos do Whatsapp - LinkGrupos</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          type="text/javascript"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
        <script
          data-ad-client="ca-pub-2270636537108959"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Head>
      <Header />
      <Categories categories={categories} />

      <main className="container">
        <h1 className="title">Grupos do Whatsapp</h1>
        <Ad slotId="5480228173" width={1024} height={90} />
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
        <Ad slotId="9000794686" width={1024} height={90} />
      </main>
      <Footer />
      <style jsx>{``}</style>

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

        ins.adsbygoogle {
          margin: 0 auto 10px;
          // background-color: #fff;
          max-width: 1100px;
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

        .category li {
          margin: 20px;
          height: 45px;
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
      <ToastContainer align={'right'} />
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
