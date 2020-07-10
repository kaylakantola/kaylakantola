import Head from 'next/head'

export default function Home() {
  return (
    <div className="font-nunito">
      <Head>
        <title>Kayla Kantola</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="text-4xl">
          This is eventually going to be a really cool personal site, I swear!
        </div>
      <img src="/images/kayla_square.png" alt="kayla" style={{height: '400px'}}/>
      </main>
    </div>
  )
}
