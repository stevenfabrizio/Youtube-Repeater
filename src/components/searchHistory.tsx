import React from 'react';
import { toast } from 'react-toastify';
import '../styles/searchHistory.css'

interface Props {
  successfulURL: string;
}

const searchHistory: React.FC<Props> = (props) => {
  //keeping these variables as strings since localstorage can only handle strings.
  const [search0, setSearch0] = React.useState<string>('a');
  const [search1, setSearch1] = React.useState<string>('a');
  const [search2, setSearch2] = React.useState<string>('a');
  const [search3, setSearch3] = React.useState<string>('a');
  const [search4, setSearch4] = React.useState<string>('a');
  const [search5, setSearch5] = React.useState<string>('a');
  const [search6, setSearch6] = React.useState<string>('a');
  const [search7, setSearch7] = React.useState<string>('a');
  const [search8, setSearch8] = React.useState<string>('a');
  const [search9, setSearch9] = React.useState<string>('a');
  const [title0, setTitle0] = React.useState<string>('a');
  const [title1, setTitle1] = React.useState<string>('a');
  const [title2, setTitle2] = React.useState<string>('a');
  const [title3, setTitle3] = React.useState<string>('a');
  const [title4, setTitle4] = React.useState<string>('a');
  const [title5, setTitle5] = React.useState<string>('a');
  const [title6, setTitle6] = React.useState<string>('a');
  const [title7, setTitle7] = React.useState<string>('a');
  const [title8, setTitle8] = React.useState<string>('a');
  const [title9, setTitle9] = React.useState<string>('a');

  //load the contents in the localstorage if it exists.
  const loadLocalStorage = () => {
    const tempArrID: string[] = [];
    const tempArrTitle: string[] = [];

    for (let i = 0; i < 10; i++) {
      const number = i.toString();
      const value = localStorage.getItem(number);

      if (typeof value !== 'string') {
        tempArrID.push('a');
        tempArrTitle.push('a');
      } else {
        tempArrID.push(value);
        tempArrTitle.push(localStorage.getItem(`${i}title`.toString())!);
      }
    }

    setSearch0(tempArrID[0]);
    setSearch1(tempArrID[1]);
    setSearch2(tempArrID[2]);
    setSearch3(tempArrID[3]);
    setSearch4(tempArrID[4]);
    setSearch5(tempArrID[5]);
    setSearch6(tempArrID[6]);
    setSearch7(tempArrID[7]);
    setSearch8(tempArrID[8]);
    setSearch9(tempArrID[9]);
    setTitle0(tempArrTitle[0]);
    setTitle1(tempArrTitle[1]);
    setTitle2(tempArrTitle[2]);
    setTitle3(tempArrTitle[3]);
    setTitle4(tempArrTitle[4]);
    setTitle5(tempArrTitle[5]);
    setTitle6(tempArrTitle[6]);
    setTitle7(tempArrTitle[7]);
    setTitle8(tempArrTitle[8]);
    setTitle9(tempArrTitle[9]);
  };

  //copy the youtube link when clicking on the title.
  const clickedTitle = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const ytTitle = e.currentTarget.title;

    navigator.clipboard.writeText(ytTitle);
    toast('Copied');
  };

  //update the items when sent props
  const [counter, setCounter] = React.useState(1);
  React.useEffect(() => {
    setCounter(counter + 1);
    if (counter > 1) {
      console.log('final thing');

      setSearch9(search8);
      setSearch8(search7);
      setSearch7(search6);
      setSearch6(search5);
      setSearch5(search4);
      setSearch4(search3);
      setSearch3(search2);
      setSearch2(search1);
      setSearch1(search0);
      setSearch0(props.successfulURL);

      setTitle9(title8);
      setTitle8(title7);
      setTitle7(title6);
      setTitle6(title5);
      setTitle5(title4);
      setTitle4(title3);
      setTitle3(title2);
      setTitle2(title1);
      setTitle1(title0);

      localStorage.setItem('9', search8);
      localStorage.setItem('8', search7);
      localStorage.setItem('7', search6);
      localStorage.setItem('6', search5);
      localStorage.setItem('5', search4);
      localStorage.setItem('4', search3);
      localStorage.setItem('3', search2);
      localStorage.setItem('2', search1);
      localStorage.setItem('1', search0);
      localStorage.setItem('0', props.successfulURL);

      localStorage.setItem('9title', title8);
      localStorage.setItem('8title', title7);
      localStorage.setItem('7title', title6);
      localStorage.setItem('6title', title5);
      localStorage.setItem('5title', title4);
      localStorage.setItem('4title', title3);
      localStorage.setItem('3title', title2);
      localStorage.setItem('2title', title1);
      localStorage.setItem('1title', title0);

      fetch(
        `https://noembed.com/embed?dataType=json&url=${props.successfulURL}`
      )
        .then((res) => res.json())
        .then((data) => {
          setTitle0(data.title);
          localStorage.setItem('0title', data.title);
        });
    }
  }, [props.successfulURL]);
  React.useEffect(() => {
    loadLocalStorage();
    setCounter(counter + 2);
    console.log(counter);
  }, []);

  return (
    <>
      <div className="wrap-collabsible">
        <input id="collapsible" className="toggle" type="checkbox" />
        <label htmlFor="collapsible" className="lbl-toggle">
          Recently played videos
        </label>
        <div className="collapsible-content">
          <div className="content-inner">
            {title0 != 'a' ? (
              <ol type="1">
                {search0 !== 'a' ? (
                  <li
                    className="observable-li"
                    title={search0}
                    onClick={(e) => clickedTitle(e)}
                  >
                    {title0}
                  </li>
                ) : (
                  <li></li>
                )}
                {search1 !== 'a' ? (
                  <li
                    className="observable-li"
                    title={search1}
                    onClick={(e) => clickedTitle(e)}
                  >
                    {title1}
                  </li>
                ) : (
                  <li></li>
                )}
                {search2 !== 'a' ? (
                  <li
                    className="observable-li"
                    title={search2}
                    onClick={(e) => clickedTitle(e)}
                  >
                    {title2}
                  </li>
                ) : (
                  <li></li>
                )}
                {search3 !== 'a' ? (
                  <li
                    className="observable-li"
                    title={search3}
                    onClick={(e) => clickedTitle(e)}
                  >
                    {title3}
                  </li>
                ) : (
                  <li></li>
                )}
                {search4 !== 'a' ? (
                  <li
                    className="observable-li"
                    title={search4}
                    onClick={(e) => clickedTitle(e)}
                  >
                    {title4}
                  </li>
                ) : (
                  <li></li>
                )}
                {search5 !== 'a' ? (
                  <li
                    className="observable-li"
                    title={search5}
                    onClick={(e) => clickedTitle(e)}
                  >
                    {title5}
                  </li>
                ) : (
                  <li></li>
                )}
                {search6 !== 'a' ? (
                  <li
                    className="observable-li"
                    title={search6}
                    onClick={(e) => clickedTitle(e)}
                  >
                    {title6}
                  </li>
                ) : (
                  <li></li>
                )}
                {search7 !== 'a' ? (
                  <li
                    className="observable-li"
                    title={search7}
                    onClick={(e) => clickedTitle(e)}
                  >
                    {title7}
                  </li>
                ) : (
                  <li></li>
                )}
                {search8 !== 'a' ? (
                  <li
                    className="observable-li"
                    title={search8}
                    onClick={(e) => clickedTitle(e)}
                  >
                    {title8}
                  </li>
                ) : (
                  <li></li>
                )}
                {search9 !== 'a' ? (
                  <li
                    className="observable-li"
                    title={search9}
                    onClick={(e) => clickedTitle(e)}
                  >
                    {title9}
                  </li>
                ) : (
                  <li></li>
                )}
                <dt
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    })
                  }
                >
                  To Top
                </dt>
              </ol>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default searchHistory;
