import PaginationComponent from "../Pagination/index.jsx";
import {useEffect, useState} from "react";
import {getCategoriesVideosData} from "../../services/source.js";
import {useLocation} from "react-router-dom";

function TargetComponent() {

    const location = useLocation();
    const item = location.state?.item;
    const [data, setData] = useState([]);
    const [pageSize, setPageSize] = useState();
    const [currentPage, setCurrentPage] = useState(0);
    const [limit, setLimit] = useState(8);

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage, limit]);

    async function fetchData(currentPage) {
        const result = await getCategoriesVideosData(
            `categoryId.equals=${item.id}&page=${currentPage}&size=${limit}`
        );
        setData(result.data);
        setData(result.data);
        setPageSize(result.headers["x-total-count"]);
    }

    return (
        <div className="px-6 py-10">
            <h1 className="text-2xl font-serif bold mb-6">{item.name}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data?.map((book, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center rounded-lg shadow-sm p-4 bg-white"
                    >
                        <a
                            href={book?.file.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full mb-4"
                        >
                            <img
                                src={`data:${book?.imageContentType};base64,${book?.image}`}
                                className="w-full h-100 object-cover rounded"
                                alt={book.name}
                            />
                        </a>
                        <a
                            href={book?.file.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full mb-4"
                        >
                            <p className="font-serif text-sm text-gray-700 mt-1">
                                {book.name}
                            </p>
                        </a>
                    </div>
                ))}
            </div>

            <PaginationComponent
                currentPage={currentPage + 1}
                totalItems={pageSize}
                pageSize={limit}
                onPageChange={(page) => setCurrentPage(page - 1)}
                onPageSizeChange={(size) => setLimit(size)}
            />

        </div>
    );
}

export default TargetComponent;
