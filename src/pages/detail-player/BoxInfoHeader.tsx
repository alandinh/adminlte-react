import BoxComponent, { Info } from '@app/components/boxComponent'
import ChangePlayerModal from '@app/components/modal/ChangePlayerModal';
import { DataPlayer } from '@app/utils/types';
import React, { useState } from 'react'

interface DataHeaderProps {
    dataHeader?: DataPlayer
}

const BoxInfoHeader = (props: DataHeaderProps) => {

    const { dataHeader } = props


    const dataInfo: Info[] = [
        {
            name: 'Địa chỉ ví:',
            value: dataHeader?.address
        },
        {
            name: 'Quốc gia:',
            value: dataHeader?.nation
        },
        {
            name: 'Vai trò:',
            value: dataHeader?.role
        },

    ]

    // status modal
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <div className="container-fuild">
            <BoxComponent title={dataHeader?.name} handleEdit={showModal} listInfo={dataInfo} />
            <ChangePlayerModal
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />
        </div>
    )
}

export default BoxInfoHeader
