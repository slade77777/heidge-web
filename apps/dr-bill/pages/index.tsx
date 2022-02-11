import type {NextPage} from 'next';
import SwitchThemeButton from '../components/SwitchThemeButton';

const Home: NextPage = () => {
  return (
    <div>
      <SwitchThemeButton/>
      <h1>Dr. Bill, the OG of Generative Art </h1>
      <div className="text-2xl font-heading">para</div>
      <div className="flex flex-col h-screen justify-center items-center text-2xl">
        <p>Almost before we knew it, we had left the ground.</p>
      </div>
    </div>
  );
};

export default Home;
