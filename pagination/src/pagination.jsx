const Pagination = ({ data, totalposts,perpage,paginate}) => {
 let pagenumbers=[]
 for(let i=1;i<= Math.ceil(totalposts/perpage);i++){
    pagenumbers.push(i)
 }
 console.log(pagenumbers);
  return (
    <div>
      <ol>{data.map((item) => {
       return(
        
            <li key={item.id}>{item.title}</li>

        )
      })}</ol>

        {
            pagenumbers.map(number=> {
                return(
                    <button key={number} style={{margin:"1rem"}} onClick={()=>{paginate(number)}}>{number}</button>
                )
            })
        }
    </div>
  );
};
export default Pagination;
