import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import image from "next/image";
import { Profiler } from "react";
export const getStaticProps = async () => {
  const GQL_API = "http://localhost:3030";
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
  `;
  const res = await fetch(GQL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GQL_QUERY,
    }),
  });
  const data = await res.json();

  return {
    props: { products: data.data.products },
  };
};

export default function Products({ products }) {
  var options = { year: "numeric", month: "short", day: "numeric" };

  return (
    <>
      <div className="products">
        <h1>Thomson Reuter Books and Products</h1>
        <p>
          Explore the several books and products offered by Thomson Reuters.
        </p>
      </div>

      <div>
        <h2>All Products</h2>
        {products &&
          products.map((product) => {
            var d = new Date(product.publication_date);
            return (
              <div className="list-product" id={product.id}>
                <Link href={"/products/" + product.id} key={product.id}>
                  <a>
                    <h3>{product.title}</h3>
                  </a>
                </Link>
                <img
                  src={product.image}
                  alt="Product image"
                  width="100"
                  height="100"
                />

                <p>
                  {d.toLocaleDateString("en-US", options) +
                    " | " +
                    product.publisher +
                    " | " +
                    product.author}
                </p>
                <p>{product.description}</p>
                <br />
              </div>
            );
          })}
      </div>
    </>
  );
}
