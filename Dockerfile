FROM  node

#Creamos un directorio dentro
WORKDIR /app
COPY package*.json ./

#Instalaremos las dependencias usando npm
RUN npm install
COPY . .
EXPOSE 3000

CMD ["npm", "start"]

####### Comandos
# docker build -t jesusflores123/backend-seguimiento .
# docker run --name backend-seguimiento -p 3000:3000 -d jesusflores123/backend-seguimiento 
# docker push jesusflores123/backend-seguimiento 


