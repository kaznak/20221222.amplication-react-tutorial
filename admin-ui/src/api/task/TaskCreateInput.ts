import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  completed?: boolean | null;
  text?: string | null;
  uid?: UserWhereUniqueInput | null;
};
