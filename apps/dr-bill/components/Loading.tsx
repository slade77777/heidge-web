import {Loading as NextUILoading} from '@nextui-org/react';

export default function Loading() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <NextUILoading type="points" />
    </div>
  )
}
