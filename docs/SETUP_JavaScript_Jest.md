# JavaScript 파일의 Jest 테스트 환경 구성하기

## 기본 설정

- Node.js를 설치합니다. https://nodejs.org/ko/
  - 일반 설치가 완료되면 디펜던시 관리자인 npm이 함께 설치됩니다.
  - 셸 커맨드 `node -v`와 `npm -v`로 Node.js, npm이 각각 잘 설치됐는지 확인할 수 있습니다.
- 프로젝트 루트에서 다음 커맨드를 실행합니다.
  ```
  $ npm init -y
  $ npm install --save-dev jest
  ```
  1. Node 프로젝트 초기화 (루트에 `package.json` 파일이 생성됩니다.)
  2. npm을 통해 Jest 설치
- `package.json`을 열어 `scripts`와 `jest` 키의 값을 다음과 같이 변경합니다.
  ```json
  {
    "scripts": {
      "test": "jest"
    },
    "jest": {
      "testRegex": "src/.*\\.[j|t]s$"
    }
  }
  ```

## VS Code 확장 기능

### Jest

[Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)는 프로젝트 내의 테스트 스크립트를 자동적으로 실행하고 성공/실패 여부를 인라인 하이라이트로 표현해 줍니다.

- Jest 확장을 설치합니다.
- `package.json`에 저장된 jest 설정을 참조해, 파일이 변경될 때마다 자동적으로 테스트를 재실행합니다.

### Jest Runner

[Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner)는 각 테스트 스크립트를 부분적으로 실행할 수 있도록 VS Code의 codelens 기능을 활용한 인터페이스를 제공합니다.

- Jest Runner 확장을 설치합니다.
- 프로젝트 루트에 `.vscode/settings.json` 파일을 만들고, 아래와 같이 저장합니다.
  ```json
  {
    "jestrunner.codeLensSelector": "**/*.{js,ts}"
  }
  ```
