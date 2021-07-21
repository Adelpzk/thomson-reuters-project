import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import image from "next/image"
import { Profiler } from "react";
export const getStaticProps = async () => {
  const GQL_API = 'http://localhost:3030';
  const GQL_QUERY = `
    query{
      products{
        title
        author
        publisher
        publication_date
        image
        text
        id
        description
        
      }
    }
  `
  const res = await fetch(GQL_API, {
    method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
    body: JSON.stringify({
      query: GQL_QUERY,
    }),
  });
  const data = await res.json()

  
  return{
    props: { products: data.data.products }
  }
}

export default function Products({products}) {
  return (
    <>
      <Head>
        <title>Thomson Reuters | Blogs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./tr_favicon.ico" />
      </Head>

      <main>
        <nav className="nav-bar">
          <img src="./tr_logo.png" className="app-logo" alt="TR logo" />
          <h1 className="app-title"> Thomson Reuters GraphQL POC NextJS App</h1>
          <ul className="nav-pages">
            <li>
              <Link href="/blogs">
                <a>Blogs</a>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <a>Products</a>
              </Link>
            </li>
          </ul>
        </nav>
        <body className="body">
          <div className="products">
            <h2>Thomson Reuter Books and Products</h2>
            <p>
              Explore the several books and products offered by Thomson Reuters.
            </p>
          </div>
          
          <div>
            <h1>All Products</h1>
            { products && products.map(product => (
              <Link href={'/products/' + product.id}key={product.id}>
                <a>
                    <h2>{ product.title }</h2>
                    <img src={product.image} alt="Product image" width="100" height="100"></img>
                    <h4>{ product.publication_date + " | " + product.publisher + " | " + product.author}</h4>
                    <h4>{product.description}</h4>
                    <br></br>
                  </a>
              </Link>
            ))}
          </div>
    
        </body>
      </main>
    </>
  );
} 

