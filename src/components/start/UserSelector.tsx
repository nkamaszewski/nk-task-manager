import React from "react";
import { USERS } from "../../helpers/constans";
import { User } from "../../types/types";
import UserSelectorStyle from "../../styles/UserSelectorStyle";

interface Props {
  selectedUserId: number;
  setSelectedUserId: Function;
}

const UserSelector = ({ selectedUserId, setSelectedUserId }: Props) => {
  return (
    <UserSelectorStyle>
      <p className="title">Select mock user:</p>
      {USERS.map(({ name, id }: User) => (
        <label key={id} className={name} title={`userId: ${id}`}>
          <input
            className="radio"
            type="radio"
            value={id}
            checked={id === selectedUserId}
            onChange={() => setSelectedUserId(id)}
          />
          {`${name}`}
        </label>
      ))}
    </UserSelectorStyle>
  );
};

export default UserSelector;
