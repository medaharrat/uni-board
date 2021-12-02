# Using node v15.x
# v16+ encountered errors with certificates
FROM node:15

# Copy package files
COPY package.json ./package.json
COPY yarn.lock ./yarn.lock

# Install dependencies
RUN yarn install

# Expose ports
EXPOSE 3000

# Copy app
COPY src/ ./src/
COPY public/ ./public/

# Start command
CMD [ "yarn", "dev" ]
