import iconCart from "./assets/images/icon-cart.svg";
import "./styles.scss";

function App() {
    return (
        <div className="container">
            <div className="card">
                <div className="picture" />
                <div className="details">
                    <div className="label">PERFUME</div>
                    <div className="title">Gabrielle Essence Eau De Parfum</div>
                    <div className="description">
                        A floral, solar and voluptuous interpretation composed
                        by Oliver Pologe, Perfumer-Creator for the House of
                        CHANEL
                    </div>
                    <div className="prices">
                        <div className="price">$149.99</div>
                        <div className="discount">$169.99</div>
                    </div>
                    <button className="button">
                        {" "}
                        <img src={iconCart} className="icon" alt="icon" />
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
