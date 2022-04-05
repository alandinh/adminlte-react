/* eslint-disable object-shorthand */
/* eslint-disable prettier/prettier */
import { removeWindowClass } from '@app/utils/helpers';
import { Gatekeeper } from 'gatekeeper-client-sdk';
import { createService } from '../plugins/axios';
import { IToken, ITokens } from '../store/userToken/constants'

const baseURL = process.env.REACT_APP_GATEKEEPER_URL;

export const axios = createService(baseURL);

export const loginByAuth = async (email: string, password: string) => {
  const token = await Gatekeeper.loginByAuth(email, password);
  localStorage.setItem('token', token);
  removeWindowClass('login-page');
  removeWindowClass('hold-transition');
  return token;
};
export const login = async (email: string, password: string) => {
  const response = await axios.post('/auth/login', { email: email, password: password });
  localStorage.setItem('user', JSON.stringify(response?.data));
  localStorage.setItem('token', response?.data.tokens.access.token);
  removeWindowClass('login-page');
  removeWindowClass('hold-transition');
  return response
};

export const refreshToken = async (refreshToken: IToken) => {
  return await axios.post('/auth/refresh-tokens', { refreshToken: refreshToken.token }) as ITokens
}
