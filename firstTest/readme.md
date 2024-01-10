# Jest project

## 1. Create folder for the project

## 2. Create package.json

```shell
npm init -y
```

or

```shell
npm init
```

and answer the questions

## 3. Install jest as devDependencies

```shell
npm install jest --save-dev
```

## 4. Modify package.json test-script

```json
  "scripts": {
    "test": "jest"
  }
```

## 5. Create a test folder named `__tests__`

## 6. Write tests into `__tests__` folder

test filenameshould have test or spec in the name
fileToBeTested.test.js
fileToBeTested.spec.js

for example to test file adc.js you use test file named abc.test.js

## 7. Run the tests

```shell
npm test
```

## 8. To run only one test file

```
npm test --testFile fileToBeTested.test.js
```
