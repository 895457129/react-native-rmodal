import React from 'react';
import {Platform} from 'react-native';
import RootSiblings, {RootSiblingParent} from 'react-native-root-siblings';
import {InfoView, FailView, SuccessView, LoadingView} from './modal-views';
import { RModalConfig } from "./util";

interface Callback {
  (): void;
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
}

interface RModalParentProps {
  children: React.ReactElement;
}

export function RModalParent(props: RModalParentProps) {
  const Wrapper = Platform.OS === 'ios' ? React.Fragment : RootSiblingParent;
  return <Wrapper>{props.children}</Wrapper>;
}
