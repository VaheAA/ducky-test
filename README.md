# Проект на Vite/Vue 3 с TypeScript

## Описание

Этот проект разработан с использованием Vite и Vue 3 с TypeScript для обеспечения быстрого и современного рабочего процесса. В проекте используются:

- **Vite**: Быстрый инструмент сборки для современного JavaScript.
- **Vue 3**: Прогрессивный фреймворк для разработки пользовательских интерфейсов.
- **TypeScript**: Типизация для улучшения читаемости и надежности кода.
- **ESLint** и **Prettier**: Для поддержания единого стиля кода и качества.
- **CSS Modules**: Инкапсуляция стилей для отдельных компонентов.
- **Mobile First**: CSS написан в соответсвии с подходом Mobile First.
- **Vitest**: Используется для создания различных тестов.
- **Подход с лейаутами**: Удобная структура для построения многостраничных приложений.

## Установка и запуск

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/VaheAA/playducky-test.git
   cd playducky-test
   ```

2. Установите зависимости:

   ```bash
   yarn install
   ```

3. Запустите проект в режиме разработки:

   ```bash
   yarn dev
   ```

4. Откройте [http://localhost:5173](http://localhost:5173) в браузере для просмотра приложения.

## Скрипты

- `yarn dev`: Запуск приложения в режиме разработки.
- `yarn build`: Сборка проекта для продакшена.
- `yarn lint`: Запуск ESLint для проверки кода.
- `yarn format`: Форматирование кода с использованием Prettier.

## Структура проекта

```plaintext
src/
├── components/       # Компоненты приложения
├── layouts/          # Лейауты приложения
├── views/            # Страницы приложения
├── assets/           # Различные ассеты, изображения, шрифты, глобальные CSS файлы
├── shared/           # Различные переиспользуемые константы, функции, и тд.
├── router/           # Конфигурация Vue Router
├── test/           # Различные тесты
├── App.vue           # Главный компонент
├── main.ts           # Точка входа приложения
```

## Инструменты

- **ESLint**: Настроен для проверки качества кода с правилами для TypeScript и Vue 3.
- **Prettier**: Автоматическое форматирование кода.
- **CSS Modules**: Для изолирования стилей в компонентах. Использование:

  ```vue
  <template>
    <div :class="$style.example">Пример</div>
  </template>

  <style module>
  .example {
    color: red;
  }
  </style>
  ```