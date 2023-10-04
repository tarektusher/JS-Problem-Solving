const function1 = (callback) => {
          setTimeout(function() {
          console.log(`1st Function`);
          callback();
          }, 3000)
          }
          const function2 = () => {
          console.log(`2nd Function`);
          }
          function1(function2);