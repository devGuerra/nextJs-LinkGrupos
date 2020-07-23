import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import api from '../../services/api';
import colors from '../../constants/colors';
import InputField from '../../Components/Input';
import Header from '../../Components/Header';
import Ad from '../../Components/Ad';

function AddGroup({ history }) {
  const [user] = useState('Desktop');

  const [group, setGroup] = useState({});
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    api
      .get('/category')
      .then((response) => setCategories(response.data.CategoryList));
  }, []);

  const handleSearch = () => {
    if (!url) return;

    if (!url.includes('https://chat.whatsapp.com/')) {
      alert('Url invalida.');
      return;
    }
    api
      .post('/groups/validate', {
        url,
      })
      .then((response) => {
        setGroup(response.data);
        setName(response.data.name);
      })
      .catch((err) => {
        console.error(err);
      });
    setName(group.name);
  };

  const handleSubmit = () => {
    if (!description || !category) {
      return alert('Preencha todos os campos');
    }
    setLoading(true);
    api
      .post('/groups', {
        name,
        description,
        url: group.url,
        avatar: group.avatar,
        category,
        owner: user.username,
      })
      .then((response) => {
        router.push('/?sucess=true');
      })
      .catch((err) => {
        setLoading(false);
        alert('Houve um erro');
      });
  };

  return (
    <>
      <Header />
      <main id="addGroup">
        <div className="container">
          <h1>Enviar novo grupo</h1>
          <Ad slotId="5480228173" width={1024} height={90} />
          <div className="box">
            <div className="avatar">
              <img src={group.avatar} alt="" />
            </div>
            {!group.url ? (
              <div className="groupValid">
                <InputField
                  title="Link do grupo"
                  type="TextInput"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <button
                  // loading={loading}
                  className="buttonAdd"
                  type="button"
                  active={url ? true : false}
                  onClick={() => handleSearch()}
                >
                  {loading ? 'Aguarde' : 'Validar'}
                </button>
              </div>
            ) : (
              <div className="formGroup">
                <InputField
                  title="Nome do Grupo"
                  type="TextInput"
                  maxLength="30"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <InputField
                  maxLength="210"
                  title="Descrição"
                  type="TextArea"
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <InputField
                  maxLength="70"
                  title="Link do Grupo"
                  type="TextInput"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <select onChange={(e) => setCategory(e.target.value)}>
                  <option value="">Selecione uma categoria</option>
                  {categories.map((item) => (
                    <option key={item._id} value={item.categoryName}>
                      {item.categoryName}
                    </option>
                  ))}
                </select>
                <button
                  loading={loading}
                  active
                  className="buttonAdd"
                  type="button"
                  onClick={() => handleSubmit()}
                >
                  {loading ? 'Aguarde' : 'Enviar grupo'}
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <style jsx>
        {`
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
            text-align: center;
          }

          .box {
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            width: 100%;
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

          .groupValid {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
          span {
            color: #fff;
            background-color: $yankeesBlue;
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
          select option {
            color: #000;
          }

          .buttonAdd {
            height: 50px;
            background: ${colors.warmBlack};
            border: 0;
            border-radius: 5px;
            font-size: 16px;
            color: #fff;
            cursor: pointer;
          }
          @media (min-width: 767px) {
            .box {
              width: 100%;
              max-width: 450px;
            }
          }
        `}
      </style>
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
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default AddGroup;
