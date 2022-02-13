import {Button} from 'shared';
import {Discord, Instagram, Twitter} from 'shared/icons';
import {classNames} from 'shared/utils';

export default function SocialNetworkList({className}: {className?: string}) {
  return (
    <div className={classNames('flex flex-row items-center justify-between', className)}>
      <Button>
        <Discord className="w-5 h-5"/>
      </Button>
      <Button>
        <Twitter className="w-5 h-5"/>
      </Button>
      <Button>
        <Instagram className="w-5 h-5"/>
      </Button>
    </div>
  )
}
