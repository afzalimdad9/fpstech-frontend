// components/Pagination.js
//import Link from 'next/link';
import Link from "@/node_modules/next/link";
interface PaginationProps {
  totalPages: any;
  currentPage: any;
  param1: any
}

const Pagination = ({ currentPage, totalPages, param1 } : PaginationProps) => {
  console.log("Current page", currentPage);
  console.log("Total pages", totalPages);
  //const pages = [...Array(totalPages).keys()].map(num => num + 1);

  const generatePageNumbers = (currentPage: number,totalPages: number) => {
    const maxPages = 5; // Number of visible pages, excluding the dots
    const pages = [];

    if (totalPages <= maxPages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage > 3 && currentPage < totalPages - 2) {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      } else {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      }
    }
    return pages;
  };

  
// Ensure currentPage and totalPages are numbers
const currentPageNumber = parseInt(currentPage, 10) || 1;
const totalPagesNumber = parseInt(totalPages, 10) || 1;
const pages = generatePageNumbers(currentPageNumber, totalPagesNumber);



  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
      <Link href={`/producttag?tagname=${param1}&page=${currentPage - 1}`} passHref>
        <button disabled={currentPage <= 1}>Previous</button>
      </Link>
      

        {pages.map(page => (
          <li key={page} style={{ margin: '0 5px' }}>
              <Link style={{ textDecoration: currentPage === page ? 'underline' : 'none' }} href={`/producttag?tagname=${param1}&page=${page}`}>
                {page}
              </Link>
           
          </li>
        ))}
   
      <Link href={`/producttag?tagname=${param1}&page=${currentPage + 1}`} passHref>
        <button disabled={currentPage >= totalPages}>Next</button>
      </Link>

      </ul>
    </nav>


     




     


  );
};

export default Pagination;