import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export const BlogSkeleton = () => {
  return <div className='border-b border-slate-300 p-3'>
    <Box sx={{ width: 550 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' , gap: 1}}>
            <Skeleton variant="circular" width={27} height={27} />
            <Skeleton animation="wave" width={90} height={30}/>
            <Skeleton animation="wave" width={80} height={30}/>
        </Box>

        <Skeleton animation="wave" height={70}/>
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
    </Box>
  </div>
}


export const FullBlogSkeleton = () => {
  return <Box sx={{ width: "100%"}}>
      <Skeleton animation="wave" height={150}/>
      <Skeleton animation="wave" width={200} height={30}/>
      <Skeleton animation="wave" height={25}/>
      <Skeleton animation="wave" height={25}/>
      <Skeleton animation="wave" height={25}/>
      <Skeleton animation="wave" height={25}/>
      <Skeleton animation="wave" height={25}/>
      <Skeleton animation="wave" height={25}/>
      <Skeleton animation="wave" height={25}/>
      <Skeleton animation="wave" height={25}/>
      <Skeleton animation="wave" height={25}/>
      <Skeleton animation="wave" height={25}/>
    </Box>;
}