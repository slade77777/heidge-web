import { Container } from '@nextui-org/react';
import Image from 'next/image';
import CollapsableContent from './CollapsableContent';
import { Heading, Paragraph } from '../CustomText';
import Watermark from '../Watermark';

export default function About() {
  return (
    <Watermark text="About">
      <Container md>
        <div className="mt-[100px]">
          <div className="hidden lg:block w-[420px] h-[540px] mr-[54px] relative float-left">
            <Image
              src="/e_art:audrey/v1648110601/DrBill/common/20220108_140942_r0apmt.jpg"
              layout="fill"
              alt="avatar"
            />
          </div>
          <Heading css={{ marginBottom: '30px' }}>
            About <br />
            Dr. Bill Kolomyjec
          </Heading>
          <Paragraph>
            I have been involved in many aspects of computer art/computer
            graphics and learning. First as a student and pioneer of the medium
            at Michigan State University (MSU). Followed by several years of
            professing engineering graphics, computer graphics and computer art
            at The Ohio State University (OSU). Followed by being called upon to
            start a program at Northern Illinois University (NIU), College of
            Visual and Performing Arts, School of Art, Department of Design
            called Electronic Media where I was an Associate Professor of
            Design.
            <br />
            <br />
            I left academics when presented with an opportunity to work for
            Pixar. My first role at Pixar was as RenderMan™ Evangelist marketing
            their 3D rendering technology.
            <br />
            <br />
            When the company reorganized I took a side trip to start a
            Renderman™ accessory company called The VALIS Group with three other
            ex-Pixar employees. I rejoined Pixar as their International
            Marketing Manager and established a global distribution network for
            shrink-wrapped desktop rendering software products. After the
            success of Toy Story my role changed again, this time to market and
            assist in the development of edutainment products based on the
            characters from the animated film.
            <br />
            <br />
            When Pixar gave up Pixar Interactive and became an animation studio
            I went to work at Anderson Consulting as a Learning Architect. There
            I found my niche designing graphics for multimedia training
            products. After several years my division morphed into Accenture
            Learning and I started designing E-Learning graphics and managing
            projects. I &qout;retired&qout; from Accenture Learning and
            relocated to Pinellas County Florida.
            <br />
            <br />
            I came out of retirement to take a position as academic adjunct
            faculty at the Art Institute of Tampa (AiTA) to teach E-Learning,
            Web Design and Interactive Media classes. After several years I left
            AiTA and took a position as a Professional Trainer at the Workforce
            Institute in the Corporate Training department of Saint Petersburg
            College (SPC). I taught Digital Media classes as an academic
            adjunct, in the Humanities/ Fine Arts/ Digital Media department
            until Covid-19 made classroom teaching a health risk.
            <br />
            <br />
            Finally, fully retired, I promote my legacy where I can and create
            Generative Art at my leisure.
          </Paragraph>
          <CollapsableContent />
          <div className="h-[150px]" />
        </div>
      </Container>
    </Watermark>
  );
}
