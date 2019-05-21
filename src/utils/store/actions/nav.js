/**
 * 初始化导航栏数据
 */
const initialState = (function initData() {
  //获取缓存中的浏览器数据
  const nav = JSON.parse(localStorage.getItem('nav'));
  //检查当前缓存数据是否已存储数据
  if (nav !== null && nav.nav !== undefined) {
    //直接返回当前缓存数据
    return {...nav};
  } else {
    //否则反正空的数据结构
    return {
      //保存的请求初始数据
      nav: [],
      //导航栏 组件的交互数据
      catalog: {
        //当前导航栏 的数据状态 用于在用户和界面交互时进行修改
        nav: [],
        //当前路由pathname 默认为首页
        pathname: '/app/content'
      },
      //系统管理中用于 交互的数据
      manageNav:[]
    };
  }
})()

/**
 * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何把 state 转变成下一个 state。
 *
 * state 的形式取决于你，可以是基本类型、数组、对象、
 * 甚至是 Immutable.js 生成的数据结构。惟一的要点是
 * 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
 *
 * 下面例子使用 `switch` 语句和字符串来做判断，但你可以写帮助类(helper)
 * 根据不同的约定（如方法映射）来判断，只要适用你的项目即可。
 */
  
export default (state = initialState, action) => {
  switch (action.type) {
      //在请求后台的导航栏数据后 保存到store中
      case 'setNav': {
        const setNav = {
          ...state,
          nav:action.payload.data,
          catalog: {
            //当前导航栏 的数据状态 用于在用户和界面交互时进行修改
            nav:action.payload.data,
            //当前路由pathname 默认为首页
            pathname: state.catalog.pathname
          },
          manageNav:action.payload.data,
        }
        //在保存之前 先把数据保存至本地缓存 方便后期直接调用
        localStorage.setItem('nav',JSON.stringify(setNav))
        return setNav;
      }
      case 'openChildNav12': {
        return state;
      }
      //在导航栏管理中 打开一级导航栏子栏
      case 'openChildNav': {
        let { manageNav } = state;
        let {id,bool} = action.payload;
        manageNav.forEach((iteam,index) => {
            if (iteam.id === id) {
              manageNav[index].showChild = bool;
            }
        });
        return {
          ...state,
          manageNav:manageNav
        };
      }
      case 'urlChange': {
        let { payload } = action;
        const urlChangeState = {
          ...state,
          catalog: {
            //当前导航栏 的数据状态 用于在用户和界面交互时进行修改
            nav: state.catalog.nav,
            //当前路由pathname
            pathname: payload
          }
        };
        //在保存之前 先把数据保存至本地缓存 方便后期直接调用
        localStorage.setItem('nav',JSON.stringify(urlChangeState))
        return urlChangeState;
      }
      default: {
        return state;
      }
    }
  }