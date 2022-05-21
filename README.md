# 쫄?!

### 서비스 한줄 소개

친구야 내일 하루 이거 함 해봐 ㅋ **쫄?!**

친구에게 색다른 **내일**을 선사해보세요

### 기술 스택

![MongoDB](https://img.shields.io/badge/-mongoDB-40b33d?labelColor=white&logo=MongoDB)
![typescript](https://img.shields.io/badge/-typescript-3178c6?labelColor=white&logo=TypeScript)

### 사용 라이브러리

```json
"devDependencies": {
    "@types/bcryptjs": "^2.4.2",
    "@types/express": "^4.17.13",
    "@types/jsonwebtoken": "^8.5.8",
    "@types/mongoose": "^5.11.97",
    "@types/node": "^17.0.25",
    "nodemon": "^2.0.15",
    "ts-node": "^10.7.0",
    "typescript": "^4.6.3"
},
"dependencies": {
    "dotenv": "^16.0.0",
    "express": "^4.17.3",
    "express-validator": "^6.14.0",
    "mongoose": "^6.3.1"
}
```

### Code convention

- prettier사용

```json
{
  "printWidth": 100,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "tabWidth": 2,
  "bracketSpacing": true,
  "endOfLine": "auto",
  "useTabs": false
}
```

### Commit message convention

- feat: 새로운 기능의 추가
- fix: 버그 수정
- css: css 관련 추가, 수정
- docs: 문서 수정
- style: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락, 코드 자체의 변경이 없는 경우)
- refactor: 코드 리팩토링
- test: 테스트 코트, 리팩토링 테스트 코드 추가
- chore: 빌드 업무 수정, 패키지 매니저 수정(ex .gitignore 수정 같은 경우)

### Git Branch convention

Git Flow 방식

- main : 최종적으로 배포되는 브랜치
- {name} : main 브랜치 아래에서 컴포넌트 기능 단위로 나누어 각자 이름으로 브랜치 만들기

### Directory Structure

```
.
├── src
│   ├── config
│   │   └── index.ts
│   ├── controllers
│   │   ├── MissionController.ts
│   │   ├── UserController.ts
│   │   └── index.ts
│   ├── index.ts
│   ├── interfaces
│   │   ├── common
│   │   │   └── PostBaseResponseDto.ts
│   │   ├── mission
│   │   │   ├── MissionConfirmRequestDto.ts
│   │   │   ├── MissionInfo.ts
│   │   │   └── MissionResponseDto.ts
│   │   └── user
│   │       ├── UserCreateDto.ts
│   │       ├── UserInfo.ts
│   │       └── UserResponseDto.ts
│   ├── loaders
│   │   └── db.ts
│   ├── models
│   │   ├── Mission.ts
│   │   └── User.ts
│   ├── modules
│   │   ├── responseMessage.ts
│   │   ├── statusCode.ts
│   │   └── util.ts
│   ├── routes
│   │   ├── MissionRouter.ts
│   │   ├── UserRouter.ts
│   │   └── index.ts
│   └── services
│       ├── MissionService.ts
│       ├── UserService.ts
│       └── index.ts
├── README.md
├── dist
├── node_modules
├── nodemon.json
├── package-lock.json
├── package.json
├── tsconfig.json
└── yarn.lock


```

### 역할 분배

<table>
    <tr align="center">
        <td>
           💛 구건모 💛
        </td>
        <td>
           미션 등록 및 미션 받아오기 API
        </td>
    </tr>
    <tr align="center">
        <td>
            💛 이다은 💛
        </td>
        <td>
            링크 생성 및 미션 가보자고 API
        </td>
    </tr>
</table>
