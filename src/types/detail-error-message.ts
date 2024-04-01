export type DetailErrorMessage = {
  errorType: string;
  message: string;
  details: Detail[];
};

type Detail = {
  property: string;
  value: string;
  messages: string[];
};
