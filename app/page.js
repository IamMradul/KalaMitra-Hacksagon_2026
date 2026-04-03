"use client";

import { useMemo, useState } from "react";

const defaultImage =
  "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80";

const initialProducts = [
  {
    id: "p1",
    name: "Terracotta Table Lamp",
    category: "Pottery",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "p2",
    name: "Handloom Indigo Shawl",
    category: "Textiles",
    price: 1899,
    image:
      "https://images.unsplash.com/photo-1618354691229-88d47f285158?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "p3",
    name: "Gond Art Canvas",
    category: "Wall Art",
    price: 2299,
    image:
      "https://images.unsplash.com/photo-1577083165633-14ebcdb0f658?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "p4",
    name: "Carved Neem Wood Bowl",
    category: "Woodcraft",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "p5",
    name: "Blue Pottery Vase",
    category: "Pottery",
    price: 1399,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "p6",
    name: "Handmade Jute Basket",
    category: "Home Decor",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1578507065211-1c4e99d0a077?auto=format&fit=crop&w=1000&q=80",
  },
];

function formatINR(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function HomePage() {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [sellerMsg, setSellerMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
  });

  const cartSummary = useMemo(() => {
    let total = 0;
    let count = 0;

    const items = cart
      .map((entry) => {
        const product = products.find((item) => item.id === entry.productId);
        if (!product) {
          return null;
        }

        const subTotal = product.price * entry.qty;
        total += subTotal;
        count += entry.qty;

        return {
          ...entry,
          product,
          subTotal,
        };
      })
      .filter(Boolean);

    return { items, total, count };
  }, [cart, products]);

  const addToCart = (productId) => {
    setCart((prev) => {
      const found = prev.find((item) => item.productId === productId);
      if (found) {
        return prev.map((item) =>
          item.productId === productId ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { productId, qty: 1 }];
    });
  };

  const handleSellerChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSellerSubmit = (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const category = formData.category.trim();
    const price = Number(formData.price);
    const image = formData.image.trim();

    if (!name || !category || !price) {
      setSellerMsg("Please fill all required fields.");
      return;
    }

    const newProduct = {
      id: `p${Date.now()}`,
      name,
      category,
      price,
      image: image || defaultImage,
    };

    setProducts((prev) => [newProduct, ...prev]);
    setFormData({ name: "", category: "", price: "", image: "" });
    setSellerMsg("Product added. Buyers can now add it to their cart!");
  };

  const handleCheckout = () => {
    if (!cartSummary.items.length) {
      window.alert("Your cart is empty. Add some products first.");
      return;
    }

    window.alert("Thank you for shopping on Kalamitra! (Demo checkout)");
    setCart([]);
    setCartOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="brand-wrap">
          <p className="brand-mark">Kalamitra</p>
          <p className="brand-sub">Marketplace for Local Artisans</p>
        </div>
        <nav className="top-nav">
          <a href="#featured">Featured</a>
          <a href="#categories">Categories</a>
          <a href="#sell">Sell on Kalamitra</a>
        </nav>
        <button
          type="button"
          className="cart-btn"
          aria-label="Open cart"
          onClick={() => setCartOpen(true)}
        >
          Cart <span>{cartSummary.count}</span>
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">From Village Hands to Your Home</p>
            <h1>Buy handcrafted stories. Support local creators.</h1>
            <p>
              Discover pottery, handloom textiles, tribal art, woodcraft, and
              more. Every purchase supports independent artisans and traditional
              crafts.
            </p>
            <a href="#featured" className="cta-btn">
              Shop Handmade
            </a>
          </div>
          <div className="hero-glow" aria-hidden="true" />
        </section>

        <section id="categories" className="categories">
          <h2>Explore Categories</h2>
          <div className="category-grid">
            <article>
              <h3>Textiles</h3>
              <p>Handwoven dupattas, shawls, and naturally dyed fabrics.</p>
            </article>
            <article>
              <h3>Pottery</h3>
              <p>Clayware made in small batches by regional potters.</p>
            </article>
            <article>
              <h3>Wall Art</h3>
              <p>Folk paintings, tribal motifs, and framed handmade prints.</p>
            </article>
            <article>
              <h3>Woodcraft</h3>
              <p>
                Carved decor pieces and utility products with timeless charm.
              </p>
            </article>
          </div>
        </section>

        <section id="featured" className="products-section">
          <div className="section-head">
            <h2>Featured Products</h2>
            <p>Curated crafts from verified local artisans.</p>
          </div>
          <div className="products-grid">
            {products.map((product, index) => (
              <article
                key={product.id}
                className="product-card"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <img
                  className="product-image"
                  src={product.image || defaultImage}
                  alt={product.name}
                />
                <div className="product-body">
                  <p className="pill">{product.category}</p>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">{formatINR(product.price)}</p>
                  <button
                    type="button"
                    className="add-btn"
                    onClick={() => addToCart(product.id)}
                  >
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="sell" className="sell-section">
          <div className="sell-info">
            <h2>Are you an Artisan?</h2>
            <p>
              Create your store on Kalamitra and reach buyers who care about
              authentic handmade work.
            </p>
            <ul>
              <li>No setup fees for basic listing</li>
              <li>Community support for packaging and shipping</li>
              <li>Story-led profiles for every artisan</li>
            </ul>
          </div>

          <form className="seller-form" onSubmit={handleSellerSubmit}>
            <h3>List a Product</h3>
            <label htmlFor="name">
              Product Name
              <input
                type="text"
                id="name"
                required
                placeholder="e.g. Madhubani Wall Plate"
                value={formData.name}
                onChange={handleSellerChange}
              />
            </label>
            <label htmlFor="category">
              Category
              <input
                type="text"
                id="category"
                required
                placeholder="e.g. Wall Art"
                value={formData.category}
                onChange={handleSellerChange}
              />
            </label>
            <label htmlFor="price">
              Price (INR)
              <input
                type="number"
                id="price"
                required
                min="1"
                placeholder="e.g. 1200"
                value={formData.price}
                onChange={handleSellerChange}
              />
            </label>
            <label htmlFor="image">
              Image URL (optional)
              <input
                type="url"
                id="image"
                placeholder="https://..."
                value={formData.image}
                onChange={handleSellerChange}
              />
            </label>
            <button type="submit">Add Product</button>
            <p className="seller-msg" aria-live="polite">
              {sellerMsg}
            </p>
          </form>
        </section>
      </main>

      <aside className={`cart-panel ${cartOpen ? "open" : ""}`} aria-hidden={!cartOpen}>
        <div className="cart-head">
          <h3>Your Cart</h3>
          <button type="button" onClick={() => setCartOpen(false)}>
            Close
          </button>
        </div>
        <div className="cart-items">
          {cartSummary.items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartSummary.items.map((entry) => (
              <article key={entry.productId} className="cart-item">
                <p>
                  <strong>{entry.product.name}</strong>
                </p>
                <p>Qty: {entry.qty}</p>
                <p>{formatINR(entry.subTotal)}</p>
              </article>
            ))
          )}
        </div>
        <div className="cart-foot">
          <p>
            Total: <span>{formatINR(cartSummary.total)}</span>
          </p>
          <button type="button" id="checkout" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </aside>
    </>
  );
}
