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
      {/* <div className="products"> */}
      
        {/* <div className="hero-block"> */}
          <div className= "tr-Section tr-Section--grayDark">
          <div className="tr-Poster tr-Poster--s">
          <div className="tr-Poster-image">
            <div
              className="tr-Image tr-Image--cover tr-Image--anchorC "
              style={{
                "background-image":
                  "url(https://www.thomsonreuters.com/content/dam/ewp-m/images/image-library/en/photography/21760721744-6a4e1b628d-o.jpg.transform/hero-s/q90/image.jpg)",
              }}
            >
              <img
                class="tr-Image-img"
                alt=""
                src="https://www.thomsonreuters.com/content/dam/ewp-m/images/image-library/en/photography/21760721744-6a4e1b628d-o.jpg.transform/hero-s/q90/image.jpg"
                srcset="https://www.thomsonreuters.com/content/dam/ewp-m/images/image-library/en/photography/21760721744-6a4e1b628d-o.jpg.transform/hero-s/q90/image.jpg 1440w, https://www.thomsonreuters.com/content/dam/ewp-m/images/image-library/en/photography/21760721744-6a4e1b628d-o.jpg.transform/hero-s/q90/image.jpg 375w"
                loading="lazy"
              />
            </div>
          </div>
            <div className="tr-Poster-content">
                <div className="tr-Poster-contentInner">
                    <div className="tr-Grid tr-Grid--712512 tr-Grid--gutterlessAtNarrow">
                        <div className="tr-Grid-items">
                            <div className="tr-Grid-item">
                                <div className="tr-VerticalSpacing tr-VerticalSpacing--xs">
                                    <p className="tr-Eyebrow u-typographySmallCaps">Explore our products</p>
                                </div>
    <div className="tr-VerticalSpacing tr-VerticalSpacing--m">
        <h1 className="tr-Heading tr-Heading--xl">
        Thomson Reuter Books and Products
        <br></br>
    </h1>
    </div>
    <div className="tr-VerticalSpacing tr-VerticalSpacing--l">
        <div className="tr-RichText tr-RichText--compact">
          Explore the several books and products offered by Thomson Reuters.
        </div>
      </div>
      <div className="tr-VerticalSpacing tr-VerticalSpacing--m">
        <div className="tr-Group">
            <div className="tr-Group-inner"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>    
</div>
</div>
</div>
{/* </div> */}



        {/* <h1>Thomson Reuter Books and Products</h1>
        <p>
          Explore the several books and products offered by Thomson Reuters.
        </p>
      </div> */}

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
