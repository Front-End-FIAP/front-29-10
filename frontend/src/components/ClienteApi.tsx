import { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const ClienteApi = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const carregarPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
          throw new Error(`Erro ao carregar posts: ${response.status}`);
        }

        const data = (await response.json()) as Post[];
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro ao carregar posts");
      }
    };

    carregarPosts();
  }, []);

  return (
    <section>
      <h2>Posts via API</h2>

      {error ? (
        <p style={{ color: "crimson" }}>{error}</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ClienteApi;
