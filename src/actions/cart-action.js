import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  // 반환될 함수가 비동기임을 리덕스가 지원
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-4bdad-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );
      if (!response.ok) {
        throw new Error("Send Data ERROR"); // 응답에 대한 오류만 보여줌.
      }
      const responseData = await response.json();
      return responseData;
    };
    try {
      const data = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          totalQuantity: data.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Fail FETCHING Cart Data",
        })
      );
    }
  };
};
export const sendCartData = (cartStore) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        staute: "pending",
        title: "Sending...",
        message: "Sending Cart Data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-4bdad-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cartStore.items,
            totalQuantity: cartStore.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Send Data ERROR"); // 응답에 대한 오류만 보여줌.
      }
      // const responseData = await response.json(); // 보내는거니까 응답엔 관심 무
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          staute: "suecess",
          title: "Success...",
          message: "Success Cart Data",
        })
      );
    } catch (error) {
      // 요청 후 나타나는 모든 종류 에러 보여줌.
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Fail Cart Data",
        })
      );
    }
  };
};
