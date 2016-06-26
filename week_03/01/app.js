"use strict"


let to = {
      a: 11,
      b: 11,
      c: {
        a: 22,
        b: {
          a: 33,
          b: 33
        },
        c: 22
      }
    },
    from1 = {
      b: 'aa',
      c: {
        a: 'bb',
        b: {
          a: 'cc'
        }
      },
      d: 'aa'
    };


  let r = Object.deepAssign(to, from1) ;
  console.log( "Result", r);

// let someSet = new Set(),
//     someSet2 = new Set()
//
//
// someSet.add('v 11')
// someSet.add('v 12')
//
// someSet2.add('V 21')
// someSet2.add('V 22')
//
//
// let someMap = new Map(),
//     keyString = "a string",
//     keyObj = {},
//     keyFunc = function () {};
//
// someMap.set(keyString, "value associated with 'a string'");
// someMap.set(keyObj, "value associated with keyObj");
// someMap.set(keyFunc, "value associated with keyFunc");
//
//
// let first = {
//       a: "111",
//       b: "111",
//
//       set: someSet
//     },
//     second = {
//       a: "222",
//       c: "111",
//       D: {
//         d1: "111",
//         d2: "111",
//         S: {
//           sss: "qq",
//           ddd: "aaas"
//         }
//       },
//       R: new RegExp("ab+c")
//     },
//     third = {
//       b: 222,
//       v: "111",
//       DATE: new Date(),
//
//       set: someSet2,
//
//       D: {
//         d2: "222",
//         d3: someMap
//       }
//     }
//
// let r = Object.deepAssign(first, second, third) ;
// console.log( "Result", r);
//
// console.log( r.D.d3.get(keyFunc) );
//
// console.log(r.R instanceof RegExp);
