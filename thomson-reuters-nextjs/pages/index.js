import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="title-section tr-Section">
        <div className="tr-Poster tr-Poster--1 poster-section">
          <div className="tr-Poster-image">
            <div
              className="tr-Image tr-Image--cover tr-Image--anchorC "
              style={{
                "background-image":
                  "url(https://thomsonreuters.scene7.com/is/image/thomsonreutersPROD/tr1429547-01a-2880x1100.hero-m.jpg)",
              }}
            >
              <img
                class="tr-Image-img"
                alt=""
                src="https://thomsonreuters.scene7.com/is/image/thomsonreutersPROD/tr1429547-01a-2880x1100.hero-m.jpg"
                srcset="https://thomsonreuters.scene7.com/is/image/thomsonreutersPROD/tr1429547-01a-2880x1100.hero-m.jpg 1440w, https://thomsonreuters.scene7.com/is/image/thomsonreutersPROD/tr1429547-01a-2880x1100.hero-m-nrw.jpg 375w"
                loading="lazy"
              />
            </div>
          </div>
          <div className="tr-Poster-content">
            <div class="tr-Poster-contentInner">
              <div class="tr-Grid tr-Grid--712512 tr-Grid--gutterlessAtNarrow">
                <div class="tr-Grid-items">
                  <div class="tr-Grid-item">
                    <div class="tr-VerticalSpacing tr-VerticalSpacing--m">
                      <h1 class="tr-Heading tr-Heading--xl">
                        <b>Thomson Reuters GraphQL POC NextJS App</b>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="covid-section tr-Section tr-Section--grayDark">
        <div className="tr-Section-inner">
          <div className="tr-VerticalSpacing tr-VerticalSpacing--m">
            <div className="tr-Header">
              <div className="tr-Header-eyebrow">
                <p className="tr-Eyebrow u-typographySmallCaps"></p>
              </div>
              <div className="tr-Header-heading">
                <div className="tr-VerticalSpacing tr-VerticalSpacing--xs">
                  <h2 className="tr-Heading tr-Heading--m">
                    <b>Stay current with COVID-19 Canada Resource Centre.</b>
                  </h2>
                </div>
              </div>

              <div className="tr-Header-standfirst">
                <p className="tr-Standfirst">
                  Thomson Reuters information to help support you and your
                  business.
                </p>
              </div>
              <div className="tr-Header-callToAction">
                <div className="tr-VerticalSpacing tr-VerticalSpacing--m">
                  <a
                    className="tr-Anchor tr-Link tr-Link--withIcon tr-Link--primary"
                    href="https://www.thomsonreuters.ca/en/covid-19.html"
                  >
                    <span className="tr-Link-inner">
                      Click here to learn more.
                    </span>
                    <div className="tr-Link-icon">
                      <span className="tr-Svg">
                        <span className="tr-Svg-inner">
                          <svg aria-hidden="true" viewBox="0 0 24 24">
                            <g
                              className="nc-icon-wrapper"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                d="M2 12h20"
                                data-cap="butt"
                                data-color="color-2"
                              ></path>
                              <path
                                d="M15 5l7 7-7 7"
                                stroke-linecap="square"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-blog tr-Section tr-Section--white">
        <div className="tr-Section-inner">
          <div className="tr-PairedCard">
            <div className="textcard-base">
              <div className="tr-CardBase-inner">
                <div className="tr-PairedCard-content">
                  <div className="card-image tr-PairedCard-image">
                    <div
                      className="tr-Image tr-Image--cover tr-Image--anchorC"
                      style={{
                        "background-image":
                          "url(https://www.thomsonreuters.com/en-us/posts/wp-content/uploads/sites/20/2020/10/business-development-800x450.jpg)",
                      }}
                    >
                      <img
                        className="tr-Image-img"
                        alt=""
                        src="https://www.thomsonreuters.com/en-us/posts/wp-content/uploads/sites/20/2020/10/business-development-800x450.jpg"
                        srcset="https://www.thomsonreuters.com/en-us/posts/wp-content/uploads/sites/20/2020/10/business-development-800x450.jpg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="card-content tr-PairedCard-contentInner">
                    <div className="tr-TextCardBase-content">
                      <div className="tr-TextCardBase-body">
                        <div className="tr-TextCardBase-heading">
                          <h3 className="tr-Heading tr-Heading--xs">
                            <strong>Thomson Reuter Blogs</strong>
                          </h3>
                        </div>
                        <div class="tr-TextCardBase-description">
                          <p>
                            Stay up-to-date with the latest developments from
                            the Thomson Reuter Community
                          </p>   
                          <Link href="/blogs">
                            <a class="link-button tr-Anchor tr-Button tr-Button--primary ">
                              <span class="tr-Button-body">Blogs</span>
                            </a>
                            {/* <button style={{ cursor: "pointer" }}>Blogs</button> */}
                          </Link>
                        </div>
                      </div>
                      <div class="tr-TextCardBase-footer"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <h2>Thomson Reuter Blogs</h2>
              <p>
                Stay up-to-date with the latest developments from the Thomson
                Reuter Community
              </p>
              <Link href="/blogs">
                <button style={{ cursor: "pointer" }}>Blogs</button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="home-products tr-Section tr-Section--grayLightest">
        <div className="tr-Section-inner">
          <div className="tr-PairedCard">
            <div className="textcard-base">
              <div className="tr-CardBase-inner">
                <div className="tr-PairedCard-content tr-PairedCard-content-product ">
                  <div className="card-image tr-PairedCard-image">
                    <div
                      className="tr-Image tr-Image--cover tr-Image--anchorC"
                      style={{
                        "background-image":
                          "url(https://www.thomsonreuters.com/en-us/posts/wp-content/uploads/sites/20/2019/07/blockchain-innovator-940x528-800x450-1-800x450.jpg)",
                      }}
                    >
                      <img
                        className="tr-Image-img"
                        alt=""
                        src="https://www.thomsonreuters.com/en-us/posts/wp-content/uploads/sites/20/2019/07/blockchain-innovator-940x528-800x450-1-800x450.jpg"
                        srcset="https://www.thomsonreuters.com/en-us/posts/wp-content/uploads/sites/20/2019/07/blockchain-innovator-940x528-800x450-1-800x450.jpg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="card-content tr-PairedCard-contentInner">
                    <div className="tr-TextCardBase-content">
                      <div className="tr-TextCardBase-body">
                        <div className="tr-TextCardBase-heading">
                          <h3 className="tr-Heading tr-Heading--xs">
                            <strong>Thomson Reuter Products</strong>
                          </h3>
                        </div>
                        <div class="tr-TextCardBase-description">
                          <p>
                            Learn more about the products that legal, tax, and
                            business professionals rely on to deliver their best
                            work.
                          </p>
                          <Link href="/products">
                            <a class="link-button tr-Anchor tr-Button tr-Button--primary ">
                              <span class="tr-Button-body">Products</span>
                            </a>
                            {/* <button style={{ cursor: "pointer" }}>Products</button> */}
                          </Link>
                        </div>
                      </div>
                      <div class="tr-TextCardBase-footer"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/*         <h2>Thomson Reuter Products</h2>
        <p>
          Learn more about the products that legal, tax, and business
          professionals rely on to deliver their best work.
        </p>
        <Link href="/products">
          <button style={{ cursor: "pointer" }}>Products</button>
        </Link>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
