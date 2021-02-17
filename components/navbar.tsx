import Link from 'next/Link'
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
                        <Link href="/admin">
                            <button>Write Posts</button>
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