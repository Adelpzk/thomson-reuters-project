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
          <div className="hero-block"> 
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
      <div className= "section aem-GridColumn aem-GridColumn--default--12">
      <div className="tr-Section tr-Section--white">
      <div className="tr-Section-inner">
       <div className = "tr-SearchFilters-title tr-FiltersSection-title "> 
        <h2>All Products</h2>
      </div> 
      <div className = "tr-Grid tr-Grid--1434">
      <div className = "tr-Grid-items">  
       <div className="tr-Grid-item">
                <div className="tr-SearchFilters">
                    <div className="tr-SearchFilters-title tr-FiltersSection-title">Filters</div>

        <div data-react-from-markup-container="" className="tr-FiltersSection-borders">
          <button className="tr-FiltersSection-heading" aria-expanded="false"><span className="tr-Typography tr-Typography--undefined tr-Typography--left"><strong>Jurisdiction</strong></span><span className="tr-FiltersSection-expandButton tr-Typography tr-Typography--xs tr-Typography--left">+</span></button>
        </div>
    
        
        <div data-react-from-markup-container="" class="tr-FiltersSection-borders">
          <button className="tr-FiltersSection-heading" aria-expanded="false"><span className="tr-Typography tr-Typography--undefined tr-Typography--left"><strong>Practice area</strong></span><span className="tr-FiltersSection-expandButton tr-Typography tr-Typography--xs tr-Typography--left">+</span></button>
        </div>
    
        
        <div data-react-from-markup-container="" class="tr-FiltersSection-borders">
          <button className="tr-FiltersSection-heading" aria-expanded="false"><span className="tr-Typography tr-Typography--undefined tr-Typography--left"><strong>Product type</strong></span><span className="tr-FiltersSection-expandButton tr-Typography tr-Typography--xs tr-Typography--left">+</span></button>
        </div>
    
        
        <div data-react-from-markup-container="" class="tr-FiltersSection-borders">
          <button className="tr-FiltersSection-heading" aria-expanded="false"><span className="tr-Typography tr-Typography--undefined tr-Typography--left"><strong>Publisher</strong></span><span className="tr-FiltersSection-expandButton tr-Typography tr-Typography--xs tr-Typography--left">+</span></button>
        

        <div><div role="group" aria-label="Are these results helpful?" className="QSI__EmbeddedFeedbackContainer" style= {{"margin-top": "10px", "white-space": "normal"}}><fieldset><label tabindex="-1" className="QSI__EmbeddedFeedbackContainer_QuestionText" style={{"line-height": "1em", "margin": "0px 0.7em 0px 0px", "width": "auto", "font-size": "inherit", "font-weight": "normal", "font-style": "normal", "display": "inline", "color": "rgb(50, 54, 58)"}}>Are these results helpful?</label><div className="QSI__EmbeddedFeedbackContainer_Thumbs" style={{"display": "inline-block", "margin-right": "5px"}}><button className="QSI__EmbeddedFeedbackContainer_SVGButton" title="Thumbs Up" style={{"font": "inherit", "background": "transparent", "border": "none", "padding": "0px", "vertical-align": "middle", "margin": "0px 0.6em 0px 0px", "cursor": "pointer"}}><svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" fill="" viewBox="0 0 21 20" alt="Thumbs Up"><title>Thumbs Up</title><path fill="rgba(255, 255, 255, 1)" fill-rule="evenodd" d="M5.5 17.755c.542.407 1.199.671 1.918.735l6.311.561a3.75 3.75 0 003.803-2.315l2.252-5.505c.875-2.138-.698-4.48-3.008-4.48H14.5l-.085-.001h-.797a.183.183 0 01-.1-.026c-.014-.009-.017-.015-.018-.021A5.857 5.857 0 0113.25 5V3A2.75 2.75 0 0010.5.25H9a.75.75 0 00-.75.75v3.882a3.187 3.187 0 01-2.457 3.102c-.1.024-.199.054-.293.09V8a.75.75 0 00-.75-.75h-4A.75.75 0 000 8v10c0 .414.336.75.75.75h4A.75.75 0 005.5 18v-.245z" clip-rule="evenodd"></path><path fill="rgba(64,64,64,1)" fill-rule="evenodd" d="M5.5 17.755c.542.407 1.199.671 1.918.735l6.311.561a3.75 3.75 0 003.803-2.315l2.252-5.505c.875-2.138-.698-4.48-3.008-4.48H14.5l-.085-.001h-.797a.183.183 0 01-.1-.026c-.014-.009-.017-.015-.018-.021A5.857 5.857 0 0113.25 5V3A2.75 2.75 0 0010.5.25H9a.75.75 0 00-.75.75v3.882a3.187 3.187 0 01-2.457 3.102c-.1.024-.199.054-.293.09V8a.75.75 0 00-.75-.75h-4A.75.75 0 000 8v10c0 .414.336.75.75.75h4A.75.75 0 005.5 18v-.245zM9.75 1.75v3.132a4.687 4.687 0 01-3.614 4.562.825.825 0 00-.636.803v4.508a2.25 2.25 0 002.05 2.241l2.991.266a2.25 2.25 0 01-.86-2.612l2.141-6.065c.12-.341.303-.647.533-.907a1.522 1.522 0 01-.29-.535A7.355 7.355 0 0111.75 5V3c0-.69-.56-1.25-1.25-1.25h-.75zM4 8.75H1.5v8.5H4v-8.5zm9.862 8.807l-.275-.024a.749.749 0 00-.17-.157l-2.03-1.353a.75.75 0 01-.291-.873l2.14-6.066a1.25 1.25 0 011.16-.834h2.38a1.75 1.75 0 011.62 2.413l-2.252 5.505a2.25 2.25 0 01-2.282 1.389z" clip-rule="evenodd"></path></svg></button><button class="QSI__EmbeddedFeedbackContainer_SVGButton" title="Thumbs Down" style= {{"font": "inherit", "background": "transparent", "border": "none", "padding": "0px", "vertical-align": "middle", "margin": "0px 0.6em 0px 0px", "cursor": "pointer"}}><svg xmlns="http://www.w3.org/2000/svg" fill="" width="1.7em" height="1.7em" viewBox="0 0 21 20" alt="Thumbs Down"><title>Thumbs Down</title><path fill="rgba(255, 255, 255, 1)" fill-rule="evenodd" d="M15.5 2.245a3.736 3.736 0 00-1.918-.735L7.271.949a3.75 3.75 0 00-3.803 2.315L1.216 8.77c-.875 2.138.698 4.48 3.008 4.48H6.5l.085.001h.797c.049 0 .083.014.1.025.014.01.016.016.018.022.118.385.25.977.25 1.703v2a2.75 2.75 0 002.75 2.75H12a.75.75 0 00.75-.75v-3.882a3.187 3.187 0 012.457-3.102c.1-.024.199-.054.293-.09V12c0 .414.336.75.75.75h4A.75.75 0 0021 12V2a.75.75 0 00-.75-.75h-4a.75.75 0 00-.75.75v.245z" clip-rule="evenodd"></path><path fill="rgba(64,64,64,1)" fill-rule="evenodd" d="M15.207 12.015c.1-.023.198-.053.293-.089V12c0 .414.336.75.75.75h4A.75.75 0 0021 12V2a.75.75 0 00-.75-.75h-4a.75.75 0 00-.75.75v.126a3.737 3.737 0 00-1.755-.717L7.433.567a3.75 3.75 0 00-3.988 2.35L1.136 8.816c-.834 2.132.738 4.435 3.027 4.435h3.38c.092.284.207.823.207 1.75v2a2.75 2.75 0 002.75 2.75H12a.75.75 0 00.75-.75v-3.882a3.187 3.187 0 012.457-3.103zM11.25 18.25v-3.132a4.687 4.687 0 013.614-4.563.825.825 0 00.636-.803V5.126a2.25 2.25 0 00-1.953-2.23l-6.314-.842a2.25 2.25 0 00-2.392 1.41L2.533 9.362a1.75 1.75 0 001.63 2.388h3.423c.053 0 .108.002.164.008v-.064a1.25 1.25 0 00-1.044-1.233l-1.33-.222a.75.75 0 01.247-1.48l1.33.222a2.75 2.75 0 012.297 2.713V17c0 .69.56 1.25 1.25 1.25h.75zm5.75-7v-8.5h2.5v8.5H17z" clip-rule="evenodd"></path></svg></button></div></fieldset></div></div>
    

        </div>   
        </div>
        </div> 
      <div className = "tr-Grid-item">
      <div class="tr-CleanFiltersSection">
                        <div data-react-from-markup-container="">
                            <div data-rehydratable="tr-CleanFilters" data-prop-clear-all-label="Clear all" data-prop-selected-filters-label="Selected filters:" className="tr-CleanFilters"><span className="tr-CleanFilters-selectedFilters tr-Typography tr-Typography--undefined tr-Typography--left">Selected filters:</span></div>
                        </div>
                    </div>
        <div 
          className = "tr-SearchResults"
          style = {{"padding-right": "20px"}}
        >
        <div className = "tr-ProductInfo-heading"></div>
        <div className = "tr-SearchResults-results">  
        {products &&
          products.map((product) => {
            var d = new Date(product.publication_date);
            return (
              <div className ="tr-ProductInfo-container">
                <div className = "tr-FlexGrid-containerFluid">
                  <div className = "tr-FlexGrid-row">
                    <div className = "tr-FlexGrid-col-md-12 tr-FlexGrid-col-lg-12">
                      <div className ="tr-FlexGrid-row">

                        <div className="list-product" id={product.id}>
                          <div className ="tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-4 tr-FlexGrid-col-lg-3">
                            <div className ="tr-VerticalSpacing tr-VerticalSpacing--xs">
                              <img className ="tr-ProductInfoImage-img"
                                src={product.image}
                                alt="Product image"
                                // width="100"
                                // height="100"
                              />
                            </div>
                          </div>
                          <div className = "tr-FlexGrid-col-sm-12 tr-FlexGrid-col-md-6 tr-FlexGrid-col-lg-7">
                            <div className ="tr-Typography tr-Typography--s tr-Typography--left">
                              <div className="tr-ProductInfoDetail-titleLink">
                                <a href={"/products/" + product.id} key={product.id} className ="tr-Anchor tr-Link tr-Link--inline">
                                    <h2 className = "tr-Heading tr-Heading--s"><strong>{product.title}</strong></h2>
                                </a>
                              </div>
                            </div>
                            <div className = "tr-VerticalSpacing tr-VerticalSpacing--xs">
                              <div className ="tr-ProductInfoDetail-subtitle">
                                <div className = "tr-Typography tr-Typography--xxxs tr-Typography--lef">
                                  
                                  {d.toLocaleDateString("en-US", options) +
                                    " | " +
                                    product.publisher +
                                    " | " +
                                    product.author}
                                </div>
                              </div>
                            </div>
                            <div className = "tr-VerticalSpacing tr-VerticalSpacing--xs">
                              <div className = "tr-Typography tr-Typography-xxs tr-Typography--left">
                                {product.description}
                              </div>
                            </div>
                            <br/>
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
        </div>  
        </div> 
        </div>
        </div>
    </>
  );
}
