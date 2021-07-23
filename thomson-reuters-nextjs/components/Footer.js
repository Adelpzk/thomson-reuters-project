import Image from "next/image";

export default function Footer() {
  return (
    <>
      <br />
      <br />
      <footer>
        <div class="tr-GlobalFooter-inner">
          <div class="tr-GlobalFooter-top">
            <Image
              class="tr-GlobalFooter-logoInner"
              src="/tr_logo.png"
              height={50}
              width={213}
            />
          </div>
          <ul class="tr-GlobalFooter-items" data-rehydratable-children="true">
            <ul class="tr-GlobalFooter-items">
              <li class="tr-GlobalFooterItem">
                <a
                  href="https://www.thomsonreuters.com/en/privacy-statement.html#cookies"
                  target="_blank"
                >
                  Cookie Policy
                </a>
              </li>
              <li class="tr-GlobalFooterItem">
                <a
                  href="https://www.thomsonreuters.com/en/privacy-statement.html"
                  target="_blank"
                >
                  Privacy Statement
                </a>
              </li>

              <li class="tr-GlobalFooterItem">
                <a
                  href="https://www.thomsonreuters.ca/en/terms-of-use.html"
                  target="_blank"
                >
                  Terms of Use
                </a>
              </li>

              <li class="tr-GlobalFooterItem">
                <a
                  href="https://www.thomsonreuters.ca/en/copyright.html"
                  target="_blank"
                >
                  Copyright
                </a>
              </li>

              <li class="tr-GlobalFooterItem">
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
