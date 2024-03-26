"use client";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';


export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    console.log(user);

    return (
      <div>
        <h1>Shopping List App</h1>
        {user ? (
          <div>
            <p>Welcome, {user.displayName}!</p>
            <p>Email: {user.email}</p>
            <button onClick={firebaseSignOut}>Sign out</button>
            <p></p>
            <Link href="/week-10/shopping-list">Continue to your shopping list</Link>
          </div>
        ) : (
          <div>
            <p>Please sign in</p>
            <button onClick={gitHubSignIn}>Sign in with GitHub</button>
          </div>
        )}
      </div>
    );
}