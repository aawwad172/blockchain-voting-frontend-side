import React from "react";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	handlePrevPage: () => void;
	handleNextPage: () => void;
	setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	handlePrevPage,
	handleNextPage,
	setCurrentPage,
}) => {
	const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination justify-content-center">
				<li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
					<a
						className="page-link"
						href="#"
						onClick={handlePrevPage}
						tabIndex={-1}>
						<i className="fa fa-angle-left" />
						<span className="sr-only">Previous</span>
					</a>
				</li>
				{pageNumbers.map((number) => (
					<li
						key={number}
						className={`page-item ${currentPage === number ? "active" : ""}`}>
						<a
							className={`page-link ${
								currentPage === number ? "text-white" : ""
							}`}
							href="#"
							onClick={() => setCurrentPage(number)}>
							{number}
						</a>
					</li>
				))}
				<li
					className={`page-item ${
						currentPage === totalPages ? "disabled" : ""
					}`}>
					<a
						className="page-link"
						href="#"
						onClick={handleNextPage}>
						<i className="fa fa-angle-right" />
						<span className="sr-only">Next</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
