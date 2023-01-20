import React from "react";
import { useState } from "react";
import { ApolloClient, gql, InMemoryCache, } from '@apollo/client';

const CreateProduct = () => {

    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })

    const [kdPrdk, setPrdk] = useState('');
    const [nama, setNama] = useState('');
    const [deskripsi, setDeskripsi] = useState('');
    const [harga, setHarga] = useState('');

    const clearInput = () => {
        setPrdk('')
        setNama('')
        setDeskripsi('')
        setHarga('')
    }

    async function submitHandler(e) {
        e.preventDefault()
        try {
            await client.mutate({
                mutation: gql`
                mutation{
                    createProduct(data:{
                        kdPrdk: "${kdPrdk}",
                        nama: "${nama}",
                        deskripsi: "${deskripsi}",
                        harga: ${harga},
                    })
                    {
                        data {
                            id
                            attributes {
                                kdPrdk
                                nama
                                deskripsi
                                harga
                            }
                        }
                    }
                }`
            })
            alert("Penambahan data sukses")
            clearInput()
        } catch (e) {
            throw Error(e.message)
        }
    }
    return (
        <>
            <div className="container px-5 my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card border-0 rounded-3 shadow-lg">
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h1 className="fw-bold">Add Product</h1>
                                    <p className="mb-4 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare turpis eu nisi fringilla, vel cursus lorem aliquam. Phasellus ultrices augue nec neque ultrices, vel laoreet eros egestas.</p>
                                </div>
                                <form onSubmit={submitHandler}>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="kdPrdk" type="text" placeholder="Kode Produk" required="required" value={kdPrdk} onChange={(e) => setPrdk(e.target.value)}/>
                                        <label htmlFor="kdPrdk">Kode Produk</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="nama" type="text" placeholder="Nama" required="required" value={nama} onChange={(e) => setNama(e.target.value)}/>
                                        <label htmlFor="nama">Nama</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="deskripsi" type="text" placeholder="Deskripsi" required="required" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}/>
                                        <label htmlFor="deskripsi">Deskripsi</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="harga" type="text" placeholder="Harga" required="required" value={harga} onChange={(e) => setHarga(e.target.value)}/>
                                        <label htmlFor="harga">Harga</label>
                                    </div>
                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-lg" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateProduct;