import React, { useEffect, useState } from "react";
import { userData } from "../helpers";
import Card from "../component/GlobalyComponent/Card";

const User = () => {
  const [getData, setGetData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  useEffect(() => {
    userData()
      .then((data) => {
        setGetData(data?.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(getData, "userData");

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = getData.slice(indexOfFirstCard, indexOfLastCard);
  console.log(currentCards, "currentCards");

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  return (
    <div className="">
      <div className="flex flex-wrap justify-center">
        {currentCards.map((val, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
            <Card
              imageUrl={val?.image}
              name={val?.username}
              email={val?.email}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded h-10"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={indexOfLastCard >= getData.length}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10"
        >
          Next
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default User;
