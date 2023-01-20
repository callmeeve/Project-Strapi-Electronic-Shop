import Link from "next/link";
const Categories = ({ data }) => {
    return (
        <>
            <div className="row mt-2 g-4 px-5 mb-5 justify-content-center">
                {data.map((categories, idx) => (
                    <div className="col-md-3" key={idx}>
                        <div className="card categories p-2">
                            <div className="d-flex justify-content-between align-items-center p-2">
                                <Link href={
                                    {
                                        pathname: '/product/productbykd',
                                        query: {
                                            kdPrdk: categories.attributes.kdPrdk,
                                            nama: categories.attributes.nama
                                        }
                                    }
                                }>
                                    <div className="flex-column imagename"><span>{categories.attributes.nama}</span></div>
                                </Link>
                                {/* <div> <img src={`http://localhost:1337${categories.attributes.gambar.data.attributes.url}`} height={100} width={100} /> </div> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Categories;