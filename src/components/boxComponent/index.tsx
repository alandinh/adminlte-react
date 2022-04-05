/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { ReactNode } from 'react'
import { ReactComponent as EditIcon } from '../../static/icon/edit.svg';

export interface Info {
    name: string;
    value: string | number | boolean | ReactNode;
}

export interface BoxComponentProps {
    title: string | undefined;
    listInfo: Info[];
    handleEdit?: () => void;

}

const BoxComponent = (props: BoxComponentProps) => {
    const { title, listInfo, handleEdit } = props
    return (
        <div className="box-information">
            <div className="infor-header">
                <p>{title}</p>
                {handleEdit && <div onClick={handleEdit} className="infor-header-btn">
                    <EditIcon fill="#2d7ff9" />
                    <p>Chỉnh sửa</p>
                </div>}
            </div>
            <div className="infor-body">
                {listInfo.map((item) => {
                    return (
                        <div key={item.name} className="infor-body-box">
                            <p className="infor-body-box__title">{item.name}</p>
                            <p className="infor-body-box__des">{item.value}</p>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default BoxComponent
