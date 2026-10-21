FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --no-audit --no-fund --legacy-peer-deps
COPY . .
# VITE_* are build-time (baked into client bundle)
ARG VITE_ADMIN_PASSWORD
ARG VITE_API_URL
ENV VITE_ADMIN_PASSWORD=$VITE_ADMIN_PASSWORD VITE_API_URL=$VITE_API_URL
RUN npm run build

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production PORT=3000 HOST=0.0.0.0
COPY --from=build /app/.output ./.output
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
