export const sendAnswer = body => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok");
      console.log(`Your sumitted:\n\n ${JSON.stringify(body, null, 2)}`);
    }, 1000);
  });
};
