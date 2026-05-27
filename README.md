# Тестове завдання

Стек **React + Vite + Ant Design + React Router + Axios + Recharts**.

## Що було зроблено

- Task 1: Налаштований ConfigProvider, теми AntDesign у файлі theme.js.
- Task 2: Створена сторінка CoinsPage та таблиця CoinsTable відповідно до вимог, був доданий axios для більш зручних запитів та налаштований файл .env.
- Task 3: Створена сторінка CoinsPagedPage, додана пагінація відповідно до вимог, трошки відредагований CoinsTable.
- Task 4: Створена сторінка ChartPage, доданий CoinsChart відповідно до вимог та зроблений через recharts.
- Task 5: Створена сторінка WizardPage, додана форма з antd відповідно до вимог.

## Запуск

Створіть файл `.env` у корні проєкту. Можна скопіювати повністю із `.env.example`.

**Локально:**

```bash
npm install
npm run dev
```

**Через Docker:**

```bash
docker compose up --build
```

Додаток буде доступний на http://localhost:5173.
