import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { auth , signOut, signIn} from '@/auth'
import { redirect } from 'next/dist/server/api-utils'


const Navbar = async() => {
  const session = await auth()
  return (
    <header className="px-5 py-3 bg-white shadow-xs font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        {/* we render this div if user is Loged In */}

        <div className='flex items-center gap-5 text-black' >
          {/* if session and user exist render this info */}
          {session && session?.user ? (
            <>
              <Link href='/startup/create' >
                <span>Create</span>
              </Link>
              <form action={async () => {
                'use server';
                await signOut();
              }} >
                <button type='submit'>Logout</button>
              </form>
              {/* Link to users page    */}
              <Link href={`/user/${session?.id}`}>
                <span>{ session?.user?.name}</span>
              </Link>
            </>
          ): (
              <form action={async () => {
                'use server';

              await signIn()}}>
           <button type='submit'>Login</button>
              </form>
          )}

        </div>
      </nav>
    </header>
  );
}

export default Navbar