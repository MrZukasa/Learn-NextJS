This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Creazione di un app Next.Js
Si crea con `npx create-next-app tutorial`

Appena si crea un file.js o .ts dentro la cartella pages, Next la aggiunge alle route disponibili!!

per creare un componebnte react si usa sfc che sta per `state functional component`
L'aggiunta di pagine e di componenti è disarmante, facilissima basta letteralmente scrivere dentro!!
Non si fa più nulla in HTML, addirittura i link sono dei compomenti ReactJS e si usano importando `import Link from "next/link";` e poi mettendo <Link><Link/>
Per avere la navbar e il footer in tutte le pagine, basta fare un componente chiamato Layout e dire a questo componente di renderizzare tra i tag navbar e footer un children che sarà la pagina che richiamiamo ogni volta.

La pagina che richiamiamo ogni volta si trova dentro [_app.js](pages/_app.js) ed è il tag `<Component {...pageProps} />`, quindi basta racchiuderlo dentro il tag <Layout></Layout> cosi facendo praticamente si mette un componente nell'altro.
> N.B. [Tutorial](https://www.youtube.com/watch?v=DGn25s42NvQ&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw&index=5)