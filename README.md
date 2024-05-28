# Сайт igsekor.com

Этот шаблон должен помочь вам начать разработку с помощью Vue 3 и Vite.

## Рекомендованный сетап для разработки

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (и удалить / деактивировать Vetur).

## Работа над проектом

```sh
npm install
```

### Работа в режиме разработки (автоматическая перезагрузка после внесения изменений)

```sh
npm run dev
```

### Сборка сайта с минификацией

```sh
npm run build
```

### Запуск unit-тестов [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Запуск e2e-тестов [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Запуск линтера [ESLint](https://eslint.org/)

```sh
npm run lint
```
