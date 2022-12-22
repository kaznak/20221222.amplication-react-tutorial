import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskWhereInput = {
  completed?: BooleanNullableFilter;
  id?: StringFilter;
  text?: StringNullableFilter;
  uid?: UserWhereUniqueInput;
};
