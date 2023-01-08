import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/99987902?v=4",
      name: "Matheus Ferreira",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      },
      {
        type: "paragraph",
        content: "elit, sed do eiusmod tempor incididunt ut",
      },
      { type: "link", content: "google.com" },
    ],
    publishedAt: new Date("2023-01-08 19:19:19"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/99987902?v=4",
      name: "Raybih",
      role: "Doctor",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      },
      {
        type: "paragraph",
        content: "elit, sed do eiusmod tempor incididunt ut",
      },
      { type: "link", content: "yahoo.com" },
    ],
    publishedAt: new Date("2023-01-01 07:30:19"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
