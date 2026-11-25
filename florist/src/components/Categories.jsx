function Categories({ categories }) {
    return (
        <section className="container categories">
            <div className="row g-3">
                {categories.map((category) => (
                    <div className="col-12 col-md-6 col-lg-4" key={category.id}>
                        <div className="category-card">
                            <h3>{category.title}</h3>
                            <p>{category.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Categories;
