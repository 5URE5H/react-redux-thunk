import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAuthor } from "../store/actions";

export const Author = ({ userId }) => {
  const authors = useSelector((state) => state.authors.authors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthor(userId));
  }, [userId, dispatch]);

  return (
    <>
      <h4> - {authors.find((author) => author.id === userId)?.name} </h4>
      <hr />
    </>
  );
};
