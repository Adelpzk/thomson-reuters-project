import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

export const getStaticPaths = async () => {
  const GQL_API = `http://frp.vlb.mybluehost.me/graphql`;
  const GQL_QUERY = `
    query{
      posts{
        nodes {
          postId
          title
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

  const result = await res.json();

  const paths = result.data.posts.nodes.map((blog) => {
    //console.log(typeof blog.postId);
    return {
      params: {
        title: blog.title.toLowerCase().replace(/\s+/g, "-").toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  //console.log(context.params.title.replace(/-+/g, " "));
  const GQL_API = `http://frp.vlb.mybluehost.me/graphql`;
  const GQL_QUERY = `
  query{
    posts(where: {title:"${context.params.title.replace(/-+/g, " ")}"}){
      nodes {
        postId
        title
        author {
          node {
            name
          }
        }
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        content
        tags {
          nodes {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
    `;
  //console.log(GQL_QUERY);
  const res = await fetch(GQL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GQL_QUERY,
    }),
  });

  const result = await res.json();
  //console.log(result);

  return {
    props: { blog: result.data.posts.nodes[0] },
  };
};

export default function Details({ blog }) {
  var d = new Date(blog.date);
  var options = { year: "numeric", month: "short", day: "numeric" };

  return (
    <>
      <div className="individual-blogs">
        <div className="container">
          <div className="article-wrap">
            <article id={blog.postId} className="blog article">
              <div className="article-hero  ">
                <div className="article-hero__thumbnail">
                  <img
                    width="724"
                    height="450"
                    src={blog.featuredImage.node.sourceUrl}
                    className="img-responsive wp-post-image"
                    alt=""
                    loading="lazy"
                    title=""
                  />
                </div>

                <div className="article-hero__body">
                  <div className="article-hero__header">
                    {blog.categories.nodes.map((category) => (
                      <p className="article-hero__tag">{category.name}</p>
                    ))}
                    <h1 className="article-hero__title">{blog.title}</h1>
                  </div>
                  <div>
                    <div className="article-hero__footer">
                      <p className="article-hero__author">
                        {blog.author.node.name}
                      </p>

                      <p className="article-hero__meta">
                        {d.toLocaleDateString("en-US", options)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="blog-title">
              <img src={blog.featuredImage.node.sourceUrl}></img>
              {blog.categories.nodes.map((category) => (
                <p>{category.name}</p>
              ))}
              <h2> {blog.title} </h2>
              <p>{blog.author.node.name}</p>
              <p>{d.toLocaleDateString("en-US", options)}</p>
            </div> */}
              <div className="article-body">
                <div className="blog-content article-content post type-post status-publish format-standard has-post-thumbnail">
                  {parse(blog.content)}
                </div>
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
                <div className="article-tags">
                  <ul className="blog-tags tag-list">
                    {blog.tags.nodes.map((tag) => (
                      <li>
                        <a>{tag.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <ul className="blog-tags">
              {blog.tags.nodes.map((tag) => (
                <li>{tag.name}</li>
              ))}
            </ul> */}
              </div>
            </article>
            <div class="article-sidebar">
              <div class="banners">
                <article class="banner">
                  <div class="banner-item">
                    <div class="banner__thumbnail">
                      <a
                        href="https://tax.thomsonreuters.com/en/insights/articles/how-to-start-an-accounting-firm"
                        title="starting-an-accounting-firm"
                      >
                        <img src="https://tax.thomsonreuters.com/blog/wp-content/uploads/sites/17/2020/03/starting-an-accounting-firm.jpg" />
                      </a>
                    </div>
                    <header class="banner__header">
                      <h3 class="banner__title">
                        <a href="https://tax.thomsonreuters.com/en/insights/articles/how-to-start-an-accounting-firm">
                          How to start an accounting firm
                        </a>
                      </h3>
                    </header>
                    <section class="banner__footer">
                      <p class="banner__meta">
                        Thinking of starting your own firm? Awesome. Our
                        comprehensive guide explains what you need to know.{" "}
                      </p>
                    </section>
                    <div class="banner__cta">
                      <a
                        class="banner__btn"
                        href="https://tax.thomsonreuters.com/en/insights/articles/how-to-start-an-accounting-firm"
                      >
                        Read the guide
                      </a>
                    </div>
                  </div>
                </article>

                <article class="banner">
                  <div class="banner-item">
                    <div class="banner__thumbnail">
                      <a
                        href="https://tax.thomsonreuters.com/us/en/cs-professional-suite/practice-forward"
                        title="Smiling businessman daydreaming and looking out office window"
                      >
                        <img src="https://tax.thomsonreuters.com/blog/wp-content/uploads/sites/17/2019/03/gettyimages-103332628-SM-1-370x300.jpg" />
                      </a>
                    </div>
                    <header class="banner__header">
                      <h3 class="banner__title">
                        <a href="https://tax.thomsonreuters.com/us/en/cs-professional-suite/practice-forward">
                          How to grow your accounting business
                        </a>
                      </h3>
                    </header>
                    <section class="banner__footer">
                      <p class="banner__meta">
                        Identify the right business opportunities and apply a
                        value-based pricing model to reveal your true worth to
                        your clients.&nbsp;{" "}
                      </p>
                    </section>
                    <div class="banner__cta">
                      <a
                        class="banner__btn"
                        href="https://tax.thomsonreuters.com/us/en/cs-professional-suite/practice-forward"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </article>

                <article class="banner">
                  <div class="banner-item">
                    <div class="banner__thumbnail">
                      <a
                        href="https://tax.thomsonreuters.com/en/accounting-solutions/firm-marketing-growth"
                        title="It's impossible until we show you that it's possible"
                      >
                        <img src="https://tax.thomsonreuters.com/blog/wp-content/uploads/sites/17/2019/03/gettyimages-863497476-SM-370x300.jpg" />
                      </a>
                    </div>
                    <header class="banner__header">
                      <h3 class="banner__title">
                        <a href="https://tax.thomsonreuters.com/en/accounting-solutions/firm-marketing-growth">
                          Marketing solutions&nbsp;to help you connect with
                          clients and grow your business
                        </a>
                      </h3>
                    </header>
                    <section class="banner__footer">
                      <p class="banner__meta">
                        Promote thought leadership, develop long-term business
                        relationships, and maximize your business opportunities
                        — all while increasing your firm’s bottom line.{" "}
                      </p>
                    </section>
                    <div class="banner__cta">
                      <a
                        class="banner__btn"
                        href="https://tax.thomsonreuters.com/en/accounting-solutions/firm-marketing-growth"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </article>

                <article class="banner">
                  <div class="banner-item">
                    <div class="banner__thumbnail">
                      <a
                        href="https://tax.thomsonreuters.com/en/accounting-solutions/audit-accounting"
                        title="Smiling young African woman working online with her laptop"
                      >
                        <img src="https://tax.thomsonreuters.com/blog/wp-content/uploads/sites/17/2019/03/gettyimages-948004430-SM-370x300.jpg" />
                      </a>
                    </div>
                    <header class="banner__header">
                      <h3 class="banner__title">
                        <a href="https://tax.thomsonreuters.com/en/accounting-solutions/audit-accounting">
                          Business&nbsp;accounting solutions&nbsp;to help you
                          serve your clients
                        </a>
                      </h3>
                    </header>
                    <section class="banner__footer">
                      <p class="banner__meta">
                        Accounting software for accountants to help you serve
                        all your client’s accounting, bookkeeping, and financial
                        needs with maximum efficiency — from financial statement
                        compilation and reports, to value-added analysis, audit
                        management, and more.{" "}
                      </p>
                    </section>
                    <div class="banner__cta">
                      <a
                        class="banner__btn"
                        href="https://tax.thomsonreuters.com/en/accounting-solutions/audit-accounting"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div class="more-answers-posts">
            <div class="more-answers-posts__header">
              <h3 class="more-answers-posts__header__title">More answers </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
