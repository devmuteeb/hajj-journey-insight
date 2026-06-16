FROM oven/bun:1 AS build
WORKDIR /app
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile
COPY . .
RUN LOVABLE_ENVIRONMENT=production bun run build

FROM node:22-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/server-entry.js ./server-entry.js
EXPOSE 3000
CMD ["node", "server-entry.js"]
