export default function ArticleShare() {
  return (
    <div className="article-share">
      <ul className="article-share-links js-social">
        <li>
          <span title="Facebook">
            <span className="icon icon-facebook">Facebook</span>
          </span>
        </li>
        <li>
          <span title="Twitter">
            <span className="icon icon-twitter">Twitter</span>
          </span>
        </li>
        <li>
          <span title="Linkedin">
            <span className="icon icon-linkedin">Linkedin</span>
          </span>
        </li>
        <li>
          <a title="Email">
            <span className="icon icon-email">Email</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
