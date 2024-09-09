FROM node:22 AS build

WORKDIR /app

COPY package.json package-lock.json .

RUN npm ci

COPY . .
RUN npm run build

FROM gcr.io/distroless/nodejs22:nonroot
COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules
ENTRYPOINT [ "/nodejs/bin/node", "/app/dist/index.js" ]