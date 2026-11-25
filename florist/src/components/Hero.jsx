
function Hero() {
    return (
        <section className="container hero">

            <div className="hero-text">
                <h1>Fresh Flowers, Thoughtfully Arranged</h1>

                <p>
                    Seasonal blooms crafted for everyday moments
                    and meaningful occasions. Sourced responsibly
                    and arranged with care.
                </p>

                <a href="#" className="btn btn-primary">
                    Shop Flowers
                </a>
            </div>

            {/* Carousel */}
            <div
                id="flowerCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
            >

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img
                            src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=80"
                            className="d-block w-100"
                            alt="Flower bouquet"
                        />

                        <div className="carousel-caption">
                            <h3>Indoor Plants</h3>
                            <p>Greenery for home and office</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img
                            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=80"
                            className="d-block w-100"
                            alt="Fresh flowers"
                        />
                    </div>

                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#flowerCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon"></span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#flowerCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon"></span>
                </button>

            </div>

        </section>
    );
}

export default Hero;
