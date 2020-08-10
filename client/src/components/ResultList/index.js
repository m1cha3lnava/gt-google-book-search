import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both ResultList and RecipeListItem from this file

// ResultList renders a bootstrap list item
export function ResultList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the Result api call
export function ResultListItem({
  thumbnail,
  title,
  description,
  href,
  handleSave,
  authors,
  handleDelete,
  id
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail || "https://placehold.it/300x300"} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Description: {description}</p>

            {handleSave ? (
              <button
                className=""
                onClick={() =>
                  handleSave({
                    title: title,
                    authors: authors,
                    synopsis: description,
                    link: href,
                    image: thumbnail,
                  })
                }
              >
                Save
              </button>
            ) : (
              <button className="" onClick={() => handleDelete(id)}>
                Delete
              </button>
            )}
          </Col>
        </Row>
      </Container>
    </li>
  );
}
