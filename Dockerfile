#FROM maven:3.8.6-openjdk-21 AS build WORKDIR /alsina-Web 
#COPY . . 
#RUN mvn clean package -Pproduction -DskipTests 
#FROM openjdk:21-jdk-slim 
#WORKDIR /app 
#COPY --from=build /alsina-Web/target/demo-0.0.1-SNAPSHOT.jar alsina-Web.jar 
#EXPOSE 8080 
#CMD ["java", "-jar", "alsina-Web.jar"]

FROM openjdk:21
COPY src/main/frontend/ /demo-0.0.1-SNAPSHOT.jar/src/main/frontend/
VOLUME /tmp
EXPOSE 8080
ADD ./target/demo-0.0.1-SNAPSHOT.jar web-automotores.jar
ENTRYPOINT ["java", "-jar", "web-automotores.jar"]
