/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react'
import { DatePicker } from 'antd'
import BoxComponent, { Info } from '@app/components/boxComponent'
import SearchBox from '@app/components/searchbox/SearchBox'
import { AutoRaidProps, DataPlayer, DataPlayerStoryMode } from '@app/utils/types';
import { formatTime, getPlayerStoryMode } from '@app/utils';
import TableCustom from '@app/components/table/Table';



interface DataInfoProps {
    dataInfo?: DataPlayer
}

const BoxInfoStoryMode = (props: DataInfoProps) => {
    const { RangePicker } = DatePicker;

    const { dataInfo } = props

    const address = dataInfo?.address

    const [dataStoryMode, setDataStoryMode] = useState<DataPlayerStoryMode[]>([]);


    useEffect(() => {
        const getDataStoryMode = async () => {
            const results = await getPlayerStoryMode(address);
            setDataStoryMode(results.docs);
        }
        getDataStoryMode()
    }, [])

    const dataSource = dataStoryMode

    const columns = [
        {
            title: 'Level',
            dataIndex: 'levelInfoId',
            key: 'levelInfoId',
        },
        {
            title: 'Số sao đạt được',
            dataIndex: 'NameInGame',
            key: 'NameInGame',
        },
        {
            title: 'Tổng lần chơi',
            dataIndex: 'totalPlayed',
            key: 'totalPlayed',
        },
        {
            title: 'số Token kiếm được',
            dataIndex: 'autoRaid',
            key: 'coinsReward',
            render: (autoRaid: AutoRaidProps) => (
                <>
                    <p>{autoRaid?.tokensReward}</p>
                </>
            )
        },
        {
            title: 'số Gold kiếm được',
            dataIndex: 'autoRaid',
            key: 'coinsReward',
            render: (autoRaid: AutoRaidProps) => (
                <>
                    <p>{autoRaid?.coinsReward}</p>
                </>
            )
        },
        {
            title: 'Lần chơi gần nhất',
            dataIndex: 'lastPlayedAt',
            key: 'lastPlayedAt',
            render: (date: string) => <p>{formatTime(date)}</p>
        },
    ];

    const DataBoxInfoStory: Info[] =
        [
            { name: 'Level chơi cao nhất:', value: dataInfo?.highestLevel },
            { name: 'Tổng sao đạt được:', value: dataInfo?.totalStars },
            { name: 'Tổng số reward kiếm được:', value: dataInfo?.totalCoins },
            { name: 'Lần chơi gần nhất:', value: dataInfo?.lastPlayed },
        ]
    return (
        <div className="detail-box-player">
            <BoxComponent title='Thông tin Story Mode' listInfo={DataBoxInfoStory} />
            <div className="table-detail">
                <h3 className="table-title my-3">Danh sách level người chơi đã chơi</h3>
                <div className="table-filter">
                    <div className="table-filter__search my-3 ">
                        <SearchBox placeholder="Nhập level của người chơi" />
                    </div>
                    <div className="table-filter__date my-3">
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

export default BoxInfoStoryMode
