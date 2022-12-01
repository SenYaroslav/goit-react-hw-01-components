import { RiRadioButtonLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import React from 'react';
import css from './FriendList.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={css.item}>
      {isOnline ? (
        <RiRadioButtonLine className={css.status} color="red"  />
      ) : (
        <RiRadioButtonLine className={css.status} color="green" />
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
