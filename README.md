# WDIO test

Docker setup for [WebdriverIO](https://webdriver.io/) with automatic
screenshots, image diffing and screen recording support for containerized
versions of Chrome on Linux.

## Usage

Install the packages

```sh
npm i
```

Run the tests:

```sh
docker-compose run --rm wdio
```

Stop and remove the container set:

```sh
docker-compose down
```

Run the tests locally (via chromedriver):

```sh
npm test
```

For reporting:

```sh
npm run report
```

If you've encountered an error saying allure command is not found, install it globally via

```sh
npm i allure-commandline -g
```
