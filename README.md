# Carmel Website

## Setup Process

1. Install [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. (Optional) install yarn using `npm install yarn`
3. Run either `npm install` or `yarn install`
4. Create your own SSL cert (see below)
5. Run `npm run dev` or `yarn dev`
6. Happy coding!

## Creating SSL cert

### Windows

1. Install [OpenSSL](https://wiki.openssl.org/index.php/Binaries)
2. Open a terminal and use `openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./.cert/key.pem -out ./.cert/cert.pem`

### Mac

1. Install [homebrew](https://brew.sh)
2. Install `mkcert` using `brew install mkcert`
3. (If you use Firefox) install `nss` using `brew install nss`
4. Setup a CA on your machine using `mkcert -install`
5. Run `yarn cert`
