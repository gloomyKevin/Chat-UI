import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledVideoCall, {
  Minimize,
  Actions,
  Action,
  Self,
  VideoCallAlert,
} from "./style";
import videoCaller from "assets/images/video-caller.jpg";
import face from "assets/images/face-male-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompressAlt,
  faMicrophone,
  faPhoneSlash,
  faVolumeMute,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";

import "styled-components/macro";

function VideoCall({ children, onHangOffClicked, ...rest }) {
  const [fullScreen, setFullScreen] = useState(true);

  if (!fullScreen) {
    return (
      <VideoCallAlert>
        <Avatar
          src={face}
          css={`
            grid-area: avatar;
          `}
        />
        <Paragraph
          size="medium"
          css={`
            grid-area: info;
          `}
        >
          正在跟 李铭浩 进行视频通话
        </Paragraph>
        <Paragraph
          type="secondary"
          css={`
            grid-area: action;
            cursor: pointer;
          `}
          onClick={() => setFullScreen(true)}
        >
          点击切换全屏
        </Paragraph>
        <FontAwesomeIcon
          icon={faVideo}
          css={`
            grid-area: icon;
            font-size: 20px;
            justify-self: end;
            opacity: 0.3;
          `}
        />
      </VideoCallAlert>
    );
  }

  return (
    <StyledVideoCall src={videoCaller} {...rest}>
      <Minimize shape="rect" onClick={() => setFullScreen(false)}>
        <FontAwesomeIcon icon={faCompressAlt} />
      </Minimize>
      <Actions>
        <Action>
          <FontAwesomeIcon icon={faMicrophone} />
        </Action>
        <Action type="hangoff">
          <FontAwesomeIcon icon={faPhoneSlash} onClick={onHangOffClicked} />
        </Action>
        <Action>
          <FontAwesomeIcon icon={faVolumeMute} />
        </Action>
      </Actions>
      <Self src={face} size="140px" />
    </StyledVideoCall>
  );
}

VideoCall.propTypes = {
  children: PropTypes.any,
};

export default VideoCall;
