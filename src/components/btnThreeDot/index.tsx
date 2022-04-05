/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {useRef, memo, useState} from "react";
import useOnClickOutside from "@app/hooks/useClickOutside";
import threeDotIcon from "../../static/icon/threedot.svg";

export interface ItemMoreOption {
  key?: string;
  icon: string;
  name: string;
  onClick: (value?: any) => void;
}
interface Props {
  listItem: ItemMoreOption[];
  onChangeID: () => void;
}

function ThreeDot(props: Props) {
  const {listItem, onChangeID} = props;

  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsShowModal(false));
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const handleGetIDRecord = () => {
    onChangeID();
    setIsShowModal(true);
  };

  return (
    <>
      <div className="btn" onClick={handleGetIDRecord}>
        <img src={threeDotIcon} alt="icon" />
        {isShowModal && (
          <div ref={ref} className="more-action">
            {listItem.map((item, index) => (
              <div onClick={() => item.onClick(item.key)} key={index}>
                <img src={item.icon} alt="icon" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default memo(ThreeDot);
