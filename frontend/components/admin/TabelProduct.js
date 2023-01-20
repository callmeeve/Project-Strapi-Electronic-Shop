import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from 'react'
import { ApolloClient, gql, InMemoryCache, } from '@apollo/client';

const TabelProduct = ({ data }) => {
    const [message, setMessage] = useState(false)
    const router = useRouter()
    
    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })

    async function hapusProduct(id, kdPrdk) {
        // e.preventDefault()
        try {
            await client.mutate({
                mutation: gql`
                mutation{
                    deleteProduct(id:${id})
                    {
                        data {
                            id
                        }
                    }
                }`
            })

            alert(`Product dengan kode ${kdPrdk} telah terhapus`)
        } catch (error) {
            console.log({ message: error.message });
        }
        router.push('/admin')
    }
    return (
        <>
            <div className="container py-0">
                <div className="row justify-content-center mx-5">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <div className="table-wrapper">
                                <div className="table-title">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <h2>Manage <b>Product</b></h2>
                                        </div>
                                    </div>
                                </div>
                                <table className="table table-bordered table-striped text-center">
                                    <thead>
                                        <tr>
                                            <th>kdPrdk</th>
                                            <th>Nama</th>
                                            <th>Deskripsi</th>
                                            <th>Harga</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((products, idx) => (
                                            <tr key={idx}>
                                                <td>{products.attributes.kdPrdk}</td>
                                                <td>{products.attributes.nama}</td>
                                                <td>{products.attributes.deskripsi}</td>
                                                <td>Rp {products.attributes.harga}000</td>
                                                <td>
                                                    <Link legacyBehavior
                                                        href={`/admin/updateproduct/?id=${products.id}&kdPrdk=${products.attributes.kdPrdk}&nama=${products.attributes.nama}&deskripsi=${products.attributes.deskripsi}&harga=${products.attributes.harga}`}
                                                    ><a className="edit"><i className="bx bx-pencil" data-toggle="tooltip" title="Edit"></i></a></Link>
                                                    <a className="delete" value={products.attributes.kdPrdk} onClick={(e) => hapusProduct(products.id, products.attributes.kdPrdk)}><i className="bx bx-trash" data-toggle="tooltip" title="Delete"></i></a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TabelProduct;