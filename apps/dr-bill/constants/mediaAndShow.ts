import { MediaShowType, MediaType } from '../types';

export const SHOW_AND_MEDIA: MediaShowType[] = [
  {
    key: '1',
    label: MediaType.Event,
    title: 'NFT Art - Spring Mixer 03.26.2022',
    description:
      'My artwork will be exhibited on digital screens at this NFT Art gathering in Toronto on March 26, 2022.',
    image: {
      src: '/v1648110595/DrBill/common/Post_Instagram_Facebook__1080x1080_krhq1a.png',
    },
    href: 'https://nft-art.eventbrite.ca',
  },
  {
    key: '2',
    label: MediaType.Article,
    title: 'Computer World magazine article 06.05.1978',
    description:
      'Concept behind ‘shotgun’ art approaches 1940s abstract expressionism',
    image: {
      src: '/w_800/v1648181711/DrBill/common/Computer-World-1978_ex2ke6.png',
    },
    href: 'https://books.google.ca/books?id=ICoe1vr9x3kC&lpg=PA30&ots=jtzdeSTnMh&dq=michigan+state+university+college+of+engineering+ibm+1800&pg=PA30&redir_esc=y#v=onepage&q=michigan%20state%20university%20college%20of%20engineering%20ibm%201800&f=true',
  },
  {
    key: '3',
    label: MediaType.Video,
    title: 'Generative Art Retrospective 11.20.2021',
    description:
      'Dr. Bill takes the audience of an NFT Art event in Toronto on the generative art journey, from the 70’s until now.',
    image: {
      src: '/w_800/v1648181783/DrBill/common/Dr.Bill-Generative-Art-Retrospective_wbiujp.png',
    },
    href: 'https://www.youtube.com/watch?v=lZMvtv2drQA',
  },
  {
    key: '4',
    label: MediaType.Article,
    title: 'Blocks: a generative art NFT built exclusively on Stacks',
    description:
      ' An interesting generative art collection by Alex Rudloff that was influenced by me and other OGs of Generative Art.',
    image: {
      src: '/w_800/v1648181854/DrBill/common/1_DbdGAGUSR4Al-W4_dWvVcA_siva5c.png',
    },
    href: 'https://medium.com/@alexrudloff/blocks-a-generative-art-nft-built-exclusively-on-stacks-242a7295c404',
  },
  {
    key: '5',
    label: MediaType.Article,
    title: ' The appeal of computer graphics',
    description: 'An article I wrote in September 1975',
    image: {
      src: '/v1647255699/DrBill/1920/plotter-28.png',
    },
    href: 'https://www.atariarchives.org/artist/sec15.php',
  },
];
