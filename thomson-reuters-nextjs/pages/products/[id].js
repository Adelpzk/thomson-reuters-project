import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

/**
 * getStaticPaths function allows you to specify dynamic routes to pre-render pages based on paths data.
 * In this case, the function creates paths using product ids (localhost:3000/products/[id]) and uses
 *    the Details compoenent to make the pages
 */
export const getStaticPaths = async () => {
  const GQL_API = "http://localhost:3030";
  const GQL_QUERY = `
    query{
      products{
        id
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
  //console.log(data);
  const paths = data.data.products.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

/**
 * getStaticProps allows Next.js to pre-render this page at build time using the props
 *    returned by this function
 */
export const getStaticProps = async (context) => {
  const id = context.params.id;

  // MongoDB GraphQL localhost url (Must do 'npm start' inside thomson-reuters-graphql folder)
  const GQL_API = "http://localhost:3030";

  //GraphQL query to fetch the necessary info to display on the individual product page accordign to product id
  const GQL_QUERY = `
    query{
      products(id: ${id}){
        title
        author
        publisher
        publication_date
        image
        text
        id
        price
        jurisdiction
        ibsn
      }
    }
  `;

  // Wordpress GraphQL url
  const GQL_API_BLOG = "http://frp.vlb.mybluehost.me/graphql";

  //GraphQL query to fetch the necessary info to display a blog udpate on the page
  const GQL_QUERY_BLOG = `
  query{
    posts(where: {title:"agencies issue faqs (part 47) about mandatory preventive coverage of hiv prep"}){
      nodes {
        postId
          title
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        author {
          node {
            name
          }
        }
        date
        content
      }
    }
  }
`;

  //fetch function to send the graphql query to the MongoDB graphql server
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

  //fetch function to send the graphql query to the wordpress graphql server
  const res_blog = await fetch(GQL_API_BLOG, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GQL_QUERY_BLOG,
    }),
  });
  const data_blog = await res_blog.json();

  //returns the product data and blogs data recieved from the query as a props to the page needed to be rendered
  return {
    props: {
      product: data.data.products[0],
      blog: data_blog.data.posts.nodes[0],
    },
  };
};

const Details = ({ product, blog }) => {
  var options = { year: "numeric", month: "numeric", day: "numeric" };
  var d = new Date(product.publication_date);

  var d_blog = new Date(blog.date);
  var options_blog = { year: "numeric", month: "short", day: "numeric" };

  return (
    <>
      <div className="product">
        <div className="tr-Section">
          <div className="tr-Section-inner">
            <div className="tr-FlexGrid-containerFluid tr-ProductDetailSummary-innerCard">
              {/* <h1>Details Page</h1> */}
              <div id="contentWrapper" className="tr-FlexFrid-row">
                <div
                  id="contentDesktop"
                  className="tr-FlexGrid-hidden-xs tr-FlexGrid-hidden-sm tr-FlexGrid-col-md-12 tr-FlexGrid-col-lg-12"
                >
                  <div className="tr-FlexGrid-row">
                    <div className="grid-col tr-FlexGrid-col-xs-12 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-3 tr-FlexGrid-col-lg-3">
                      <div className="tr-ProductDetailSummary-spaceGroup tr-FlexGrid-row">
                        <div
                          bottom="md"
                          className="tr-FlexGrid-col-xs-12 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-12 tr-FlexGrid-col-lg-12"
                        >
                          <div
                            className="tr-Image tr-Image--cover tr-Image--anchorC"
                            style={{
                              backgroundSize: "cover",
                              height: "100%",
                            }}
                          >
                            <img
                              // className = "tr-Image-img"
                              src={product.image}
                              alt="Product image"
                              height="300"
                            ></img>
                          </div>
                        </div>

                        <div className="tr-VerticalSpacing tr-VerticalSpacing--m">
                          <div className="tr-FlexGrid-row">
                            <div
                              bottom="md"
                              className="tr-FlexGrid-col-xs-12 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-12 tr-FlexGrid-col-lg-12"
                            >
                              <div className="tr-ProductDetailSummary-itemDisplay">
                                <strong>Product details</strong>
                              </div>
                            </div>
                          </div>
                          <hr className="tr-HorizontalRule"></hr>
                          <div className="tr-ProductDetailSummary-spaceGroup tr-ProductDetailSummary-productDetails tr-FlexGrid-row">
                            <div className="tr-FlexGrid-col-xs-12 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-12 tr-FlexGrid-col-lg-12">
                              <div className="tr-ProductDetailSummary-itemDisplay">
                                Publisher: <strong>{product.publisher}</strong>
                              </div>
                            </div>
                            <div className="tr-FlexGrid-col-xs-12 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-12 tr-FlexGrid-col-lg-12">
                              <div className="tr-ProductDetailSummary-itemDisplay">
                                Jurisdiction:
                                <strong> {product.jurisdiction}</strong>
                              </div>
                            </div>
                            <div className="tr-FlexGrid-col-xs-12 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-12 tr-FlexGrid-col-lg-12">
                              <div className="tr-ProductDetailSummary-itemDisplay">
                                Publication date:
                                <strong>
                                  {" "}
                                  {d.toLocaleDateString("en-US", options)}
                                </strong>
                              </div>
                            </div>
                            {product.ibsn != null ? (
                              <div className="tr-FlexGrid-col-xs-12 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-12 tr-FlexGrid-col-lg-12">
                                <div className="tr-ProductDetailSummary-itemDisplay">
                                  IBSN:
                                  <strong> {product.ibsn}</strong>
                                </div>
                              </div>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid-col tr-FlexGrid-col-xs-12 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-5 tr-FlexGrid-col-lg-5">
                      <div className="tr-FlexGrid-col-xs-12 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-3 tr-FlexGrid-col-lg-12">
                        <div className="tr-VerticalSpacing tr-VerticalSpacing--m">
                          <div className="tr-ProductDetailSummary-publisherWrapper">
                            <span className="tr-ProductDetailSummary-publisher">
                              Carswell
                            </span>
                          </div>
                          <h1 className="tr-Heading tr-Heading--m">
                            <strong>{product.title}</strong>
                          </h1>
                          <div className="tr-ProductDetailSummary-authors">
                            {"Author: " + product.author.join(", ")}
                          </div>
                        </div>
                        <div className="tr-VerticalSpacing tr-VerticalSpacing--m">
                          <div className="tr-Typography tr-Typography--undefined tr-Typography--left tr-pdp-product-description">
                            {parse(product.text)}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid-col tr-FlexGrid-col-xs-12 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-4 tr-FlexGrid-col-lg-4">
                      <div data-react-from-markup-container="true">
                        <div
                          className="tr-ProductPricing"
                          data-rehydratable="tr-ProductPricing"
                          data-prop-translations='{"ProductPricing.ContactSalesButtonLabel":"Contact Sales","ProductPricing.ContactSalesButtonUrl":"/","ProductPricing.PurchaseOptionLabel":"Purchase option","ProductPricing.StandardPricePurchaseOption":"Purchase the current version, no updates will be sent.","ProductPricing.FormatLabel":"Format","ProductPricing.AddToCartButtonLabel":"Add to cart","ProductPricing.AddToCartButtonUrl":"/","ProductPricing.PrintProductDropdownLabel":"Format","ProductPricing.PrintProductDropdownLabel2":"Quantity","ProductPricing.SoftwareProductDropdownLabel":"Size of your Firm","ProductPricing.SoftwareProductDropdownLabel2":"Users","ProductPricing.CartModalQuantityLabel":"Quantity","ProductPricing.CartModalPriceLabel":"Price","ProductPricing.CartModalPriceSuffix":"each","ProductPricing.CartModalText":"1 item added to cart","ProductPricing.CartModalCloseButtonLabel":"Close","ProductPricing.CartModalCheckoutButtonLabel":"Continue to cart","ProductPricing.CartModalCheckoutUrl":"/content/ue/en-ca/cart.html","ProductPricing.OneTimePurchase":"One-time purchase","ProductPricing.OneTimePurchaseWithSub":"One-time purchase with subscription","ProductPricing.TermLabel":"Term agreement:","ProductPricing.TermUrlText":"Subscription Terms and Conditions.","ProductPricing.TermBtnText":"I agree to these terms","ProductPricing.TermUrl":"https://store.thomsonreuters.ca/en-ca/terms","ProductPricing.PurchaseOptionsLabel":"Purchase options","ProductPricing.ProductAddedToCartLabel":"is added to the cart","ProductPricing.ErrorMessageTitle":"Can&apos;t add to cart","ProductPricing.ErrorMessageDescription":"There’s an issue adding items to your cart. Call us at 1-800-387-5164 for help completing your order.","ProductPricing.ErrorButtonContent":"Close","ProductPricing.ContactUsLabel":"Contact us for pricing","ProductPricing.ContactUsDescription":"Call 1-800-387-5164, select option 1","ProductPricing.MaxQtyError":"To order more than 99 items, call us at 1-800-387-5164.","ProductPricing.CartModalImageUrl":"https://products.thomsonreuters.ca/BookCovers/30834671.gif","ProductPricing.TermContent":"During your subscription term, you will receive subscription services consisting of automatic shipments of updates and supplements to the print product, including but not limited to pocket parts, pamphlets, replacement volumes, or looseleaf pages. ​","ProductPricing.TermCancel":"You may cancel your subscription as outlined in our","ProductPricing.StandardPricePurchaseWithSub":"Purchase the current version, any updates will be sent and billed at a future rate."}'
                        >
                          <div className="tr-FlexGrid-containerFluid">
                            <div className="quantity-row tr-ProductPricing-quantityContent">
                              <div className="tr-VerticalSpacing tr-VerticalSpacing--l">
                                <div className="tr-VerticalSpacing tr-VerticalSpacing--xs">
                                  <div className="tr-FlexGrid-row">
                                    <div className="tr-FlexGrid-row">
                                      <div className="tr-FlexGrid-col-xs-4 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-12 tr-FlexGrid-col-lg-12">
                                        <div className="tr-ProductPricing-quantityLabel">
                                          <div className="tr-Typography tr-Typography--xs tr-Typography--left">
                                            <strong>Quantity</strong>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="tr-FlexGrid-col-xs-8 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-12 tr-FlexGrid-col-lg-12">
                                        <div className="tr-ProductQuantityInput-counterWrapper">
                                          <button
                                            aria-label="Decrease product quantity"
                                            title="Decrease product quantity"
                                            className="tr-ProductQuantityInput-counterButton tr-ProductQuantityInput-counterButtonDisabled"
                                            disabled=""
                                          >
                                            -
                                          </button>
                                          <label
                                            for="productQuantity"
                                            className="tr-ProductQuantityInput-visuallyHidden"
                                          >
                                            Product quantity
                                          </label>
                                          <input
                                            id="productQuantity"
                                            className="tr-ProductQuantityInput-counterDisplay"
                                            min="1"
                                            max="99"
                                            type="number"
                                            value="1"
                                            readOnly
                                          />
                                          <button
                                            aria-label="Increase product quantity"
                                            title="Increase product quantity"
                                            className="tr-ProductQuantityInput-counterButton"
                                          >
                                            +
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tr-VerticalSpacing tr-VerticalSpacing--m">
                              <div className="tr-VerticalSpacing tr-VerticalSpacing--xs">
                                <div className="tr-FlexGrid-row">
                                  <div className="tr-Typography tr-Typography--xs tr-Typography--left">
                                    <span className="tr-ProductPricing-optionsHeading">
                                      Purchase option
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="tr-VerticalSpacing tr-VerticalSpacing--m">
                                <div className="tr-ProductPricing-purchaseOptionWrapper tr-FlexGrid-row">
                                  <span>
                                    <div>
                                      <div className="tr-Typography tr-Typography--s tr-Typography--left">
                                        <div className="tr-ProductPricingStandard-optionHeading">
                                          <strong>
                                            <span
                                              className="tr-Price"
                                              lang="en-US"
                                            >
                                              {product.price.toLocaleString(
                                                "en-US",
                                                {
                                                  style: "currency",
                                                  currency: "USD",
                                                }
                                              )}
                                              <span className="tr-PriceTerms"></span>
                                            </span>
                                            <span> - One-time purchase</span>
                                          </strong>
                                        </div>
                                      </div>
                                      <div className="tr-Typography tr-Typography--undefined tr-Typography--left">
                                        Purchase the current version, no updates
                                        will be sent.
                                      </div>
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="tr-ProductPricing-addButtonMobile">
                              <div>
                                <div className="tr-VerticalSpacing tr-VerticalSpacing--m">
                                  <div className="tr-FlexGrid-row">
                                    <div className="tr-ProductPricing-addToCartBtn">
                                      <button
                                        className="tr-Anchor tr-Button tr-Button--primary tr-Button--circular"
                                        title=""
                                        type="button"
                                        id="addToCartBtn"
                                      >
                                        <span className="tr-Button-body">
                                          Add to cart
                                        </span>
                                      </button>
                                      <div
                                        aria-live="polite"
                                        aria-atomic="true"
                                        className="tr-ProductPricing-ariaLiveNotification"
                                      ></div>
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
              </div>
            </div>
          </div>
        </div>
        <div className="tr-Section tr-Section--grayLightest">
          <div className="tr-Section-inner">
            <div className="tr-VerticalSpacing tr-VerticalSpacing--m">
              <div className="tr-Header">
                <div className="tr-Header-eyebrow">
                  <p className="tr-Eyebrow u-typographySmallCaps"></p>
                </div>
                <div className="tr-Header-heading">
                  <div className="tr-VerticalSpacing tr-VerticalSpacing--xs">
                    <h2 className="tr-Heading tr-Heading--m">
                      <b>Latest Blog Update</b>
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="tr-VerticalSpacing tr-VerticalSpacing--m">
              <div className="tr-PairedCard">
                <div className="textcard-base">
                  <div className="tr-CardBase-inner">
                    <div className="tr-PairedCard-content tr-PairedCard-content-product ">
                      <div className="recent-blog-image card-image tr-PairedCard-image">
                        <div
                          className="tr-Image tr-Image--cover tr-Image--anchorC"
                          style={{
                            "background-image": `${blog.featuredImage.node.sourceUrl}`,
                          }}
                        >
                          <img
                            className="tr-Image-img"
                            alt=""
                            src={blog.featuredImage.node.sourceUrl}
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="card-content tr-PairedCard-contentInner">
                        <div className="tr-TextCardBase-content">
                          <div className="tr-TextCardBase-body">
                            <div className="tr-TextCardBase-heading">
                              <h3 className="tr-Heading tr-Heading--xs">
                                <strong>{blog.title}</strong>
                              </h3>
                            </div>
                            <div className="tr-TextCardBase-description">
                              <div className="recent-blog-content">
                                {parse(blog.content)}
                              </div>
                              <p>...</p>
                              <div>
                                <br />
                                {d_blog.toLocaleDateString(
                                  "en-US",
                                  options_blog
                                )}{" "}
                                | {blog.author.node.name}
                              </div>
                              <a
                                href={
                                  "/blogs/" +
                                  encodeURIComponent(
                                    blog.title
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")
                                  )
                                }
                                className="link-button tr-Anchor tr-Button tr-Button--primary "
                              >
                                <span className="tr-Button-body">
                                  Continue Reading
                                </span>
                              </a>
                            </div>
                          </div>
                          {/* <div className="tr-TextCardBase-footer">
                            <div className="tr-ArticleCardFooter">
                              <div className="tr-ArticleCardFooter-dateAndAttribution">
                                {d.toLocaleDateString("en-US", options_blog)} |{" "}
                                {blog.author.node.name}
                              </div>
                            </div>
                          </div> */}
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
    </>
  );
};

export default Details;
