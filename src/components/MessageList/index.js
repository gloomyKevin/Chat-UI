import React from "react";
import PropTypes from "prop-types";
import StyledMessageList, { ChatList } from "./style";

import { ReactComponent as Plus } from "assets/icons/plus.svg";
import Filter from "components/Filter";
import Select from "components/Select";
import Option from "components/Option";
import Button from "components/Button";
import Icon from "components/Icon";
import Input from "components/Input";
import MessageCard from "components/MessageCard";

import face1 from "assets/images/face-male-1.jpg";
import FilterList from "components/FilterList";
import { useTrail, animated } from "react-spring";
import useStaggeredList from "hooks/useStaggeredList";
import messageData from "data/messages";

function MessageList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(6);

  return (
    <StyledMessageList {...rest}>
      <FilterList
        options={["最新消息优先", "在线好友优先"]}
        actionLabel="创建会话"
      >
        <ChatList>
          {messageData.map((message, index) => (
            <animated.div key={message.id} style={trailAnimes[index]}>
              <MessageCard
                key={message.id}
                active={index === 3}
                replied={message.replied}
                avatarSrc={message.avatarSrc}
                name={message.name}
                avatarStatus={message.status}
                statusText={message.statusText}
                time={message.time}
                message={message.message}
                unreadCount={message.unreadCount}
              />
            </animated.div>
          ))}
        </ChatList>
      </FilterList>
    </StyledMessageList>
  );
}

MessageList.propTypes = {
  children: PropTypes.any,
};

export default MessageList;
