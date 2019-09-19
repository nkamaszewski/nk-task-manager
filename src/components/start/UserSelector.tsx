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
      <h4>Select mock user:</h4>
      {USERS.map(({ name, id }: User) => (
        <label key={id}>
          <input
            className="radio"
            type="radio"
            value={id}
            checked={id === selectedUserId}
            onClick={() => setSelectedUserId(id)}
          />
          {`${name} (userId: ${id})`}
        </label>
      ))}
    </UserSelectorStyle>
  );
};

export default UserSelector;
