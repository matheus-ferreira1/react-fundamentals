import { Comment } from "./Comment";
import styles from "./Post.module.css";

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/99987902?v=4"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Matheus Ferreira</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime="2023-01-07 22:03:04" title="January 7 2023">
          Posted 1h ago
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus velit
        </p>
        <p>
          assumenda necessitatibus temporibus, hic natus quaerat quod ab
          similique? Optio, delectus.
        </p>
        <p>
          <a href="#">
            ut rerum repellat iste veniam earum adipisci asperiores eligendi
          </a>{" "}
        </p>
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
