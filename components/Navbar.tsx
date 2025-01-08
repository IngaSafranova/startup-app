import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { auth , signIn, signOut} from '@/auth'


const Navbar = async() => {
  const session = await auth
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
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
              <button onClick={signOut} >
                <span>Logout</span>
              </button>
              {/* Link to users page    */}
              <Link href={`/users/${session?.id}`}>
                <span>{ session?.user?.name}</span>
              </Link>
            </>
          ) : (
              
            <button onClick={async () => {
                'use server';

              await signIn(provider:'github');
              }}>
           <span>Login</span>
              </button>
          )}

        </div>
      </nav>
    </header>
  );
}

export default Navbar