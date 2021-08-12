export default function PaginationContainer() {
  return (
    <div id="paginationContainer" className="paginationContainer">
      <div className="tr-PaginationItem">
        <nav
          className="tr-Pagination"
          role="navigation"
          aria-label="Pagination Navigation"
        >
          <ul className="tr-Pagination-items">
            <li className="tr-PaginationNavigation tr-PaginationNavigation--left is-disabled">
              <span
                aria-label="Previous"
                className="tr-PaginationNavigation-slider is-disabled"
                data-testid="navItemLeft"
              >
                <div className="tr-PaginationNavigation-iconWrapper tr-PaginationNavigation-iconWrapper--disabled">
                  <span className="tr-PaginationNavigation-icon tr-PaginationNavigation-iconLeft">
                    <span className="tr-Svg">
                      <span className="tr-Svg-inner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            d="M10 8l4 4-4 4"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="square"
                            strokeWidth="2"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </span>
                </div>
                <div>Previous</div>
              </span>
            </li>

            <li className="tr-PaginationPageItem is-active">
              <span
                className="tr-PaginationPageItem-innerWrapper"
                aria-current="true"
                data-testid="pageItem"
                aria-label="Current Page, Page 1"
              >
                <span className="tr-PaginationPageItem-wrapper">1</span>
              </span>
            </li>

            <li className="tr-PaginationPageItem">
              <a
                className="tr-PaginationPageItem-innerWrapper is-clickable"
                aria-current="false"
                aria-label="Go to Page 2"
                data-testid="pageItem"
              >
                <span className="tr-PaginationPageItem-wrapper">2</span>
              </a>
            </li>

            <li className="tr-PaginationPageItem">
              <a
                className="tr-PaginationPageItem-innerWrapper is-clickable"
                aria-current="false"
                aria-label="Go to Page 3"
                data-testid="pageItem"
              >
                <span className="tr-PaginationPageItem-wrapper">3</span>
              </a>
            </li>

            <li className="tr-PaginationPageItem">
              <a
                className="tr-PaginationPageItem-innerWrapper is-clickable"
                aria-current="false"
                aria-label="Go to Page 4"
                data-testid="pageItem"
              >
                <span className="tr-PaginationPageItem-wrapper">4</span>
              </a>
            </li>
            <li className="tr-PaginationPageItem">
              <a
                className="tr-PaginationPageItem-innerWrapper is-clickable"
                aria-current="false"
                aria-label="Go to Page 5"
                data-testid="pageItem"
              >
                <span className="tr-PaginationPageItem-wrapper">5</span>
              </a>
            </li>

            <li className="tr-PaginationPageItem">
              <a
                className="tr-PaginationPageItem-innerWrapper is-clickable"
                aria-current="false"
                aria-label="Go to Page 6"
                data-testid="pageItem"
              >
                <span className="tr-PaginationPageItem-wrapper">6</span>
              </a>
            </li>
            <li className="tr-PaginationPageItem">
              <a
                className="tr-PaginationPageItem-innerWrapper is-clickable"
                aria-current="false"
                aria-label="Go to Page 7"
                data-testid="pageItem"
              >
                <span className="tr-PaginationPageItem-wrapper">7</span>
              </a>
            </li>
            <li className="tr-PaginationPageItem">
              <a
                className="tr-PaginationPageItem-innerWrapper is-clickable"
                aria-current="false"
                aria-label="Go to Page 8"
                data-testid="pageItem"
              >
                <span className="tr-PaginationPageItem-wrapper">8</span>
              </a>
            </li>

            <li className="tr-PaginationPageItem">
              <a
                className="tr-PaginationPageItem-innerWrapper is-clickable"
                aria-current="false"
                aria-label="Go to Page 9"
                data-testid="pageItem"
              >
                <span className="tr-PaginationPageItem-wrapper">9</span>
              </a>
            </li>
            <li className="tr-PaginationPageItem">
              <a
                className="tr-PaginationPageItem-innerWrapper is-clickable"
                aria-current="false"
                aria-label="Go to Page 10"
                data-testid="pageItem"
              >
                <span className="tr-PaginationPageItem-wrapper">10</span>
              </a>
            </li>
            <li className="tr-PaginationNavigation tr-PaginationNavigation--right ">
              <a
                className="tr-PaginationNavigation-slider"
                aria-label="Next"
                data-testid="navItemRight"
              >
                <div>Next</div>
                <div className="tr-PaginationNavigation-iconWrapper tr-PaginationNavigation-iconWrapper">
                  <span className="tr-PaginationNavItem-icon tr-PaginationNavigation-iconRight">
                    <span className="tr-Svg">
                      <span className="tr-Svg-inner">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            d="M10 8l4 4-4 4"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="square"
                            strokeWidth="2"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="paginationDropdown">
        <div data-react-from-markup-container="">
          <div
            className="tr-PaginationFilter"
            data-rehydratable="tr-PaginationFilter"
            data-prop-translations='{"PaginationFilter.PerPageLabel":"Results per page:"}'
            data-prop-options='["20","30","50"]'
            data-prop-defaultsearchamount="20"
          >
            <div className="tr-Typography tr-Typography--xs tr-Typography--left">
              <span id="paginationFilterTitle">Results per page:</span>
            </div>
            <div className="tr-Popover" data-rehydratable="tr-Popover">
              <div
                className="tr-Popover-trigger"
                data-rehydratable-trigger="true"
              >
                <div className="tr-PopoverTrigger">
                  <div
                    id="popoverContent-3"
                    aria-controls="popoverContent-3"
                    aria-haspopup="true"
                    aria-labelledby="paginationFilterTitle"
                    aria-expanded="false"
                    className="tr-PopoverTrigger-container"
                    role="button"
                    tabIndex="0"
                  >
                    <div className="tr-PaginationFilter-dropdownOpenButton tr-PaginationFilter-dropdownOpenButton--closed">
                      20
                      <div className="tr-PaginationFilter-chevronIconWrapper tr-PaginationFilter-chevronIconWrapper--closed">
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
                                strokeLinecap="square"
                                strokeWidth="2"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="popoverContent-3"
                className="tr-PopoverContent"
                role="tooltip"
                data-placement="bottom"
                style={{
                  position: "absolute",
                  "will-change": "transform",
                  top: "0px",
                  left: "0px",
                  transform: "translate3d(832px, 7200px, 0px)",
                }}
              >
                <div className="tr-PopoverBox tr-PopoverBox--trPaginationFilterPopoverWrapper">
                  <span
                    className="tr-Popover-children"
                    data-rehydratable-children="true"
                  >
                    <button
                      id="menuItem20"
                      className="tr-PaginationFilter-menuItem tr-PaginationFilter-menuItem--selected"
                    >
                      20
                    </button>
                    <button
                      id="menuItem30"
                      className="tr-PaginationFilter-menuItem"
                    >
                      30
                    </button>
                    <button
                      id="menuItem50"
                      className="tr-PaginationFilter-menuItem"
                    >
                      50
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
