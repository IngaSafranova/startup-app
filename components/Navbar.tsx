import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { auth , signOut, signIn} from '@/auth'
import { redirect } from 'next/dist/server/api-utils'
import { BadgePlus, LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'


const Navbar = async() => {
  const session = await auth()
  return (
    <header className="px-5 py-3 bg-white shadow-xs font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        {/* we render this div if user is Loged In */}

        <div className="flex items-center gap-5 text-black">
          {/* if session and user exist render this info */}
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden text-red-500" />
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>
              {/* Link to users page    */}
              <Link href={`/user/${session?.id}`}>
                <Avatar className='size-10'>
                  <AvatarImage src={session?.user?.image || ''} alt={session?.user?.name || ''} />
                  <AvatarFallback>AV</AvatarFallback>
              </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn();
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar