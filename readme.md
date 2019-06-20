# @eo-locale/detect-user-language

Simple and lightweight library for detect user language in browser.

### How to install

`yarn add @eo-locale/detect-user-language` or `npm install @eo-locale/detect-user-language --save`

### Usage example

```js
import { detectUserLanguage } from '@eo-locale/detect-user-language';

const availableLanguages = ['en', 'ru'];
const userLanguage = detectUserLanguage(availableLanguages);

console.log(userLanguage);
```