const getCount = () => {
  for (let i = 0; i < 10; i++)
    tests.map((test) => {
      if (test.oncho === "Negative") {
        setonTests(oTests + 1);
        console.log(oTests);
      } else setopTests(opTests + 1);

      if (test.schisto === "Negative") {
        setsnTests(snTests + 1);
        console.log(snTests);
      } else setspTests(spTests + 1);

      if (test.lf === "Negative") {
        setlnTests(lnTests + 1);
        console.log(lnTests);
      } else setlpTests(lpTests + 1);

      if (test.helminths === "Negative") {
        sethnTests(hnTests + 1);
        console.log(hnTests);
      } else sethpTests(hpTests + 1);



    });
};


python manage.py dumpdata base.Test > ./Test.json