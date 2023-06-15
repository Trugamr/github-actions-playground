FROM node:18.16.0-alpine as base

FROM base as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

ARG PORT=80
ENV PORT=${PORT}
EXPOSE ${PORT}

ENTRYPOINT [ "node", "index.js" ]