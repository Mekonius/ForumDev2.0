import Link from 'next/Link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import toast from 'react-hot-toast';

export default function AuthCheck(props) 
{
    const { username } = useContext(UserContext)

    return username ? props.children : props.fallback || toast('Sign in please', {
        icon: '🔑',
      });

}