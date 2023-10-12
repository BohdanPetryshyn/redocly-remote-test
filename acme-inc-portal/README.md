# Acme developer portal

## Prerequisites

- [node.js >= 16.17.1](https://nodejs.org/en/)

## Install

```
npm install
```

## Start development server

```
npm start
```

## Configuration

### IdP Login configuration

In the development mode the server has a built-in login simulator.
In order to test a real IdP integration you can `auth` section in the `portal.yaml` file.

Example config:

```yaml

idps:
  main:
    type: OIDC
    configurationUrl: https://dev-0b5cyw0h.us.auth0.com/.well-known/openid-configuration
    clientId: sO3vEhnjmjYci16Z2cRJUMO64NDEy0mD
    clientSecret: 'secret' # or use env variable '{{process.env.MAIN_CLIENT_SECRET}}'
    rolesClaimName: https://redoc.ly/roles
    scopes:
      - list
      - of
      - scopes
```
