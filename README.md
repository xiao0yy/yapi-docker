# yapi-docker

[![Docker Build Status](https://img.shields.io/docker/build/xiao0yy/yapi-docker.svg)](https://hub.docker.com/r/xiao0yy/yapi-docker)
![Docker Pulls](https://img.shields.io/docker/pulls/xiao0yy/yapi-docker)

Docker image for yapi: <https://github.com/YMFE/yapi>, use env for start

## Env

### Root Section

<https://hellosean1025.github.io/yapi/devops/index.html#%e7%a6%81%e6%ad%a2%e6%b3%a8%e5%86%8c>

<https://hellosean1025.github.io/yapi/devops/index.html#%e7%89%88%e6%9c%ac%e9%80%9a%e7%9f%a5>

| ENV Name | Target | Default Value |
| :-- | :-- | :-- |
| YAPI_PORT | port | 3000 |
| YAPI_ADMIN_ACCOUNT | adminAccount | admin@admin.com |
| YAPI_CLOSE_REGISTER | closeRegister | false |
| YAPI_VERSION_NOTIFY | versionNotify | false |

### Db Section

<https://hellosean1025.github.io/yapi/devops/index.html#mongodb%e9%9b%86%e7%be%a4>

<https://mongoosejs.com/docs/connections.html>

| ENV Name | Target | Default Value |
| :-- | :-- | :-- |
| YAPI_DB_SERVERNAME | db.servername | - |
| YAPI_DB_DATABASE | db.DATABASE | yapi |
| YAPI_DB_PORT | db.port | 27017 |
| YAPI_DB_USER | db.user | - |
| YAPI_DB_PASS | db.pass | - |
| YAPI_DB_AUTH_SOURCE | db.authSource | - |

### Mail Section

<https://hellosean1025.github.io/yapi/devops/index.html#%e9%85%8d%e7%bd%ae%e9%82%ae%e7%ae%b1>

<https://nodemailer.com/smtp/>

| ENV Name | Target | Default Value |
| :-- | :-- | :-- |
| YAPI_MAIL_ENABLE | mail.enable | false |
| YAPI_MAIL_HOST | mail.host | - |
| YAPI_MAIL_PORT | mail.port | 465 |
| YAPI_MAIL_FROM | mail.from | - |
| YAPI_MAIL_AUTH_USER | mail.auth.user | - |
| YAPI_MAIL_AUTH_PASS | mail.auth.pass | - |
| YAPI_MAIL_AUTH_METHOD | mail.authMethod | PLAIN |
| YAPI_MAIL_SECURE | mail.secure | false |
| YAPI_MAIL_TLS | mail.tls | - (e.g `{"rejectUnauthorized":true}`) |
| YAPI_MAIL_IGNORE_TLS | mail.ignoreTLS | - |
| YAPI_MAIL_REQUIRE_TLS | mail.requireTLS | - |

### Ldap Section

<https://hellosean1025.github.io/yapi/devops/index.html#%e9%85%8d%e7%bd%aeldap%e7%99%bb%e5%bd%95>

| ENV Name | Target | Default Value |
| :-- | :-- | :-- |
| YAPI_LDAP_LOGIN_ENABLE | ldapLogin.enable | false |
| YAPI_LDAP_LOGIN_SERVER | ldapLogin.server | - |
| YAPI_LDAP_LOGIN_BASE_DN | ldapLogin.baseDn | - |
| YAPI_LDAP_LOGIN_BIND_PASSWORD | ldapLogin.bindPassword | - |
| YAPI_LDAP_LOGIN_SEARCH_DN | ldapLogin.searchDn | - |
| YAPI_LDAP_LOGIN_SEARCH_STANDARD | ldapLogin.searchStandard | - |
| YAPI_LDAP_LOGIN_EMAIL_POSTFIX | ldapLogin.emailPostfix | - |
| YAPI_LDAP_LOGIN_EMAIL_KEY | ldapLogin.emailKey | - |
| YAPI_LDAP_LOGIN_USERNAME_KEY | ldapLogin.usernameKey | - |

## Install server

```sh
docker run -it --rm \
  -e YAPI_DB_SERVERNAME="mongodb-servername" \
  -e YAPI_DB_PORT="27017" \
  -e YAPI_DB_DATABASE="some db" \
  -e YAPI_DB_USER="some user" \
  -e YAPI_DB_PASS="some password" \
  -p 3000:3000 \
  xiao0yy/yapi-docker:v1.9.2 run install-server
```

## Run

```sh
docker run -it --rm \
  -e YAPI_DB_SERVERNAME="mongodb-servername" \
  -e YAPI_DB_PORT="27017" \
  -e YAPI_DB_DATABASE="some db" \
  -e YAPI_DB_USER="some user" \
  -e YAPI_DB_PASS="some password" \
  -p 3000:3000 \
  xiao0yy/yapi-docker:v1.9.2
```
