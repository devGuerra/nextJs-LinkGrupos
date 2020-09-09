import React, { useState, useEffect } from 'react';
import { Skeleton } from '@material-ui/lab';
import { FaUserTie } from 'react-icons/fa';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import api from '../../services/api';

function Categories({ categories }) {
  library.add(fas);
  const [slowDown, setSlowDown] = useState(false);

  // useEffect(() => {
  //   api.get('/category').then((response) => {
  //     setCategories(response.data.CategoryList);
  //   });
  // }, []);

  return (
    <div className="category" style={{ height: slowDown ? '170px' : '90px' }}>
      <ul>
        {categories ? (
          categories.map((item) => {
            return (
              <a href={`/category/${item.categoryName}`} key={item._id}>
                <li>
                  {item.icon ? (
                    <FontAwesomeIcon
                      icon={item.icon}
                      color="#172A3A"
                      size="2x"
                    />
                  ) : (
                      <img
                        className="icon"
                        src={item.avatar}
                        alt={item.categoryName}
                      />
                    )}

                  {item.categoryName}
                </li>
              </a>
            );
          })
        ) : (
            <ul>
              <li>
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="text" width={60} height={20} />
              </li>
              <li>
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="text" width={60} height={20} />
              </li>
              <li>
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="text" width={60} height={20} />
              </li>
              <li>
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="text" width={60} height={20} />
              </li>
              <li>
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="text" width={60} height={20} />
              </li>
              <li>
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="text" width={60} height={20} />
              </li>
              <li>
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="text" width={60} height={20} />
              </li>
              <li>
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="text" width={60} height={20} />
              </li>
              <li>
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="text" width={60} height={20} />
              </li>
              <li>
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="text" width={60} height={20} />
              </li>
            </ul>
          )}
      </ul>
      <button
        type="button"
        className="buttonMoreItens"
        onClick={() => setSlowDown(!slowDown)}
      >
        {!slowDown ? 'ver mais' : 'ver menos'}
      </button>

      <style jsx global>
        {`
          .loading {
            display: flex;
            align-items: center;
          }
          .category {
            background-color: #ece5dd;
            position: relative;
            margin-bottom: 20px;
            transition: 0.1s ease;
          }
          h1 {
            font-size: 22px;
            color: #fff;
          }

          ul {
            display: flex;
            flex-direction: row;
            height: 100%;
            grid-auto-rows: min-content;
            overflow: scroll;
          }

          @media (min-width: 769px) {
            ul {
              width: 750px;
              margin: 0 auto;
              display: grid;
              justify-content: center;
              grid-template-columns: repeat(8, 1fr);
              overflow: hidden;
            }
          }
          @media (min-width: 1200px) {
            ul {
              width: 1100px;
              margin: 0 auto;
              display: grid;
              justify-content: center;
              grid-template-columns: repeat(10, 1fr);
              overflow: hidden;
            }
          }

          a {
            text-decoration: none;
            color: #000;
          }

          .category li {
            margin: 20px;
            list-style: none;
            white-space: nowrap;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .icon {
            display: block;
            height: 32px;
            width: 32px;
            border-radius: 50%;
            margin-bottom: 5px;
            border: 1px solid #00000050;
          }

          @media (min-width: 769px) {
            .icon {
              height: 40px;
              width: 40px;
            }
          }

          button.buttonMoreItens {
            position: absolute;
            bottom: -10px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            text-align: center;
            background: #fff;
            padding: 0 20px;
            border-radius: 2px;
            border: 1px solid rgba(161, 161, 161, 0.432);
          }

          button:hover {
            cursor: pointer;
          }

          @media (max-width: 1023px) {
            button {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Categories;
