import React from 'react';
import {Platform} from 'react-native';
import RootSiblings, {RootSiblingParent} from 'react-native-root-siblings';
import {InfoView, FailView, SuccessView, LoadingView, ActionSheet, ConfirmView, } from './modal-views';
import { RModalConfig } from "./util";

interface Callback {
  (): void;
}


interface ActionSheetProps {
  items: Array<string>,
  titleText?: string,
  onCancel?: () => void,
  cancelText: string,
  onItemClick: (text: string) => void,
}

interface ConfirmViewProps {
  title: string,
  cancelText?: string,
  okText?: string,
  onCancel?: () => void,
  onOk: () => void,
}

export default class RModal {
  static info(desc: string, duration?: number, callBack?: Callback): void {
    const view = new RootSiblings(<InfoView text={desc} />);
    RModalConfig.setModalHandler(view, duration, callBack);
  }

  static fail(desc: string, duration?: number, callBack?: Callback): void {
    const view = new RootSiblings(<FailView text={desc} />);
    RModalConfig.setModalHandler(view, duration, callBack);
  }

  static success(desc: string, duration?: number, callBack?: Callback): void {
    const view = new RootSiblings(<SuccessView text={desc} />);
    RModalConfig.setModalHandler(view, duration, callBack);
  }

  static loading(): void {
    const view = new RootSiblings(<LoadingView />);
    RModalConfig.setModalHandler(view, 0);
  }

  static actionSheet(props: ActionSheetProps): void {
    const view = new RootSiblings(<ActionSheet
      items={props.items}
      onItemClick={(text) => {
        RModalConfig.hide();
        props.onItemClick(text);
      }}
      cancelText={props.cancelText}
      onCancel={() => {
        RModalConfig.hide();
        props.onCancel && props.onCancel();
      }}
      titleText={props.titleText}
    />);
    RModalConfig.setModalHandler(view, 0);
  }

  static confirm(props: ConfirmViewProps): void {
    const view = new RootSiblings(<ConfirmView
      onCancel={() => {
        props.onCancel && props.onCancel();
        RModalConfig.hide();
      }}
      onOk={() => {
        props.onOk && props.onOk();
        RModalConfig.hide();
      }}
      okText={props.okText}
      cancelText={props.cancelText}
      title={props.title}
    />);
    RModalConfig.setModalHandler(view, 0);
  }

}

interface RModalParentProps {
  children: React.ReactElement;
}

export function RModalParent(props: RModalParentProps) {
  const Wrapper = Platform.OS === 'ios' ? React.Fragment : RootSiblingParent;
  return <Wrapper>{props.children}</Wrapper>;
}
