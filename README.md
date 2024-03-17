# Prosperitopia

This is a sample Angular application that has been containerized using Docker.

## Prerequisites

Before you begin, ensure you have the following installed:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Node.js (v18.18.0)
- Angular CLI (v17.3.0)
- npm (v10.2.3)

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project-directory>
    ```

3. Build the Docker image:

    ```bash
    docker build -t <image-name> .
    ```

    Replace `<image-name>` with the desired name for your Docker image.

## Running the Application

1. Run the Docker container:

    ```bash
    docker run -d -p 8080:80 <image-name>
    ```

    This command starts a Docker container in detached mode (`-d`), maps port 8080 on the host to port 80 in the container (`-p 8080:80`), and specifies the name of the Docker image to use.

2. Access the Angular application:

    Open a web browser and navigate to [http://localhost:8080](http://localhost:8080) to view the running Angular application.

## Stopping the Application

To stop the Docker container, use the following command:

```bash
docker stop <container-id>
