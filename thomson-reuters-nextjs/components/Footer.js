import Image from "next/image";

export default function Footer() {
  return (
    <>
      <br />
      <br />
      <footer>
        <div className="tr-GlobalFooter-inner">
          <div className="tr-GlobalFooter-top">
            <Image
              className="tr-GlobalFooter-logoInner"
              src="/tr_logo.png"
              height={50}
              width={213}
            />
          </div>
          <ul
            className="tr-GlobalFooter-items"
            data-rehydratable-children="true"
          >
            <ul className="tr-GlobalFooter-items">
              <li className="tr-GlobalFooterItem">
                <a
                  href="https://www.thomsonreuters.com/en/privacy-statement.html#cookies"
                  target="_blank"
                >
                  Cookie Policy
                </a>
              </li>
              <li className="tr-GlobalFooterItem">
                <a
                  href="https://www.thomsonreuters.com/en/privacy-statement.html"
                  target="_blank"
                >
                  Privacy Statement
                </a>
              </li>

              <li className="tr-GlobalFooterItem">
                <a
                  href="https://www.thomsonreuters.ca/en/terms-of-use.html"
                  target="_blank"
                >
                  Terms of Use
                </a>
              </li>

              <li className="tr-GlobalFooterItem">
                <a
                  href="https://www.thomsonreuters.ca/en/copyright.html"
                  target="_blank"
                >
                  Copyright
                </a>
              </li>

              <li className="tr-GlobalFooterItem">
                <a
                  href="https://www.thomsonreuters.com/en/careers.html"
                  target="_blank"
                >
                  Careers
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </footer>
    </>
  );
}
