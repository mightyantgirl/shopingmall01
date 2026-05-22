import { useState } from "react";

import img from "./assets/img.png";
import heroImg from "./assets/heroImg.png";
import logo from "./assets/logo.svg";

// 상품 이미지는 public/assets/ 에 두면 import 없이 문자열 경로로 바로 사용 가능
// src/assets/ 는 Vite가 빌드 시 파일을 처리해서 import 필수
// public/ 은 빌드해도 경로 그대로 유지되어 "/assets/파일명" 으로 접근 가능

import "./App.css";

function App() {
  const [cart, setCart] = useState(0);
  const [active, setActive] = useState(false);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Rib Tank Top",
      price: 48000,
      image: "/assets/product01_detail.png",
      hoverImage: "/assets/Product01_Hover.png",
      tag: "NEW",
    },
    {
      id: 2,
      name: "Leopard Crop Top",
      price: 62000,
      image: "/assets/product02_detail.png",
      hoverImage: "/assets/Product02_Hover.png",
      tag: "BEST",
    },
    {
      id: 3,
      name: "Off-Shoulder Drawstring Top",
      price: 55000,
      image: "/assets/product01_detail.png",
      hoverImage: "/assets/Product01_Hover.png",
      tag: "NEW",
    },
    {
      id: 4,
      name: "Black Buckle Mini Skirt",
      price: 71000,
      image: "/assets/product02_detail.png",
      hoverImage: "/assets/Product02_Hover.png",
      tag: "SOLD OUT",
    },
    {
      id: 5,
      name: "Off-Shoulder Drawstring Top",
      price: 55000,
      image: "/assets/product01_detail.png",
      hoverImage: "/assets/Product01_Hover.png",
      tag: "NEW",
    },
    {
      id: 6,
      name: "Black Buckle Mini Skirt",
      price: 71000,
      image: "/assets/product02_detail.png",
      hoverImage: "/assets/Product02_Hover.png",
      tag: "SOLD OUT",
    },
  ]);

  return (
    <div className="App">
      <section className="hero-wrapper">
        <div className="hero-title">
          <h1 className="hero-main-title">OBSCURA</h1>
          <p className="hero-sub-title">2026 SS COLLECTION</p>
        </div>
        <img src={heroImg} alt="Hero" className="hero-img" />
        <img src={logo} alt="Hero" className="logo" />
      </section>
      <nav className="nav">
        <ol className="nav-list">
          <li className="nav-item" src="/">
            shop
          </li>
          <li className="nav-item" src="/">
            archive
          </li>
          <li className="nav-item" src="/">
            cart
          </li>
          <li className="nav-item" src="/">
            account
          </li>
          <li className="nav-item cart" src="/">
            cart <div className="badge">{cart}</div>
          </li>
        </ol>
      </nav>
      <nav className="sm-nav">
        <div onClick={() => setActive(!active)} className="sm-nav-btn">
          menu
          <ol className={`sm-nav-list ${active ? "is-active" : ""}`}>
            <li className="nav-item" src="/">
              shop
            </li>
            <li className="nav-item" src="/">
              archive
            </li>
            <li className="nav-item" src="/">
              cart
            </li>
            <li className="nav-item" src="/">
              account
            </li>
            <li className="nav-item cart" src="/">
              cart <div className="badge">{cart}</div>
            </li>
          </ol>
        </div>
      </nav>

      <div className="main-product-wrap">
        <div className="main-product">
          <div className="product-list">
            {products.map((p, i) => (
              <Product
                key={i}
                image={p.image}
                hoverImage={p.hoverImage}
                name={p.name}
                price={p.price}
                setCart={setCart}
              />
            ))}
          </div>
        </div>
        <div className="main-product-2"></div>
      </div>
    </div>
  );
}

function Product({ image, hoverImage, name, price, setCart }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="product-item">
      <button onClick={() => setCart((prev) => prev + 1)} className="cart-icon">
        cart
      </button>
      <div
        className="thumbnail"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a href="">
          {/* 호버 시 hoverImage로 교체, hoverImage 없으면 기본 image 유지 */}
          <img
            src={isHovered && hoverImage ? hoverImage : image}
            alt={name}
            className="product-img"
          />
        </a>
      </div>
      <div className="description">
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default App;
