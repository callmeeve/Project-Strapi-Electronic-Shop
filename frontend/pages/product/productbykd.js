import React from 'react'
import { useRouter } from 'next/router';
import CategoriesName from '@/components/user/CategoriesName';
import ProductCard from '@/components/user/ProductCard';
import { ApolloClient, gql, InMemoryCache, } from '@apollo/client';
import UserLayout from '@/components/UserLayout';

export default function productbykd({ products }) {
    const router = useRouter();
    return (
        <>
            <UserLayout>
                <header className="bg-dark py-5">
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center justify-content-center">
                            <div className="col-lg-8 col-xl-7 col-xxl-6">
                                <div className="my-5 text-center text-xl-start">
                                    <h1 className="display-5 fw-bolder text-white mb-2">Elektronika</h1>
                                    <p className="lead fw-normal text-white-50 mb-4">Welcome to our electronics shop! We offer a wide range of the latest and high quality electronic products at affordable prices.</p>
                                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                        <a className="btn btn-light btn-lg px-4 me-sm-3" href="#features">Get Started</a>
                                        <a className="btn btn-outline-light btn-lg px-4" href="#!">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src="/tech.svg" alt="..." /></div>
                        </div>
                    </div>
                </header>
                <div className="bg-dark py-3">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 align-items-center">
                            <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src="/phone.png" alt="..." /></div>
                            <div className="col-lg-5">
                                <div className="text-white">
                                    <h1 className="fw-bold">Our Electronic Shop</h1>
                                    <p>Our e-shop is having a big promotion! Get discounts of up to 50% for purchasing our latest products, such as laptops, smartphones and cameras.</p>
                                </div>
                                <a className="btn btn-outline-light" href="#!">Get our discount now!</a>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="bg-dark py-5">
                    <div className="container px-lg-5">
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            <CategoriesName dataCtg={router.query} />
                            <ProductCard data={products.data} />
                        </div>
                    </div>
                </section>
            </UserLayout>
        </>
    )
}

export async function getServerSideProps({ query }) {
    let kdPrdk = query.kdPrdk
    // {typeof nama === 'string' ? nama = nama : nama = ""}
    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })

    const { data } = await client.query({
        query: gql`
            query getProductByKdPrdk{
                products(filters:{kdPrdk:{containsi:"${kdPrdk}"}}){
                data {
                    id
                    attributes {
                        kdPrdk
                        gambar {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                        nama
                        deskripsi
                        harga
                        categories{
                            data {
                                attributes {
                                    kdPrdk
                                    nama
                                }
                            }
                        }
                    }
                }
            }
        }`
    })
    return { props: { products: data.products } }
}