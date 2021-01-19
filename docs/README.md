다양한 종류와 난이도의 알고리즘 문제를 함께 풀고 검토해 보는 스터디 세션을 위한 공용 저장소입니다.

## 도전 방식

- 1주일간 도전할 문제를 제안하고, 주말에 함께하는 세션을 열어 답안을 리뷰합니다.
- 프로그래밍 언어는 자유롭게 정해서 도전합니다.
- 문제는 영어 또는 한국어로 설명된 것을 사용합니다.
- 참여자의 다양성을 생각해, 쉬운 문제 2개, 중간 또는 어려운 문제 5개를 매주 도전합니다.

## 저장소 규칙

- 다음 이외에는 모두 `.gitignore` 되어 있습니다. 본인이 좋아하는 환경을 구성해 주세요.
  - `/docs/`
  - `/src/`
  - `.all-contributorsrc`
  - `LICENSE`
- **문제**는 `/src/<week>.<challenge-title>/README.md` 파일로 추가됩니다.
  - 문제의 출처 링크, 설명을 넣어주세요.
  - 삽화를 추가하고 싶을 때는 `.assets/` 서브디렉토리를 이용합니다.
  - 예시는 `/src/week1.fibonacci`에서 확인해 주세요.
- **답안**은 문제가 있는 경로에 자기 GitHub 아이디로 된 파일을 만들어 제출해 주세요.
  - 예시: `/src/week1./my-github-id/solution.js`
  - 제출은 실행 가능한 파일이든, 마크다운이든 자유롭게 정합니다.
  - 테스트 스크립트는 솔루션과 같은 파일에 저장합니다.
- 테스트 환경 구축에 대한 **안내**는 `/docs/SETUP-<language>-<testutil>.md` 파일로 제공합니다.
  - 예시: [SETUP-TypeScript-jest.md](./docs/SETUP-TypeScript-jest.md)

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
