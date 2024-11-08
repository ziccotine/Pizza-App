import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import "./index.css";

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    );
}

function Header() {
    return (<h1 style={{color: "orange", fontSize: "48px", textTransform: "uppercase"}}>˗ˏˋ Zic's Pizzaria ˎˊ˗</h1>)
}

function Pizza({ name, ingredients, price, photoName}) {
    return (
        <li className="pizza">
            <img src={photoName} alt={name} />
            <h3>{name}</h3>
            <em>{ingredients}</em>
            <p>${price}</p>
        </li>
    );
}

function Words() {
    return (
        <h1 class="wordsyip">. ݁₊ ⊹ . ݁ OUR MENU ݁ . ⊹ ₊ ݁.</h1>
    )
}

function Menu() {
    return (
        <div ClassName="menu">
            <div className="pizzas">
                {pizzaData.map(pizza => (
                    <Pizza key={pizzaData.id} {...pizza}/>
                ))}
            </div>
        </div>
    )
}

function Footer() {
    const currentHour = new Date().getHours();
    const isOpen = currentHour >= 10 && currentHour < 22;
    return (
      <footer className="footer">
        {isOpen ? "We're currently open!" : "Sorry we're closed!"}
      </footer>
    );
  }

  function Footer2() {
    const currentHour = new Date().getHours();
    const isOpen = currentHour >= 10 && currentHour < 22;
    return (
        <div class="btn">
        <p className="order">
            {isOpen ? "Order Now!" : ""}
        </p>
      </div>
    );
  }

  function Line() {
    return (
        <hr class="line" />
    )
  }

function App() {
    return (
        <div class="menu">
            <Header />
            <Words/>
            <Navbar />
            <Line />
            <Menu />
            <Line />
            <Footer />
            <Footer2 />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);