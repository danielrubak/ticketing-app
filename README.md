# Ticketing app

## Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

- Git
- Docker
- Skaffold (for local Kubernetes development)

Use Nginx or Traefik for requests forwarding or simply just edit the **hosts** file on your machine. All you have to do is add the following line

```bash
127.0.0.1 ticketing.dev
```

You can find the **hosts** file at these paths:

- MacOS/Linux - /etc/hosts
- Widnows - C:\Windows\System32\Drivers\etc\hosts

Auth service uses the JWT so you have to add a secret to your kubernetes environment. If you want, you can replace the **asdf** string with anything.

```bash
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf
```

## Installation

Clone the project

```bash
git clone https://github.com/danielrubak/ticketing-app.git
```

Go to the project directory

```bash
cd ticketing-app
```

Start the application using skaffold

```bash
skaffold dev
```

Use your browser and navigate to

```bash
ticketing.dev
```

Because of the Nginx Ingress, all requests are using the HTTPS connection, so trying to access the above link throw you an unskippable warning **Your connection is not private**. To handle this, just type **thisisunsafe**.

## Services

In this section you will find a short description of all services used in this project.

- auth - everything related to user sing up, sign in and sign out
- tickets - creating and editing tickets
- orders - creating and aediting orders
- expiration - watches for orders to be created, cancels them after 15 minutes
- payments - handles credit card payments, cancels orders if payment fails and completes them if payment succeeds

## Diagrams

- section 5, lesson 109 - system diagram
- section 5, lesson 116 - auth routes, page 12
- section 9, lesson 179 - jwt token passing, page 04
