import React from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';

const failImg = require('./images/fail.png');
const successImg = require('./images/success.png');

interface ViewProps {
  text: string;
}

export function InfoView(props: ViewProps) {
  return (
    <View style={styles.rView_bg}>
      <Text style={styles.rView_text}>{props.text}</Text>
    </View>
  );
}

export function FailView(props: ViewProps) {
  return (
    <View style={styles.rView_bg}>
      <View style={styles.rView_fail_container}>
        <Image source={failImg} style={styles.rView_fail_img} />
        <Text style={styles.rView_fail_text} numberOfLines={1}>
          {props.text}
        </Text>
      </View>
    </View>
  );
}

export function SuccessView(props: ViewProps) {
  return (
    <View style={styles.rView_bg}>
      <View style={styles.rView_success_container}>
        <Image source={successImg} style={styles.rView_success_img} />
        <Text style={styles.rView_success_text} numberOfLines={1}>
          {props.text}
        </Text>
      </View>
    </View>
  );
}

export function LoadingView() {
  return (
    <View style={styles.rView_bg}>
      <View style={styles.rView_loading_container}>
        <ActivityIndicator
          style={styles.rView_loading_img}
          size="large"
          color="#fff"
        />
        <Text style={styles.rView_loading_text} numberOfLines={1}>
          加载中...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rView_bg: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rView_text: {
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
  rView_fail_container: {
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
  rView_fail_img: {
    width: 30,
    height: 30,
    marginBottom: 6,
  },
  rView_fail_text: {
    fontSize: 14,
    color: '#fff',
  },
  rView_success_container: {
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
  rView_success_img: {
    width: 30,
    height: 30,
    marginBottom: 6,
  },
  rView_success_text: {
    fontSize: 14,
    color: '#fff',
  },
  rView_loading_container: {
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
  rView_loading_img: {
    width: 30,
    height: 30,
    marginBottom: 6,
  },
  rView_loading_text: {
    fontSize: 14,
    color: '#fff',
  },
});
