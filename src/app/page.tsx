'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const { data:session, status } = useSession()

	if(status === "authenticated") return <div>signed in</div>

	return (
	<>
		<div className='flex bg-black text-white h-screen w-screen justify-center text-center items-center'>
			Crossposter coming soon ...
		</div>
		<button onClick={() => signIn()}>sign in</button>
	</>
	)
}
