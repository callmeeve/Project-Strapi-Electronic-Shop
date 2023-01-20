import AdminLayout from '@/components/admin/AdminLayout'
import TabelProduct from '@/components/admin/TabelProduct'
import React from 'react'
import { ApolloClient, gql, InMemoryCache,  } from '@apollo/client';

export default function AdminHome({products}) {
    return (
        <>
            <AdminLayout>
                <TabelProduct data={products.data} />
            </AdminLayout>
        </>
    )
}

export async function getServerSideProps({ query }) {
    let nama = query.nama
    { typeof nama === 'string' ? nama = nama : nama = "" }
    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql',
        cache: new InMemoryCache()
    })

    const { data } = await client.query({
        query: gql`
        query {
            products(filters:{nama:{containsi:"${nama}"}}){
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
    return { props: { products: data.products } }
}