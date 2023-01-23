export const filterTransactionsByDate = (txns: any) => {
  const filteredArr = txns.reduce((acc: any, cur: any) => {
    const findDate = acc?.find((item: any) => item.date === cur.date);

    if (findDate) {
      const newObj = { ...findDate, txns: [...findDate.txns, cur] };
      return [
        ...acc.filter((item: any) => item.date !== findDate.date),
        newObj,
      ];
    } else if (acc?.length > 0) {
      return [...acc, { date: cur.date, txns: [cur] }];
    } else {
      return [{ date: cur.date, txns: [cur] }];
    }
  }, []);

  return filteredArr;
};
