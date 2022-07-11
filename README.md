# Ticketing app

C:\Windows\System32\drivers\etc
hosts
127.0.0.1 ticketing.dev

k create secret generic jwt-secret --from-literal=JWT_KEY=asdf

thisisunsafe

getInitialProps executed on the server:

- hard refresh of page
- clicking link from different domain
- typing URL into address bar

getInitialProps executed on the client:

- navigating from one page to another while in the app

<http://SERVICENAME.NAMESPACE.svc.cluster.local/api/auth/currentuser>

NAMESPACE: kubectl get namespace => ingress-nginx
SERVICENAME: kubectl get services -n ingress-nginx

page component getInitialProps
  context = { req, res }

custom app component getInitialProps
  context = {Component, ctx: {req, res}}

dodanie getInitialProps do componentu powoduje, że getInitialProps nie wywołuje się automatycznie dla pozostałych page'y

Code Sharing Options:

- Direct Copy-Paste
- Git Submodules
- NPM Packages

`docker build -t danielrubak/tickets .`

## TO-DO

- [ ] write better docs
