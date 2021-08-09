import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer className="tr-SemanticFooter">
        <div className="site-specific-footer">
          <div data-react-from-markup-container="true">
            <div
              className="tr-SiteFooter"
              data-rehydratable="tr-SiteFooter"
              data-search-form-action="https://www.thomsonreuters.ca/en/search-results.html"
              data-search-form-method="get"
              data-search-input-name="q"
              data-typeahead-url="//content.atomz.com/autocomplete/sp10/05/0d/51?"
            >
              <div className="tr-SiteFooter-inner">
                <form
                  className="tr-SiteFooter-search"
                  action="https://www.thomsonreuters.ca/en/search-results.html"
                  method="get"
                  role="search"
                >
                  <div className="tr-SiteFooter-searchInner">
                    <div
                      className="tr-SearchInput tr-SearchInput--dark"
                      data-auto-focus="false"
                      data-color-theme='"dark"'
                      data-name='"q"'
                      data-placeholder='"Search"'
                      data-rehydratable="tr-SearchInput"
                      data-typeahead="true"
                      data-typeahead-url='"//content.atomz.com/autocomplete/sp10/05/0d/51?"'
                      data-search-label='"Search"'
                      data-value='""'
                      tabindex="-1"
                    >
                      <label
                        className="tr-SearchInput-label u-hiddenVisually"
                        for="searchInput-1"
                      >
                        Search
                      </label>
                      <div className="tr-SearchInput-box">
                        <input
                          className="tr-SearchInput-input"
                          autocomplete="off"
                          placeholder="Search"
                          id="searchInput-1"
                          type="search"
                          name="q"
                          aria-haspopup="true"
                          aria-owns="searchInput-1-typeahead"
                          aria-expanded="false"
                          aria-autocomplete="both"
                          role="combobox"
                          aria-activedescendant=""
                        />
                        <div className="tr-SearchInput-buttons">
                          <button
                            aria-label="Clear search"
                            className="tr-SearchInput-clearButton"
                            type="button"
                          >
                            <div className="tr-SearchInput-icon">
                              <span className="tr-Svg">
                                <span className="tr-Svg-inner">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                  >
                                    <g
                                      className="nc-icon-wrapper"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-linecap="square"
                                      stroke-width="2"
                                    >
                                      <path d="M19 5L5 19M19 19L5 5"></path>
                                    </g>
                                  </svg>
                                </span>
                              </span>
                            </div>
                          </button>
                          <button
                            aria-label="Submit search"
                            className="tr-SearchInput-searchButton"
                            type="submit"
                          >
                            <div className="tr-SearchInput-icon">
                              <span className="tr-Svg">
                                <span className="tr-Svg-inner">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                  >
                                    <g
                                      className="nc-icon-wrapper"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-linecap="square"
                                      stroke-width="2"
                                    >
                                      <path
                                        d="M22 22l-5.6-5.6"
                                        data-color="color-2"
                                      ></path>
                                      <path d="M10 1a9 9 0 1 0 0 18 9 9 0 1 0 0-18z"></path>
                                    </g>
                                  </svg>
                                </span>
                              </span>
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="tr-SearchInput-typeahead" tabindex="-1">
                        <ul
                          className="tr-SearchInput-typeaheadItems"
                          id="searchInput-1-typeahead"
                          role="listbox"
                        ></ul>
                      </div>
                    </div>
                  </div>
                </form>
                <nav className="tr-SiteFooter-lists">
                  <ul className="tr-SiteFooter-listsInner">
                    <li
                      className="tr-SiteFooterNavList"
                      data-rehydratable="tr-SiteFooter.NavList"
                      data-title="Resources"
                    >
                      <button
                        className="tr-SiteFooterNavList-title"
                        role="button"
                        aria-label="Thomas Reuters"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="tr-SiteFooterNavList-text u-typographySmallCaps">
                          Resources
                        </span>
                        <span className="tr-SiteFooterNavList-caret">
                          <span className="tr-Svg">
                            <span className="tr-Svg-inner">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  d="M16 10l-4 4-4-4"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="square"
                                  stroke-width="2"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </button>
                      <ul className="tr-SiteFooterNavList-inner">
                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="https://www.thomsonreuters.ca/en/login.html"
                          >
                            Product logins
                          </a>
                        </li>

                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="http://ir.thomsonreuters.com/phoenix.zhtml?c=76540&p=irol-irhome"
                          >
                            Investor News
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="tr-SiteFooterNavList"
                      data-rehydratable="tr-SiteFooter.NavList"
                      data-title="Products &amp; Services"
                    >
                      <button
                        className="tr-SiteFooterNavList-title"
                        role="button"
                        aria-label="Thomas Reuters"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="tr-SiteFooterNavList-text u-typographySmallCaps">
                          Products &amp; Services
                        </span>
                        <span className="tr-SiteFooterNavList-caret">
                          <span className="tr-Svg">
                            <span className="tr-Svg-inner">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  d="M16 10l-4 4-4-4"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="square"
                                  stroke-width="2"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </button>
                      <ul className="tr-SiteFooterNavList-inner">
                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="https://www.thomsonreuters.ca/en/legal.html"
                          >
                            Legal
                          </a>
                        </li>

                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="https://www.thomsonreuters.ca/en/tax-accounting.html"
                          >
                            Tax &amp; accounting
                          </a>
                        </li>

                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="https://agency.reuters.com/en.html?utm_source=website&utm_medium=tr&utm_campaign=site-referral&utm_content=canada&utm_term=0"
                          >
                            News &amp; media
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="tr-SiteFooterNavList"
                      data-rehydratable="tr-SiteFooter.NavList"
                      data-title="Learn More"
                    >
                      <button
                        className="tr-SiteFooterNavList-title"
                        role="button"
                        aria-label="Thomas Reuters"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="tr-SiteFooterNavList-text u-typographySmallCaps">
                          Learn More
                        </span>
                        <span className="tr-SiteFooterNavList-caret">
                          <span className="tr-Svg">
                            <span className="tr-Svg-inner">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  d="M16 10l-4 4-4-4"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="square"
                                  stroke-width="2"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </button>
                      <ul className="tr-SiteFooterNavList-inner">
                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="https://www.thomsonreuters.ca/en/about-us.html"
                          >
                            About Us
                          </a>
                        </li>

                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="https://www.thomsonreuters.ca/en/press-releases.html"
                          >
                            Press Releases
                          </a>
                        </li>

                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="https://www.thomsonreuters.com/en/careers/where-we-are/north-america/canada.html"
                          >
                            Careers
                          </a>
                        </li>

                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="https://blogs.thomsonreuters.com/answerson/"
                          >
                            Insights: Answers On
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="tr-SiteFooterNavList"
                      data-rehydratable="tr-SiteFooter.NavList"
                      data-title="Contact Us"
                    >
                      <button
                        className="tr-SiteFooterNavList-title"
                        role="button"
                        aria-label="Thomas Reuters"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="tr-SiteFooterNavList-text u-typographySmallCaps">
                          Contact Us
                        </span>
                        <span className="tr-SiteFooterNavList-caret">
                          <span className="tr-Svg">
                            <span className="tr-Svg-inner">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  d="M16 10l-4 4-4-4"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="square"
                                  stroke-width="2"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </button>
                      <ul className="tr-SiteFooterNavList-inner">
                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="https://www.thomsonreuters.ca/en/training-and-support.html"
                          >
                            Support &amp; Training
                          </a>
                        </li>

                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="https://www.thomsonreuters.ca/en/contact-us.html"
                          >
                            Office Locations
                          </a>
                        </li>

                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="http://thomsonreuters.com/en/contact-us/media-contacts.html"
                          >
                            Media Contacts
                          </a>
                        </li>

                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="https://www.thomsonreuters.ca/en/contact-us.html"
                          >
                            Contact Sales
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="tr-SiteFooterNavList"
                      data-rehydratable="tr-SiteFooter.NavList"
                      data-title="Accessibility"
                    >
                      <button
                        className="tr-SiteFooterNavList-title"
                        role="button"
                        aria-label="Thomas Reuters"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="tr-SiteFooterNavList-text u-typographySmallCaps">
                          Accessibility
                        </span>
                        <span className="tr-SiteFooterNavList-caret">
                          <span className="tr-Svg">
                            <span className="tr-Svg-inner">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  d="M16 10l-4 4-4-4"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="square"
                                  stroke-width="2"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </button>
                      <ul className="tr-SiteFooterNavList-inner">
                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="https://store.thomsonreuters.ca/en-ca/accessibility"
                          >
                            Commitment to Accessibility
                          </a>
                        </li>

                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="https://www.thomsonreuters.ca/content/dam/ewp-m/documents/canada-store/en/pdf/fact-sheets/carswell-accessibility-plan-v2.pdf"
                          >
                            Multi-Year Accessibility Plan
                          </a>
                        </li>

                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="https://store.thomsonreuters.ca/en-ca/accessibility/commitment-to-accessibility"
                          >
                            Accessible Workplace
                          </a>
                        </li>

                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="https://store.thomsonreuters.ca/en-ca/accessibility/academic-materials"
                          >
                            Access to Academic Materials
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="tr-SiteFooterNavList"
                      data-rehydratable="tr-SiteFooter.NavList"
                      data-title="Connect"
                    >
                      <button
                        className="tr-SiteFooterNavList-title"
                        role="button"
                        aria-label="Thomas Reuters"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="tr-SiteFooterNavList-text u-typographySmallCaps">
                          Connect
                        </span>
                        <span className="tr-SiteFooterNavList-caret">
                          <span className="tr-Svg">
                            <span className="tr-Svg-inner">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  d="M16 10l-4 4-4-4"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linecap="square"
                                  stroke-width="2"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </button>
                      <ul className="tr-SiteFooterNavList-inner">
                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="https://twitter.com/TRCanadaLegal"
                          >
                            Twitter (Legal)
                          </a>
                        </li>

                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="https://twitter.com/TRCanadaTax"
                          >
                            Twitter (Tax)
                          </a>
                        </li>

                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="https://www.linkedin.com/showcase/thomson-reuters-canada-legal/"
                          >
                            LinkedIn (Legal)
                          </a>
                        </li>

                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="https://www.linkedin.com/showcase/trcanadatax/"
                          >
                            LinkedIn (Tax)
                          </a>
                        </li>

                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="https://www.youtube.com/channel/UCbpBq9ALXH51Ow9h-L6wb6w"
                          >
                            YouTube (Legal)
                          </a>
                        </li>

                        <li className="tr-SiteFooterNavItem">
                          <a
                            target="_blank"
                            className="tr-SiteFooterNavItem-link"
                            href="https://www.youtube.com/channel/UCjfeBKSwEzZODpHRrn5TXDg/videos"
                          >
                            YouTube (Tax)
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="global-site-footer">
          <div className="tr-GlobalFooter">
            <div className="tr-GlobalFooter-inner">
              <div className="footer-logo tr-GlobalFooter-top">
                <Image
                  className="tr-GlobalFooter-logo tr-GlobalFooter-logoInner"
                  src="/tr_logo.png"
                  height={45}
                  width={192}
                />
              </div>
              <ul
                className="footer-ul tr-GlobalFooter-items"
                data-rehydratable-children="true"
              >
                <ul className="tr-GlobalFooter-items">
                  <li className="tr-GlobalFooterItem">
                    <a
                      className="tr-GlobalFooterItem-inner"
                      href="https://www.thomsonreuters.com/en/privacy-statement.html#cookies"
                      target="_blank"
                    >
                      Cookie Policy
                    </a>
                  </li>
                  <li className="tr-GlobalFooterItem">
                    <a
                      className="tr-GlobalFooterItem-inner"
                      href="https://www.thomsonreuters.com/en/privacy-statement.html"
                      target="_blank"
                    >
                      Privacy Statement
                    </a>
                  </li>

                  <li className="tr-GlobalFooterItem">
                    <a
                      className="tr-GlobalFooterItem-inner"
                      href="https://www.thomsonreuters.ca/en/terms-of-use.html"
                      target="_blank"
                    >
                      Terms of Use
                    </a>
                  </li>

                  <li className="tr-GlobalFooterItem">
                    <a
                      className="tr-GlobalFooterItem-inner"
                      href="https://www.thomsonreuters.ca/en/copyright.html"
                      target="_blank"
                    >
                      Copyright
                    </a>
                  </li>

                  <li className="tr-GlobalFooterItem">
                    <a
                      className="tr-GlobalFooterItem-inner"
                      href="https://www.thomsonreuters.com/en/careers.html"
                      target="_blank"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
