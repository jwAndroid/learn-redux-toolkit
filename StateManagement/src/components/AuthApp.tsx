import React, { memo, useCallback } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../slices/rootReducer';
import { authorize, logout } from '../slices/auth';

const styles = StyleSheet.create({
  block: { flex: 1 },
  status: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 20 },
});

function AuthStatus() {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <View style={styles.status}>
      <Text style={styles.text}>
        {user ? user.displayName : '로그인 하세요'}
      </Text>
    </View>
  );
}

function AuthButtons() {
  const dispatch = useDispatch();

  const onPressLogin = useCallback(() => {
    dispatch(
      authorize({
        id: 1,
        username: 'choi-ji-woong',
        displayName: 'jwroid',
      }),
    );
  }, [dispatch]);

  const onPressLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <View>
      <Button title="로그인" onPress={onPressLogin} />

      <Button title="로그아웃" onPress={onPressLogout} />
    </View>
  );
}

function AuthApp() {
  return (
    <SafeAreaView style={styles.block}>
      <AuthStatus />

      <AuthButtons />
    </SafeAreaView>
  );
}

export default memo(AuthApp);
