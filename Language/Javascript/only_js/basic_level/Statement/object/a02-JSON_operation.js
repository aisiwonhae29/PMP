// a10 JSON like Operation


let js_Ob = {
    key1: "value1",
    key2: "value2",
    key3: 3,
    key4: {
      nestedKey: "nestedValue"
    },
    key5: [1, 2, 3]
  };

// case 1: stringfy) js object > JSON string

let jsString = JSON.stringify(js_Ob);
console.log(jsString);


// case 2: parse) JSON String > js object

let parsedOb = JSON.parse(jsString);
console.log(parsedOb)


// case 3: check key exists

if ('key1' in js_Ob){ console.log('exists!')}
if ('key6' in js_Ob){ console.log('exists!')}


// case 4: Iterating Over json Object keys

for (let keys in js_Ob){ console.log(keys + ': '+ js_Ob[keys]) }