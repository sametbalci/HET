import {NavigatorScreenParams} from '@react-navigation/native';
import React from 'react';

declare global {
  interface Global {
    HermesInternal?: object;
  }
  type LanguageKeys = keyof typeof en;

  type Language = {
    [key in LanguageKeys]: string;
  };

  type WithChildren<T = {}> = T & {children?: React.ReactNode};

  type RootStackProps = {
    Walkthrough: NavigatorScreenParams<WalkthroughStackProps>;
    Main: NavigatorScreenParams<BottomBarProps>;
  };

  type WalkthroughStackProps = {
    One: undefined;
    Two: undefined;
    Three: undefined;
  };

  type BottomBarProps = {
    Home: undefined;
    Info: undefined;
    Settings: undefined;
  };
}
