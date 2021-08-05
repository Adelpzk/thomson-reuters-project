import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

export const getStaticPaths = async () => {
  const GQL_API = "http://localhost:3030";
  const GQL_QUERY = `
    query{
      products{
        id
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

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const GQL_API = "http://localhost:3030";
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

  const GQL_API_BLOG = "http://frp.vlb.mybluehost.me/graphql";
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
                          class="tr-FlexGrid-col-xs-12 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-12 tr-FlexGrid-col-lg-12"
                        >
                          <div
                            className="tr-Image tr-Image--cover tr-Image--anchorC"
                            style={{
                              "background-size": "cover",
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
                              class="tr-FlexGrid-col-xs-12 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-12 tr-FlexGrid-col-lg-12"
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

                    <div class="grid-col tr-FlexGrid-col-xs-12 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-5 tr-FlexGrid-col-lg-5">
                      <div class="tr-FlexGrid-col-xs-12 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-3 tr-FlexGrid-col-lg-12">
                        <div class="tr-VerticalSpacing tr-VerticalSpacing--m">
                          {/* <div class="tr-ProductDetailSummary-publisherWrapper">
                                                    <span class="tr-ProductDetailSummary-publisher">Carswell</span>
                                                </div>
                                            
                                            <h1 class="tr-Heading tr-Heading--m">
                                                <strong>ImmQuest</strong>
                                            </h1>
                                            <div class="tr-ProductDetailSummary-authors">Author:
                                                
                                                    <a class="tr-Anchor tr-Link tr-Link--inline authorLink" tabindex="0" href="#" id="Mario Bellissimo" data-biography="Mario D. Bellissimo is a graduate of Osgoode Hall Law School and is a Certified Specialist in Citizenship and Immigration Law and Refugee Protection. He is the founder of BELLISSIMO LAW GROUP PC with a practice focus on litigation and immigration inadmissibility. Mr. Bellissimo has appeared before all levels of immigration tribunals and courts including the Supreme Court of Canada. He is a Past Chair of the Canadian Bar Association National Immigration Law Section and serves on multiple stakeholder committees involving Immigration, Refugees and Citizenship Canada, the Canada Border Services Agency, Service Canada, the Federal Courts, the Department of Justice, the Immigration and Refugee Board and Continuing Legal Education.Mr. Bellissimo is also the author of Canadian Citizenship and Immigration Inadmissibility Law, Second Edition; Canadian Citizenship and Immigration Inadmissibility: Criminal Law Edition; A Practical Guide to Canadian Citizenship and Inadmissibility Law - Immigration Practitioners&amp;#39; Editi" title="">Mario Bellissimo
                                                    </a>
                                                
                                            </div>
                                            <div id="authorDetails-modal" class="authorModal">
                                                <div tabindex="0" id="modalContent" role="dialog" aria-modal="true" class="modal-content">
                                                    <div class="author-modal-header">
                                                    <span class="close">
                                                        <button id="close-button">
                                                        <span class="close-text">Close </span>
                                                        <span class="close-icon">×</span>
                                                        </button>
                                                    </span>
                                                    </div>
                                                    <div class="author-model-content">
                                                        <div class="author-model-title">
                                                            <h1 id="authorDetailsName"></h1>
                                                        </div>
                                                        <div class="author-model-description">
                                                            <p id="authorDetailsBiography"></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>Availability:
                                                <strong>In Stock</strong>
                                            </div> */}

                          <div class="tr-ProductDetailSummary-publisherWrapper">
                            <span class="tr-ProductDetailSummary-publisher">
                              Carswell
                            </span>
                          </div>
                          <h1 className="tr-Heading tr-Heading--m">
                            <strong>{product.title}</strong>
                          </h1>
                          <div class="tr-ProductDetailSummary-authors">
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

                    <div class="grid-col tr-FlexGrid-col-xs-12 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-4 tr-FlexGrid-col-lg-4">
                      <div data-react-from-markup-container="true">
                        <div
                          class="tr-ProductPricing"
                          data-rehydratable="tr-ProductPricing"
                          data-prop-translations='{"ProductPricing.ContactSalesButtonLabel":"Contact Sales","ProductPricing.ContactSalesButtonUrl":"/","ProductPricing.PurchaseOptionLabel":"Purchase option","ProductPricing.StandardPricePurchaseOption":"Purchase the current version, no updates will be sent.","ProductPricing.FormatLabel":"Format","ProductPricing.AddToCartButtonLabel":"Add to cart","ProductPricing.AddToCartButtonUrl":"/","ProductPricing.PrintProductDropdownLabel":"Format","ProductPricing.PrintProductDropdownLabel2":"Quantity","ProductPricing.SoftwareProductDropdownLabel":"Size of your Firm","ProductPricing.SoftwareProductDropdownLabel2":"Users","ProductPricing.CartModalQuantityLabel":"Quantity","ProductPricing.CartModalPriceLabel":"Price","ProductPricing.CartModalPriceSuffix":"each","ProductPricing.CartModalText":"1 item added to cart","ProductPricing.CartModalCloseButtonLabel":"Close","ProductPricing.CartModalCheckoutButtonLabel":"Continue to cart","ProductPricing.CartModalCheckoutUrl":"/content/ue/en-ca/cart.html","ProductPricing.OneTimePurchase":"One-time purchase","ProductPricing.OneTimePurchaseWithSub":"One-time purchase with subscription","ProductPricing.TermLabel":"Term agreement:","ProductPricing.TermUrlText":"Subscription Terms and Conditions.","ProductPricing.TermBtnText":"I agree to these terms","ProductPricing.TermUrl":"https://store.thomsonreuters.ca/en-ca/terms","ProductPricing.PurchaseOptionsLabel":"Purchase options","ProductPricing.ProductAddedToCartLabel":"is added to the cart","ProductPricing.ErrorMessageTitle":"Can&apos;t add to cart","ProductPricing.ErrorMessageDescription":"There’s an issue adding items to your cart. Call us at 1-800-387-5164 for help completing your order.","ProductPricing.ErrorButtonContent":"Close","ProductPricing.ContactUsLabel":"Contact us for pricing","ProductPricing.ContactUsDescription":"Call 1-800-387-5164, select option 1","ProductPricing.MaxQtyError":"To order more than 99 items, call us at 1-800-387-5164.","ProductPricing.CartModalImageUrl":"https://products.thomsonreuters.ca/BookCovers/30834671.gif","ProductPricing.TermContent":"During your subscription term, you will receive subscription services consisting of automatic shipments of updates and supplements to the print product, including but not limited to pocket parts, pamphlets, replacement volumes, or looseleaf pages. ​","ProductPricing.TermCancel":"You may cancel your subscription as outlined in our","ProductPricing.StandardPricePurchaseWithSub":"Purchase the current version, any updates will be sent and billed at a future rate."}'
                        >
                          <div class="tr-FlexGrid-containerFluid">
                            {/* <div class="tr-VerticalSpacing tr-VerticalSpacing--m">
                              <div class="tr-FlexGrid-row">
                                <div class="tr-FlexGrid-row">
                                  <div class="tr-FlexGrid-col-xs-12">
                                    <p class="tr-Typography tr-Typography--s tr-Typography--left">
                                      <strong id="format">Format</strong>
                                    </p>
                                  </div>
                                  <div class="tr-FlexGrid-col-xs-12">
                                    <p class="tr-Typography tr-Typography--xs tr-Typography--left">
                                      Softbound book
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                            <div class="quantity-row tr-ProductPricing-quantityContent">
                              <div class="tr-VerticalSpacing tr-VerticalSpacing--l">
                                <div class="tr-VerticalSpacing tr-VerticalSpacing--xs">
                                  <div class="tr-FlexGrid-row">
                                    <div class="tr-FlexGrid-row">
                                      <div class="tr-FlexGrid-col-xs-4 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-12 tr-FlexGrid-col-lg-12">
                                        <div class="tr-ProductPricing-quantityLabel">
                                          <div class="tr-Typography tr-Typography--xs tr-Typography--left">
                                            <strong>Quantity</strong>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="tr-FlexGrid-col-xs-8 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-12 tr-FlexGrid-col-lg-12">
                                        <div class="tr-ProductQuantityInput-counterWrapper">
                                          <button
                                            aria-label="Decrease product quantity"
                                            title="Decrease product quantity"
                                            class="tr-ProductQuantityInput-counterButton tr-ProductQuantityInput-counterButtonDisabled"
                                            disabled=""
                                          >
                                            -
                                          </button>
                                          <label
                                            for="productQuantity"
                                            class="tr-ProductQuantityInput-visuallyHidden"
                                          >
                                            Product quantity
                                          </label>
                                          <input
                                            id="productQuantity"
                                            class="tr-ProductQuantityInput-counterDisplay"
                                            min="1"
                                            max="99"
                                            type="number"
                                            value="1"
                                            readOnly
                                          />
                                          <button
                                            aria-label="Increase product quantity"
                                            title="Increase product quantity"
                                            class="tr-ProductQuantityInput-counterButton"
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
                            <div class="tr-VerticalSpacing tr-VerticalSpacing--m">
                              <div class="tr-VerticalSpacing tr-VerticalSpacing--xs">
                                <div class="tr-FlexGrid-row">
                                  <div class="tr-Typography tr-Typography--xs tr-Typography--left">
                                    <span class="tr-ProductPricing-optionsHeading">
                                      Purchase option
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="tr-VerticalSpacing tr-VerticalSpacing--m">
                                <div class="tr-ProductPricing-purchaseOptionWrapper tr-FlexGrid-row">
                                  <span>
                                    <div>
                                      <div class="tr-Typography tr-Typography--s tr-Typography--left">
                                        <div class="tr-ProductPricingStandard-optionHeading">
                                          <strong>
                                            <span class="tr-Price" lang="en-US">
                                              {product.price.toLocaleString(
                                                "en-US",
                                                {
                                                  style: "currency",
                                                  currency: "USD",
                                                }
                                              )}
                                              <span class="tr-PriceTerms"></span>
                                            </span>
                                            <span> - One-time purchase</span>
                                          </strong>
                                        </div>
                                      </div>
                                      <div class="tr-Typography tr-Typography--undefined tr-Typography--left">
                                        Purchase the current version, no updates
                                        will be sent.
                                      </div>
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div class="tr-ProductPricing-addButtonMobile">
                              <div>
                                <div class="tr-VerticalSpacing tr-VerticalSpacing--m">
                                  <div class="tr-FlexGrid-row">
                                    <div class="tr-ProductPricing-addToCartBtn">
                                      <button
                                        class="tr-Anchor tr-Button tr-Button--primary tr-Button--circular"
                                        title=""
                                        type="button"
                                        id="addToCartBtn"
                                      >
                                        <span class="tr-Button-body">
                                          Add to cart
                                        </span>
                                      </button>
                                      <div
                                        aria-live="polite"
                                        aria-atomic="true"
                                        class="tr-ProductPricing-ariaLiveNotification"
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

                    {/* <div>
                     {product.ibsn != null ? (
                      <p className="ibsn">{"IBSN: " + product.ibsn}</p>
                    ) : (
                      <></>
                    )} 
                      <p className="price">{"Price: $" + product.price}</p>
                    </div> */}
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
                            <div class="tr-TextCardBase-description">
                              <div className="recent-blog-content">
                                {parse(blog.content)}
                              </div>
                              <p>...</p>
                              <div>
                                <br />
                                {d.toLocaleDateString(
                                  "en-US",
                                  options_blog
                                )} | {blog.author.node.name}
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
                                class="link-button tr-Anchor tr-Button tr-Button--primary "
                              >
                                <span class="tr-Button-body">
                                  Continue Reading
                                </span>
                              </a>
                            </div>
                          </div>
                          {/* <div class="tr-TextCardBase-footer">
                            <div class="tr-ArticleCardFooter">
                              <div class="tr-ArticleCardFooter-dateAndAttribution">
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
