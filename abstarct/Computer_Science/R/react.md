# react(frontend)

### concepts

- Component-based architecture

### about

- This refers to how the framework reacts to changes in data to update the userinterface efficiently.

- The react copy the DOM at virtual memory, and then apply the changes to the real DOM

### structure

- feature-based structure
- presentational vs container: separte the component
- Hook / Service / API seperate
- TypeScript + ESLint + Prettier
- React Router + Lazy loading
- global state management(Zustand, Redux, Recoil ...)
- Test making env

src/
├── app/                  # 앱 초기화 및 전역 설정
│   ├── App.tsx
│   ├── index.tsx
│   └── router.tsx
├── features/             # 기능 단위로 폴더 구성
│   └── todos/
│       ├── components/
│       │   └── TodoItem.tsx
│       ├── hooks/
│       │   └── useTodos.ts
│       ├── pages/
│       │   └── TodoPage.tsx
│       ├── services/
│       │   └── todoApi.ts
│       └── types.ts
├── shared/               # 공통 컴포넌트, 훅, 스타일
│   ├── components/
│   │   └── Button.tsx
│   ├── hooks/
│   └── utils/
├── store/                # 전역 상태관리 (Zustand 예시)
│   └── todoStore.ts
├── styles/               # 전역 스타일
│   └── global.css
└── types/                # 전역 타입 정의

### start app

- install dependencies 

### example code

- [example code](../../../Language/front-end/react/my-react-app/index.html)