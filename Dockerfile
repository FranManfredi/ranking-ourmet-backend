# Stage 1: Build
FROM node:22-alpine AS builder

# Instalar dependencias necesarias para compilar en Alpine
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Instalar dependencias
COPY package*.json ./
COPY prisma ./prisma/
# Copiamos el config de prisma necesario para el generate en v7
COPY prisma.config.js ./ 

RUN npm install

# Copiar el resto del código y compilar
COPY . .
RUN npx prisma generate
RUN npm run build

# Stage 2: Runtime
FROM node:22-alpine

WORKDIR /app

# Variable para forzar logs inmediatos en Node.js
ENV NODE_STDOUT_LOG_LEVEL=info
ENV PYTHONUNBUFFERED=1

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/prisma.config.js ./prisma.config.js

EXPOSE 3000

# Usar node directamente en lugar de npm para capturar mejor los logs y señales de terminal
CMD ["node", "dist/index.js"]
