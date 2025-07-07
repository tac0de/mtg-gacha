# Fly.io Node.js Express Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --production || yarn --production
COPY . .
EXPOSE 3000
CMD ["node", "src/index.js"] 