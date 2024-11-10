# Board Video Clone

⭐️ Source Code & More: https://www.codewithantonio.com/projects/miro-clone
💬 Discord & Help: https://www.codewithantonio.com/discord

Clerk: https://dub.sh/mz7fwfW
Convex: https://convex.dev/c/cwa
Liveblocks: https://liveblocks.io/
Logoipsum: https://logoipsum.com/
Sally 3D illustrations: https://www.figma.com/community/file/890095002328610853/saly-3d-illustration-pack

In this 10 hour tutorial, you will learn how to create your very own Miro clone - A collaborative, real-time whiteboard. Packed with features such as real-time database, whiteboard from scratch with ability to add shapes like Rectangles and Ellipses, Sticky notes and Pencil drawing. Using the newest technologies such as Next.js. 14, Clerk, Convex and LiveBlocks.

Key Features:
- 🛠️ Whiteboard from scratch
- 🧰 Toolbar with Text, Shapes, Sticky Notes & Pencil
- 🪄 Layering functionality
- 🎨 Coloring system
- ↩️ Undo & Redo functionality
- ⌨️ Keyboard shortcuts
- 🤝 Real-time collaboration
- 💾 Real-time database
- 🔐 Auth, organisations and invites
- ⭐️ Favoriting functionality
- 🌐 Next.js 14 framework
- 💅 TailwindCSS & ShadcnUI styling


## [Intro & Demo](https://www.youtube.com/watch?v=ADJKbuayubE&t=0s)
## [Additional information](https://www.youtube.com/watch?v=ADJKbuayubE&t=222s)

## [Project setup](https://www.youtube.com/watch?v=ADJKbuayubE&t=247s)
- npx create-next-app@latest
  - 넥스트 프로젝트 생성
```bash
npx create-next-app@latest
Need to install the following packages:
create-next-app@14.2.6
Ok to proceed? (y) y
✔ What is your project named? … board-video-tutorial
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
Creating a new Next.js app in /Users/user/Documents/Github/board-video-tutorial.
```

- npx shadcn-ui@latest init
  - shadcn-ui 추가
```bash
✔ Which style would you like to use? › Default
✔ Which color would you like to use as base color? › Slate
✔ Would you like to use CSS variables for colors? … no / yes
```
- app/page.tsx 수정
  - 기본 코드 제거
- npx shadcn-ui@latest add button
  - 버튼 컴포넌트 추가


## [Project structure](https://www.youtube.com/watch?v=ADJKbuayubE&t=753s)
- [Next.js Project Structure](https://nextjs.org/docs/getting-started/project-structure)
- [Routing Fundamentals](https://nextjs.org/docs/app/building-your-application/routing)


## [Convex & Clerk](https://www.youtube.com/watch?v=ADJKbuayubE&t=1841s)
Convex - Backend, Database
- [Convex Next.js Quickstart](https://docs.convex.dev/quickstart/nextjs)

Convex 설치 및 실행
- npm install convex
- npx convex dev
```bash
npx convex dev
Welcome to developing with Convex, let's get you logged in.
? Device name: YS-Mac
Visit https://auth.convex.dev/activate?user_code=NQGM-NDQF to finish logging in.
You should see the following code which expires in 15 minutes: NQGM-NDQF
? Open the browser? Yes
✔ Saved credentials to ~/.convex/config.json
? Project name: board-video-tutorial
✔ Created project board-video-tutorial-ac6e1, manage it at https://dashboard.convex.dev/t/ys-albert-lee/board-video-tutorial-ac6e1
✔ Provisioned a dev deployment and saved its:
    name as CONVEX_DEPLOYMENT to .env.local
    URL as NEXT_PUBLIC_CONVEX_URL to .env.local

Write your Convex functions in convex/
Give us feedback at https://convex.dev/community or support@convex.dev

✔ 17:12:56 Convex functions ready! (1.79s)
```

[Clerk 어플리케이션 생성 및 초기화](https://dashboard.clerk.com/apps/app_2l653VEXR7e3YSI2euzPq11ZQLf/instances/ins_2l653XtqgqsVmNKWURSQ9vSEMGH)
- npm install @clerk/nextjs
- [convex authentication 설정](https://docs.convex.dev/auth/clerk)
  - Clerk > JWT Templates > Convex 생성 > Issuer 사용
  - convex/auth.config.js 생성
    - domain: Issuer url 교체
  - providers/convex-client-providers.tsx 생성
    - Clerk, Convex Provider 설정
  - app/layout.tsx 수정
    - ConvexClientProviders 추가
  - components/auth/loading.tsx 생성
    - 로딩 컴포넌트 추가

### 트러블 슈팅
convex & clerk 의 authentication 연동이 안되어 로그인창이 안나옴

**시도 방법**
- 기존 처럼 ClerkProvider 를 사용하고, sign-in 폴더를 만들어서 로그인 한번 해주고 나니 정상 작동함
- 로그아웃하면 다시 Unauthenticated 에러 발생
- 리디렉트가 제대로 안되는 상태인듯..

**해결**
- middleware.ts 수정

**경로 매칭 설정**
```tsx
const isProtectedRoute = createRouteMatcher([
    '/(.*)',
    '/',
]);
```
- isProtectedRoute: 모든 경로가 보호되어야 하는지 확인하기 위해 사용됩니다. 여기서 - createRouteMatcher는 모든 경로를 포함하도록 설정되었습니다:
  - '/(.*)': 모든 경로를 의미합니다. 즉, /로 시작하는 모든 경로가 포함됩니다.
  - '/': 루트 경로(/)만 포함합니다.
이 설정에 따라, 이 미들웨어는 Next.js 애플리케이션의 모든 경로가 보호되어야 한다고 가정합니다.

**Clerk 미들웨어 적용**
```tsx
export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
});
```
- clerkMiddleware: 이 미들웨어를 통해 auth와 req 객체에 접근합니다.
- if (isProtectedRoute(req)): 요청된 경로가 isProtectedRoute 조건을 만족하는지 확인합니다. 이 경우, 요청된 모든 경로가 포함됩니다.
- auth().protect(): 경로가 보호되어야 한다고 판단되면, auth().protect() 메서드를 호출하여 사용자의 인증 상태를 확인하고, 인증되지 않은 경우 요청을 차단하거나 리다이렉트합니다.


## [Dashboard layout](https://www.youtube.com/watch?v=ADJKbuayubE&t=3411s)
- app/(dashboard) 생성
  - 대시보드 관련 생성
- app/(dashboard)/layout.tsx 수정
  - Sidebar, Navbar 추가
- app/(dashboard)/_components/org-sidebar.tsx 생성
  - 사이드바 컴포넌트
- app/(dashboard)/_components/navbar.tsx 생성
  - 네비게이션바 컴포넌트


## [Sidebar](https://www.youtube.com/watch?v=ADJKbuayubE&t=4225s)
- Clerk Organizations Settings
  - Clerk Dashboard > Organizations Settings > Enable organizations
  - Clerk Dashboard > JWT Templates > convex > org_id, org_role 추가
- Shadcn UI 추가
  - `npx shadcn@latest add dialog`
  - `npx shadcn@latest add tooltip`
- app/(dashboard)/_components/sidebar/index.tsx 수정
  - Clerk Organization 리스트 및 Organization 추가
  - NewButton 컴포넌트 추가
  - 리스트 컴포넌트 추가
- app/(dashboard)/_components/sidebar/new-button.tsx 생성
  - Clerk Organization 추가 컴포넌트
- app/(dashboard)/_components/sidebar/list.tsx 생성
  - Clerk OrganizationList 컴포넌트
- app/(dashboard)/_components/sidebar/item.tsx 생성
  - OrganizationList Item 컴포넌트
- next.config.mjs 수정 (clerk 이미지를 불러오면 오류 발생)
  - clerk 원격 패턴 추가
  ```mjs
  const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "img.clerk.com"
        }
      ]
    }
  };
  ```
- Clerk Organization


## [Organization Sidebar](https://www.youtube.com/watch?v=ADJKbuayubE&t=5701s)
- app/(dashboard)/_components/org-sidebar.tsx 수정
  - Organization Sidebar 컴포넌트
  - OrganizationSwitcher 추가
  - 보드 메뉴 추가(Link)


## [Navbar](https://www.youtube.com/watch?v=ADJKbuayubE&t=6589s)
- app/(dashboard)/_components/navbar.tsx 수정
  - SearchInput 컴포넌트 추가
  - 모바일 크기에 맞게 OrganizationSwticher 컴포넌트 추가
  - InviteButton 컴포넌트 추가
- app/(dashboard)/_components/search-input.tsx 생성
  - 검색 입력창 컴포넌트
  - `npm i query-string`
  - `npm i usehooks-ts`
  - `npx shadcn@latest add input`
  - debouncedValue 로 일정시간 입력 후 자동으로 url에 검색어 입력 되도록 useEffect 추가
- app/(dashboard)/_components/invite-button.tsx 생성
  - 초대 버튼 컴포넌트
  - OrganizationProfile Dialog


## [Empty States](https://www.youtube.com/watch?v=ADJKbuayubE&t=7444s)
- `app/(dashboard)/page.tsx` 수정
  - EmptyOrg 컴포넌트 추가
  - BoardList 컴포넌트 추가
- `app/(dashboard)/_components/empty-org.tsx` 생성
  - EmptyOrg 컴포넌트
- `app/(dashboard)/_components/board-list.tsx` 생성
  - BoardList 컴포넌트
  - 케이스별 Empy 컴포넌트 추가
- `app/(dashboard)/_components/empty-favorites.tsx` 생성
  - EmptyFavorites 컴포넌트
  - Favorite boards 없을때 보여줄 컴포넌트
- `app/(dashboard)/_components/empty-search.tsx` 생성
  - EmptySearch 컴포넌트
  - 검색 결과 없을때 보여줄 컴포넌트 
- `app/(dashboard)/_components/empty-boards.tsx` 생성
  - EmptyBoards 컴포넌트
  - Team boards 가 없을때 보여줄 컴포넌트


## [Create Mutation](https://www.youtube.com/watch?v=ADJKbuayubE&t=8602s)
- `convex/schema.ts` 생성
  - 테이블 스키마
- `convex/board.ts` 생성
  - API EndPoint
- `public/placeholders` 이미지 추가
- `hooks/use-api-mutation.ts` 생성
  - useApiMutation 훅 생성
- `app/(dashboard)/_components/empty-boards.tsx` 수정
  - useApiMutation 사용하도록 수정
- `app/layout.tsx` 수정
  - Toaster 추가
  - `npx shadcn@latest add sonner`
- `app/(dashboard)/_components/board-list.tsx` 수정
  - New board 버튼 추가
  - 로딩시 스켈레톤 추가
    - `npx shadcn@latest add skeleton`
- `app/(dashboard)/_components/new-board-button.tsx` 생성
  - New board 컴포넌트
  - 스켈레톤 추가
  

## [Board List](https://www.youtube.com/watch?v=ADJKbuayubE&t=9717s)
- `convex/boards.ts` 생성
  - 보드 쿼리 생성
  - 쿼리 생성시 convex 실행 상태로 저장해야 최신데이터 반영 가능
    - `npx convex dev`
    - `convex/_generated/api.d.ts` 자동생성됨
- `app/(dashboard)/_components/board-list.tsx` 수정
  - BoardCard 컴포넌트 추가
  - 실제 데이터로 수정
- `app/(dashboard)/_components/board-card/index.tsx` 생성
  - BoardCard 컴포넌트
  - `app/(dashboard)/_components/board-card/overlay.tsx` 생성
    - Overlay 컴포넌트 추가
    - 카드뷰의 hover 구현
  - `app/(dashboard)/_components/board-card/footer.tsx` 생성
    - Footer 컴포넌트 추가
    - 카드뷰의 하단 컴포넌트


## [Card Actions](https://www.youtube.com/watch?v=ADJKbuayubE&t=11668s)
- 라이브러리 추가
  - `npx shadcn@latest add dropdown-menu`
  - `npx shadcn@latest add alert-dialog`
  - `npm i zustand`
    - 상태 관리
- `components/actions.tsx` 생성
  - Actions 컴포넌트
  - BoardCard 의 드롭다운 및 액션 처리
  - 액션 기능 추가
    - Copy board link 
    - Delete board
      - ConfirmModal 로 모달 띄운 후 액션
    - Reanme
- `app/(dashboard)/_components/board-card/index.tsx` 수정
  - Actions 컴포넌트 추가
- `convex/board.ts` 수정
  - remove mutation 추가
  - update mutation 추가
- `components/confirm-modal.tsx` 생성
  - 컨펌 모달 컴포넌트 추가
- `components/modals/rename-modal.tsx` 생성
  - 이름 변경 모달 컴포넌트
- `app/layout.tsx` 수정
  - ModalProvider 추가


## [Favoriting Functionality](https://www.youtube.com/watch?v=ADJKbuayubE&t=14136s)
- `convex/schema.ts` 수정
  - userFavorites 테이블 정의
- `convex/board.ts` 수정
  - favorite, unFavorite mutation 추가
- `convex/boards.ts` 수정
  - board 와 favorite 합친 정보로 전달하도록 수정
- `app/(dashboard)/_components/board-card/index.tsx` 수정
  - favorite, unFavorite mutation 연동
  - toggleFavorite 으로 즐겨찾기 mutation 호출
- `app/(dashboard)/_components/board-list.tsx` 수정
  - favorite 정보 받아서 UI 업데이트
- `app/(dashboard)/_components/board-card/footer.tsx` 수정
  - 즐겨찾기 버튼 클릭 연결 변경 및 클릭시 네비게이션 되지 않도록 처리


## [Search Querying](https://www.youtube.com/watch?v=ADJKbuayubE&t=15492s)
- `convex/board.ts` 수정
  - 보드 삭제시 favorite 정보 제거
- `convex/boards.ts` 수정
  - get - title 검색 조건 추가
  - `npm i convex-helpers` - 공식 패키지를 보완하는 유용한 코드 모음
- `app/(dashboard)/_components/board-list.tsx` 수정
  - 보드 검색 기능 추가
- `app/(dashboard)/_components/empty-boards.tsx` 수정
  - board/id 로 이동하는 router 추가
- `app/(dashboard)/_components/new-board-button.tsx` 수정
  - board/id 로 이동하는 router 추가


## [Canvas Layout](https://www.youtube.com/watch?v=ADJKbuayubE&t=16312s)
- `app/board/[boardId]/page.tsx` 수정
  - Canvas 컴포넌트 추가
- `app/board/[boardId]/_components/canvas.tsx` 생성
  - Canvas 컴포넌트
  - Info, Participants, Toolbar 컴포넌트 추가
- `app/board/[boardId]/_components/info.tsx` 생성
  - Info 컴포넌트
  - 보드 정보
- `app/board/[boardId]/_components/participants.tsx` 생성
  - Participants 컴포넌트
  - 참가자 리스트
- `app/board/[boardId]/_components/toolbar.tsx` 생성
  - Toolbar 컴포넌트
  - 도구 모음


## [Liveblocks setup](https://www.youtube.com/watch?v=ADJKbuayubE&t=16970s)
### [liveblocks](https://liveblocks.io/)
- `npm i @liveblocks/client`
- `npm i @liveblocks/react`
- `npx create-liveblocks-app@latest --init --framework react`


## [Room Authentication](https://www.youtube.com/watch?v=ADJKbuayubE&t=18013s)
- Room Authentication
  - `npm i @liveblocks/node`
- `app/api/liveblocks-auth/route.ts` 생성
  - 인증 및 세션 생성
- `convex/board.ts` 수정
  - get 메서드 추가
- `app/board/[boardId]/_components/canvas.tsx` 수정
  - useSelf 를 사용해서 사용자 정보 획득
- `liveblocks.config.ts` 수정
  - 메타데이터 추가


## [Room Info](https://www.youtube.com/watch?v=ADJKbuayubE&t=19184s)
- `Skeleton 을 function 에서 함수 컴포넌트로 변경`
  - app/board/[boardId]/_components/participants.tsx 수정
  - app/board/[boardId]/_components/toolbar.tsx 수정
  - app/board/[boardId]/_components/loading.tsx 수정
    - 서버사이드 렌더링 유지
  - app/board/[boardId]/_components/info.tsx 수정
- `app/board/[boardId]/_components/info.tsx` 수정
  - logo + text 로고 적용
  - 보드 이름 영역 추가 및 이름 변경 가능하도록 처리
    - useRenameModal 사용해서 처리
  - 하위 메뉴 구성
    - Copy board link
    - Rename
    - Delete


## [Room Participants](https://www.youtube.com/watch?v=ADJKbuayubE&t=20183s)
- `app/board/[boardId]/_components/user-avatar.tsx` 생성
  - 유저 아바타 컴포넌트
  - `npx shadcn@latest add avatar`
- `app/board/[boardId]/_components/participants.tsx` 수정
  - 현재 보드 참가자 추가
- `lib/utils.ts` 수정
  - 유저 아바타 borderColor 지정하는 유틸 추가


## [Room Toolbar](https://www.youtube.com/watch?v=ADJKbuayubE&t=20986s)
- `app/board/[boardId]/_components/tool-button.tsx` 생성
  - 툴바 버튼 컴포넌트
- `app/board/[boardId]/_components/toolbar.tsx` 수정
  - 툴바 버튼 추가


## [Canvas State](https://www.youtube.com/watch?v=ADJKbuayubE&t=21405s)
- `app/board/[boardId]/_components/toolbar.tsx` 수정
  - ToolButton onClick, isActive 조건 추가
- `app/board/[boardId]/_components/canvas.tsx` 수정
  - ToolButton 프로퍼티 추가
- `types/canvas.ts` 생성
  - Canvas 에서 사용할 모든 상태 추가


## [Cursors Presence](https://www.youtube.com/watch?v=ADJKbuayubE&t=22921s)
- `app/board/[boardId]/_components/canvas.tsx` 수정
  - svg(Scalable Vector Graphics) 추가
  - CursorsPresence 컴포넌트 추가
- `app/board/[boardId]/_components/cursors-presence.tsx` 생성
  - 연결된 사용자들의 커서를 표시하는 컴포넌트
  - 사용자별 커서 컴포넌트 추가
- `app/board/[boardId]/_components/cursor.tsx` 생성
  - 커서 컴포넌트
  - foreignObject 에 커서 모양과 이름 표시
- `liveblocks.config.ts` 수정
  - Presence 에 Cursor 정보 추가
- `lib/utils.ts` 수정
  - pointerEventToCanvasPoint 추가
  - 포인터 이벤트와 카메라로 커서 포지션 계산
- `components/room.tsx` 수정
  - throttle 로 커서 움짐임 부드럽게 처리
  

## [Insert Layer](https://www.youtube.com/watch?v=ADJKbuayubE&t=24461s)
- `liveblocks.config.ts` 수정
  - Storage 추가 - layers, layersId
- `types/canvas.ts` 수정
  - Layer type 추가
- `components/room.tsx` 수정
  - initial storage 추가
- `app/board/[boardId]/_components/canvas.tsx` 수정
  - 클릭시 레이어 추가
  - svg 에 LayerPreview 추가
  - 랜덤 문자열 생성 디펜던시 추가
    - `npm i nanoid`
- `app/board/[boardId]/_components/layer-preview.tsx` 생성
  - LayerPreview 컴포넌트
  - 레이어 타입에 따라 컴포넌트 표시
- `app/board/[boardId]/_components/rectangle.tsx` 생성
  - Rectaangle 컴포넌트
  - Layer type Rectangle 처리
  

## [Select Layer](https://www.youtube.com/watch?v=ADJKbuayubE&t=26407s)
- `app/board/[boardId]/_components/canvas.tsx` 수정
  - onLayerPointerDown 추가
  - 레이어 선택시 캔번스 상태 변경
- `app/board/[boardId]/_components/rectangle.tsx` 수정
  - rect fill, stroke 값 수정
- `lib/utils.ts` 수정
  - rgb 컬러를 hex 컬러로 변환하는 함수 추가


## [Selection Box](https://www.youtube.com/watch?v=ADJKbuayubE&t=27362s)
- `app/board/[boardId]/_components/canvas.tsx` 수정
  - SelectionBox 컴포넌트 추가
- `app/board/[boardId]/_components/selection-box.tsx` 생성
  - SelectionBox 컴포넌트
  - 크기조절 rect 추가
- `hooks/use-selection-bounds.ts` 생성
  - 선택된 레이어의 x,y,w,h 를 계산하는 훅


## [Resize Layer](https://www.youtube.com/watch?v=ADJKbuayubE&t=28774s)


## [Translate Layer](https://www.youtube.com/watch?v=ADJKbuayubE&t=29872s)


## [Color change & Deletion](https://www.youtube.com/watch?v=ADJKbuayubE&t=30689s)


## [Layer Depth](https://www.youtube.com/watch?v=ADJKbuayubE&t=31809s)


## [Selection Net](https://www.youtube.com/watch?v=ADJKbuayubE&t=32206s)


## [Other Elements](https://www.youtube.com/watch?v=ADJKbuayubE&t=33113s)


## [Pencil & Drawing](https://www.youtube.com/watch?v=ADJKbuayubE&t=34371s)


## [Deployment](https://www.youtube.com/watch?v=ADJKbuayubE&t=36782s)