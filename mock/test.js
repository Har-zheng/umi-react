

function getSomething() {
 return  "something";
}

async function testAsync() {
  return new Promise((resolve,reject)=> {
 
    resolve('res')
  })
}

async function test() {
  const v1 = await getSomething();
  console.log(v1);
  const v2 = await testAsync();

  console.log( v2);// 
}

test();