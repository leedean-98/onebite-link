export type LinkItem = {
  id: string;
  title: string;
  url: string;
  description: string;
  folderId: string;
};

export type Folder = {
  id: string;
  name: string;
};

export const folders: Folder[] = [
  { id: "1", name: "개발" },
  { id: "2", name: "디자인" },
  { id: "3", name: "뉴스" },
  { id: "4", name: "유튜브" },
  { id: "5", name: "참고자료" },
];

export const links: LinkItem[] = [
  {
    id: "1",
    title: "Next.js 공식 문서",
    url: "https://nextjs.org/docs",
    description: "Next.js 앱 라우터와 서버 컴포넌트에 대한 공식 가이드",
    folderId: "1",
  },
  {
    id: "2",
    title: "Tailwind CSS",
    url: "https://tailwindcss.com",
    description: "유틸리티 퍼스트 CSS 프레임워크로 빠르게 UI를 구축하세요",
    folderId: "1",
  },
  {
    id: "3",
    title: "Figma",
    url: "https://figma.com",
    description: "웹 기반 UI/UX 디자인 협업 도구",
    folderId: "2",
  },
  {
    id: "4",
    title: "Vercel",
    url: "https://vercel.com",
    description: "프론트엔드 앱을 빠르게 배포하는 플랫폼",
    folderId: "1",
  },
  {
    id: "5",
    title: "Hacker News",
    url: "https://news.ycombinator.com",
    description: "스타트업과 개발자들을 위한 소셜 뉴스 사이트",
    folderId: "3",
  },
  {
    id: "6",
    title: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    description: "HTML, CSS, JavaScript에 대한 공신력 있는 레퍼런스",
    folderId: "5",
  },
  {
    id: "7",
    title: "Dribbble",
    url: "https://dribbble.com",
    description: "세계 최고 디자이너들의 포트폴리오와 영감을 탐색하세요",
    folderId: "2",
  },
  {
    id: "8",
    title: "GitHub",
    url: "https://github.com",
    description: "오픈 소스 소프트웨어 개발 및 협업 플랫폼",
    folderId: "1",
  },
];
