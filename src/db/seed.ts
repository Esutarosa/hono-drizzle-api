import { comments, posts, users } from "./schema";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

const sql = neon(process.env.DATABASE_URL);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    await db.delete(comments);
    await db.delete(posts);
    await db.delete(users);

    await db.insert(users).values([
      {
        id: 1,
        name: "John",
        email: "q7k0a@example.com",
      },
      {
        id: 2,
        name: "Jane",
        email: "q7k0a@example.com",
      },
      {
        id: 3,
        name: "Bob",
        email: "q7k0a@example.com",
      }
    ]);

    await db.insert(posts).values([
      {
        id: 1,
        title: "Post 1",
        content: "Content 1",
        userId: 1,
      },
      {
        id: 2,
        title: "Post 2",
        content: "Content 2",
        userId: 2,
      },
      {
        id: 3,
        title: "Post 3",
        content: "Content 3",
        userId: 3,
      }
    ]);

    await db.insert(comments).values([
      {
        id: 1,
        postId: 1,
        userId: 1,
        text: "Comment 1",
      },
      {
        id: 2,
        postId: 2,
        userId: 2,
        text: "Comment 2",
      },
      {
        id: 3,
        postId: 3,
        userId: 3,
        text: "Comment 3",
      }
    ]);
  } catch (err) {
    console.error("Error seeding database: " + err);
  }
}

main();