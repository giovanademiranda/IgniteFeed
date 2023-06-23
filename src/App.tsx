import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/giovanademiranda.png",
      name: "Giovana de Miranda",
      role: "Front-end Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera👋" },
      {
        type: "paragraph",
        content:
          "Estou praticando meus conhecimentos em ReacJS com o curso Ignite da Rocketseat",
      },
      { type: "link", content: "Ignite-Feed" },
    ],
    publishedAt: new Date("2023-06-19 16:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://media.licdn.com/dms/image/D4D03AQEOZGMLLB198A/profile-displayphoto-shrink_800_800/0/1665010546334?e=1692835200&v=beta&t=a_c1D3En0GsY4ajL7a-MFO5xTP_cYB3hcODTCEupKH8",
      name: "Fernanda Ferreira",
      role: "Administrativo",
    },
    content: [
      { type: "paragraph", content: "ADM" },
      {
        type: "paragraph",
        content: "Estou trabalhando na Bitize",
      },
      { type: "link", content: "Ignite-Feed" },
    ],
    publishedAt: new Date("2023-06-20 16:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
