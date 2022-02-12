import {Button} from 'shared';
import {Discord, Instagram, Twitter} from 'shared/icons';
import {classNames} from 'shared/utils';

export default function SocialNetworkList({className}: { className?: string }) {
  return (
    <div className={classNames('flex flex-row items-center', className)}>
      <Button className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center mr-6">
        <Instagram className="w-5 h-5 text-white"/>
      </Button>
      <Button className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center mr-6">
        <Discord className="w-5 h-5 text-white"/>
      </Button>
      <Button className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center">
        <Twitter className="w-5 h-5 text-white"/>
      </Button>
    </div>
  )
}
