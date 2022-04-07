import type { ReactElement } from 'react';

export default function AdminPage() {
  return <div className="max-w-md mx-auto">admin page</div>;
}

AdminPage.getLayout = function getLayout(page: ReactElement) {
  return <div className="bg-white py-10 h-screen">{page}</div>;
};
