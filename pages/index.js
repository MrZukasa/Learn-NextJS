import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>lorem ipsum</p>
      <p>lorem ipsum</p>
      <Link href="/ninjas">See Ninja Listing</Link>
    </div>
  )
}
