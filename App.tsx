/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {RModalConfig} from './libs/util';
import RModal, { RModalParent, } from './libs';

declare const global: {HermesInternal: null | {}};

interface BtnProps {
  text: string;
  onPress: (n: any) => any;
}

const Btn = (props: BtnProps) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={props.onPress}>
      <Text style={styles.btn_text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const App = () => {

  const setDefaultTime = () => {
    RModalConfig.setDefaultDuration(5000);
  };


  const showInfo = () => {
    RModal.info(
      '这是一段很长的问题这是一段很长的问题这是一段很长的问题这是一段很长的问题这是一段很长的问题这是一段很长的问题',
      2000,
      () => console.warn('close modal 1'),
    );
  };

  const showFail = () => {
    RModal.fail(
      '网络错误！',
      0,
      () => console.warn('close modal'),
    );
    setTimeout(() => {
      RModalConfig.hide();
    }, 2000);
  };

  const showSuccess = () => {
    RModal.success('操作成功！');
  };

  const showLoading = () => {
    RModal.loading();
    setTimeout(() => {
      RModalConfig.hide();
    }, 2000);
  };

  return (
    <RModalParent>
      <View>
        <Btn text="设置弹窗时间为5秒" onPress={setDefaultTime} />
        <Btn text="显示信息" onPress={showInfo} />
        <Btn text="显示错误信息" onPress={showFail} />
        <Btn text="显示成功信息" onPress={showSuccess} />
        <Btn text="显示加载中..." onPress={showLoading} />
      </View>
    </RModalParent>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#00a6e2',
    width: '80%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  btn_text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
