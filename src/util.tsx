import RootSiblings from 'react-native-root-siblings';

interface Callback {
  (): void;
}

export namespace RModalConfig {
  let defaultDuration: number = 2000; // 默认显示时间2秒
  let modalHandler: RootSiblings | undefined; // 当前
  let onClose: Callback | undefined;
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
    console.warn('duration', duration);
    console.warn(11, view);
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
    } else {
      console.warn('duration', duration);
    }
  }

  /**
   * 隐藏弹窗
   * @constructor
   */
  export function hide(): void {
    modalHandler && modalHandler.destroy();
  }
}
