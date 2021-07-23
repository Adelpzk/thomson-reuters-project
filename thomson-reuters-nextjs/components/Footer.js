import Image from "next/image";
export default function Footer() {
  return (
    <>
      <br />
      <br />
      <footer className="tr-SemanticFooter">
        <div className="global-site-footer">
          <div className="tr-GlobalFooter">
            <div classname="tr-GlobalFooter-inner">
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
