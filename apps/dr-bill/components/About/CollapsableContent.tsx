import {Collapse, Text} from '@nextui-org/react';
import {Paragraph} from '../CustomText';

export default function CollapsableContent() {
  return (
    <Collapse.Group accordion={false} css={{padding: 0}}>
      <Collapse
        title="Professional experience"
        css={{
          borderColor: '$primary',
          'div[role=button]': {
            padding: '50px 0 0 0',
            marginBottom: '50px',
          },
          'h3': {
            fontFamily: '$heading',
            fontSize: '$md',
            lineHeight: '46.2px',
            fontWeight: 400,
            letterSpacing: 0,
          },
        }}
      >
        <div className="md:grid md:grid-cols-2 grid-flow-col md:gap-12">
          <Paragraph>
            <Text span weight="bold">Largo, Florida </Text>(Computer Graphic Artist Emeritus / 2020 - present).
            Generative Art, Interactive Media
            Art and Legacy work.
            <br/><br/>
            <Text span weight="bold">Saint Petersburg College </Text>(Adjunct Faculty / Professional Trainer / 2013
            - 2020). Digital Media
            instruction. Instructor Lead Training (Media Applications)
            <br/><br/>
            <Text span weight="bold">Art Institute of Tampa </Text>(Adjunct Faculty / 2010 - 2013). Digital Media
            instruction.
            <br/><br/>
            <Text span weight="bold">Accenture </Text>(Senior Graphic Designer / 1998 - 2009).<br/>
            Led projects and supervised other graphics artists in the design and production of the visual
            components
            for learning products and other marketing collateral and display materials. Contributed to the visual
            design and usability of learning products and learning management systems.
          </Paragraph>
          <Paragraph>
            <Text span weight="bold">Pixar </Text>(Marketing / 1989 - 1997). <br/>
            Contributed to the design of successful Pixar Interactive “edutainment” products (Toy Story Animated
            storybook and Toy Story Activity Center educational CD-ROMs) by doing market research, focus groups
            and
            developing age appropriate games. Established an international distribution network for Pixar
            application products consisting of approximately 30 dealers in 15 countries which resulted in
            approximately 15% of shrink-wrapped product sales for the company. Promoted RenderMan™ photorealistic
            rendering and special effects software as an emerging computer graphics technology to prospective OEM
            clients, third party vendors and presented at a variety of marketing venues.
            <br/><br/>
            <Text span weight="bold">Northern Illinois University </Text>(Associate Professor of Design / 1985 -
            1989). Promoted to Associate
            Professor with tenure in four years. Introduced technology into the Design curriculum. Created a new
            program called Electronic Media.
            <br/><br/>
            <Text span weight="bold">The Ohio State University </Text>(Assistant Professor of Engineering / 1981 -
            1985).
            Taught Engineering Graphics courses: Mechanical Drawing, Descriptive Geometry and Technical
            illustration.
          </Paragraph>
        </div>
      </Collapse>
      <Collapse
        title="Education and Professional Development"
        css={{
          borderColor: '$primary',
          'div[role=button]': {
            padding: '50px 0 0 0',
            marginBottom: '50px',
          },
          'h3': {
            fontFamily: '$heading',
            fontSize: '$md',
            lineHeight: '46.2px',
            fontWeight: 400,
            letterSpacing: 0,
          },
        }}
      >
        <div className="md:grid md:grid-cols-2 grid-flow-col gap-[50px]">
          <Paragraph>
            <Text span weight="bold">Education</Text><br/>
            PhD, Higher Education and Administration, Michigan State University. East Lansing, MI. 1981 <br/>
            MFA, Graphic Design, Michigan State University. East Lansing, MI. 1975 <br/>
            BFA, Industrial Design, Michigan State University. East Lansing, MI. 1969<br/>
          </Paragraph>
          <Paragraph>
            <Text span weight="bold">Professional Development</Text><br/>
            Visiting Scholar (post-Doctorate), Graduate School of Education, University of California at Berkeley.
            Berkeley, CA. 1997. <br/>
            Participant Saint Petersburg College - Corporate Training HIgh Tech Training (HITT) Grant Training.
            Certificates: Java Web Programming Certification Training, Java Programming Class 1, Javascript, Agile
            Development. 2014.
          </Paragraph>
        </div>
      </Collapse>
    </Collapse.Group>
  )
}
