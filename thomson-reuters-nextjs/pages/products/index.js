import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import image from "next/image";
import { Profiler } from "react";
import SearchFilter from "../../components/SearchFilter";
import PaginationContainer from "../../components/PaginationContainer";

/**
 * getStaticProps allows Next.js to pre-render this page at build time using the props
 *    returned by this function
 */
export const getStaticProps = async () => {
  // MongoDB GraphQL localhost url (Must do 'npm start' inside thomson-reuters-graphql folder)
  const GQL_API = "http://localhost:3030";

  //GraphQL query to fetch the necessary info to displays list of products
  const GQL_QUERY = `
    query{
      products{
        title
        author
        publisher
        publication_date
        image
        id
        description
      }
    }
  `;

  //fetch function to send the graphql query to the graphql server
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

  //returns the product data recieved from the query as a props to the page needed to be rendered
  return {
    props: { products: data.data.products },
  };
};

export default function Products({ products }) {
  //options for the date-time object
  var options = { year: "numeric", month: "short", day: "numeric" };

  return (
    <>
      <div className="products">
        <div className="hero-block">
          <div className="tr-Section tr-Section--grayDark">
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
                    className="tr-Image-img"
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
                          <p className="tr-Eyebrow u-typographySmallCaps">
                            Explore our products
                          </p>
                        </div>
                        <div className="tr-VerticalSpacing tr-VerticalSpacing--m">
                          <h1 className="tr-Heading tr-Heading--xl">
                            Thomson Reuters Books and Products
                            <br></br>
                          </h1>
                        </div>
                        <div className="tr-VerticalSpacing tr-VerticalSpacing--l">
                          <div className="tr-RichText tr-RichText--compact">
                            Explore the several books and products offered by
                            Thomson Reuters.
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
        </div>
      </div>
      <div className="section aem-GridColumn aem-GridColumn--default--12">
        <div className="tr-Section tr-Section--white">
          <div className="tr-Section-inner">
            <div className="tr-VerticalSpacing tr-VerticalSpacing--xl">
              <div className="tr-SearchFilters-title tr-FiltersSection-title ">
                <h2>
                  <b>Search Results</b>
                </h2>
              </div>
              <div className="tr-Grid tr-Grid--1434">
                <div className="tr-Grid-items">
                  <div className="tr-Grid-item">
                    <SearchFilter />
                  </div>
                  <div className="tr-Grid-item">
                    <div className="tr-CleanFiltersSection">
                      <div data-react-from-markup-container="">
                        <div
                          data-rehydratable="tr-CleanFilters"
                          data-prop-clear-all-label="Clear all"
                          data-prop-selected-filters-label="Selected filters:"
                          className="tr-CleanFilters"
                        >
                          <span className="tr-CleanFilters-selectedFilters tr-Typography tr-Typography--undefined tr-Typography--left">
                            Selected filters:
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tr-SearchResults"
                      style={{ "padding-right": "20px" }}
                    >
                      <div className="tr-ProductInfo-heading"></div>
                      <div className="tr-SearchResults-results">
                        {products &&
                          products.map((product) => {
                            var d = new Date(product.publication_date);
                            return (
                              <div className="tr-ProductInfo-container">
                                <div className="tr-FlexGrid-containerFluid">
                                  <div className="tr-FlexGrid-row">
                                    <div className="tr-FlexGrid-col-md-12 tr-FlexGrid-col-lg-12">
                                      <div className="tr-FlexGrid-row">
                                        <div
                                          className="list-product"
                                          id={product.id}
                                        >
                                          <div className="left-float">
                                            <div className="tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-4 tr-FlexGrid-col-lg-3">
                                              <div className="tr-VerticalSpacing tr-VerticalSpacing--xs">
                                                <img
                                                  className="tr-ProductInfoImage-img"
                                                  src={product.image}
                                                  alt="Product image"
                                                  // width="100"
                                                  // height="100"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="product-desc tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-6 tr-FlexGrid-col-lg-7">
                                            <div className="tr-Typography tr-Typography--s tr-Typography--left">
                                              <div className="tr-ProductInfoDetail-titleLink">
                                                <a
                                                  href={
                                                    "/products/" + product.id
                                                  }
                                                  key={product.id}
                                                  className="tr-Anchor tr-Link tr-Link--inline"
                                                >
                                                  <h2 className="tr-Heading tr-Heading--s">
                                                    <strong>
                                                      {product.title}
                                                    </strong>
                                                  </h2>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="tr-VerticalSpacing tr-VerticalSpacing--xs">
                                              <div className="tr-ProductInfoDetail-subtitle">
                                                <div className="tr-Typography tr-Typography--xxxs tr-Typography--left">
                                                  {d.toLocaleDateString(
                                                    "en-US",
                                                    options
                                                  ) +
                                                    " | " +
                                                    product.publisher +
                                                    " | " +
                                                    product.author.join(", ")}
                                                </div>
                                              </div>
                                            </div>
                                            <div className="tr-VerticalSpacing tr-VerticalSpacing--xs">
                                              <div className="tr-Typography tr-Typography--xxs tr-Typography--left">
                                                {product.description}
                                              </div>
                                            </div>
                                            <br />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <PaginationContainer />
          </div>
        </div>
      </div>
    </>
  );
}
