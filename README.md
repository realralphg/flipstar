# Flip app (flip-app)

Gamer app - Flip and Win

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

### Base endpoint
Api='https://flipstar-api.herokuapp.com/'

### login Required Fields
string('email')->unique();
string('password');

### Registration Required Fields
string('name');
string('email')->unique();
string('password');

### Create card

