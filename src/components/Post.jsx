import { format, formatDistanceToNow } from "date-fns";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export const Post = ({ author, publishedAt, content }) => {
  const publishedDateFormatted = format(publishedAt, "LLLL d 'at' HH:mm'h'");

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          dateTime={publishedDateFormatted}
          title={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                {" "}
                <a href="#">{line.content}</a>{" "}
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea placeholder="Write a comment" />

        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};
