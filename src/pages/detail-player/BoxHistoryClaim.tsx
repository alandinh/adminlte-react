import React, { useEffect, useState } from 'react'
import BoxComponent, { Info } from '@app/components/boxComponent'
import { DatePicker, Table } from 'antd'
import { DataClaimHistory, DataPlayer } from '@app/utils/types';
import { formatTime, getDataClaimHistory, shortAddress } from '@app/utils';


const { RangePicker } = DatePicker;
interface DataInfoProps {
    dataInfo?: DataPlayer
}

const BoxHistoryClaim = (props: DataInfoProps) => {

    const { dataInfo } = props

    const [dataClaimHistory, setDataClaimHistory] = useState<DataClaimHistory[]>([]);

    console.log("🚀 ~ file: BoxInfoHistory.tsx ~ line 18 ~ BoxInfoHistory ~ dataOrderHistory", dataClaimHistory)

    const address = dataInfo?.address

    useEffect(() => {
        const getDataNft = async () => {
            const data = await getDataClaimHistory(address);
            setDataClaimHistory(data.docs);
        }
        getDataNft()
    }, [])

    const dataSource = dataClaimHistory

    const columns = [
        {
            title: 'Sự kiện',
            dataIndex: 'event',
            key: 'event',
            render: (event: string) => {
                if (event === 'Deposit') {
                    return <div className="status-actived">Deposit</div>
                }
                return <div className="status-not-active">Claim</div>

            },
        },
        {
            title: 'Tổng Số Token',
            dataIndex: 'totalToken',
            key: 'totalToken',
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
            { name: 'Tổng giao dịch thực hiện:', value: '506 lần' },
            { name: 'Khối lượng giao dịch:', value: '1000 MXY' },
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
                        <Table dataSource={dataSource} columns={columns} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxHistoryClaim
