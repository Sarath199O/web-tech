function getDataA() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data A"), 1000);
  });
}

function getDataB() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data B"), 3000);
  });
}

async function runSequential() {
  const a = await getDataA();
  const b = await getDataB();

  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
}

runSequential();

async function runParallel() {
  const [a, b] = await Promise.all([getDataA(), getDataB()]);

  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
}

runParallel();

async function runRace() {
  const result = await Promise.race([getDataA(), getDataB()]);

  console.log(result);
}

runRace();