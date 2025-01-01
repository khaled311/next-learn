import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
