  export const handlePending = state => {
    state.isLoadding = true;
    state.error = null;
  };
  
  export const handleReject = (state, { payload }) => {
    state.isLoadding = false;
    state.error = payload;
  };
  
  export const handleFulfilled = state => {
    state.isLoadding = false;
  };


