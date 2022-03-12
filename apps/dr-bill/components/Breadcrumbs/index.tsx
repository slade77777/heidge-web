import BreadcrumbsItem from './BreadcrumbItem';
import FilledArrow from 'shared/icons/FilledArrow';
import {classNames} from 'shared/utils';

export type BreadItem = {
  href?: string;
  text: string;
  onClick?: () => void;
};

type Props = {
  data: BreadItem[];
};

const Breadcrumbs: React.FC<Props> = ({data}) => {
  const isLastItem = (currentIndex) => {
    return currentIndex == data.length - 1;
  };

  return (
    <nav className="mt-[50px] lg:mt-[100px] relative">
      <ol className="flex flex-no-wrap items-center m-0 p-0 list-none z-10">
        {data.map((item, index) => (
          <li className="flex items-center gap-4" key={index}>
            <div className={classNames('text-red-800', isLastItem(index) && 'font-bold')}>
              <BreadcrumbsItem item={item} isLastItem={isLastItem(index)}/>
            </div>
            <span className={classNames('mr-4', isLastItem(index) && 'hidden')}>
              <FilledArrow/>
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
