import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
      <div className="blogs">
        <h1>Thomson Reuter Institute Blogs</h1>
        <p>
          The Thomson Reuters Institute brings together people from across the
          legal, corporate, tax & accounting, and government communities to
          ignite conversation and debate, make sense of the latest events and
          trends, and provide essential guidance on the opportunities and
          challenges facing their world today.
        </p>
      </div>
      {blogs.map((blog) => {
        var d = new Date(blog.date);
        return (
          <div className="list-blog" id={blog.postId}>
            <a href={"/blogs/" + blog.title.toLowerCase().replace(/\s+/g, "-")}>
              <img src={blog.featuredImage.node.sourceUrl}></img>
            </a>
            <Link
              href={"/blogs/" + blog.title.toLowerCase().replace(/\s+/g, "-")}
              key={blog.postId}
            >
              <a>
                <h3> {blog.title} </h3>
              </a>
            </Link>
            <p>{d.toLocaleDateString("en-US", options)}</p>
          </div>
        );
      })}
    </>
  );
}
