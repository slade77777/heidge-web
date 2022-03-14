import {Container} from '@nextui-org/react';
import Introduction from './Introduction';
import ArtworkOverview from './ArtworkOverview';
import ShowAndMedia from './ShowAndMedia';

export default function Home() {
  return (
    <Container md className="relative">
      <div className="mt-[200px] mb-[120px]">
        <Introduction/>
        <ArtworkOverview/>
        <ShowAndMedia/>
      </div>
    </Container>
  )
}
