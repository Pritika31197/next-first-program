import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex-col items-center justify-between p-4">
        <b>Next Js</b>
        <p>What is Next.js?</p>
        <h3>Next.js is a React framework that gives you building blocks to create web applications.
          By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.</h3>
          <img src="next-app.png" height="500px" width="1000px" style={{margin: "auto"}}></img>
          <h3>You can use React to build your UI, then incrementally adopt Next.js features to solve common application requirements such as routing, data fetching, integrations - all while improving the developer and end-user experience. Whether you’re an individual developer or part of a larger team, you can leverage React and Next.js to build fully interactive, highly dynamic, and performant web applications.In the next lessons, we will discuss how you can get started with React and Next.js.</h3>
      </main>
    </>
  )
}
