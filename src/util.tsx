import React from 'react';
import {ImageComponent, StyleProp} from 'react-native';
import RootSiblings from 'react-native-root-siblings';

interface Callback {
  (): void;
}

interface ModalStyle {
  rModal_info_bg?: StyleProp<{}>,
  rModal_info_text?: StyleProp<{}>,
  rModal_fail_bg?: StyleProp<{}>,
  rModal_fail_container?: StyleProp<{}>,
  rModal_fail_img?: StyleProp<{}>,
  rModal_fail_text?: StyleProp<{}>,
  rModal_success_bg?: StyleProp<{}>,
  rModal_success_container?: StyleProp<{}>,
  rModal_success_img?: StyleProp<{}>,
  rModal_success_text?: StyleProp<{}>,
  rModal_loading_bg?: StyleProp<{}>,
  rModal_loading_container?: StyleProp<{}>,
  rModal_loading_img?: StyleProp<{}>,
  rModal_loading_text?: StyleProp<{}>,
}

interface ImageProps {
  successImg?: string | React.ReactElement,
  failImg?: string | React.ReactElement,
  loadingImg?: React.ReactElement,
}

export namespace RModalConfig {
  // 默认显示时间， 当设置为0的时候需要手动关闭
  let defaultDuration: number = 2000;
  // 挡墙弹窗具柄
  let modalHandler: RootSiblings | undefined;
  // 关闭回调
  let onClose: Callback | undefined;
  // 弹窗样式
  let modalStyle: ModalStyle;
  // 弹窗相关图片
  let ImageProps: ImageProps;

  /**
   * 设置modal默认显示时间
   * @param duration
   * @constructor
   */
  export function setDefaultDuration(duration: number): void {
    defaultDuration = duration;
  }

  /**
   * 获取默认的显示时间
   * @constructor
   */
  export function getDefaultDuration(): number {
    return defaultDuration;
  }

  /**
   * 设置当前弹窗句柄
   * @param view
   * @param duration
   * @param callBack
   * @constructor
   */
  export function setModalHandler(
    view: RootSiblings,
    duration: number = defaultDuration,
    callBack?: Callback,
  ): void {
    modalHandler && modalHandler.destroy();
    onClose && onClose();
    modalHandler = view;
    onClose = callBack;
    if (duration !== 0) {
      setTimeout(() => {
        modalHandler && modalHandler.destroy();
        onClose && onClose();
        onClose = undefined;
        modalHandler = undefined;
      }, Math.abs(duration));
    }
  }

  /**
   * 隐藏弹窗
   * @constructor
   */
  export function hide(): void {
    modalHandler && modalHandler.destroy();
  }

  export function setModalStyle(style: ModalStyle) {
    modalStyle = style;
  }

  export function getModalStyle() {
    return modalStyle || {};
  }

  export function setImages(props: ImageProps) {
    ImageProps = props;
  }

  export function getImages() {
    return ImageProps || {};
  }

  export function resetSetting() {
    defaultDuration = 2000;
    modalHandler = undefined;
    onClose = () => {};
    modalStyle = {};
    ImageProps = {};
  }

}

