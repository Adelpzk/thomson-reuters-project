import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import SideBar from "../../components/SideBar";
import ArticleShare from "../../components/ArticleShare";

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
                <ArticleShare />
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
            <SideBar />
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
