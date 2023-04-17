import React from 'react';

const searchHistory: React.FC = () => {
  const [latestSearch, setLatestSearch] = React.useState('');

  const [search0, setSearch0] = React.useState('yyy');
  const [search1, setSearch1] = React.useState('ttt');
  const [search2, setSearch2] = React.useState('hhh');
  const [search3, setSearch3] = React.useState('hhf');

  const updateStorage = () => {
    localStorage.setItem('0', 'aaaa');
    localStorage.setItem('1', 'bbbb');
    localStorage.setItem('2', 'cccc');
    localStorage.setItem('3', 'dddd');
  };

  const doThings = () => {
    const tempArr = [];
    console.log('fk man');

    for (let i = 0; i < 4; i++) {
      console.log(i);
      let number = i.toString();

      const value = localStorage.getItem(`${i.toString()}`);

      if (typeof value === 'string') {
        const parse = JSON.parse(value); // ok
        tempArr.push(parse);
      } else {
        tempArr.push('memes');
      }
    }

    console.log(tempArr);
    setSearch0(tempArr[0]);
    setSearch1(tempArr[1]);
    setSearch2(tempArr[2]);
    setSearch3(tempArr[3]);
  };
  React.useEffect(() => {
    updateStorage();

    doThings();
  }, []);

  return (
    <>
      <h1>hehe</h1>
      <h1>{search0}</h1>
      <h1>{search1}</h1>
      <h1>{search2}</h1>
      <h1>{search3}</h1>
      <h1>haha</h1>
    </>
  );
};

export default searchHistory;
