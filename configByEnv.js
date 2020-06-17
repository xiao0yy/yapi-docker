const fs = require('fs');
const path = require('path');
let yapiConfig = {
    'port': process.env.YAPI_PORT || '3000',
    'adminAccount': process.env.YAPI_ADMIN_ACCOUNT || 'admin@admin.com',
    'db': {
        'servername': process.env.YAPI_DB_SERVERNAME,
        'DATABASE': process.env.YAPI_DB_DATABASE || 'yapi',
        'port': parseInt(process.env.YAPI_DB_PORT) || 27017,
        'user': process.env.YAPI_DB_USER,
        'pass': process.env.YAPI_DB_PASS,
        'authSource': process.env.YAPI_DB_AUTH_SOURCE
    },
    'mail': {
        'enable': process.env.YAPI_MAIL_ENABLE === 'true',
        'host': process.env.YAPI_MAIL_HOST,
        'port': parseInt(process.env.YAPI_MAIL_PORT) || 465,
        'from': process.env.YAPI_MAIL_FROM,
        'auth': {
            'user': process.env.YAPI_MAIL_AUTH_USER,
            'pass': process.env.YAPI_MAIL_AUTH_PASS
        },
        'authMethod': process.env.YAPI_MAIL_AUTH_METHOD || 'PLAIN',
        'secure': process.env.YAPI_MAIL_SECURE === 'true',
        'tls': JSON.parse(process.env.YAPI_MAIL_TLS || '{}'),
        'ignoreTLS': process.env.YAPI_MAIL_IGNORE_TLS === 'true' ? true : (process.env.YAPI_MAIL_IGNORE_TLS === 'false' ? false : undefined),
        'requireTLS': process.env.YAPI_MAIL_REQUIRE_TLS === 'true' ? true : (process.env.YAPI_MAIL_REQUIRE_TLS === 'false' ? false : undefined)
    },
    'ldapLogin': {
        'enable': process.env.YAPI_LDAP_LOGIN_ENABLE === 'true',
        'server': process.env.YAPI_LDAP_LOGIN_SERVER,
        'baseDn': process.env.YAPI_LDAP_LOGIN_BASE_DN,
        'bindPassword': process.env.YAPI_LDAP_LOGIN_BIND_PASSWORD,
        'searchDn': process.env.YAPI_LDAP_LOGIN_SEARCH_DN,
        'searchStandard': process.env.YAPI_LDAP_LOGIN_SEARCH_STANDARD,
        'emailPostfix': process.env.YAPI_LDAP_LOGIN_EMAIL_POSTFIX,
        'emailKey': process.env.YAPI_LDAP_LOGIN_EMAIL_KEY,
        'usernameKey': process.env.YAPI_LDAP_LOGIN_USERNAME_KEY
    },
    'closeRegister': process.env.YAPI_CLOSE_REGISTER === 'true',
    'versionNotify': process.env.YAPI_VERSION_NOTIFY === 'true'
}
let yapiHome = process.env.YAPI_HOME || '/yapi/vendors'
fs.writeFileSync(path.join(yapiHome, '..', 'config.json'), JSON.stringify(yapiConfig), 'utf8')
