import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Pagination, Skeleton } from '@material-ui/lab';

import { ads } from '../../constants/functions';
import api from '../../services/api';
import GroupCard from '../../Components/GroupCard';
import Categories from '../../Components/Categories';
import Header from '../../Components/Header';

const Group = (props) => {
  const [group, setGroup] = useState([]);
  const [categories, setCategories] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageIndex, setPageIndex] = useState(1);
  const [loader, setLoader] = useState(true);
  const [id, setId] = useState('');
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    setId(id);
    console.log('props', props);
    if (id) {
      api.get(`/v2/groups/${id}`).then((response) => {
        setGroup(response.data.GroupList);
        setTotalPages(response.data.totalPages);
        setLoader(false);
      });
    }
    api.get(`/category`).then((response) => {
      setCategories(response.data.CategoryList);
    });
  }, [router.query.id]);

  return (
    <>
      <Header />
      <Categories categories={categories} />
      <main className="container">
        <h1 className="title">{id}</h1>
        {ads()}
        <div className="feed">
          {group && !loader ? (
            group.map((group) => <GroupCard key={group._id} data={group} />)
          ) : (
            <>
              <div className="groupCard">
                <div className="groupContent">
                  <Skeleton variant="rect" width={250} height={250} />
                  <Skeleton variant="text" width={250} height={50} />
                </div>
              </div>
              <div className="groupCard">
                <div className="groupContent">
                  <Skeleton variant="rect" width={250} height={250} />
                  <Skeleton variant="text" width={250} height={50} />
                </div>
              </div>
              <div className="groupCard">
                <div className="groupContent">
                  <Skeleton variant="rect" width={250} height={250} />
                  <Skeleton variant="text" width={250} height={50} />
                </div>
              </div>
              <div className="groupCard">
                <div className="groupContent">
                  <Skeleton variant="rect" width={250} height={250} />
                  <Skeleton variant="text" width={250} height={50} />
                </div>
              </div>
            </>
          )}
        </div>

        <Pagination
          variant="outlined"
          shape="rounded"
          page={pageIndex}
          count={totalPages}
          onChange={(func, page) => handlePage(page)}
        />
        {ads()}
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
            justify-content: start;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Group;
