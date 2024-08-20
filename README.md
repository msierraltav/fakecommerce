# Fake Store

data is served by my-jsop-server in the following route.
https://my-json-server.typicode.com/msierraltav/fakecommerce

## Getting Started

First , run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.
the DB will be [http://localhost:3000/products](http://localhost:3000/products)

The DB start automatically when you run the dev server.
but if you want to run it manually you can do it with the following command

```bash
npx json-server db.json
```


## Problems

Due issues with json-server 1.0.0-beta.2 the "name_like="query is not supported in that version so I only implemented the search from the pagination results, it is posible to capture all the data and then filter it but is not the ideal scenario. [issue](https://github.com/typicode/json-server/issues/1509)