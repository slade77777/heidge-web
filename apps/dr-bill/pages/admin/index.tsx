import type { ReactElement } from 'react';
import PhotosUploader from '../../containers/PhotosUploader';

export default function AdminPage() {
  return <PhotosUploader />;
}

AdminPage.getLayout = function getLayout(page: ReactElement) {
  return <div className="bg-white">{page}</div>;
};
