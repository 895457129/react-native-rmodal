# react-native-rmodal

![示例](./assets/qut9u-80dho.gif)

# 使用方式

## 配置弹出显示时间

```typescript jsx
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState, } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity, Image,
} from 'react-native';

// import RModal, { RModalParent} from "react-native-rmodal";
// import { RModalConfig } from "react-native-rmodal/libs/util"

// import {RModalConfig} from './libs/util';
// import RModal, { RModalParent, } from './libs';

import RModal, { RModalParent, RModalConfig, } from './src';

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
  const [duration, setDuration] = useState(2000);

  const setDefaultTime = () => {
    const t = duration === 2000 ? 5000 : 2000;
    setDuration(t);
    RModalConfig.setDefaultDuration(t);
  };


  const showInfo = () => {
    RModal.info(
      '这是一段很长的问题这是一段很长的问题这是一段很长的问题这是一段很长的问题这是一段很长的问题这是一段很长的问题',
      2000,
      () => console.log('close modal 1'),
    );
  };

  const showFail = () => {
    RModal.fail(
      '网络错误！',
      0,
      () => console.log('close modal'),
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

  const changeTheme = () => {
    const colors = ['red', 'yellow', 'green', 'blue'];
    const max = 3, min = 0;
    const index = parseInt(`${Math.random()*(max-min+1)+min}`,10);
    const color = colors[index];
    RModalConfig.setModalStyle(StyleSheet.create({
      rModal_info_text: {
        color,
      },
      rModal_fail_text: {
        color,
      },
      rModal_success_text: {
        color,
      },
      rModal_loading_text: {
        color,
      },
      rModal_actionSheet_cancel_text: {
        color,
      },
      rModal_confirm_btn_ok_text: {
        color,
      },
    }));
  };

  const changeIcon = () => {
    RModalConfig.setImages({
      // failImg: require('./src/images/success.png'),
      failImg: <Image style={{width: 40, height: 40,}} source={require('./src/images/success.png')} />,
    });
  };

  const showActionSheet = () => {
    RModal.actionSheet({
      items: ['角色1', '角色2'],
      onCancel: () => console.warn("点击取消"),
      cancelText: "Cancel",
      titleText: "选择角色",
      onItemClick: (text) => {
        console.warn("index", text);
      },
    })
  };

  const showConfirm = () => {
    RModal.confirm({
      title: "请确认是否删除?",
      onOk: () => console.warn("点击确认"),
      onCancel: () => {},
    })
  };

  return (
    <RModalParent>
      <View>
        <Btn text={`设置弹窗时间为${duration === 2000 ? 5000 : 2000 }ms`} onPress={setDefaultTime} />
        <Btn text="显示信息" onPress={showInfo} />
        <Btn text="显示错误信息" onPress={showFail} />
        <Btn text={`显示成功信息${duration}ms后消失`} onPress={showSuccess} />
        <Btn text="显示加载中..." onPress={showLoading} />
        <Btn text="修改主题" onPress={changeTheme} />
        <Btn text="还原到上一次主题" onPress={RModalConfig.popModalStyle} />
        <Btn text="修改错误信息的图标" onPress={changeIcon} />
        <Btn text="重制设置" onPress={RModalConfig.resetSetting} />
        <Btn text="Action Sheet" onPress={showActionSheet} />
        <Btn text="Confirm" onPress={showConfirm} />
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
    marginTop: 20,
  },
  btn_text: {
    color: '#fff',
    fontSize: 16,
  },
});


export default App;

```
