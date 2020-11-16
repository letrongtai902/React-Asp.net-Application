import RoleStore from './roleStore';
import TenantStore from './tenantStore';
import UserStore from './userStore';
import SessionStore from './sessionStore';
import AuthenticationStore from './authenticationStore';
import AccountStore from './accountStore';
import blogStore from './blogStore';
import gioithieuStore from './gioithieuStore';
import menuStore from './menuStore';
import sanphamStore from './sanphamStore';
import loaisanphamStore from './loaisanphamStore';
import lienheStore from './lienheStore';

export default function initializeStores() {
  return {
    authenticationStore: new AuthenticationStore(),
    roleStore: new RoleStore(),
    tenantStore: new TenantStore(),
    userStore: new UserStore(),
    sessionStore: new SessionStore(),
    accountStore: new AccountStore(),
    blogStore: new blogStore(),
    gioithieuStore: new gioithieuStore(),
    menuStore: new menuStore(),
    sanphamStore: new sanphamStore(),
    loaisanphamStore: new loaisanphamStore(),
    lienheStore:new lienheStore(),
  };
}
