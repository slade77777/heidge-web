import { memo, useCallback } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { MOBILE_PUBLIC_MENUS, SOCIALS } from "../../constants/routes/homeMenu";
import { Modal, useModal } from "@nextui-org/react";

const MobileHeader = () => {
  const { setVisible, bindings } = useModal();
  const closeHandler = useCallback(() => {
    setVisible(false);
  }, []);
  return (
    <div className="lg:hidden">
      <div className="h-[60px] bg-fuchsia-900 w-full flex flex-row items-center justify-between px-4 lg:pl-16">
        <span className="text-white text-xl font-bold lg:text-3xl">Hedgie</span>
        <MenuIcon
          onClick={() => setVisible(true)}
          className="w-8 h-8 text-white block lg:hidden"
        />
      </div>
      <Modal
        style={{ borderRadius: 0, paddingTop: 0 }}
        fullScreen
        closeButton
        onClose={closeHandler}
        {...bindings}
      >
        <Modal.Body className="flex flex-col bg-fuchsia-900">
          <div className="py-8 px-4">
            <div className="mb-8">
              <a className="bg-indigo-900 px-8 py-2 ml-2 text-white">Sign In</a>
            </div>
            {MOBILE_PUBLIC_MENUS.map((item, index) => (
              <div key={index} className="border-t-[1px] border-Slate-700 py-2">
                <a className="text-white font-bold">{item.name}</a>
              </div>
            ))}
            <div className="flex flex-row flex-wrap">
              {SOCIALS.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/4 mt-3 flex items-center justify-center"
                >
                  <div className="w-[42px] h-[42px] rounded-[21px] bg-teal-400 flex items-center justify-center">
                    <item.icon className="w-[21px] h-[21px]" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default memo(MobileHeader);
