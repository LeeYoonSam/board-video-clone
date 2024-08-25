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
  

## [Dashboard layout](https://www.youtube.com/watch?v=ADJKbuayubE&t=3411s)


## [Sidebar](https://www.youtube.com/watch?v=ADJKbuayubE&t=4225s)


## [Organization Sidebar](https://www.youtube.com/watch?v=ADJKbuayubE&t=5701s)


## [Navbar](https://www.youtube.com/watch?v=ADJKbuayubE&t=6589s)


## [Empty States](https://www.youtube.com/watch?v=ADJKbuayubE&t=7444s)


## [Create Mutation](https://www.youtube.com/watch?v=ADJKbuayubE&t=8602s)


## [Board List](https://www.youtube.com/watch?v=ADJKbuayubE&t=9717s)


## [Card Actions](https://www.youtube.com/watch?v=ADJKbuayubE&t=11668s)


## [Favoriting Functionality](https://www.youtube.com/watch?v=ADJKbuayubE&t=14136s)


## [Search Querying](https://www.youtube.com/watch?v=ADJKbuayubE&t=15492s)


## [Canvas Layout](https://www.youtube.com/watch?v=ADJKbuayubE&t=16312s)


## [Liveblocks setup](https://www.youtube.com/watch?v=ADJKbuayubE&t=16970s)


## [Room Authentication](https://www.youtube.com/watch?v=ADJKbuayubE&t=18013s)


## [Room Info](https://www.youtube.com/watch?v=ADJKbuayubE&t=19184s)


## [Room Participants](https://www.youtube.com/watch?v=ADJKbuayubE&t=20183s)


## [Room Toolbar](https://www.youtube.com/watch?v=ADJKbuayubE&t=20986s)


## [Canvas State](https://www.youtube.com/watch?v=ADJKbuayubE&t=21405s)


## [Cursors Presence](https://www.youtube.com/watch?v=ADJKbuayubE&t=22921s)


## [Insert Layer](https://www.youtube.com/watch?v=ADJKbuayubE&t=24461s)


## [Select Layer](https://www.youtube.com/watch?v=ADJKbuayubE&t=26407s)


## [Selection Box](https://www.youtube.com/watch?v=ADJKbuayubE&t=27362s)


## [Resize Layer](https://www.youtube.com/watch?v=ADJKbuayubE&t=28774s)


## [Translate Layer](https://www.youtube.com/watch?v=ADJKbuayubE&t=29872s)


## [Color change & Deletion](https://www.youtube.com/watch?v=ADJKbuayubE&t=30689s)


## [Layer Depth](https://www.youtube.com/watch?v=ADJKbuayubE&t=31809s)


## [Selection Net](https://www.youtube.com/watch?v=ADJKbuayubE&t=32206s)


## [Other Elements](https://www.youtube.com/watch?v=ADJKbuayubE&t=33113s)


## [Pencil & Drawing](https://www.youtube.com/watch?v=ADJKbuayubE&t=34371s)


## [Deployment](https://www.youtube.com/watch?v=ADJKbuayubE&t=36782s)