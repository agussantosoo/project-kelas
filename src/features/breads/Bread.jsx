import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { getBread } from "./BreadSlice";
import CardFood from "../../components/CardFood";

export default function Bread() {
  const { status, data } = useSelector((state) => state.bread);
  const dispath = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispath(getBread());
    }
  }, [status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        {data.map((item, i) => (
          <Col key={i} xs="6" md="4" lg="3">
            <CardFood item={item}></CardFood>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
