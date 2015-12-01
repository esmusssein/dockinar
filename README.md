# dockinar
Sample Node.js application that can be tested at local Docker environment, also deployed at AWS using ecs-cli.

# How can I test the application in my local machine using Docker?
1. Install Docker in your local machine.
2. $> docker-compose build
3. $> docker-compose up -d
4. $> docker exec -it APP_CONTAINER_ID bash
5. $> mocha DIR_THAT_YOU_WANT_TO_TEST

# Troubleshooting
1. I can't find the app container after I enter docker-compose up -d.
If you want to trace debug console logs of the application, enter docker-compose up without -d.
If the console says "Permission denied on entrypoint.sh", change the file mode of entrypoint.sh that can be executed, then try again docker-compose up. 
