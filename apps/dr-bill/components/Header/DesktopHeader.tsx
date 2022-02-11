import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

export default function DesktopHeader({className}: { className?: string }) {
  return (
    <div
      className={classNames(
        'h-full flex items-center justify-between px-[344px]',
        className,
      )}>
      <Link href="/">
        <a className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="DrBill"
            width={59}
            height={59}
          />
        </a>
      </Link>
      <div className="flex h-full">
        {/*<DesktopNavigation/>*/}
      </div>
    </div>
  )
}
