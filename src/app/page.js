import Feed from "@/components/Feed";

export default function Home() {

  return (
    <main className="min-h-screen flex flex-col items-center pt-14 pb-10">
      <h1 className="text-4xl font-bold text-center">RECIPE FEED</h1>
        <Feed />
    </main>
  )
}
