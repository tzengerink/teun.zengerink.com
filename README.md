# teun.zengerink.com

[Personal homepage](https://teun.zengerink.com) build using the following technologies:

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Playwright](https://playwright.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)

## Development instructions

- Run `npm run dev` to launch the development server.
- Run `npm run test:watch` to run the tests in watch mode.

## Run the docker container

- Run `docker build -t teun.zengerink.com .` to build the Docker image.
- Run `docker run -d -p 3000:3000 teun.zengerink.com` to run the Docker container.
