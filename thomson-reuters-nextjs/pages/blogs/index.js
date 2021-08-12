import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PopularTopics from "../../components/PopularTopics";

/**
 * getStaticProps allows Next.js to pre-render this page at build time using the props
 *    returned by this function
 */
export const getStaticProps = async () => {
  // Wordpress GraphQL url
  const GQL_API = `http://frp.vlb.mybluehost.me/graphql`;

  //GraphQL query to fetch the necessary info to displays list of blogs
  const GQL_QUERY = `
    query{
      posts{
        nodes {
          postId
          title
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
    `;

  //fetch function to send the graphql query to the graphql server
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
  //console.log(result.data.posts.nodes);

  //returns the blog data recieved from the query as a props to the page needed to be rendered
  return {
    props: { blogs: result.data.posts.nodes },
  };
};
export default function Blogs({ blogs }) {
  //options for the date-time object
  var options = { year: "numeric", month: "short", day: "numeric" };
  return (
    <>
      <div className="tr-Section tr-Section--grayDark">
        <div className="tr-Poster tr-Poster--s">
          <div className="tr-Poster-image">
            <div
              className="tr-Image tr-Image--cover tr-Image--anchorC tr-Image--overlay tr-Image--scrimBottomDark"
              style={{
                "background-image":
                  "url(https://www.thomsonreuters.com/content/dam/ewp-m/images/tax/en/photography/tr1132040-1-2880x710.jpg.transform/hero-s/q90/image.jpg)",
              }}
            >
              <img
                className="tr-Image-img"
                alt=""
                src="https://www.thomsonreuters.com/content/dam/ewp-m/images/tax/en/photography/tr1132040-1-2880x710.jpg.transform/hero-s/q90/image.jpg"
                srcSet="https://www.thomsonreuters.com/content/dam/ewp-m/images/tax/en/photography/tr1132040-1-2880x710.jpg.transform/hero-s/q90/image.jpg 1440w, https://www.thomsonreuters.com/content/dam/ewp-m/images/tax/en/photography/tr1132040-1-2880x710.jpg.transform/hero-s/q90/image.jpg 250w"
                loading="lazy"
              />
            </div>
          </div>
          <div className="tr-Poster-content">
            <div className="tr-Poster-contentInner">
              <div className="tr-Grid tr-Grid--712512 tr-Grid--gutterlessAtNarrow">
                <div className="tr-Grid-items">
                  <div className="tr-Grid-item">
                    <div className="tr-VerticalSpacing tr-VerticalSpacing--m">
                      <h1 className="tr-Heading tr-Heading--xl">
                        <b>Thomson Reuters Institute Blogs</b>
                      </h1>
                    </div>
                    <div className="tr-VerticalSpacing tr-VerticalSpacing--l">
                      <div className="tr-RichText tr-RichText--compact">
                        The Thomson Reuters Institute brings together people
                        from across the legal, corporate, tax & accounting, and
                        government communities to ignite conversation and
                        debate, make sense of the latest events and trends, and
                        provide essential guidance on the opportunities and
                        challenges facing their world today.
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
      <div className="container">
        <PopularTopics />
        <div
          className="card-list"
          itemScope=""
          itemProp="mainContentOfPage"
          itemType="http://schema.org/Blog"
        >
          {blogs.map((blog) => {
            var d = new Date(blog.date);
            return (
              <article
                key={blog.postId}
                id={blog.postId}
                className="card post type-post status-publish format-standard has-post-thumbnail"
              >
                <div className="list-blog card-post">
                  <div className="card-post__thumbnail">
                    <a
                      href={
                        "/blogs/" +
                        encodeURIComponent(
                          blog.title.toLowerCase().replace(/\s+/g, "-")
                        ).replace(/%/g, "~")
                      }
                      title=""
                    >
                      <img
                        width="370"
                        height="208"
                        src={blog.featuredImage.node.sourceUrl}
                        className="img-responsive wp-post-image"
                        alt=""
                        loading="lazy"
                      />{" "}
                    </a>
                  </div>
                  {/* <a
                    href={
                      "/blogs/" + blog.title.toLowerCase().replace(/\s+/g, "-")
                    }
                  >
                    <img src={blog.featuredImage.node.sourceUrl}></img>
                  </a> */}
                  <div className="card-post__content">
                    <header className="card-post__header">
                      <h3 className="card-post__title">
                        <Link
                          href={
                            "/blogs/" +
                            encodeURIComponent(
                              blog.title.toLowerCase().replace(/\s+/g, "-")
                            ).replace(/%/g, "~")
                          }
                          key={blog.postId}
                          passHref
                        >
                          <a style={{ cursor: "Pointer" }}>{blog.title}</a>
                        </Link>
                      </h3>
                    </header>
                  </div>
                  {/* <Link
                    href={
                      "/blogs/" + blog.title.toLowerCase().replace(/\s+/g, "-")
                    }
                    key={blog.postId}
                  >
                    <a>
                      <h3> {blog.title} </h3>
                    </a>
                  </Link> */}
                  <div className="card-post__footer">
                    <p className="card-post__meta">
                      {d.toLocaleDateString("en-US", options)}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <button className="load-more">
          More <span className="load-more-arrow"></span>
        </button>
      </div>
    </>
  );
}
