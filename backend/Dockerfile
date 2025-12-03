# --- Step 1: Build environment ---
FROM node:18 AS builder

WORKDIR /app

# Install system deps needed for prisma engine build
RUN apt-get update && apt-get install -y --no-install-recommends \
    openssl ca-certificates build-essential libssl-dev \
  && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package*.json ./

# Install dependencies (use npm ci if you have package-lock.json)
RUN npm install

# Copy full source code
COPY . .

# Generate Prisma Client with required binary targets
RUN npx prisma generate --schema=./prisma/schema.prisma --binary-targets native,debian-openssl-1.1.x,debian-openssl-3.0.x

# --- Step 2: Production Image ---
FROM node:18-slim

WORKDIR /app

# Install runtime OpenSSL libraries
RUN apt-get update && apt-get install -y --no-install-recommends \
    openssl ca-certificates libssl-dev \
  && rm -rf /var/lib/apt/lists/*

# Copy compiled app from builder
COPY --from=builder /app /app

EXPOSE 5000

CMD ["npm", "start"]

