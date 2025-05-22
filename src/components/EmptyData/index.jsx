import {
  Empty,
  EmptyDescription,
  EmptyImage,
  EmptyTitle,
} from "keep-react";
import { Link } from "react-router-dom";

export const EmptyComponent = () => {
  return (
    <Empty>
      <EmptyImage>
        <img
          src="https://staticmania.cdn.prismic.io/staticmania/16994ca5-ac01-4868-8ade-1b9e276ccdb3_Property+1%3DFolder_+Property+2%3DLg.svg"
          height={234}
          width={350}
          alt="404"
        />
      </EmptyImage>
      <EmptyTitle className="mb-[14px] mt-5">No Data Found</EmptyTitle>
      {/* <EmptyDescription className="mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry.
      </EmptyDescription> */}
      <Link to="/" className='inline-block bg-blue-500 text-white py-2 px-4 rounded'>
        Go to home
      </Link>
    </Empty>
  );
};
