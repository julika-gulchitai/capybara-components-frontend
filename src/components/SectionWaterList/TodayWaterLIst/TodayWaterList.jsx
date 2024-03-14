import { CiTrash } from 'react-icons/ci';
import { FaRegEdit } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

import { ReactComponent as Icon } from '../../../assets/icon/glass.svg';
import {
  AddBtnStyle,
  DeleteBtn,
  IconWrapper,
  EditBtn,
  InfoWrap,
  ListAddDiv,
  ListItem,
  TextTime,
  TextVolume,
  TodayStyle,
  TodayStyledDiv,
  UlStyle,
  WrapBtn,
  StyledQuestion,
} from './TodayWaterList.styled';
import { useState } from 'react';

import ModalWindow from '../../../components/ModalWindow/ModalWindow';

const TodayWaterList = () => {
  const [openModalTodayList, setOpenModalTodayList] = useState(false);
  const [setCurrentItem] = useState(null);
  const [setIsEditing] = useState(false);

  const [dayList] = useState([]);

  const timeFromDate = (date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleOpenModalTodayListEdit = (item) => {
    setCurrentItem(item);
    setOpenModalTodayList(true);
    setIsEditing(true);
  };

  const handleOpenModalTodayListAdd = () => {
    setOpenModalTodayList(true);
    setIsEditing(false);
  };

  const handleModalDel = (item) => {
    setCurrentItem(item);
  };

  const portionsAll = dayList.map((item) => (
    <ListItem key={item._id}>
      <InfoWrap>
        <IconWrapper>
          {' '}
          <Icon />{' '}
        </IconWrapper>
        <TextVolume>{item.amountWater} ml</TextVolume>
        <TextTime>{timeFromDate(item.time)}</TextTime>
      </InfoWrap>

      <WrapBtn>
        <EditBtn onClick={() => handleOpenModalTodayListEdit(item)}>
          <FaRegEdit />
        </EditBtn>
        <DeleteBtn onClick={() => handleModalDel(item)}>
          <CiTrash />
        </DeleteBtn>
      </WrapBtn>
    </ListItem>
  ));

  return (
    <TodayStyledDiv>
      <TodayStyle>Today</TodayStyle>
      <ListAddDiv>
        <UlStyle>
          {portionsAll?.length > 0 ? (
            portionsAll
          ) : (
            <li>
              <StyledQuestion>Did you drink water today?</StyledQuestion>
            </li>
          )}
        </UlStyle>
        <AddBtnStyle onClick={handleOpenModalTodayListAdd}>
          <FaPlus />
          Add water
        </AddBtnStyle>
      </ListAddDiv>
      {openModalTodayList && (
        <ModalWindow
          $position={'center'}
          openModal={openModalTodayList}
          setOpenModal={setOpenModalTodayList}
        ></ModalWindow>
      )}
    </TodayStyledDiv>
  );
};

export default TodayWaterList;
