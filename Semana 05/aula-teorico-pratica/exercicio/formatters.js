import { format } from "date-fns";

export const formatDate = (data) => {
  return format(data, "dd/MM/yyyy");
};
