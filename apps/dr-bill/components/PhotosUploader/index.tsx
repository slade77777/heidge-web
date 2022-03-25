import React from 'react';
import { Input } from '@nextui-org/react';

const PhotosUploader = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl text-center">PhotosUploader</h3>
      <div>
        <Input clearable labelPlaceholder="Name" initialValue="NextUI" />
      </div>
    </div>
  );
};

export default PhotosUploader;
