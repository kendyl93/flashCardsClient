# Flash cards client

## Run

1. Start the metro server `npx react-native start`.
2. Start android build `npx react-native run-android`.

## Debugging

0. `adb reverse tcp:8097 tcp:8097`
1. Run react devtools `react-devtools`.

### Problems

- App crashes without any errors: type `./gradlew clean` in `/android` directory.
- Maximum call stack exceeded(shile trying to install deps): `npm cache clean --force`

### Todo

1. Added Redux and test
2. Updated component tests
