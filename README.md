# hono-drizzle-api

This is a demo app for independent practice.

## Getting Started

```bash
bun install
```

Copy the `.env.example` file to `.env` and update the `DATABASE_URL`:

```bash
cp .env.example .env
```

To apply the database migrations, you can run the following command:

```bash
bun db:migrate
```

To seed the database with some data, you can run the following command:

```bash
bun db:seed
```

Then you can run the following command to start the server:

```bash
bun dev
```

You can then visit [http://localhost:3000](http://localhost:3000) to see the app.