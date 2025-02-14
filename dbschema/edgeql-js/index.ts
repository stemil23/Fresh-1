// GENERATED by @edgedb/generate v__@edgedb/generate__VERSION_PLACEHOLDER__

export * from "./external.ts";
export { createClient } from "edgedb";
import * as $ from "./reflection.ts";
import * as $syntax from "./syntax.ts";
import * as $op from "./operators.ts";
import _std from "./modules/std.ts";
import _cal from "./modules/cal.ts";
import _cfg from "./modules/cfg.ts";
import _ext from "./modules/ext.ts";
import _fts from "./modules/fts.ts";
import _schema from "./modules/schema.ts";
import _sys from "./modules/sys.ts";
import _default from "./modules/default.ts";
import _math from "./modules/math.ts";

const ExportDefault: typeof _std & 
  typeof _default & 
  $.util.OmitDollarPrefixed<typeof $syntax> & 
  typeof $op & {
  "std": typeof _std;
  "cal": typeof _cal;
  "cfg": typeof _cfg;
  "ext": typeof _ext;
  "fts": typeof _fts;
  "schema": typeof _schema;
  "sys": typeof _sys;
  "default": typeof _default;
  "math": typeof _math;
} = {
  ..._std,
  ..._default,
  ...$.util.omitDollarPrefixed($syntax),
  ...$op,
  "std": _std,
  "cal": _cal,
  "cfg": _cfg,
  "ext": _ext,
  "fts": _fts,
  "schema": _schema,
  "sys": _sys,
  "default": _default,
  "math": _math,
};
const Cardinality = $.Cardinality;
type Cardinality = $.Cardinality;
export type Set<
  Type extends $.BaseType,
  Card extends $.Cardinality = $.Cardinality.Many
> = $.TypeSet<Type, Card>;


export default ExportDefault;
export { Cardinality };
