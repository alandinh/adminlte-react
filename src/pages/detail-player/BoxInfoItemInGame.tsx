import BoxComponent, { Info } from '@app/components/boxComponent'
import { getDataItemIngame } from '@app/utils'
import { DataItemInGame, DataPlayer } from '@app/utils/types'
import { Table } from 'antd'
import React, { useEffect, useState } from 'react'


interface DataInfoProps {
    dataInfo?: DataPlayer
}

const BoxInfoItemIngame = (props: DataInfoProps) => {

    const { dataInfo } = props

    const [dataItemInGame, setDataItemInGame] = useState<DataItemInGame[]>([]);

    const address = dataInfo?.address

    useEffect(() => {
        const getDataItemInGame = async () => {
            const data = await getDataItemIngame(address);
            setDataItemInGame(data.docs);
        }
        getDataItemInGame()
    }, [])

    const dataSource = dataItemInGame

    const columns = [
        {
            title: 'Vật Phẩm',
            dataIndex: 'itemName',
            key: 'itemName',
        },
        {
            title: 'Level',
            dataIndex: 'level',
            key: 'level',
        },
        {
            title: 'Số lượng',
            dataIndex: 'amount',
            key: 'amount',
        },
    ];

    const fakeDataBoxInfoStory: Info[] =
        [
            { name: 'Số MXY trong game:', value: '10000 MXY' },
            { name: 'Số Gold trong game:', value: '1000000 Gold' },
            { name: 'Số Soul trong game:', value: '100 Soul' },
        ]
    return (
        <div className="detail-box-player">
            <BoxComponent title='Thông tin vật phẩm trong game' listInfo={fakeDataBoxInfoStory} />
            <div className="table-detail">
                <div className="table-filter">
                    <div className="table-filter__select my-3">
                        <p>abc</p>
                    </div>
                    <div className="table-custom my-5">
                        <Table dataSource={dataSource} columns={columns} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxInfoItemIngame
