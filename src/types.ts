export type Resolve = (value?: {} | PromiseLike<{}>) => void;
export type Reject = (reason?: any) => void; // tslint:disable-line:no-any
export type Callback = (request: PaymentRequest, resolve: Resolve, reject: Reject) => void;

export type PaymentRequestParams = {
  methodData: PaymentMethodData[];
  details: PaymentDetails;
  options?: PaymentOptions;
  onShowSuccess: (paymentResponse: PaymentResponse, resolve: Resolve, reject: Reject) => void;
  onShowFail: (err: string) => void;
  onShippingAddressChange?: Callback;
  onShippingOptionChange?: Callback;
};

export type PaymentRequestParamsRedux = {
  (dispatch: any, getState: any): PaymentRequestParams; // tslint:disable-line:no-any
};

export type PaymentRequestParamsConfig = PaymentRequestParams | PaymentRequestParamsRedux;

export interface PaymentRequestInterface {
  isSupported: boolean;
  show: () => void;
  abort: () => void;
}
