import { NetworkName } from 'shared';

export const MAGAZINE_LINK =
  'https://books.google.ca/books?id=ICoe1vr9x3kC&lpg=PA30&ots=jtzdeSTnMh&dq=michigan+state+university+college+of+engineering+ibm+1800&pg=PA30&redir_esc=y#v=onepage&q=michigan%20state%20university%20college%20of%20engineering%20ibm%201800&f=true';
export const YOUTUBE_LINK_RETRO = 'https://www.youtube.com/watch?v=lZMvtv2drQA';

export const METAMASK_NETWORK =
  (process.env.NEXT_PUBLIC_METAMASK_NETWORK as NetworkName) || 'ropsten';

export const DEEP_LINK =
  typeof window !== 'undefined'
    ? process.env.NEXT_PUBLIC_DEEP_LINK + window.location.href
    : '';
