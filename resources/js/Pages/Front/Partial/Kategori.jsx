export default function Kategori({categoryList}){
    const categoryMenu = categoryList.map((category) => 
        <div key={category.id_kategori} className="col-xl-3 col-lg-4 col-sm-6">
            <div className="categories-item" data-aos="fade-up" data-aos-duration="1000">
                <a className="categories-item__link" href="#">
                    <div className="categories-item__info">
                        <h3 className="categories-item__name">{category.nama_kategori}</h3>
                    </div>
                </a>
            </div>
        </div>
    );
    return (
        <div className="categories-section section-padding-02">
            <div className="container">
                <div className="section-title" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="section-title__title">Top <mark>Categories</mark>
                    </h2>
                </div>
                <div className="row g-6">
                    {categoryMenu}
                </div>
            </div>
        </div>
    );
}