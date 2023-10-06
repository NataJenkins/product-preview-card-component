import iconCart from "./assets/images/icon-cart.svg";
import "./styles.scss";

function App() {
    return (
        <div className="container">
            <main className="card">
                <div className="picture" />
                <div className="details">
                    <div className="label">PERFUME</div>
                    <h1 className="title">Gabrielle Essence Eau De Parfum</h1>
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
            </main>
        </div>
    );
}

export default App;
