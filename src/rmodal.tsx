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
  onItemClick: (text?: string, index?: number) => void,
}

interface ConfirmViewProps {
  title: string,
  cancelText?: string,
  okText?: string,
  onCancel?: () => void,
  onOk: () => void,
}

function info(desc: string, callBack?: Callback): void;
function info(desc: string, duration?: number, callBack?: Callback): void;
function info(desc: string, ...resetParams: any) {
  const view = new RootSiblings(<InfoView text={desc} />);
  let duration = RModalConfig.getDefaultDuration();
  let callBack = () => {};
  if (resetParams.length === 0) {
    RModalConfig.setModalHandler(view, duration, callBack);
  }
  if (resetParams.length === 1 && typeof resetParams[0] === 'number') {
    RModalConfig.setModalHandler(view, resetParams[0]);
  }
  if (resetParams.length === 1 && typeof resetParams[0] === 'function') {
    RModalConfig.setModalHandler(view, duration, resetParams[0]);
  }
  if (resetParams.length === 2) {
    RModalConfig.setModalHandler(view, resetParams[0], resetParams[1]);
  }
}

function fail(desc: string, callBack?: Callback): void;
function fail(desc: string, duration?: number, callBack?: Callback): void;
function fail(desc: string, ...resetParams: any) {
  const view = new RootSiblings(<FailView text={desc} />);
  let duration = RModalConfig.getDefaultDuration();
  let callBack = () => {};
  if (resetParams.length === 0) {
    RModalConfig.setModalHandler(view, duration, callBack);
  }
  if (resetParams.length === 1 && typeof resetParams[0] === 'number') {
    RModalConfig.setModalHandler(view, resetParams[0]);
  }
  if (resetParams.length === 1 && typeof resetParams[0] === 'function') {
    RModalConfig.setModalHandler(view, duration, resetParams[0]);
  }
  if (resetParams.length === 2) {
    RModalConfig.setModalHandler(view, resetParams[0], resetParams[1]);
  }
}

function success(desc: string, callBack?: Callback): void;
function success(desc: string, duration?: number, callBack?: Callback): void;
function success(desc: string, ...resetParams: any) {
  const view = new RootSiblings(<SuccessView text={desc} />);
  let duration = RModalConfig.getDefaultDuration();
  let callBack = () => {};
  if (resetParams.length === 0) {
    RModalConfig.setModalHandler(view, duration, callBack);
  }
  if (resetParams.length === 1 && typeof resetParams[0] === 'number') {
    RModalConfig.setModalHandler(view, resetParams[0]);
  }
  if (resetParams.length === 1 && typeof resetParams[0] === 'function') {
    RModalConfig.setModalHandler(view, duration, resetParams[0]);
  }
  if (resetParams.length === 2) {
    RModalConfig.setModalHandler(view, resetParams[0], resetParams[1]);
  }
}


function custom(Component: React.ReactElement, callBack?: Callback): void;
function custom(Component: React.ReactElement, duration?: number, callBack?: Callback): void;
function custom(Component: React.ReactElement, ...resetParams: any) {
  const view = new RootSiblings(Component);
  let duration = RModalConfig.getDefaultDuration();
  let callBack = () => {};
  if (resetParams.length === 0) {
    RModalConfig.setModalHandler(view, duration, callBack);
  }
  if (resetParams.length === 1 && typeof resetParams[0] === 'number') {
    RModalConfig.setModalHandler(view, resetParams[0]);
  }
  if (resetParams.length === 1 && typeof resetParams[0] === 'function') {
    RModalConfig.setModalHandler(view, duration, resetParams[0]);
  }
  if (resetParams.length === 2) {
    RModalConfig.setModalHandler(view, resetParams[0], resetParams[1]);
  }
}

export default class RModal {
  static hide = RModalConfig.hide;

  static info = info;

  static fail = fail;

  static success = success;

  static loading(): void {
    const view = new RootSiblings(<LoadingView />);
    RModalConfig.setModalHandler(view, 0);
  }

  static custom = custom;

  static actionSheet(props: ActionSheetProps): void {
    const view = new RootSiblings(<ActionSheet
      items={props.items}
      onItemClick={(text, index) => {
        RModalConfig.hide();
        props.onItemClick(text, index);
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
