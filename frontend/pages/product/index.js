import Head from 'next/head'
import UserLayout from '@/components/UserLayout'
import ProductCard from '@/components/user/ProductCard'
import UserFilter from '@/components/user/UserFilter'
import Categories from '@/components/user/Categories'
import { ApolloClient, gql, InMemoryCache, } from '@apollo/client';

export default function Product({products}) {
  return (
    <>
      <Head>
        <title>Elektronika</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            <div className="text-white text-center">
              <h1 className="fw-bold">Our Product</h1>
              <p>Our e-shop is having a big promotion! Get discounts of up to 50% for purchasing <br/> our latest products, such as laptops, smartphones and cameras.</p>
            </div>
            {/* <Categories/> */}
          </div>
          <div className="container px-4 px-lg-5 mt-5">
            <UserFilter />
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <ProductCard data={products.data} />
            </div>
          </div>
        </section>

      </UserLayout>
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
      query getAllProduct{
          products(filters:{nama:{contains:"${nama}"}}){
              data{
                id
                attributes {
                  nama
                  deskripsi
                  harga
                  gambar {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
          }
      }`
  })
  return { props: { products: data.products}}
}