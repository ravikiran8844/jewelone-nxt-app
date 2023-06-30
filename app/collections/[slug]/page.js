import React from 'react'


export const generateMetadata = ({ params }) => {
    const str=params.slug
    const lower = str.toLowerCase();
    const capitalized=str.charAt(0).toUpperCase() + lower.slice(1);
  return {
    title: `${capitalized} Collection - JewelOne`
  };
};
  

const page = ({params}) => {
  return (
    <div style={{minHeight:'70vh'}} className='d-flex flex-column justify-content-center align-items-center'>
      <div className='text-capitalize'>
        <div className='fs-1'>
        {params.slug} Collection
        </div>
      </div>
      <p className='fs-5 mt-3'>No Products Availble</p>
    </div>
  )
}

export default page
