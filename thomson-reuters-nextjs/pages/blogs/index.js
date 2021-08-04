import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PopularTopics from "../../components/PopularTopics";

export const getStaticProps = async () => {
  const GQL_API = `http://frp.vlb.mybluehost.me/graphql`;
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

  return {
    props: { blogs: result.data.posts.nodes },
  };
};
export default function Blogs({ blogs }) {
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
                srcset="https://www.thomsonreuters.com/content/dam/ewp-m/images/tax/en/photography/tr1132040-1-2880x710.jpg.transform/hero-s/q90/image.jpg 1440w, https://www.thomsonreuters.com/content/dam/ewp-m/images/tax/en/photography/tr1132040-1-2880x710.jpg.transform/hero-s/q90/image.jpg 250w"
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
      {/* <div className="blogs">
        <h1>Thomson Reuters Institute Blogs</h1>
        <p>
          The Thomson Reuters Institute brings together people from across the
          legal, corporate, tax & accounting, and government communities to
          ignite conversation and debate, make sense of the latest events and
          trends, and provide essential guidance on the opportunities and
          challenges facing their world today.
        </p>
      </div> */}
      <div className="container">
        <PopularTopics />
        <div
          className="card-list"
          itemscope=""
          itemprop="mainContentOfPage"
          itemtype="http://schema.org/Blog"
        >
          {blogs.map((blog) => {
            var d = new Date(blog.date);
            return (
              <article
                id={blog.postId}
                class="card post type-post status-publish format-standard has-post-thumbnail"
              >
                <div className="list-blog card-post">
                  <div class="card-post__thumbnail">
                    <a
                      href={
                        "/blogs/" +
                        encodeURIComponent(
                          blog.title.toLowerCase().replace(/\s+/g, "-")
                        )
                      }
                      title=""
                    >
                      <img
                        width="370"
                        height="208"
                        src={blog.featuredImage.node.sourceUrl}
                        class="img-responsive wp-post-image"
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
                  <div class="card-post__content">
                    <header class="card-post__header">
                      <Link
                        href={
                          "/blogs/" +
                          encodeURIComponent(
                            blog.title.toLowerCase().replace(/\s+/g, "-")
                          )
                        }
                        key={blog.postId}
                      >
                        <h3 className="card-post__title">
                          <a style={{ cursor: "Pointer" }}>{blog.title}</a>
                        </h3>
                      </Link>
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
                  <div class="card-post__footer">
                    <p class="card-post__meta">
                      {d.toLocaleDateString("en-US", options)}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <button class="load-more">
          More <span class="load-more-arrow"></span>
        </button>
      </div>
    </>
  );
}
