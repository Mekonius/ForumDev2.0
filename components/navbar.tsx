import Link from 'next/Link'
import { auth } from '../lib/firebase';
import { useContext } from 'react';
import { UserContext } from '../lib/context';


export default function Navbar() {

    const { user, username } = useContext(UserContext);
    
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button>Dev2.0</button>
                    </Link>
                </li>
               
                {/* user is signed-in and has username */}
                
                {username && (
                    <>
                    <li className="push-left">
                        <button onClick={() => auth.signOut()}>Sign Out</button> 
                    </li>
                    <li>
                       <Link href="/admin">
                        <button className="btn-blue">Write Post</button>   
                        </Link> 
                    </li>
                    <Link href={`/${username}`}>
                        <img src={user?.photoURL}/>
                    </Link>
                    </>
                )}

                {/* user is not signed-in OR has not created a username */}

                {!username && (
                    <li>
                        <Link href="/enter">
                            <button className="btn-blue">Log in</button>
                        </Link>
                    </li>
                )}
            
            </ul>
        </nav>
    );
}