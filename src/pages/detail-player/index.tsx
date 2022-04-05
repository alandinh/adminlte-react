
import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { useParams } from 'react-router-dom';
import { DataPlayer } from '@app/utils/types';
import { getPlayerById } from '@app/utils';
import BoxInfoBasic from './BoxInfoBasic';
import BoxInfoHeader from './BoxInfoHeader';
import BoxInfoInGame from './BoxInfoInGame';

const { TabPane } = Tabs;

function callback(key: any) {
    console.log(key);
}

function DetailPlayer() {

    // get id user
    const { id } = useParams<string>();
    const [dataPlayer, setDataPlayer] = useState<DataPlayer>();
    console.log("🚀 ~ file: index.tsx ~ line 22 ~ DetailPlayer ~ dataPlayer", dataPlayer)

    useEffect(() => {
        const getData = async () => {
            if (!id) return
            const data = await getPlayerById(id);
            setDataPlayer(data);
        }
        getData()
    }, [id])

    return (
        <div className="container-fuild detail-player">
            <BoxInfoHeader dataHeader={dataPlayer} />
            <div className="tabs detail-player__content">
                <Tabs defaultActiveKey="1" onChange={callback} className="tabs--outbox">
                    <TabPane tab="Thông tin cơ bản" key="1">
                        <BoxInfoBasic dataBasic={dataPlayer} />
                    </TabPane>
                    <TabPane tab="Thông tin trong game" key="2">
                        <BoxInfoInGame dataInfo={dataPlayer} />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
}

export default DetailPlayer;
