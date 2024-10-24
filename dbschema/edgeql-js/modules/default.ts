// GENERATED by @edgedb/generate v__@edgedb/generate__VERSION_PLACEHOLDER__

import * as $ from "../reflection.ts";
import * as _ from "../imports.ts";
import type * as _std from "./std.ts";
export type $MovieλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "actors": $.LinkDesc<$Person, $.Cardinality.Many, {}, false, false,  false, false>;
  "title": $.PropertyDesc<_std.$str, $.Cardinality.AtMostOne, false, false, false, false>;
}>;
type $Movie = $.ObjectType<"default::Movie", $MovieλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
const $Movie = $.makeType<$Movie>(_.spec, "6b0db09e-919c-11ef-b6a2-ebcc5a2a2f1e", _.syntax.literal);

const Movie: $.$expr_PathNode<$.TypeSet<$Movie, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Movie, $.Cardinality.Many), null);

export type $PersonλShape = $.typeutil.flatten<_std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588λShape & {
  "name": $.PropertyDesc<_std.$str, $.Cardinality.One, false, false, false, false>;
  "<actors[is Movie]": $.LinkDesc<$Movie, $.Cardinality.Many, {}, false, false,  false, false>;
  "<actors": $.LinkDesc<$.ObjectType, $.Cardinality.Many, {}, false, false,  false, false>;
}>;
type $Person = $.ObjectType<"default::Person", $PersonλShape, null, [
  ..._std.$Object_8ce8c71ee4fa5f73840c22d7eaa58588['__exclusives__'],
]>;
const $Person = $.makeType<$Person>(_.spec, "6b0a8d2e-919c-11ef-bd89-3d151e4fad88", _.syntax.literal);

const Person: $.$expr_PathNode<$.TypeSet<$Person, $.Cardinality.Many>, null> = _.syntax.$PathNode($.$toSet($Person, $.Cardinality.Many), null);



export { $Movie, Movie, $Person, Person };

type __defaultExports = {
  "Movie": typeof Movie;
  "Person": typeof Person
};
const __defaultExports: __defaultExports = {
  "Movie": Movie,
  "Person": Person
};
export default __defaultExports;
