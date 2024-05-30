import Image from "next/image";
import { urlFor } from "../../../../sanity/lib/client";
import Link from "next/link";

export const RichText = {
  types: {
    image: ({ value }) => {
      return (
        <div>
          <img
            className="post-img"
            src={urlFor(value).url()}
            alt="Post image"
            style={{ objectFit: "cover" }}
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
  },
  number: {
    bullet: ({ children }) => <ol>{children}</ol>,
  },
  block: {
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    normal: ({ children }) => <p>{children}</p>,
    lineBreak: () => <br />,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link href={value.href} rel={rel} className="underline">
          {children}
        </Link>
      );
    },
  },
  break: (props) => {
    const { style } = props.node;
    if (style === "lineBreak") {
      return <hr className="lineBreak" />;
    }
    if (readMore && style === "readMore") {
      return (
        <div className="readMore">
          <button onClick={() => setReadMore(false)}>Read More</button>
        </div>
      );
    }
    return null;
  },
};
