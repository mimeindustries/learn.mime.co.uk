# learn.mime.co.uk

[![Build and deploy](https://github.com/mimeindustries/learn.mime.co.uk/actions/workflows/build.yml/badge.svg)](https://github.com/mimeindustries/learn.mime.co.uk/actions/workflows/build.yml)

The Jekyll project for [learn.mime.co.uk](https://learn.mime.co.uk)

## Development

Requires Ruby 3.3 (see `.ruby-version`).

```bash
bundle install
bin/serve   # local server with live reload
bin/test    # production build + HTML link check
```

## Deployment

Pushes to `master` are tested and deployed to S3 by GitHub Actions
(`.github/workflows/build.yml`). The workflow needs these repository secrets:
`S3ID`, `S3SECRET` (AWS keys), `CF_EMAIL`, `CF_APIKEY` (Cloudflare cache purge).

`bin/deploy` can also be run locally with the AWS CLI configured.
