import React from "react";
import PropTypes from "prop-types";
import StyledMessageCard, {
  Name,
  Status,
  Time,
  Message,
  MessageText,
  UnreadBadge,
} from "./style";
import Avatar from "components/Avatar";
import { useTheme } from "styled-components";

import { ReactComponent as Replied } from "assets/icons/replied.svg";
import Icon from "components/Icon";

function MessageCard({
  avatarSrc,
  avatarStatus,
  statusText,
  name,
  time,
  message,
  unreadCount,
  active,
  replied,
  children,
  ...rest
}) {
  const theme = useTheme();

  return (
    <StyledMessageCard active={active} {...rest}>
      <Avatar status={avatarStatus} src={avatarSrc} />
      <Name>{name}</Name>
      <Status>{statusText}</Status>
      <Time>{time}</Time>
      <Message replied={replied}>
        {replied && (
          <Icon
            width={16}
            height={14}
            icon={Replied}
            color={active ? theme.inactiveColorDark : theme.inactiveColor}
            opacity={active ? 0.4 : 1}
            style={{
              justifyContent: "start",
            }}
          />
        )}
        <MessageText>{message}</MessageText>
        <UnreadBadge count={unreadCount} />
      </Message>
    </StyledMessageCard>
  );
}

MessageCard.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  avatarStatus: PropTypes.any,
  statusText: PropTypes.any,
  name: PropTypes.any,
  time: PropTypes.any,
  message: PropTypes.any,
  unreadCount: PropTypes.number,
  active: PropTypes.bool,
  replied: PropTypes.bool,
  children: PropTypes.any,
};

export default MessageCard;
