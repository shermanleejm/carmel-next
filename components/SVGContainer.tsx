type SVGContainerType = {
  svg: JSX.Element;
  height: string | number;
  width: string | number;
};

const SVGContainer = ({ svg, height, width }: SVGContainerType) => {
  return <div style={{ height: height, width: width }}>{svg}</div>;
};

export default SVGContainer;
