import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TaskWhereInput = {
  id?: StringFilter;
  text?: StringNullableFilter;
};
