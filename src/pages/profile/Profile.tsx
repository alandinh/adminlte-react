import React, { useEffect, useState } from 'react';
import BoxComponent, { Info } from '@app/components/boxComponent';
import { useNavigate, } from 'react-router-dom';
import { DataProfile } from '@app/utils/types';
import { formatTimeByDay, getDataProfile } from '@app/utils';

const Profile = () => {

  const [dataProfile, setDataProfile] = useState<DataProfile>()

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await getDataProfile();
      setDataProfile(data);
    }
    getData()
  }, [])

  const dataInfo: Info[] = [
    {
      name: 'Số điện thoại:',
      value: dataProfile?.phoneNumber
    },
    {
      name: 'Email:',
      value: dataProfile?.email
    },
    {
      name: 'Vai trò:',
      value: dataProfile?.note
    },

  ]
  const dataBasicInfo: Info[] = [
    {
      name: 'Trạng thái:',
      value: dataProfile?.isActive ? 'Đang hoạt động' : 'Chua hoạt động'
    },
    {
      name: 'Ghi chú:',
      value: dataProfile?.note
    },
    {
      name: 'Ngày tham gia:',
      value: dataProfile?.createdAt ? formatTimeByDay(dataProfile?.createdAt) : ''
    },

  ]


  const changeProfile = () => {
    navigate('/chinh-sua-ca-nhan');
  }

  return (
    <div className="profile-wrapper">
      <BoxComponent title="Trần Thanh Long" handleEdit={changeProfile} listInfo={dataInfo} />
      <BoxComponent title="Thông tin cơ bản" listInfo={dataBasicInfo} />
    </div>
  );
};

export default Profile;
