import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, TouchableOpacity, StatusBar, } from 'react-native';
import { RModalConfig, } from "./util";

const defaultFailImg = require('./images/fail.png');
const defaultSuccessImg = require('./images/success.png');

interface ViewProps {
  text: string;
}

export function InfoView(props: ViewProps) {
  const diyStyle  = RModalConfig.getModalStyle();
  return (
    <View style={[styles.rModal_info_bg, diyStyle.rModal_info_bg]}>
      <Text style={[styles.rModal_info_text, diyStyle.rModal_info_text]}>{props.text}</Text>
    </View>
  );
}

export function FailView(props: ViewProps) {
  const diyStyle  = RModalConfig.getModalStyle();
  const failImg = RModalConfig.getImages().failImg;
  return (
    <View style={[styles.rModal_fail_bg, diyStyle.rModal_fail_bg]}>
      <View style={[styles.rModal_fail_container, diyStyle.rModal_fail_container]}>
        {
          React.isValidElement(failImg) ? failImg : (
            <Image source={failImg || defaultFailImg} style={[styles.rModal_fail_img, diyStyle.rModal_fail_img]} />
          )
        }
        <Text style={[styles.rModal_fail_text, diyStyle.rModal_fail_text]} numberOfLines={1}>
          {props.text}
        </Text>
      </View>
    </View>
  );
}

export function SuccessView(props: ViewProps) {
  const diyStyle  = RModalConfig.getModalStyle();
  const successImg = RModalConfig.getImages().successImg;
  return (
    <View style={[styles.rModal_success_bg, diyStyle.rModal_success_bg]}>
      <View style={[styles.rModal_success_container, diyStyle.rModal_success_container]}>
        {
          React.isValidElement(successImg) ? successImg : (
            <Image source={successImg || defaultSuccessImg} style={[styles.rModal_success_img, diyStyle.rModal_success_img]} />
          )
        }
        <Text style={[styles.rModal_success_text, diyStyle.rModal_success_text]} numberOfLines={1}>
          {props.text}
        </Text>
      </View>
    </View>
  );
}

export function LoadingView() {
  const diyStyle  = RModalConfig.getModalStyle();
  const loadingImg = RModalConfig.getImages().loadingImg;
  return (
    <View style={[styles.rModal_loading_bg, diyStyle.rModal_loading_bg]}>
      <View style={[styles.rModal_loading_container, diyStyle.rModal_loading_container]}>
        {
          React.isValidElement(loadingImg) ? loadingImg : (
            <ActivityIndicator
              style={[styles.rModal_loading_img, diyStyle.rModal_loading_img]}
              size="large"
              color="#fff"
            />
          )
        }
        <Text style={[styles.rModal_loading_text, diyStyle.rModal_loading_text]} numberOfLines={1}>
          加载中...
        </Text>
      </View>
    </View>
  );
}

interface ActionSheetProps {
  items: Array<string>,
  titleText?: string,
  onCancel?: () => void,
  cancelText: string,
  onItemClick: (text: string) => void,
}

interface ActionSheetItemProps {
  text: string,
  onClick: () => void,
}

function ActionSheetItem(props: ActionSheetItemProps) {
  const diyStyle  = RModalConfig.getModalStyle();
  return (
    <TouchableOpacity
      style={[styles.rModal_actionSheet_item, diyStyle.rModal_actionSheet_item]}
      activeOpacity={.7}
      onPress={() => props.onClick()}
    >
      <Text style={[styles.rModal_actionSheet_item_text, diyStyle.rModal_actionSheet_item_text]}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export function ActionSheet(props: ActionSheetProps) {
  const diyStyle  = RModalConfig.getModalStyle();
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.rModal_actionSheet_bg, diyStyle.rModal_actionSheet_bg]}
      onPress={props.onCancel}
    >
      <View style={[styles.rModal_actionSheet_container, diyStyle.rModal_actionSheet_container]}>
        {
          !!props.titleText && (
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.rModal_actionSheet_title, diyStyle.rModal_actionSheet_title]}
              onPress={() => {}}
            >
              <Text style={[styles.rModal_actionSheet_title_text, diyStyle.rModal_actionSheet_title_text]}>{props.titleText}</Text>
            </TouchableOpacity>
          )
        }
        {
          (props.items || []).map((z) => {
            return (
              <ActionSheetItem
                text={z}
                key={z}
                onClick={() => props.onItemClick(z)}
              />);
          })
        }
        <TouchableOpacity
          style={[styles.rModal_actionSheet_cancel, diyStyle.rModal_actionSheet_cancel]}
          activeOpacity={.7}
          onPress={props.onCancel}
        >
          <Text style={[styles.rModal_actionSheet_cancel_text, diyStyle.rModal_actionSheet_cancel_text]}>{props.cancelText}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}



interface ConfirmViewProps {
  title: string,
  cancelText?: string,
  okText?: string,
  onCancel?: () => void,
  onOk: () => void,
}

export function ConfirmView(props: ConfirmViewProps) {
  const diyStyle  = RModalConfig.getModalStyle();
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.rModal_confirm_bg, diyStyle.rModal_confirm_bg]}
      onPress={props.onCancel}
    >
      <View style={[styles.rModal_confirm_container, diyStyle.rModal_confirm_container]}>
        <TouchableOpacity activeOpacity={1} style={[styles.rModal_confirm_titleBox, diyStyle.rModal_confirm_titleBox]}>
          <Text style={[styles.rModal_confirm_titleBox_title, diyStyle.rModal_confirm_titleBox_title]} numberOfLines={3}>{props.title}</Text>
        </TouchableOpacity>
        <View style={[styles.rModal_confirm_btnBox, diyStyle.rModal_confirm_btnBox]}>
          <TouchableOpacity
            activeOpacity={.7}
            style={[styles.rModal_confirm_btn_cancel, diyStyle.rModal_confirm_btn_cancel]}
            onPress={props.onCancel}
          >
            <Text style={[styles.rModal_confirm_btn_cancel_text, diyStyle.rModal_confirm_btn_cancel_text]}>{props.cancelText || '取消'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={.7}
            style={[styles.rModal_confirm_btn_ok, diyStyle.rModal_confirm_btn_ok]}
            onPress={props.onOk}
          >
            <Text style={[styles.rModal_confirm_btn_ok_text, diyStyle.rModal_confirm_btn_ok_text]}>{props.okText || '确认'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  rModal_info_bg: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  rModal_info_text: {
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.75)',
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 4,
    maxWidth: '80%',
  },
  rModal_fail_bg: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  rModal_fail_container: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 4,
    maxWidth: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rModal_fail_img: {
    width: 30,
    height: 30,
    marginBottom: 6,
  },
  rModal_fail_text: {
    fontSize: 14,
    color: '#fff',
  },
  rModal_success_bg: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  rModal_success_container: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 4,
    maxWidth: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rModal_success_img: {
    width: 30,
    height: 30,
    marginBottom: 6,
  },
  rModal_success_text: {
    fontSize: 14,
    color: '#fff',
  },
  rModal_loading_bg: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  rModal_loading_container: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 4,
    maxWidth: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rModal_loading_img: {
    width: 30,
    height: 30,
    marginBottom: 6,
  },
  rModal_loading_text: {
    fontSize: 14,
    color: '#fff',
  },
  rModal_actionSheet_bg: {
    backgroundColor: 'rgba(0,0,0, .35)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  rModal_actionSheet_container: {
    width: "100%",
    position: 'absolute',
    bottom: 0,
  },
  rModal_actionSheet_title: {
    height: 55,
    width: '100%',
    backgroundColor: '#061619',
    borderBottomColor: "#515151",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rModal_actionSheet_title_text: {
    fontSize: 18,
    color: '#a3a3a3',
  },
  rModal_actionSheet_item: {
    height: 50,
    width: '100%',
    backgroundColor: '#061619',
    borderBottomColor: "#515151",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rModal_actionSheet_item_text: {
    fontSize: 16,
    color: '#a3a3a3',
  },
  rModal_actionSheet_cancel: {
    marginTop: 8,
    height: 50,
    width: '100%',
    backgroundColor: '#061619',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rModal_actionSheet_cancel_text: {
    fontSize: 16,
    color: '#a3a3a3',
  },
  rModal_confirm_bg: {
    backgroundColor: 'rgba(0,0,0, .35)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  rModal_confirm_container: {
    width: 240,
    height: 140,
    backgroundColor: "#0a252a",
    borderRadius: 4,
    overflow: 'hidden',
  },
  rModal_confirm_titleBox: {
    width: '100%',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#5e5e5e',
    padding: 20,
  },
  rModal_confirm_titleBox_title: {
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 1,
  },
  rModal_confirm_btnBox: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rModal_confirm_btn_cancel: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rModal_confirm_btn_cancel_text: {
    fontSize: 14,
    color: '#a3a3a3'
  },
  rModal_confirm_btn_ok: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: '#5e5e5e'
  },
  rModal_confirm_btn_ok_text: {
    fontSize: 14,
    color: '#8ae6ef'
  },
});
