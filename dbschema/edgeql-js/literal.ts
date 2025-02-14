// GENERATED by @edgedb/generate v__@edgedb/generate__VERSION_PLACEHOLDER__

import type {
  Expression,
  BaseType,
  BaseTypeToTsType,
  ScalarType,
} from "./typesystem.ts";

// import {
//   Cardinality,
//   ExpressionKind,
//   BaseType,
//   BaseTypeToTsType,
//   makeType,
//   ScalarType
// } from "edgedb/_src/reflection/index.ts";

// import type {$expr_Literal} from "./literal.ts";
import { $expressionify } from "./path.ts";
import { spec } from "./__spec__.ts";
import { Cardinality, ExpressionKind } from "edgedb/_src/reflection/index.ts";
import { makeType } from "./hydrate.ts";

export type $expr_Literal<Type extends BaseType = BaseType> = Expression<{
  __element__: Type;
  __cardinality__: Cardinality.One;
  __kind__: ExpressionKind.Literal;
  __value__: any;
}>;

export function literal<T extends BaseType>(
  type: T,
  value: BaseTypeToTsType<T>
): $expr_Literal<T> {
  return $expressionify({
    __element__: type,
    __cardinality__: Cardinality.One,
    __kind__: ExpressionKind.Literal,
    __value__: value,
  }) as any;
}

export const $nameMapping = new Map<string, string>([
  ...([...spec.values()].map((type) => [type.name, type.id]) as any),
  ["std::number", "00000000-0000-0000-0000-0000000001ff"],
]);

export function $getType(id: string): (val: any) => $expr_Literal<ScalarType> {
  return makeType(spec, id, literal) as any;
}

export function $getTypeByName(
  name: string
): (val: any) => $expr_Literal<ScalarType> {
  return makeType(spec, $nameMapping.get(name)!, literal) as any;
}
