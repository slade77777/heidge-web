import {Button} from 'shared';
import {Discord, Instagram, Twitter} from 'shared/icons';
import {classNames} from 'shared/utils';
import SwitchThemeButton from '../Button/SwitchThemeBtn';

export default function SocialNetworkList({className}: { className?: string }) {
  return (
    <div className={classNames('flex flex-row items-center justify-between gap-4', className)}>
      <Button className="hover:opacity-40">
        <Discord className="w-5 h-5"/>
      </Button>
      <Button className="hover:opacity-40">
        <Twitter className="w-5 h-5"/>
      </Button>
      <Button className="hover:opacity-40">
        <Instagram className="w-5 h-5"/>
      </Button>
      <SwitchThemeButton className="w-5 h-5"/>
    </div>
  )
}
