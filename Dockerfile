# based on nodeJS latest LTS alpine image
FROM node:lts-alpine

LABEL maintainer="June Kim" version="1.0"

WORKDIR /app

# Add package files
COPY package.json pnpm-lock.yaml ./

# Install deps
RUN set -eux \
  && apk update \
  && apk add --no-cache --virtual .build-deps \
  g++ \
  make \
  python \
  npm \
  && npm install -g pnpm \
  && pnpm add -g node-gyp \
  && pnpm install \
  && apk del .build-deps

ARG GIT_HASH

ENV NODE_ENV=production \
  BUILD_ID=${GIT_HASH} \
  NEXT_PUBLIC_URL=https://mydomain.com \
  NEXT_PUBLIC_GTAG_ID=GTM-MXDVTH6

# Add all files
COPY ./ ./

# Build and clean up
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
