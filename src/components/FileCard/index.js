import React from "react";
import PropTypes from "prop-types";
import StyledFileCard, {
  FileName,
  FileSize,
  Options,
  Time,
  FileIcon,
} from "./style";

import { ReactComponent as FileZip } from "assets/icons/fileZip.svg";
import { ReactComponent as FileExcel } from "assets/icons/fileExcel.svg";
import { ReactComponent as FileWord } from "assets/icons/fileWord.svg";
import { ReactComponent as FilePpt } from "assets/icons/filePpt.svg";
import { ReactComponent as FileImage } from "assets/icons/fileImage.svg";
import { ReactComponent as FilePdf } from "assets/icons/filePdf.svg";
import { ReactComponent as OptionsIcon } from "assets/icons/options.svg";
import Icon from "components/Icon";

const fileIcons = {
  zip: FileZip,
  image: FileImage,
  pdf: FilePdf,
  word: FileWord,
  excel: FileExcel,
  ppt: FilePpt,
};

function FileCard({ file, children, ...rest }) {
  return (
    <StyledFileCard {...rest}>
      <FileIcon icon={fileIcons[file.type]} />
      <FileName>{file.name}</FileName>
      <FileSize>{file.size}</FileSize>
      <Options>
        <Icon icon={OptionsIcon} opacity={0.3} />
      </Options>
      <Time>{file.updatedAt}</Time>
    </StyledFileCard>
  );
}

FileCard.propTypes = {
  children: PropTypes.any,
};

export default FileCard;
