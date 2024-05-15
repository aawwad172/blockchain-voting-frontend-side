import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
    id: number;
    title: string;
    date: string;
    daysForElection: string;
}

// fixme: Implement the `daysForElection` logic when to write '${} Days Left to end' and when to write '${} Days left to start'

const Card: React.FC<CardProps> = ({ id, title, date, daysForElection }) => {
    return (
        <div className="col-xl-6 col-sm-6 mb-xl-4 mb-8">
            <div className="card">
                <div className="card-body p-3">
                    <div className="row">
                        <div className="col-8">
                            <div className="numbers">
                                <p className="text-md mb-0 text-capitalize font-weight-bold">{title}</p>
                                <h4 className="font-weight-bolder mb-0">{date}</h4>
                            </div>
                        </div>
                        <div className="col-4 d-flex justify-content-end">
                            <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-name="Layer 1"
                                    viewBox="0 0 64 64">
                                    <path
                                        d="M48.22 59H15.78c-1.69 0-3.07-1.38-3.07-3.07V8.07c0-1.69 1.38-3.07 3.07-3.07h28.61c.9 0 1.77.38 2.38 1.04l3.63 3.9c.56.6.87 1.39.87 2.22v43.77c0 1.69-1.38 3.07-3.07 3.07ZM15.78 6.93c-.63 0-1.14.51-1.14 1.14v47.86c0 .63.51 1.14 1.14 1.14h32.44c.63 0 1.14-.51 1.14-1.14V12.16c0-.34-.13-.66-.36-.9l-3.63-3.9c-.25-.27-.6-.42-.97-.42H15.78Z"
                                        fill="#ffffff"
                                        className="fill-e84652"></path>
                                    <circle
                                        cx="24.29"
                                        cy="32"
                                        r="4.82"
                                        fill="#ffffff"
                                        className="fill-e84652"></circle>
                                    <path
                                        d="M29.11 46.46c0 2.66-2.16 4.82-4.82 4.82s-4.82-2.16-4.82-4.82a4.823 4.823 0 0 1 8.79-2.74l-3.23 2.65-.97-1.7a.978.978 0 0 0-1.32-.36c-.46.27-.62.86-.35 1.32l1.54 2.68c.14.24.39.41.67.46.06 0 .12.02.17.02.22 0 .43-.08.61-.22l3.64-3c.06.29.09.58.09.88Z"
                                        fill="#ffffff"
                                        className="fill-e84652"></path>
                                    <circle
                                        cx="24.29"
                                        cy="17.54"
                                        r="4.82"
                                        fill="#ffffff"
                                        className="fill-e84652"></circle>
                                    <path
                                        d="M43.57 18.5h-8.2a.96.96 0 0 1 0-1.92h8.2a.96.96 0 0 1 0 1.92ZM41.69 14.64h-6.32a.96.96 0 0 1 0-1.92h6.32a.96.96 0 0 1 0 1.92ZM43.57 22.36h-8.2a.96.96 0 0 1 0-1.92h8.2a.96.96 0 0 1 0 1.92ZM43.57 32.96h-8.2a.96.96 0 0 1 0-1.92h8.2a.96.96 0 0 1 0 1.92ZM41.69 29.11h-6.32a.96.96 0 0 1 0-1.92h6.32a.96.96 0 0 1 0 1.92ZM43.57 36.82h-8.2a.96.96 0 0 1 0-1.92h8.2a.96.96 0 0 1 0 1.92ZM43.57 47.43h-8.2a.96.96 0 0 1 0-1.92h8.2a.96.96 0 0 1 0 1.92ZM41.69 43.57h-6.32a.96.96 0 0 1 0-1.92h6.32a.96.96 0 0 1 0 1.92ZM43.57 51.29h-8.2a.96.96 0 0 1 0-1.92h8.2a.96.96 0 0 1 0 1.92ZM31.3 43.73l-2.28 1.86c-.12-.67-.39-1.31-.76-1.86l1.81-1.48a.956.956 0 0 1 1.35.13c.34.41.28 1.02-.13 1.36Z"
                                        fill="#ffffff"
                                        className="fill-e84652"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto text-right">
                        <div className="d-flex justify-content-between">
                            <p className="text-sm mb-0 text-capitalize font-weight-bold">{daysForElection}</p>
                            {/* TODO: Fix how the route should look like: with ID or Name or What! */}
                            <Link to={`/election/${id}`}>
                                <div>
                                    More Details
                                    <i className="fas fa-arrow-right text-sm ms-1 text-right" aria-hidden="true"></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Card;
