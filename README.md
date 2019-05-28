# Simple API

A simple API base, using nodejs, typescript, mongodb. The idea is not to use views in the server, instead create a "simple-client" app that "talks" to the the API.

## Scripts

Install application dependencies

```sh
npm i
```

Start your database (needs docker installed)

```sh
npm run start:db
```

Start development

```sh
npm start
```

API runs on `localhost:<your-port>/api/v1`

You can use Curl, Postman, Insominia, or other app, to "talk" with the API

Build the application

```sh
npm build
```
