/**
 * * a01: nodejs module related syntax 
 */

// const glob = require('glob');

// # import: a, b, c is set value from module, and a_02~~ is module file.

import { a, b, c } from './a02_module';

// # general information

/**
 * 
 * 
 * * Indicates about Ts objects
 * 
 * # usecase 1: glob(pattern: string | string[], options?: GlobOptions) => Promise<string[] | Path[]>
 * 
 *  - glob                          name of the function
 *  - options?                      this is the additional options that can be provided to customize the glob matching behavior. type of GlobOptions.
 *  - Promise<string[] | Path[]>    This indicates that the function returns a Promise. Promise resolves to an array of strings of path objects
 *  - ?                             located after name with this symbol, it refers as option value.
 *  - =>                            this arrow notation is used in TypeScript(and js) to define function expressions or arrow functions. This case return Promise <>.
 * 
 * # usecase 2: export declare class Glob<Opts extends GlobOptions> implements GlobOptions {
 * 
 *  - declare                       This indicates that the class 'Glob' is being declared for export. After accessed make instance with new command.
 *  - <Opts extends GlobOptions>    This is a generic type 
 *  - implements                    indicates that a class is implementing an interface.
 * 
 * # usecase 3: export type GlobOptionsWithFileTypesTrue = GlobOptions & {
 * 
 *  - type                          declares a new TypeScript type
 *  - declare type                  defining a new class or interface in Java
 *  - ~ = GlobOptions & {           defining a new class a and extends with Globoptions
 * 
 * * difference of .d.ts file & .d.mts file
 * 
 * # usecase 4: export function Router(options?: RouterOptions): core.Router;
 * 
 *  - :                             this indicates about return type.(core.Router)
 * 
 * # .d.ts file
 * 
 *  - d.ts file is declaration files.
 *  - contains type definitions for serve information about API.
 * 
 * # .d.mts file
 *  
 *  - This file has same purpose with .d.ts file.
 *  - different part is mts file written in TypeScript syntax, so they can include TypeScript-specific features like type annotations, generic and other etcs.
 */

// # sequences

/**
 *  1. To make .d.ts file
 *      type tsc --declaration yourfile
 *      tsconfig.json to set configuration as 
 *          ```
 *              { compilerOptions":{
 *                  "declaration": true,}
 *              }
 *          ```
 * 
 *  
 */