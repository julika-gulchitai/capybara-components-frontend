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
  StyledDiv,
  UlStyle,
  WrapBtn,
  StyledQuestion,
} from './TodayWaterList.styled';
import { useState } from 'react';

import ModalWindow from '../../../components/ModalWindow/ModalWindow';
import TodayListModal from 'components/TodayListModal/TodayListModal';

const TodayWaterList = () => {
  const [openModalTodayList, setOpenModalTodayList] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [dayList] = useState([]);

  const timeFromDate = (date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleOpenModalTodayListEdit = (item, event) => {
    setCurrentItem(item);
    setOpenModalTodayList(true);
    setIsEditing(true);
    event.stopPropagation(); // Зупиняє подальше спливання подій
  };

  const handleOpenModalTodayListAdd = (event) => {
    setOpenModalTodayList(true);
    setIsEditing(false);
    event.stopPropagation(); // Зупиняє подальше спливання подій
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
        <EditBtn onClick={(event) => handleOpenModalTodayListEdit(item, event)}>
          <FaRegEdit />
        </EditBtn>
        <DeleteBtn onClick={() => handleModalDel(item)}>
          <CiTrash />
        </DeleteBtn>
      </WrapBtn>
    </ListItem>
  ));

  return (
    <StyledDiv>
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
        <AddBtnStyle onClick={(event) => handleOpenModalTodayListAdd(event)}>
          <FaPlus />
          Add water
        </AddBtnStyle>
      </ListAddDiv>
      {openModalTodayList && (
        <ModalWindow
          $position={'center'}
          open={openModalTodayList}
          setOpenModal={setOpenModalTodayList}
        >
          <TodayListModal
            onClose={setOpenModalTodayList}
            isEditing={isEditing}
            data={currentItem}
          />
        </ModalWindow>
      )}
    </StyledDiv>
  );
};

export default TodayWaterList;
