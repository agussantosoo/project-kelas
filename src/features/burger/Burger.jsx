import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { getBurger } from "./BurgerSlice";
import CardFood from "../../components/CardFood";

export default function Burger() {
  const { status, data } = useSelector((state) => state.burger);
  const dispath = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispath(getBurger());
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
