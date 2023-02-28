import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  	<div className='bg-black text-white h-screen w-screen justify-center text-center items-center'>
		Crossposter coming soon ...
	</div>
  )
}
