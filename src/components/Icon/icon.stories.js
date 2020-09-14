import React from 'react';
import Icon from ".";
import { ReactComponent as SmileIcon } from "../../assets/icons/smile.svg"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

export default {
    title: "UI 组件/Icon",
    component: Icon
};

export const Default = () => <Icon icon={SmileIcon} />;

export const CustomColor = () => {
    return <Icon icon={SmileIcon} color="#cccccc" />;
}

export const CustomSize = () => {
    return <Icon icon={SmileIcon} width={48} height={48} color="#0c0c" />;
}

