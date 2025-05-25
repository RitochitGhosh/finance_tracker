import { ClerkLoaded, ClerkLoading, SignUp } from '@clerk/nextjs';
import { Loader2 } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2E2A47]">
            Do not have an account ?
          </h1>
          <p className="text-base text-[#7E8CA0]">
            Create an account or Log in to existing account
          </p>
        </div>
        <div className="flex items-center justify-center mt-8 ">
          <ClerkLoaded>
            <SignUp />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>         
        </div>
      </div>

      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center" 
        style={{
            backgroundImage: "url('/auth-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
      />
      

    </div>
  )
}

