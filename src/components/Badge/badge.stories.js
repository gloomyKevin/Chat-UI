import React from 'react';
import Badge from ".";
import { CustomSize } from "../Icon/icon.stories"

export default {
    title: "UI 组件/Badge",
    component: Badge
};

export const Default = () => <Badge count={5} />

export const DotVariant = () => {
    return (
        <Badge show variant="dot">
            <CustomSize style={{ fontSize: "24px" }} />
        </Badge>
    )
}