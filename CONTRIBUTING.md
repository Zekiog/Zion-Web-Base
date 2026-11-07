# Contributing

Issues and pull requests are welcome. This repository has no issue templates and no pull request template.

## Pull requests

Branch from `main` and open the pull request against `main`.

`npm run dev` and `npm run build` expect a `src/` tree. That directory is not in the repository. `npm run lint` expects an ESLint config file. There is none. There is no test script and no formatter config.

`.github/workflows/ci.yml` runs `npm test` on pull requests to `main`. `package.json` does not define `test`.

## Security

Report vulnerabilities the way [SECURITY.md](./SECURITY.md) describes. Do not open a public issue for them.

## License

Contributions stay under the MIT license in `LICENSE`.
