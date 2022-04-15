import { Modal } from '@nextui-org/react';

export const MetamaskWarningModal = ({
  visible,
  onClose,
  href,
}: {
  visible: boolean;
  onClose: () => void;
  href?: string;
}) => {
  return (
    <Modal
      width={'360px'}
      aria-labelledby="modal-title"
      open={visible}
      onClose={onClose}
    >
      <Modal.Body>
        <span className="font-light py-3">
          We recommend you switch to MetaMask if you intend to mint your saved
          artwork. If not, when you switch to MetaMask later, all your saves
          will be lost.
        </span>
      </Modal.Body>
      <div className="text-center border-t border-t-gray-400">
        <div className="grid grid-cols-2 divide-x divide-gray-400">
          <button onClick={onClose} className="py-2">
            Close
          </button>
          {href && (
            <a href={href} className="py-2 text-blue-500">
              Switch
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default MetamaskWarningModal;
