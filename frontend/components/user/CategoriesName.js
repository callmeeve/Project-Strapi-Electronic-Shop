
const CategoriesName = ({dataCtg}) => {
    return (
        <>
            <div className="text-white text-start">
                <h1 className="fw-bold">{dataCtg.nama}</h1>
                <p>Our e-shop is having a big promotion! Get discounts of up to 50% for purchasing <br /> our latest products, such as laptops, smartphones and cameras.</p>
            </div>
        </>
    );
}

export default CategoriesName;