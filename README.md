# 개인 소개페이지

소개팅이나 인스타그램 링크에 첨부할 개인 소개페이지입니다.

## 주요 기능

- 🎨 **모던한 디자인**: 그라데이션 배경과 애니메이션 효과
- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화
- 🚀 **빠른 로딩**: React와 Framer Motion을 활용한 부드러운 애니메이션
- 📸 **개인화된 콘텐츠**: 프로필, 관심사, 취미, 좋아하는 음식, MBTI, 소셜 링크

## 섹션 구성

1. **헤더**: 환영 메시지와 간단한 소개
2. **프로필**: 개인 정보와 사진
3. **관심사**: 기술적 관심사와 일반적인 관심사
4. **취미**: 다양한 취미 활동들
5. **좋아하는 음식**: 선호하는 음식들
6. **성격 & MBTI**: 성격 특성과 MBTI 정보
7. **연락처 & 소셜**: 인스타그램, 깃허브 등 소셜 링크

## 커스터마이징 방법

### 1. 개인 정보 수정

각 컴포넌트 파일에서 다음 정보들을 수정하세요:

- `src/components/Header.tsx`: 이름과 소개
- `src/components/Profile.tsx`: 개인 정보, 위치, 직업
- `src/components/Interests.tsx`: 기술적 관심사와 일반 관심사
- `src/components/Hobbies.tsx`: 취미 활동들
- `src/components/FavoriteFood.tsx`: 좋아하는 음식들
- `src/components/Personality.tsx`: MBTI와 성격 특성
- `src/components/SocialLinks.tsx`: 소셜 미디어 링크들

### 2. 사진 추가

`src/components/Profile.tsx`의 이미지 플레이스홀더를 실제 사진으로 교체하세요:

```tsx
// 이미지 플레이스홀더 부분을 다음과 같이 수정
<div className="profile-image">
  <img
    src="/path/to/your/photo.jpg"
    alt="프로필 사진"
    className="profile-photo"
  />
</div>
```

### 3. 색상 테마 변경

`src/App.css`에서 색상 변수들을 수정하여 원하는 테마로 변경할 수 있습니다.

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm start

# 프로덕션 빌드
npm run build
```

## 배포

### Vercel 배포

1. Vercel 계정 생성
2. GitHub 저장소 연결
3. 자동 배포 설정

### 수동 배포

```bash
npm run build
# build 폴더의 내용을 웹 서버에 업로드
```

## 기술 스택

- **React 18**: 사용자 인터페이스 구축
- **TypeScript**: 타입 안전성
- **Framer Motion**: 부드러운 애니메이션
- **React Icons**: 아이콘 라이브러리
- **CSS3**: 모던한 스타일링

## 라이선스

MIT License

---

개발자 소개페이지로 활용하시고, 필요에 따라 내용을 수정하여 사용하세요! 🚀
