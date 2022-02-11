import type {NextPage} from 'next';
import {Container} from '@nextui-org/react';
import Image from 'next/image'

const About: NextPage = () => {
  return (
    <Container>
      <div>
        <div className="w-[420px] h-[540px] relative float-left">
          <Image src="/assets/about/avatar.png" layout="fill"/>
        </div>
        About <br/>
        Dr. Bill Kolomyjec
        <div>
          I've been involved in many aspects of computer art/computer graphics and learning. First as a student and
          pioneer of the medium at Michigan State University (MSU). Followed by several years of professing engineering
          graphics, computer graphics and computer art at The Ohio State University (OSU). Followed by being called upon
          to start a program at Northern Illinois University (NIU), College of Visual and Performing Arts, School of
          Art,
          Department of Design called Electronic Media where I was an Associate Professor of Design. <br/>
          I left academics when presented with an opportunity to work for Pixar. My first role at Pixar was as
          RenderMan™
          Evangelist marketing their 3D rendering technology.
        </div>
      </div>
    </Container>
  );
};

export default About
