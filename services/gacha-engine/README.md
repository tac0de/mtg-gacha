# MTG Gacha Engine

## 개발 실행

```bash
cd services/gacha-engine
npm install
npm run dev
```

## Fly.io 배포
- Fly.io CLI 설치 후 `fly launch`로 앱 생성
- `FLY_API_TOKEN`을 GitHub에 Secret으로 등록
- main 브랜치에 push하면 자동 배포 