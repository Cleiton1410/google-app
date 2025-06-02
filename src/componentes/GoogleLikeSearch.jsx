import React, { useState } from 'react';
import './GoogleLike.css';
import { Search, Keyboard, Mic, CameraAlt, Apps } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';

const GoogleLikeSearch = () => {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Você digitou: ${searchText}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <header className="header">
          <div className="header-links">
            <a href="#">Gmail</a>
            <a href="#">Imagens</a>
            <Apps className="apps-icon" />
            <Avatar className="avatar" />
          </div>
        </header>

        <main className="main">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
            alt="Google Logo"
            className="logo"
          />

          <div className="search-container">
            <div className="search-box">
              <Search className="search-icon" />
              <input
                type="text"
                className="search-input"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Pesquise no Google"
              />
              <div className="icons-right">
                <Keyboard />
                <Mic />
                <CameraAlt />
              </div>
            </div>
          </div>

          <div className="buttons">
            <button type="submit">Pesquisa Google</button>
            <button type="submit">Estou com sorte</button>
            <button type="button" onClick={() => setSearchText('')}>Limpar</button>
          </div>
        </main>

        <footer className="footer">
          <div className="footer-top">
            <span>Brasil</span>
          </div>
          <div className="footer-bottom">
            <div className="footer-links">
              <a href="#">Sobre</a>
              <a href="#">Publicidade</a>
              <a href="#">Negócios</a>
              <a href="#">Como funciona a Pesquisa</a>
            </div>
            <div className="footer-links">
              <a href="#">Privacidade</a>
              <a href="#">Termos</a>
              <a href="#">Configurações</a>
            </div>
          </div>
        </footer>
      </div>
    </form>
  );
};

export default GoogleLikeSearch;
