import React from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
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
});
