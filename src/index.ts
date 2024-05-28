import { Hono } from "hono";
import { db } from "./db";

const PORT = process.env.PORT || 3000;

const app = new Hono();

app.get("/", async (c) => {
  try {
    const data = await db.query.posts.findMany({
      with: {
        comments: true,
        user: true
      },
    });
    return c.json({ data });
  } catch (err) {
    return c.json({ error: err });
  }
});

Bun.serve({ port: PORT, fetch: app.fetch });

export default app;