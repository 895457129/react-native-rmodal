# react-native-rmodal
  基于[react-native-root-siblings](https://www.npmjs.com/package/react-native-root-siblings)封装的弹窗组件。
  支持info、fail、success、confirm、loading、actionSheet和自定义弹窗，支持样式自定义。
  
![示例](./ypx15-izkn3.gif)

# 使用方式
```js

RModal.info(text, duration?, onClose?);

RModal.fail(text, duration?, onClose?);

RModal.success(text, duration?, onClose?);

// 需要调用hide关闭
RModal.loading();

RModal.actionSheet({
    items: ['角色1', '角色2'],
    onCancel?: () => console.warn("点击取消"),
    cancelText: "Cancel",
    titleText?: "选择角色",
    onItemClick: (text) => {
      console.warn("index", text);
    },
})

// 确认弹窗
RModal.confirm({
  title: "请确认是否删除?",
  cancelText?: string,
  okText?: string,
  onOk: () => console.warn("点击确认"),
  onCancel?: () => {},
})

// 自定义组件
RModal.custom(
  <View style={styles.custom_modal}><Text style={styles.custom_modal_text}>自定义组件</Text></View>,
);

// 隐藏弹窗
RModal.hide();
    
```

注: duration = 0 时，onClose 无效，modal 不会消失；隐藏 modal 需要手动调用 hide

若无法弹窗 尝试在入口文件里面添加 RModalParent包裹， 参考demo

## 其他方法
```js

// 全局设置弹窗的时间默认3s
RModalConfig.setDefaultDuration(time);

// 获取全局弹窗时间
RModalConfig.getDefaultDuration();

// 调用该方法修改样式 可修改项参考代码
RModalConfig.setModalStyle(styles);

// 还原样式到上次。基于RModalConfig.setModalStyle可以做到主题切换
RModalConfig.popModalStyle();

// 自定义loading success fail弹窗的图片
RModalConfig.setImages({
  successImg,
  failImg,
  loadingImg,
})

// 还原设置
RModalConfig.resetSetting();

```

# demo
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
  TouchableOpacity, Image, ScrollView,
} from 'react-native';

// import RModal, { RModalParent} from "react-native-rmodal";
// import { RModalConfig } from "react-native-rmodal/libs/util"

// import {RModalConfig} from './libs/util';
// import RModal, { RModalParent, } from './libs';

import RModal, { RModalParent, RModalConfig, } from './src';

interface BtnProps {
  text: string;
  theme: string;
  onPress: (n: any) => any;
}

const Btn = (props: BtnProps) => {
  return (
    <TouchableOpacity style={[styles.btn, props.theme === "dark" ? styles.btn_dark : null]} onPress={props.onPress}>
      <Text style={styles.btn_text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const [duration, setDuration] = useState(2000);
  const [theme, setTheme] = useState("light");

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
    setTimeout(RModal.hide, 2000);
  };

  const showSuccess = () => {
    RModal.success('操作成功！');
  };

  const showLoading = () => {
    RModal.loading();
    setTimeout(RModal.hide, 2000);
  };

  const changeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    RModalConfig.setModalStyle(newTheme === "dark" ? darkStyle : {});
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

  const customModal = () => {
    RModal.custom(
      <View style={styles.custom_modal}><Text style={styles.custom_modal_text}>自定义组件</Text></View>,
      0,
      () => {console.warn(111)}
    );
    setTimeout(() => {
      RModal.hide();
    }, 2000);
  };

  return (
    <RModalParent>
      <ScrollView style={{flex: 1, backgroundColor: theme === "light" ? "#fff" : "#000"}}>
        <Btn theme={theme} text={`设置弹窗时间为${duration === 2000 ? 5000 : 2000 }ms`} onPress={setDefaultTime} />
        <Btn theme={theme} text="显示信息" onPress={showInfo} />
        <Btn theme={theme} text="显示错误信息" onPress={showFail} />
        <Btn theme={theme} text={`显示成功信息${duration}ms后消失`} onPress={showSuccess} />
        <Btn theme={theme} text="显示加载中..." onPress={showLoading} />
        <Btn theme={theme} text="切换主题" onPress={changeTheme} />
        <Btn theme={theme} text="修改错误信息的图标" onPress={changeIcon} />
        <Btn theme={theme} text="重制设置" onPress={RModalConfig.resetSetting} />
        <Btn theme={theme} text="Action Sheet" onPress={showActionSheet} />
        <Btn theme={theme} text="Confirm" onPress={showConfirm} />
        <Btn theme={theme} text="自定义内容" onPress={customModal} />
      </ScrollView>
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
  btn_dark: {
    backgroundColor: '#8c8c8c',
  },
  btn_text: {
    color: '#fff',
    fontSize: 16,
  },
  custom_modal: {
    backgroundColor: 'rgba(0,0,0, 1)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: "50%",
    marginLeft: -100,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    width: 200,
    height: 200,
  },
  custom_modal_text: {
    color: 'red',
    fontSize: 16,
  },
});

const darkStyle = StyleSheet.create({
  rModal_info_text: {
    backgroundColor: '#f5f5f5',
    color: "#000",
  },
  rModal_fail_container: {
    backgroundColor: '#f5f5f5',
  },
  rModal_fail_text: {
    color: "#000",
  },
});

export default App;

```
