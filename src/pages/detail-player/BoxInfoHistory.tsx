import BoxComponent, { Info } from '@app/components/boxComponent'
import TableCustom from '@app/components/table/Table';
import { formatTime, getDataOrderHistory, shortAddress } from '@app/utils';
import { DataDetailOrderHistory, DataOrderHistory, DataPlayer } from '@app/utils/types';
import { DatePicker } from 'antd'
import React, { useEffect, useState } from 'react'

interface DataInfoProps {
    dataInfo?: DataPlayer
}

const { RangePicker } = DatePicker;

const BoxInfoHistory = (props: DataInfoProps) => {

    const { dataInfo } = props

    const [dataOrderHistory, setDataOrderHistory] = useState<DataOrderHistory[]>([]);
    console.log("🚀 ~ file: BoxInfoHistory.tsx ~ line 18 ~ BoxInfoHistory ~ dataOrderHistory", dataOrderHistory)

    const address = dataInfo?.address

    useEffect(() => {
        const getDataNft = async () => {
            const data = await getDataOrderHistory(address);
            setDataOrderHistory(data.docs);
        }
        getDataNft()
    }, [])

    const dataSource = dataOrderHistory

    const columns = [
        {
            title: 'Sự kiện',
            dataIndex: 'event',
            key: 'event',
            render: (event: string) => {
                if (event === 'Listing') {
                    return <div className="status-actived">Mua</div>
                } if (event === 'Sale') {
                    return <div className="status-not-active">Bán</div>
                }
                if (event === 'Cancel Listing') {
                    return <div className="status-error">Hủy</div>
                }
                return <div className="status-not-active">Claim</div>

            },
        },
        {
            title: 'Vật Phẩm',
            dataIndex: 'metadata',
            key: 'characterName',
            render: (metadata: DataDetailOrderHistory) => (
                <>
                    <p>{metadata?.characterName}</p>
                </>
            )
        },
        {
            title: 'Mã Hero',
            dataIndex: 'metadata',
            key: 'characterId',
            render: (metadata: DataDetailOrderHistory) => (
                <>
                    <p>{metadata?.characterId}</p>
                </>
            )
        },
        {
            title: 'Level',
            dataIndex: 'metadata',
            key: 'level',
            render: (metadata: DataDetailOrderHistory) => (
                <>
                    <p>{metadata?.level}</p>
                </>
            )
        },
        {
            title: 'Giá',
            dataIndex: 'targetPrice',
            key: 'targetPrice',
        },
        {
            title: 'Từ',
            dataIndex: 'creator',
            key: 'creator',
            render: (transactionHash: string) => <a href={`${transactionHash}`}>{shortAddress(transactionHash)}</a>
        },
        {
            title: 'Đến',
            dataIndex: 'seller',
            key: 'seller',
            render: (transactionHash: string) => <a href={`${transactionHash}`}>{shortAddress(transactionHash)}</a>
        },
        {
            title: 'Mã Giao Dịch',
            dataIndex: 'transactionHash',
            key: 'transactionHash',
            render: (transactionHash: string) => <a href={`${transactionHash}`}>{shortAddress(transactionHash)}</a>
        },
        {
            title: 'Ngày',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (date: string) => <p>{formatTime(date)}</p>
        },
    ];

    const fakeDataInfoHero: Info[] =
        [
            { name: 'Tổng giao dịch thực hiện::', value: '506 lần' },
            { name: 'Khối lượng giao dịch:', value: '10000 BUSD, 1000 MXY' },
        ]
    return (
        <div className="detail-box-player">
            <BoxComponent title='Lịch sử giao dịch' listInfo={fakeDataInfoHero} />
            <div className="table-detail">
                <h3 className="table-title my-3">Danh sách giao dịch của người chơi</h3>
                <div className="table-filter">
                    <div className="table-filter__select my-3">
                        <RangePicker />
                    </div>
                    <div className="table-custom my-5">
                        <TableCustom data={dataSource} columns={columns} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxInfoHistory
