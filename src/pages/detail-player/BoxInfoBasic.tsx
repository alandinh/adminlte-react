import BoxComponent, { Info } from '@app/components/boxComponent';
import ChangeHistoryModal, { dataHistoryItem } from '@app/components/modal/ChangeHistoryModal';
import { formatTimeByDay } from '@app/utils';
import { DataPlayer } from '@app/utils/types';
import React, { useState } from 'react'


interface DataBasicProps {
    dataBasic?: DataPlayer
}

const BoxInfoBasic = (props: DataBasicProps) => {

    const { dataBasic } = props

    const dataHistory: dataHistoryItem[] = [
        {
            key: '1',
            numberChange: '1',
            title: ' bug',
            statusSolution: true,
            action: 'Đã cảnh Báo user',
            note: '',
            lastUpdate: '13:00 - 01/01/2022',
            userChange: 'Long Tran Thanh',
        },
        {
            key: '2',
            numberChange: '2',
            title: ' notConfirm',
            statusSolution: false,
            action: '',
            note: 'Chờ đánh giá',
            lastUpdate: '13:00 - 01/01/2022',
            userChange: 'Long Tran Thanh',
        },
    ]

    const columnHistory = [
        {
            title: 'Lần thay đổi',
            dataIndex: 'numberChange',
            key: 'numberChange',
        },
        {
            title: 'đánh giá nghi vấn',
            dataIndex: 'title',
            key: 'title',
            render: (title: string) => {
                if (title === 'notConfirm') {
                    return <div className="status-not-active">Chưa đánh giá</div>
                }
                if (title === 'bug') {
                    return <div className="status-error">Chưa đánh giá</div>
                }
                return <div className="status-actived">An toàn</div>

            },
        },
        {
            title: 'Trạng thái',
            dataIndex: 'statusSolution',
            key: 'statusSolution',
            render: (event: boolean) => {
                if (event) {
                    return <div className="status-actived">Đã xử lí</div>
                }
                return <div className="status-not-active">Chưa xử lí</div>

            },
        },
        {
            title: 'Phương án xử lí',
            dataIndex: 'action',
            key: 'action',
        },
        {
            title: 'Ghi chú',
            dataIndex: 'note',
            key: 'note',
        },
        {
            title: 'Thời gian thay đổi',
            dataIndex: 'lastUpdate',
            key: 'lastUpdate',
        },
        {
            title: 'Người thay đổi',
            dataIndex: 'userChange',
            key: 'userChange',
        },
    ]

    const dataInfo: Info[] = [
        {
            name: 'Tổng thời gian hoạt động:',
            value: dataBasic?.totalOnlineHours
        },
        {
            name: 'Lần hoạt động gần nhất:',
            value: dataBasic?.lastUpdate
        },
        {
            name: 'Trạng thái:',
            value: dataBasic?.banned ? 'Chua hoạt động' : 'Đang hoạt động'
        },

        {
            name: 'Lí do:',
            value: dataBasic?.reason
        },
        {
            name: 'Lần cuối sửa đổi:',
            value: dataBasic?.updatedAt ? formatTimeByDay(dataBasic?.updatedAt) : ''
        },
        {
            name: 'Ghi chú:',
            value: dataBasic?.note
        },
        {
            name: 'Ngày tham gia:',
            value: dataBasic?.createdAt ? formatTimeByDay(dataBasic?.createdAt) : ''
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
            <BoxComponent title="Thông tin cơ bản" handleEdit={showModal} listInfo={dataInfo} />
            <ChangeHistoryModal
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
                dataHistory={dataHistory}
                columnHistory={columnHistory}
            />
        </div>
    )
}

export default BoxInfoBasic
