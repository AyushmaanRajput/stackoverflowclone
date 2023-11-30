import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export const Pagination = ({ page, setPage }) => {
  const totalPages = useSelector((store) => store.appReducer.totalPages);
  console.log(totalPages);
  return (
    <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
      {new Array(totalPages).map((el, i) => {
        return (
          <Button
            colorScheme="teal"
            variant="outline"
            size="sm"
            key={i}
            disabled={page == i + 1}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </Button>
        );
      })}
    </Flex>
  );
};
