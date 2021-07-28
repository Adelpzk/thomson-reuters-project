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
    props: { product: data.data.products[0] },
  };
};

const Details = ({ product }) => {
  var options = { year: "numeric", month: "short", day: "numeric" };
  var d = new Date(product.publication_date);

  return (
    <>
      <div className="product">
        <div className ="tr-Section">
          <div className = "tr-Section-inner">
            
            <div className = "tr-FlexGrid-containerFluid tr-ProductDetailSummary-innerCard">
            <h1>Details Page</h1>
                <div id="contentWrapper" className = "tr-FlexFrid-row">
                <div id="contentDesktop" className="tr-FlexGrid-hidden-xs tr-FlexGrid-hidden-sm tr-FlexGrid-col-md-12 tr-FlexGrid-col-lg-12"> 
                <div className="tr-FlexGrid-row">
                <div className="tr-FlexGrid-col-xs-12 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-3 tr-FlexGrid-col-lg-3">
                <div className="tr-ProductDetailSummary-spaceGroup tr-FlexGrid-row">
                <div bottom="md" class="tr-FlexGrid-col-xs-12 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-12 tr-FlexGrid-col-lg-12">
                <div className="tr-Image tr-Image--cover tr-Image--anchorC" style={{"background-size": "cover", "height": "100%"}}>
                <img
                  // className = "tr-Image-img"
                  src={product.image}
                  alt="Product image"
                  width="150"
                  height="200"
                ></img>
                </div>
                </div>
                
                <div className="tr-VerticalSpacing tr-VerticalSpacing--m">
                <div className="tr-FlexGrid-row">
                  <div bottom="md" class="tr-FlexGrid-col-xs-12 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-12 tr-FlexGrid-col-lg-12">
                    <div className="tr-ProductDetailSummary-itemDisplay"><strong>Product details</strong></div>
                  </div>
                </div>
                <hr className="tr-HorizontalRule"></hr>
                <div className="tr-ProductDetailSummary-spaceGroup tr-ProductDetailSummary-productDetails tr-FlexGrid-row">
                <div className="tr-FlexGrid-col-xs-12 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-12 tr-FlexGrid-col-lg-12">
                <div className="tr-ProductDetailSummary-itemDisplay">{"Publisher: " + product.publisher}</div>
                </div>
                <div className="tr-FlexGrid-col-xs-12 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-12 tr-FlexGrid-col-lg-12">
                <div className="tr-ProductDetailSummary-itemDisplay">
                      {"Jurisdiction: " + product.jurisdiction}
                </div>
                </div>
                <div className="tr-FlexGrid-col-xs-12 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-12 tr-FlexGrid-col-lg-12">
                <div className="tr-ProductDetailSummary-itemDisplay">
                      {"Publication date: " + d.toLocaleDateString("en-US", options)}
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>

                <div class="tr-FlexGrid-col-xs-12 tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-5 tr-FlexGrid-col-lg-5">
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
                  <span class="tr-ProductDetailSummary-publisher">Carswell</span>
                </div>
                <h1 className = "tr-Heading tr-Heading--m"><strong>{product.title}</strong></h1>
                <div class="tr-ProductDetailSummary-authors">{"Author: " + product.author.join(", ")}</div>
                </div>
                <div>{parse(product.text)}</div>
                <br/>
                </div>
                </div>
                
                <div>
                    
                    {/* {product.ibsn != null ? (
                      <p className="ibsn">{"IBSN: " + product.ibsn}</p>
                    ) : (
                      <></>
                    )} */}
                    <p className="price">{"Price: $" + product.price}</p>
                    
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
