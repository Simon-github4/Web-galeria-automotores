FROM openjdk:21
VOLUME /tmp
EXPOSE 8080
ADD ./target/demo-0.0.1-SNAPSHOT.jar web-automotores.jar
ENTRYPOINT ["java", "-jar", "web-automotores.jar"]