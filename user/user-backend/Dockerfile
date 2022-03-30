FROM openjdk:8
ADD . /Mealwrap_Backend
WORKDIR /Mealwrap_Backend
ENTRYPOINT ["/bin/sh", "-c", "chmod +x ./mvnw && chmod +x ./wait-for-it.sh && ./wait-for-it.sh 177.77.0.2:3306 -t 120 && ./mvnw spring-boot:run -Dspring-boot.run.profiles=prod"]