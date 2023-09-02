import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href={'/auth/login'}>
        <button className="btn btn-primary">Login</button>
      </Link>
    </>
  )
}
