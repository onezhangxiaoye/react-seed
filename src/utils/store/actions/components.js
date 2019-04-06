
const initialState = {
    count:0
  }
  
  export default (state = initialState, action) => {
      //获取当前存储的 state
      const count = state.count;
      //匹配 action
      switch (action.type) {
          case 'toast':
            console.log('toast---',action);
            //此处返回的 对象 将替换原来的 state
            return {
                ...state,
                count: count + 1
            };
            default:
            return state;
      }
    }